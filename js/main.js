/**
 * main.js — renderizado dinámico del portafolio DeModaKissOdel.
 * Lee COLLECTION_DATA y CONTACT desde js/data.js (se carga antes, ambos con defer).
 */
'use strict';

document.documentElement.classList.add('js');

/* ==========================================================================
   Utilidades
   ========================================================================== */

/** Atajo para querySelector. */
const $ = (selector, root = document) => root.querySelector(selector);

/** ¿El usuario pidió menos movimiento? */
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Crea un elemento DOM de forma segura (usa textContent, nunca innerHTML).
 * attrs: { class, text, dataset:{}, ...atributos }   children: nodos o textos.
 */
function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === null || value === undefined || value === false) return;
    if (key === 'class') el.className = value;
    else if (key === 'text') el.textContent = value;
    else if (key === 'dataset') Object.assign(el.dataset, value);
    else el.setAttribute(key, value === true ? '' : value);
  });
  children.flat().forEach((child) => {
    if (child === null || child === undefined) return;
    el.append(child.nodeType ? child : document.createTextNode(child));
  });
  return el;
}

/** Codifica la ruta para el navegador (espacios y paréntesis) sin tocar el "./" inicial. */
function encodePath(path) {
  return encodeURI(path);
}

/** Separa "Look 01 - Desert Rose" en { code: "Look 01", title: "Desert Rose" }. */
function splitLookName(name) {
  const parts = name.split(' - ');
  return { code: parts[0], title: parts.slice(1).join(' - ') || parts[0] };
}

/** Devuelve un div elegante (fondo --line + texto) para cuando falta una imagen. */
function createPlaceholder(label) {
  return h('div', { class: 'placeholder', role: 'img', 'aria-label': label, text: label });
}

/**
 * Crea un <img> con lazy-loading y fallback onerror.
 * Si la ruta está vacía o la imagen no carga, devuelve/pone el placeholder con el texto indicado.
 */
function createImage(path, altText, fallbackLabel) {
  if (!path) return createPlaceholder(fallbackLabel);
  const img = h('img', { alt: altText, loading: 'lazy', decoding: 'async' });
  img.addEventListener('error', () => img.replaceWith(createPlaceholder(fallbackLabel)), { once: true });
  img.src = encodePath(path);
  return img;
}

/** Muestra un valor del tech pack o "To be confirmed" si está vacío. */
function techValue(value) {
  return value && String(value).trim()
    ? document.createTextNode(value)
    : h('span', { class: 'tbc', text: 'To be confirmed' });
}

/* ==========================================================================
   1. Colección (masonry) + modal
   ========================================================================== */

/** Pinta las tarjetas de la colección; cada una abre el modal de su look. */
function renderCollectionGrid() {
  const grid = $('#collectionGrid');
  const fragment = document.createDocumentFragment();

  COLLECTION_DATA.looks.forEach((look) => {
    const cover = createImage(look.images.front, `Front view of ${look.name}: ${look.description}`, look.name);
    // Las fotos horizontales se muestran completas (contain) en vez de recortarse
    if (cover.tagName === 'IMG') {
      cover.addEventListener('load', () => {
        if (cover.naturalWidth > cover.naturalHeight) cover.classList.add('is-wide');
      }, { once: true });
    }
    const media = h('div', { class: 'card-media' }, cover);
    const overlay = h('div', { class: 'card-overlay', 'aria-hidden': 'true' },
      h('span', { class: 'card-name', text: look.name }),
      h('span', { class: 'card-cat', text: look.category })
    );
    const card = h('button', {
      class: 'card', type: 'button', dataset: { lookId: look.id },
      'aria-label': `${look.name}, ${look.category}. Open front and back views.`,
      'aria-haspopup': 'dialog'
    }, media, overlay);
    card.addEventListener('click', () => openLookModal(look.id));
    fragment.append(card);
  });

  grid.replaceChildren(fragment);
}

/** Construye una vista (frontal, espalda o plus) del modal con zoom al pasar el cursor. */
function buildModalView(path, caption, look) {
  const media = h('div', { class: 'view-media' },
    createImage(path, `${caption} view of ${look.name}`, `${look.name} — ${caption.toLowerCase()} view pending`)
  );
  // El origen del zoom sigue al cursor
  media.addEventListener('pointermove', (event) => {
    const box = media.getBoundingClientRect();
    media.style.setProperty('--zx', `${((event.clientX - box.left) / box.width) * 100}%`);
    media.style.setProperty('--zy', `${((event.clientY - box.top) / box.height) * 100}%`);
  });
  return h('figure', { class: 'view' }, media, h('figcaption', { text: caption }));
}

/** Abre el modal con FRONTAL, ESPALDA y VISTAS PLUS leyendo los datos de COLLECTION_DATA. */
function openLookModal(lookId) {
  const look = COLLECTION_DATA.looks.find((item) => item.id === lookId);
  if (!look) return;
  const modal = $('#lookModal');

  $('#modalTitle').textContent = look.name;
  $('#modalCategory').textContent = look.category;
  $('#modalDesc').textContent = look.description;

  const views = [
    buildModalView(look.images.front, 'Front', look),
    buildModalView(look.images.back, 'Back', look)
  ];

  if (look.images.plus) {
    if (look.images.plus.front) views.push(buildModalView(look.images.plus.front, 'Plus Front', look));
    if (look.images.plus.back) views.push(buildModalView(look.images.plus.back, 'Plus Back', look));
  }

  $('#modalViews').replaceChildren(...views);
  $('#modalTechBtn').dataset.lookId = look.id;

  document.body.style.overflow = 'hidden';
  modal.showModal();
}

/** Configura cierre del modal: botón X, clic en el fondo y ESC (nativo de <dialog>). */
function initModal() {
  const modal = $('#lookModal');
  $('#modalClose').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
  modal.addEventListener('close', () => { document.body.style.overflow = ''; });

  // Atajo desde el modal hacia la ficha técnica del mismo look
  $('#modalTechBtn').addEventListener('click', (event) => {
    const index = COLLECTION_DATA.looks.findIndex((look) => look.id === event.currentTarget.dataset.lookId);
    modal.close();
    activateTab(Math.max(index, 0));
    scrollToSection('techpacks');
  });
}

/* ==========================================================================
   2. Tech Packs (tabs + ficha técnica + selector de medidas + PDF)
   ========================================================================== */

const TECH_FIELDS = ['FABRIC', 'LINING', 'TRIMS', 'STITCH', 'FINISHING'];

/** Genera las pestañas desde COLLECTION_DATA y activa la primera. */
function renderTechPacks() {
  const tablist = $('#techTabs');
  const tabs = COLLECTION_DATA.looks.map((look, index) => {
    const tab = h('button', {
      class: 'tab', type: 'button', role: 'tab', id: `tab-${look.id}`,
      'aria-controls': 'techPanel', 'aria-selected': 'false', tabindex: '-1',
      'aria-label': `Tech pack, ${look.name}`, text: splitLookName(look.name).code
    });
    tab.addEventListener('click', () => activateTab(index));
    tab.addEventListener('keydown', (event) => handleTabKeys(event, index));
    return tab;
  });
  tablist.replaceChildren(...tabs);
  activateTab(0);
}

/** Navegación por teclado en las pestañas: flechas, Home y End. */
function handleTabKeys(event, index) {
  const last = COLLECTION_DATA.looks.length - 1;
  const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: last };
  if (!(event.key in moves)) return;
  event.preventDefault();
  const next = (moves[event.key] + last + 1) % (last + 1);
  activateTab(next, true);
}

/** Activa una pestaña y repinta el panel (imagen grande + tabla técnica). */
function activateTab(index, moveFocus = false) {
  const look = COLLECTION_DATA.looks[index];
  if (!look) return;

  document.querySelectorAll('#techTabs .tab').forEach((tab, tabIndex) => {
    const isActive = tabIndex === index;
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    if (isActive) {
      if (moveFocus) tab.focus({ preventScroll: true });
      // Centra la pestaña dentro de la fila (sin mover la página en vertical)
      const row = tab.parentElement;
      row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  });

  const panel = $('#techPanel');
  panel.setAttribute('aria-labelledby', `tab-${look.id}`);
  panel.replaceChildren(buildTechFigure(look), buildTechSheet(look));
}

/** Imagen grande del look para el panel de tech pack. */
function buildTechFigure(look) {
  return h('figure', { class: 'tech-figure' },
    createImage(look.images.front, `Front view of ${look.name}`, look.name)
  );
}

/** Construye el selector interactivo de medidas (sizeChart XS a XXL). */
function buildInteractiveMeasurements(sizeChart) {
  if (!sizeChart) return h('span', { class: 'tbc', text: 'To be confirmed' });

  const sizes = Object.keys(sizeChart);
  const detailsContainer = h('div', { class: 'size-details-container' });

  const updateDetails = (sizeKey) => {
    const data = sizeChart[sizeKey];
    if (!data) return;
    const dl = h('dl', { class: 'measure-list' },
      h('div', {}, h('dt', { text: 'Bust' }), h('dd', { text: `${data.bust} cm` })),
      h('div', {}, h('dt', { text: 'Waist' }), h('dd', { text: `${data.waist} cm` })),
      h('div', {}, h('dt', { text: 'Hip' }), h('dd', { text: `${data.hip} cm` })),
      h('div', {}, h('dt', { text: 'Length' }), h('dd', { text: `${data.length} cm` }))
    );
    detailsContainer.replaceChildren(dl);
  };

  const select = h('select', { class: 'size-select', 'aria-label': 'Select Size' });
  sizes.forEach((s) => select.append(h('option', { value: s, text: `Size ${s}` })));

  select.addEventListener('change', (e) => updateDetails(e.target.value));
  updateDetails(sizes[0]);

  return h('div', { class: 'interactive-measurements' },
    h('div', { class: 'size-picker-row' },
      h('label', { text: 'Select Size: ' }),
      select
    ),
    detailsContainer
  );
}

/** Ficha técnica con <table> semántica + Medidas Interactivas + Botón PDF. */
function buildTechSheet(look) {
  const { title } = splitLookName(look.name);
  const tp = look.techPack;

  const header = h('div', { class: 'sheet-title' },
    h('h3', { text: title }),
    h('span', { class: 'sheet-collection', text: COLLECTION_DATA.collectionName })
  );

  const meta = h('dl', { class: 'sheet-meta' },
    ...[['Style', look.id.toUpperCase()], ['Category', look.category],
        ['Brand', COLLECTION_DATA.brand], ['Designer', COLLECTION_DATA.designer]]
      .map(([label, value]) => h('div', {}, h('dt', { text: label }), h('dd', { text: value })))
  );

  const rows = TECH_FIELDS.map((field) =>
    h('tr', {}, h('th', { scope: 'row', text: field }), h('td', {}, techValue(tp[field])))
  );

  const measurementsContent = tp.MEASUREMENTS && tp.MEASUREMENTS.sizeChart
    ? buildInteractiveMeasurements(tp.MEASUREMENTS.sizeChart)
    : h('dl', { class: 'measure-list' },
        ...[['Bust', tp.MEASUREMENTS?.bust], ['Waist', tp.MEASUREMENTS?.waist], ['Length', tp.MEASUREMENTS?.length]]
          .map(([label, value]) => h('div', {}, h('dt', { text: label }), h('dd', {}, techValue(value))))
      );

  rows.push(h('tr', {}, h('th', { scope: 'row', text: 'MEASUREMENTS' }), h('td', {}, measurementsContent)));

  const table = h('table', { class: 'spec' },
    h('caption', { text: `Technical specification — ${splitLookName(look.name).code}` }),
    h('tbody', {}, rows)
  );

  const actions = h('div', { class: 'sheet-actions' });
  const viewBtn = h('button', { class: 'btn btn-small', type: 'button', text: 'View front and back' });
  viewBtn.addEventListener('click', () => openLookModal(look.id));
  actions.append(viewBtn);

  if (tp.pdfUrl) {
    const pdfBtn = h('a', {
      class: 'btn btn-small btn-accent',
      href: encodePath(tp.pdfUrl),
      target: '_blank',
      download: '',
      text: '📄 Download Tech Pack (PDF)'
    });
    actions.append(pdfBtn);
  }

  return h('div', { class: 'sheet' }, header, meta, table, actions);
}

/* ==========================================================================
   3. Ilustraciones y textiles
   ========================================================================== */

/** Pinta las dos galerías: acuarelas (illustration) y muestras de tela (textile). */
function renderIllustrationsAndTextiles() {
  const illustrations = COLLECTION_DATA.looks.map((look) =>
    h('figure', {},
      h('div', { class: 'frame' },
        createImage(look.illustration, `Watercolour illustration of ${look.name}`, look.name)),
      h('figcaption', { class: 'caption' },
        h('strong', { text: look.name }),
        h('small', { text: look.category }))
    )
  );

  const textiles = COLLECTION_DATA.looks.map((look) =>
    h('figure', {},
      h('div', { class: 'frame' },
        createImage(look.textile.image, `Fabric swatch: ${look.textile.name}`, look.textile.name)),
      h('figcaption', { class: 'caption' },
        h('strong', { text: look.textile.name }),
        h('small', {}, look.textile.composition || h('span', { class: 'tbc', text: 'Composition to be confirmed' })),
        h('small', { text: splitLookName(look.name).code }))
    )
  );

  $('#illustrationGrid').replaceChildren(...illustrations);
  $('#textileGrid').replaceChildren(...textiles);
}

/* ==========================================================================
   4. Footer
   ========================================================================== */

/** Muestra Instagram y Email solo si están definidos en CONTACT (data.js). */
function renderFooter() {
  const links = $('#footerLinks');
  const items = [];
  if (CONTACT.instagramUrl) {
    items.push(h('a', {
      href: CONTACT.instagramUrl, target: '_blank', rel: 'noopener noreferrer',
      'aria-label': 'DeModaKissOdel on Instagram (opens in a new tab)',
      text: CONTACT.instagramHandle || 'Instagram'
    }));
  }
  if (CONTACT.email) {
    items.push(h('a', { href: `mailto:${CONTACT.email}`, text: CONTACT.email }));
  }
  links.replaceChildren(...items);
}

/* ==========================================================================
   5. Cabecera, navegación, progreso, parallax y reveal
   ========================================================================== */

/** Desplaza suavemente hasta una sección por id (respeta movimiento reducido). */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', `#${id}`);
}

/** Menú hamburguesa accesible y scroll suave en todos los enlaces internos. */
function initNavigation() {
  const toggle = $('#navToggle');
  const nav = $('#siteNav');

  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href').slice(1);
      if (!id || !document.getElementById(id)) return;
      event.preventDefault();
      setMenu(false);
      scrollToSection(id);
    });
  });

  // Menú móvil sin hueco al pasar a escritorio
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });
  // El nav móvil oculto no debe ser tabulable
  const syncNavFocus = () => {
    const hidden = window.innerWidth < 768 && toggle.getAttribute('aria-expanded') !== 'true';
    nav.querySelectorAll('a').forEach((a) => { a.tabIndex = hidden ? -1 : 0; });
  };
  syncNavFocus();
  new MutationObserver(syncNavFocus).observe(toggle, { attributes: true, attributeFilter: ['aria-expanded'] });
  window.addEventListener('resize', syncNavFocus);
}

/** Barra de progreso superior y parallax sutil del hero (un solo listener con rAF). */
function initScrollEffects() {
  const bar = $('#progressBar');
  const hero = $('#heroMedia');
  const heroImg = $('#heroImg');
  const motionOk = !prefersReducedMotion();
  let ticking = false;

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    bar.style.transform = `scaleX(${ratio})`;
    if (motionOk && heroImg && window.scrollY < hero.offsetHeight + 200) {
      heroImg.style.setProperty('--parallax', `${Math.round(window.scrollY * 0.12)}px`);
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

/** Scroll-reveal con IntersectionObserver para cabeceras y bloques principales. */
function initReveal() {
  const targets = document.querySelectorAll('.section-head, .masonry, .tabs, .tech-panel, .gallery, .sub-title');
  if (!('IntersectionObserver' in window) || prefersReducedMotion()) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
  targets.forEach((el) => { el.classList.add('reveal'); observer.observe(el); });
}

/* ==========================================================================
   6. Auditoría y arranque
   ========================================================================== */

/** Avisa en la consola qué campos del tech pack siguen vacíos (ayuda a la diseñadora a completarlos). */
function auditTechPacks() {
  const pending = [];
  COLLECTION_DATA.looks.forEach((look) => {
    const tp = look.techPack;
    const missing = [...TECH_FIELDS.filter((f) => !String(tp[f] || '').trim())];
    if (missing.length) pending.push(`${look.id}: ${missing.join(', ')}`);
  });
  if (pending.length) console.info(`[DeModaKissOdel] Tech pack fields still empty:\n${pending.join('\n')}`);
}

/** Punto de entrada: renderiza todo desde COLLECTION_DATA e inicializa interacciones. */
function init() {
  if (typeof COLLECTION_DATA === 'undefined') {
    console.error('COLLECTION_DATA not found. Check that ./js/data.js loads before main.js.');
    return;
  }
  renderCollectionGrid();
  renderTechPacks();
  renderIllustrationsAndTextiles();
  renderFooter();
  initModal();
  initNavigation();
  initScrollEffects();
  initReveal();
  auditTechPacks();
}

init();