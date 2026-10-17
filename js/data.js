/**
 * data.js — ÚNICA fuente de verdad del portafolio DeModaKissOdel.
 * Todo el contenido que se ve en la web sale de este archivo.
 */

/* Contacto del pie de página. Deja un campo vacío ("") y ese enlace no se muestra. */
const CONTACT = {
  instagramUrl: "",   // ej.: "https://www.instagram.com/tu_usuario/"
  instagramHandle: "", // ej.: "@tu_usuario"
  email: ""          // ej.: "hola@tudominio.com"
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
        detail: "./MIS_DISENOS/LOOK 1/LOOK 1 DISENO.jpeg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK1_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK1_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 1/LOOK 1 ACUARELA.jpeg",
      textile: {
        name: "Stretch Wool Crepe Beige & Combination Fabrics",
        composition: "Main: 98% Wool, 2% Elastane | Panels: Bonded Faux Suede Dark Brown (100% Polyester) | Rose Appliqué: Silk Taffeta Organza Beige (100% Silk) | Lining: Power Mesh Nude (80% Nylon, 20% Spandex)",
        image: "./MIS_DISENOS/LOOK 1/LOOK1_Material_1_Stretch_Wool_Crepe_Beige_Main.jpeg"
      },
      textiles: [
        {
          name: "Stretch Wool Crepe Beige (Main Fabric)",
          composition: "98% Wool, 2% Elastane",
          image: "./MIS_DISENOS/LOOK 1/LOOK1_Material_1_Stretch_Wool_Crepe_Beige_Main.jpeg"
        },
        {
          name: "Bonded Faux Suede Dark Brown (Side Panels)",
          composition: "100% Polyester",
          image: "./MIS_DISENOS/LOOK 1/LOOK1_Material_2_Bonded_Faux_Suede_Dark_Brown_Side.jpeg"
        },
        {
          name: "Silk Taffeta Organza Beige (Rose Appliqué)",
          composition: "100% Silk",
          image: "./MIS_DISENOS/LOOK 1/LOOK1_Material_3_Silk_Taffeta_Organza_Beige_Rose.jpeg"
        },
        {
          name: "Power Mesh Nude (Lining)",
          composition: "80% Nylon, 20% Spandex",
          image: "./MIS_DISENOS/LOOK 1/LOOK1_Material_4_Power_Mesh_Nude_Lining_80Nylon_2.jpeg"
        }
      ],
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_01_TechPack.pdf",
        FABRIC: "Stretch Wool Crepe Beige (main fabric, 98% Wool / 2% Elastane) · Bonded Faux Suede Dark Brown (side panels, 100% Polyester) · Silk Taffeta Organza Beige (sculpted shoulder rose, 100% Silk) · Power Mesh Nude (internal lining, 80% Nylon / 20% Spandex)",
        LINING: "Power Mesh Nude (80% Nylon / 20% Spandex) for structural support and breathability",
        TRIMS: "Sculpted oversized rose appliqué in beige silk taffeta organza at left shoulder; concealed invisible back zipper",
        STITCH: "Standard straight stitch (3mm) with clean edge-stitching along suede panels",
        FINISHING: "Invisible hem at flared pant bottoms, overlocked internal seam finishing, and concealed back zipper closure",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 2/LOOK 2 DISENO (1).jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK2_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK2_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 2/LOOK 2 Acuarela.jpeg",
      textile: {
        name: "Stretch Velvet Burgundy & Crystal Organza Accent",
        composition: "Main: 90% Polyester, 10% Spandex (300 GSM) | Ruffles: Crystal Organza Olive Green (100% Polyester) | Lining: Power Mesh Nude (80% Nylon, 20% Spandex)",
        image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_1_Stretch_Velvet_Burgundy_90Poly_10Spandex_300GSM.jpg"
      },
      textiles: [
        {
          name: "Stretch Velvet Burgundy (Main Dress)",
          composition: "90% Polyester, 10% Spandex (300 GSM)",
          image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_1_Stretch_Velvet_Burgundy_90Poly_10Spandex_300GSM.jpg"
        },
        {
          name: "Crystal Organza Olive Green (Sleeve Ruffles)",
          composition: "100% Polyester",
          image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_2_Crystal_Organza_Olive_Green_100Poly.jpg"
        },
        {
          name: "Power Mesh Nude (Internal Lining)",
          composition: "80% Nylon, 20% Spandex",
          image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_3_Power_Mesh_Nude_80Nylon_20Spandex.jpg"
        }
      ],
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_02_TechPack.pdf",
        FABRIC: "Stretch Velvet Burgundy (main dress, 90% Polyester / 10% Spandex, 300 GSM) · Crystal Organza Olive Green (statement sleeve ruffles, 100% Polyester)",
        LINING: "Power Mesh Nude (80% Nylon / 20% Spandex) for body contouring and comfort",
        TRIMS: "Voluminous layered ruffles in olive green crystal organza at the sleeves; invisible back zipper closure",
        STITCH: "Flexible stretch stitch on velvet body & reinforced halter neck seams",
        FINISHING: "Overlocked internal seam finishing, rolled hem edges on organza ruffles, and concealed back zipper",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 3/LOOK 3 LAPIZ.jpeg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK3_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK3_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 3/LOOK 3 ACUARELA.jpeg",
      textile: {
        name: "Ponte di Roma Taupe",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 3/LOOK3_Material_2_Crystal_Organza_Ivory_100Poly_25GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_03_TechPack.pdf",
        FABRIC: "Ponte di Roma Taupe (92% Polyester 8% Spandex, 320 GSM) · Crystal Organza Ivory (100% Polyester, 25 GSM) · Power Mesh Nude (80% Nylon 20% Spandex, 200 GSM)",
        LINING: "Power Mesh Nude",
        TRIMS: "Gold chain hardware",
        STITCH: "Structured corset stitching & straight stitch",
        FINISHING: "Clean-finished facings and hem",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 4/LOOK4_Diseno_Frente_Base_Rosa_Sin_Cartera_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK4_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK4_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 4/LOOK 4 ACUARELA.jpeg",
      textile: {
        name: "Duchess Satin",
        composition: "97% Polyester 3% Spandex, 280 GSM",
        image: "./MIS_DISENOS/LOOK 4/LOOK4_Material_1_Duchess_Satin_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_04_TechPack.pdf",
        FABRIC: "Duchess Satin (97% Polyester 3% Spandex, 280 GSM) · Ponte di Roma Tartan (92% Polyester 8% Spandex, 320 GSM) · Crystal Organza (100% Polyester, 35 GSM) · Scuba Crepe (95% Polyester 5% Spandex, 250 GSM)",
        LINING: "Satin lining",
        TRIMS: "Train hooks and buttons",
        STITCH: "French seams & topstitching",
        FINISHING: "Rolled hem on organza train",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 5/LOOK5_Ghost_Mannequin_Frente_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK5_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK5_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 5/LOOK 5 ACUARELA.jpeg",
      textile: {
        name: "Duchess Satin",
        composition: "97% Polyester 3% Spandex, 280 GSM",
        image: "./MIS_DISENOS/LOOK 5/LOOK5_Material_1_Duchess_Satin_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_05_TechPack.pdf",
        FABRIC: "Duchess Satin (97% Polyester 3% Spandex, 280 GSM) · Wool Flannel Twill (65% Wool 30% Polyester 5% Spandex, 340 GSM)",
        LINING: "Satin lining",
        TRIMS: "Ostrich feather trim, burgundy and black (cuffs); gold chain button hardware",
        STITCH: "Standard straight stitch & tailored trouser seams",
        FINISHING: "Blind hem on trousers",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 6/LOOK6_Ghost_Mannequin_Frente_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK6_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK6_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 6/LOOK 6 DIBUJO A COLOR.jpeg",
      textile: {
        name: "Ponte di Roma Brown",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 6/LOOK6_Material_3_Duchess_Satin_White_97Poly_3Spandex_280GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_06_TechPack.pdf",
        FABRIC: "Ponte di Roma Brown (92% Polyester 8% Spandex, 320 GSM) · Crushed Taffeta Beige (100% Polyester, 60 GSM) · Duchess Satin White (97% Polyester 3% Spandex, 280 GSM) · Gold Lame (85% Polyester 15% Metallic fibre, 120 GSM) · Burgundy Chiffon Georgette (100% Polyester, 40 GSM)",
        LINING: "Power Mesh",
        TRIMS: "Gold sash hardware",
        STITCH: "Overlock & straight stitch",
        FINISHING: "Invisible zipper and hem finishing",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 7/LOOK7_Diseno_Espalda_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK7_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK7_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 7/LOOK 7 ACUARELA.jpeg",
      textile: {
        name: "Ponte di Roma Mocha",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 7/LOOK7_Material_4_Guipure_Lace_Burgundy_100Poly.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_07_TechPack.pdf",
        FABRIC: "Ponte di Roma Mocha (92% Polyester 8% Spandex, 320 GSM) · Suede Fabric Beige · Raffia Straw Ivory · Guipure Lace Burgundy (100% Polyester)",
        LINING: "Power Mesh",
        TRIMS: "Guipure lace appliqué",
        STITCH: "Reinforced one-shoulder seam",
        FINISHING: "Clean ankle cuffs and overlocked edges",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 8/LOOK8_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK8_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK8_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 8/LOOK 8 ACUARELA.jpeg",
      textile: {
        name: "Cotton Ottoman Beige",
        composition: "100% Cotton, 200 GSM",
        image: "./MIS_DISENOS/LOOK 8/LOOK8_Material_1_Cotton_Ottoman_Beige_100Cotton_200GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_08_TechPack.pdf",
        FABRIC: "Cotton Ottoman Beige (100% Cotton, 200 GSM) · Cotton Twill Chino Beige (98% Cotton 2% Spandex, 280 GSM) · Faux Suede Brown (92% Polyester 8% Spandex, 300 GSM)",
        LINING: "Unlined / Cotton facing",
        TRIMS: "Burgundy toggle hardware",
        STITCH: "Topstitching for piping details",
        FINISHING: "Tailored trouser hems and flat-felled seams",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 9/LOOK9_Diseno_Frente_Modelo_HD_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK9_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK9_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 9/LOOK 9 ACUARELA.jpeg",
      textile: {
        name: "Ponte di Roma Mocha",
        composition: "92% Polyester 8% Spandex, 320 GSM",
        image: "./MIS_DISENOS/LOOK 9/LOOK9_Material_1_Ponte_di_Roma_Mocha_92Poly_8Spandex_320GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_09_TechPack.pdf",
        FABRIC: "Ponte di Roma Mocha (92% Polyester 8% Spandex, 320 GSM) · Linen Cotton Beige (100% Natural fibres) · Brocade Jacquard Purple Gold",
        LINING: "Satin lining",
        TRIMS: "Gold chain trim (epaulettes)",
        STITCH: "Tailored jacket construction stitching",
        FINISHING: "Structured interfacing and clean buttonholes",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
        }
      }
    },
    {
      id: "look-10",
      name: "Look 10 - Blusa Dramática & Corset Velvet Burgundy",
      category: "TOPS & CORSETS",
      description: "Conjunto de alta costura compuesto por corset en terciopelo borgoña sobre blusa con cuello victoriano y chorrera, combinado con shorts sastres en tono beige.",
      images: {
        front: "./MIS_DISENOS/LOOK 10/LOOK10_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg",
        back: "./MIS_DISENOS/LOOK 10/LOOK10_Ghost_Mannequin_DORSO_Fondo_Blanco.jpg",
        detail: "./MIS_DISENOS/LOOK 10/LOOK10_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK10_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK10_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 10/LOOK 10 ACUARELA.jpeg",
      textile: {
        name: "Duchess Satin Burgundy",
        composition: "97% Polyester 3% Spandex, 280 GSM",
        image: "./MIS_DISENOS/LOOK 10/LOOK10_Material_1_Duchess_Satin_Burgundy_97Poly_3Spandex_28.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_10_TechPack.pdf",
        FABRIC: "Duchess Satin Burgundy (97% Polyester 3% Spandex, 280 GSM) · Velvet Burgundy · Silk Organza White · Power Mesh Nude",
        LINING: "Power Mesh Nude",
        TRIMS: "Victorian ruffled collar, satin neck tie, back lacing",
        STITCH: "French seams & hand-finished edges",
        FINISHING: "Sculpted corset hem & pleated wrist cuffs",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
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
        detail: "./MIS_DISENOS/LOOK 11/LOOK11_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpg",
        plus: {
          front: "./MIS_DISENOS_PLUS/LOOK11_Plus_Frente.jpeg",
          back: "./MIS_DISENOS_PLUS/LOOK11_Plus_Dorsal.jpeg"
        }
      },
      illustration: "./MIS_DISENOS/LOOK 11/LOOK 11 ACUARELA.jpeg",
      textile: {
        name: "Herringbone Brown",
        composition: "65% Wool 30% Polyester 5% Spandex, 340 GSM",
        image: "./MIS_DISENOS/LOOK 11/LOOK11_Material_1_Herringbone_Brown_65Wool_30Poly_5Spandex_340GSM.jpg"
      },
      techPack: {
        pdfUrl: "./PDF_FICHAS_TECNICAS/LOOK_11_TechPack.pdf",
        FABRIC: "Herringbone Brown (65% Wool 30% Polyester 5% Spandex, 340 GSM) · Boucle Tweed Gold Lurex (60% Polyester 30% Wool 10% Lurex, 280 GSM) · Velvet Black (90% Polyester 10% Spandex, 300 GSM)",
        LINING: "Satin lining",
        TRIMS: "Gold brooch hardware",
        STITCH: "Structured bustier stitching",
        FINISHING: "Clean blind hem and velvet bow securing",
        MEASUREMENTS: {
          unit: "cm",
          sizeChart: {
            XS: { bust: "80-84", waist: "60-64", hip: "86-90", length: "145-148" },
            S:  { bust: "85-89", waist: "65-69", hip: "91-95", length: "148-150" },
            M:  { bust: "90-94", waist: "70-74", hip: "96-100", length: "150-152" },
            L:  { bust: "95-100", waist: "75-80", hip: "101-106", length: "152-154" },
            XL: { bust: "101-107", waist: "81-87", hip: "107-113", length: "154-156" },
            XXL:{ bust: "108-115", waist: "88-95", hip: "114-121", length: "155-157" }
          }
        }
      }
    }
  ]
};