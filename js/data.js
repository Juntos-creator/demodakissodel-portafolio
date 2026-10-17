/**
 * data.js — ÚNICA fuente de verdad del portafolio DeModaKissOdel.
 * Todo el contenido que se ve en la web sale de este archivo.
 *
 * NOTAS DE RUTAS (verificadas contra los archivos reales del ZIP):
 *  - Las rutas apuntan a ./MIS_DISENOS/LOOK N/<archivo>. Los nombres de archivo son los reales,
 *    solo cambia Ñ -> N en 5 archivos ("DISEÑO" -> "DISENO") para que GitHub Pages no falle.
 *  - Varios archivos del ZIP tienen el nombre intercambiado (p. ej. en el Look 2 el archivo
 *    "..._Espalda_..." muestra el FRENTE). Aquí se asignó por lo que muestra cada foto, no por el nombre.
 *  - Muestras de tela: en los Looks 3, 6 y 7 los archivos Material_1 y otro Material_N tienen la FOTO
 *    intercambiada respecto a su nombre. La galería de textiles usa la foto que realmente muestra cada tela
 *    (p. ej. Look 3: "Ponte di Roma Taupe" usa el archivo Material_2, cuya foto es el ponte taupe).
 *  - Looks 3 y 10 no tienen foto de espalda: se usa la acuarela, que dibuja frente y espalda.
 *  - Look 4 no tiene vista de espalda: el modal muestra un aviso elegante en ese espacio.
 *
 * PENDIENTE DE COMPLETAR POR LA DISEÑADORA (campos vacíos "" se muestran como "To be confirmed"):
 *  techPack.STITCH, techPack.FINISHING, techPack.MEASUREMENTS (bust / waist / length) en los 11 looks,
 *  techPack.LINING y techPack.TRIMS donde esté vacío, y la composición del textil del Look 01.
 */

/* Contacto del pie de página. Deja un campo vacío ("") y ese enlace no se muestra. */
const CONTACT = {
  instagramUrl: "",   // ej.: "https://www.instagram.com/tu_usuario/"
  instagramHandle: "", // ej.: "@tu_usuario"
  email: ""           // ej.: "hola@tudominio.com"
};

const COLLECTION_DATA = {
  brand: "DeModaKissOdel",
  designer: "Odelkis Dominguez",
  collectionName: "SHEIN X Collection - Vol I",
  looks: [
    {
      id: "look-01",
      name: "Look 01 - Desert Rose",
      category: "Jumpsuit",
      description: "A sculpted flared jumpsuit in beige wool crepe, with suede panels and a single oversized rose at the shoulder.",
      images: {
        front: "./MIS_DISENOS/LOOK 1/LOOK1_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpeg",
        back: "./MIS_DISENOS/LOOK 1/LOOK1_Diseno_Espalda_Fondo_Blanco.jpeg",
        detail: "./MIS_DISENOS/LOOK 1/LOOK 1 DISENO.jpeg"
      },
      illustration: "./MIS_DISENOS/LOOK 1/LOOK 1 ACUARELA.jpeg",
      textile: {
        name: "Stretch Wool Crepe Beige",
        composition: "",
        image: "./MIS_DISENOS/LOOK 1/LOOK1_Material_1_Stretch_Wool_Crepe_Beige_Main.jpeg"
      },
      techPack: {
        FABRIC: "Stretch Wool Crepe Beige (main) · Bonded Faux Suede Dark Brown (panels) · Silk Taffeta Organza Beige (rose) · Power Mesh Nude (lining)",
        LINING: "Power Mesh, nude",
        TRIMS: "Sculpted rose appliqué, silk taffeta organza, beige (shoulder)",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-02",
      name: "Look 02 - Garnet Velvet",
      category: "Evening Gown",
      description: "Burgundy stretch velvet halter gown with a draped slit skirt and olive crystal-organza ruffle sleeves.",
      images: {
        front: "./MIS_DISENOS/LOOK 2/LOOK2_Diseno_Espalda_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 2/LOOK2_Diseno_Frente_Ghost_Mannequin_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 2/LOOK 2 DISENO (1).jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 2/LOOK 2 Acuarela.jpeg",
      textile: {
        name: "Stretch Velvet Burgundy",
        composition: "90% Polyester 10% Spandex, 300 GSM",
        image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_1_Stretch_Velvet_Burgundy_90Poly_10Spandex_300GSM.jpg"
      },
      techPack: {
        FABRIC: "Stretch Velvet Burgundy (90% Polyester 10% Spandex, 300 GSM) · Crystal Organza Olive Green (100% Polyester)",
        LINING: "",
        TRIMS: "",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-03",
      name: "Look 03 - Sand Peplum",
      category: "Playsuit",
      description: "A taupe ponte playsuit with a corseted bodice, gold chain detailing and soft ivory organza ruffles.",
      images: {
        front: "./MIS_DISENOS/LOOK 3/LOOK3_Diseno_Frente_Ghost_Mannequin_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 3/LOOK 3 ACUARELA.jpeg",
        detail: "./MIS_DISENOS/LOOK 3/LOOK 3 LAPIZ.jpeg"
      },
      illustration: "./MIS_DISENOS/LOOK 3/LOOK 3 ACUARELA.jpeg",
      textile: {
        name: "Ponte di Roma Taupe",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 3/LOOK3_Material_2_Crystal_Organza_Ivory_100Poly_25GSM.jpg"
      },
      techPack: {
        FABRIC: "Ponte di Roma Taupe (92% Polyester 8% Spandex, 320 GSM) · Crystal Organza Ivory (100% Polyester, 25 GSM) · Power Mesh Nude (80% Nylon 20% Spandex, 200 GSM)",
        LINING: "",
        TRIMS: "",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-04",
      name: "Look 04 - Tartan Veil",
      category: "Separates",
      description: "Ivory satin wrap blouse with puffed sleeves, a tartan mini skirt and a floor-length organza train.",
      images: {
        front: "./MIS_DISENOS/LOOK 4/LOOK4_Diseno_Espalda_Fondo_Blanco.jpg",
        back: "",
        detail: "./MIS_DISENOS/LOOK 4/LOOK4_Diseno_Frente_Base_Rosa_Sin_Cartera_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 4/LOOK 4 ACUARELA.jpeg",
      textile: {
        name: "Duchess Satin",
        composition: "97% Polyester 3% Spandex, 280 GSM",
        image: "./MIS_DISENOS/LOOK 4/LOOK4_Material_1_Duchess_Satin_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        FABRIC: "Duchess Satin (97% Polyester 3% Spandex, 280 GSM) · Ponte di Roma Tartan (92% Polyester 8% Spandex, 320 GSM) · Crystal Organza (100% Polyester, 35 GSM) · Scuba Crepe (95% Polyester 5% Spandex, 250 GSM)",
        LINING: "",
        TRIMS: "",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-05",
      name: "Look 05 - Plume",
      category: "Blouse & Trousers",
      description: "Ruffled ivory blouse with burgundy feather cuffs, worn with high-waisted camel wide-leg trousers.",
      images: {
        front: "./MIS_DISENOS/LOOK 5/LOOK5_Diseno_Frente_Con_Plumas_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 5/LOOK5_Diseno_Espalda_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 5/LOOK5_Ghost_Mannequin_Frente_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 5/LOOK 5 ACUARELA.jpeg",
      textile: {
        name: "Duchess Satin",
        composition: "97% Polyester 3% Spandex, 280 GSM",
        image: "./MIS_DISENOS/LOOK 5/LOOK5_Material_1_Duchess_Satin_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        FABRIC: "Duchess Satin (97% Polyester 3% Spandex, 280 GSM) · Wool Flannel Twill (65% Wool 30% Polyester 5% Spandex, 340 GSM)",
        LINING: "",
        TRIMS: "Ostrich feather trim, burgundy and black (cuffs); gold chain button hardware",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-06",
      name: "Look 06 - Amber Flare",
      category: "Jumpsuit",
      description: "Halter jumpsuit in chocolate and cream with a gold waist sash, a bow collar and a dramatic flared hem.",
      images: {
        front: "./MIS_DISENOS/LOOK 6/LOOK6_Diseno_Frente_Modelo_HD_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 6/LOOK6_Diseno_Espalda_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 6/LOOK6_Ghost_Mannequin_Frente_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 6/LOOK 6 DIBUJO A COLOR.jpeg",
      textile: {
        name: "Ponte di Roma Brown",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 6/LOOK6_Material_3_Duchess_Satin_White_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        FABRIC: "Ponte di Roma Brown (92% Polyester 8% Spandex, 320 GSM) · Crushed Taffeta Beige (100% Polyester, 60 GSM) · Duchess Satin White (97% Polyester 3% Spandex, 280 GSM) · Gold Lame (85% Polyester 15% Metallic fibre, 120 GSM) · Burgundy Chiffon Georgette (100% Polyester, 40 GSM)",
        LINING: "",
        TRIMS: "",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-07",
      name: "Look 07 - Cocoa Lace",
      category: "Jumpsuit",
      description: "One-shoulder cocoa jumpsuit with a knotted waist, cuffed ankle and a draped burgundy guipure lace shoulder.",
      images: {
        front: "./MIS_DISENOS/LOOK 7/LOOK7_Ghost_Mannequin_Frente_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 7/LOOK7_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 7/LOOK7_Diseno_Espalda_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 7/LOOK 7 ACUARELA.jpeg",
      textile: {
        name: "Ponte di Roma Mocha",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 7/LOOK7_Material_4_Guipure_Lace_Burgundy_100Poly.jpg"
      },
      techPack: {
        FABRIC: "Ponte di Roma Mocha (92% Polyester 8% Spandex, 320 GSM) · Suede Fabric Beige · Raffia Straw Ivory · Guipure Lace Burgundy (100% Polyester)",
        LINING: "",
        TRIMS: "",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-08",
      name: "Look 08 - Terra Sash",
      category: "Menswear Set",
      description: "Menswear set: short-sleeve cream shirt with a suede-effect sash, and wide trousers with sinuous brown piping.",
      images: {
        front: "./MIS_DISENOS/LOOK 8/LOOK8_Diseno_Espalda_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 8/LOOK8_Ghost_Mannequin_Frente_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 8/LOOK8_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 8/LOOK 8 ACUARELA.jpeg",
      textile: {
        name: "Cotton Ottoman Beige",
        composition: "100% Cotton, 200 GSM",
        image: "./MIS_DISENOS/LOOK 8/LOOK8_Material_1_Cotton_Ottoman_Beige_100Cotton_200GSM.jpg"
      },
      techPack: {
        FABRIC: "Cotton Ottoman Beige (100% Cotton, 200 GSM) · Cotton Twill Chino Beige (98% Cotton 2% Spandex, 280 GSM) · Faux Suede Brown (92% Polyester 8% Spandex, 300 GSM)",
        LINING: "",
        TRIMS: "Burgundy toggle hardware",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-09",
      name: "Look 09 - Gilded Epaulette",
      category: "Menswear Jacket Set",
      description: "Menswear jacket in colour-blocked brown and linen, with gold chain epaulettes and tapered mocha trousers.",
      images: {
        front: "./MIS_DISENOS/LOOK 9/LOOK9_Diseno_Espalda_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 9/LOOK9_Ghost_Mannequin_Frente_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 9/LOOK9_Diseno_Frente_Modelo_HD_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 9/LOOK 9 ACUARELA.jpeg",
      textile: {
        name: "Ponte di Roma Mocha",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 9/LOOK9_Material_1_Ponte_di_Roma_Mocha_92Poly_8Spandex_320GSM.jpg"
      },
      techPack: {
        FABRIC: "Ponte di Roma Mocha (92% Polyester 8% Spandex, 320 GSM) · Linen Cotton Beige (100% Natural fibres) · Brocade Jacquard Purple Gold",
        LINING: "",
        TRIMS: "Gold chain trim (epaulettes)",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-10",
      name: "Look 10 - Burgundy Ruff",
      category: "Corset Set",
      description: "Burgundy duchess satin corset over a sheer ruff-collar blouse with a brown velvet bow, paired with taupe shorts.",
      images: {
        front: "./MIS_DISENOS/LOOK 10/LOOK10_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 10/LOOK 10 ACUARELA.jpeg",
        detail: "./MIS_DISENOS/LOOK 10/LOOK10_Ghost_Mannequin_Frente_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 10/LOOK 10 ACUARELA.jpeg",
      textile: {
        name: "Duchess Satin Burgundy",
        composition: "97% Polyester 3% Spandex, 280 GSM",
        image: "./MIS_DISENOS/LOOK 10/LOOK10_Material_1_Duchess_Satin_Burgundy_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        FABRIC: "Duchess Satin Burgundy (97% Polyester 3% Spandex, 280 GSM) · Crystal Organza Ivory (100% Polyester, 30 GSM) · Velvet Brown (90% Cotton 10% Spandex, 300 GSM) · Cotton Twill Taupe (98% Cotton 2% Spandex, 260 GSM)",
        LINING: "",
        TRIMS: "",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    },
    {
      id: "look-11",
      name: "Look 11 - Golden Bow",
      category: "Cocktail Mini",
      description: "Herringbone wool bustier with an oversized black velvet bow and a gold bouclé tweed mini skirt.",
      images: {
        front: "./MIS_DISENOS/LOOK 11/LOOK11_Diseno_Espalda_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 11/LOOK11_Ghost_Mannequin_Frente_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 11/LOOK11_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg"
      },
      illustration: "./MIS_DISENOS/LOOK 11/LOOK 11 ACUARELA.jpeg",
      textile: {
        name: "Herringbone Brown",
        composition: "65% Wool 30% Polyester 5% Spandex, 340 GSM",
        image: "./MIS_DISENOS/LOOK 11/LOOK11_Material_1_Herringbone_Brown_65Wool_30Poly_5Spandex_340GSM.jpg"
      },
      techPack: {
        FABRIC: "Herringbone Brown (65% Wool 30% Polyester 5% Spandex, 340 GSM) · Boucle Tweed Gold Lurex (60% Polyester 30% Wool 10% Lurex, 280 GSM) · Velvet Black (90% Polyester 10% Spandex, 300 GSM)",
        LINING: "",
        TRIMS: "Gold brooch hardware",
        STITCH: "",
        FINISHING: "",
        MEASUREMENTS: {
          bust: "",
          waist: "",
          length: ""
        }
      }
    }
  ]
};
