"use strict";

"use strict";

/**
 * PREMIUM FURNITURE SHOP - UNIFIED PRODUCT DATABASE (2026)
 * Shared single source of truth for all templates and features
 */
window.TFT_Products = [
  // --- Seating: Lounge Chairs & Sofas ---
  {
    id: 1,
    title: "Luna Lounge Chair",
    price: 499.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Lounge Chair",
    image: "assets/img/fur_chair_boucle.png",
    w: 78, d: 82, h: 80,
    footprint: { w: 78, d: 82 },
    color: "hsl(36, 30%, 90%)",
    planColor: "hsl(36, 30%, 90%)",
    material: "White Bouclé",
    origin: "Gotland, Sweden",
    designer: "Lars Sundström",
    leadTime: "4-6 Weeks",
    swatches: ["White Bouclé", "Sienna Wool", "Desert Linen"],
    desc: "Indulge in organic comfort. The Luna Lounge Chair features a solid white oak base combined with luxurious white bouclé upholstery. Designed to create a serene reading nook or accent statement."
  },
  {
    id: 2,
    title: "Woven Cane Club Chair",
    price: 590.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Club Chair",
    image: "assets/img/fur_chair_cane.png",
    w: 85, d: 88, h: 80,
    footprint: { w: 85, d: 88 },
    color: "hsl(30, 18%, 66%)",
    planColor: "hsl(30, 18%, 66%)",
    material: "Teak & Natural Cane",
    origin: "Surakarta, Indonesia",
    designer: "Pierre Jeanneret",
    leadTime: "5-6 Weeks",
    swatches: ["Natural Cane", "Black Cane", "Smoked Oak Cane"],
    desc: "Classic mid-century cane details. Made from solid teak and hand-woven natural cane inserts, blending vintage aesthetics with organic textures."
  },
  {
    id: 3,
    title: "Vintage Velvet Lounge",
    price: 680.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Velvet Chair",
    image: "assets/img/fur_chair_velvet.png",
    w: 90, d: 95, h: 85,
    footprint: { w: 90, d: 95 },
    color: "hsl(141, 33%, 26%)",
    planColor: "hsl(141, 33%, 26%)",
    material: "Cotton Velvet",
    origin: "Milan, Italy",
    designer: "Mario Bellini",
    leadTime: "4-6 Weeks",
    swatches: ["Amber Velvet", "Deep Olive Velvet", "Noir Velvet"],
    desc: "Luxurious deep lounge experience. Soft velvet upholstery paired with custom polished brass cylindrical legs for a premium editorial tone."
  },
  {
    id: 4,
    title: "Leather Accent Chair",
    price: 720.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Accent Chair",
    image: "assets/img/fur_chair_leather_lounge.png",
    w: 82, d: 86, h: 80,
    footprint: { w: 82, d: 86 },
    color: "hsl(32, 31%, 42%)",
    planColor: "hsl(32, 31%, 42%)",
    material: "Aniline Leather",
    origin: "Florence, Italy",
    designer: "Piero Lissoni",
    leadTime: "6-8 Weeks",
    swatches: ["Caramel Leather", "Cognac Leather", "Black Leather"],
    desc: "A sleek, low-slung lounge chair wrapped in rich cognac saddle leather over a black powder-coated frame."
  },
  {
    id: 5,
    title: "Modular Bouclé Loveseat",
    price: 1450.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Loveseat",
    image: "assets/img/fp_sofa_velvet.png",
    w: 145, d: 90, h: 75,
    footprint: { w: 145, d: 90 },
    color: "hsl(38, 18%, 74%)",
    planColor: "hsl(38, 18%, 74%)",
    material: "White Bouclé",
    origin: "Gothenburg, Sweden",
    designer: "Studio Nord",
    leadTime: "6-8 Weeks",
    swatches: ["White Bouclé", "Clay Velvet", "Charcoal Loop"],
    desc: "Clouds in two dimensions. Low-profile modular double seat with luxury deep cushioning wrapped in off-white bouclé loop fabric."
  },
  {
    id: 6,
    title: "Linen 3-Seat Sofa",
    price: 2100.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "3-Seat Sofa",
    image: "assets/img/fp_sofa_linen.png",
    w: 220, d: 95, h: 75,
    footprint: { w: 220, d: 95 },
    color: "hsl(34, 22%, 77%)",
    planColor: "hsl(34, 22%, 77%)",
    material: "European Linen",
    origin: "Ghent, Belgium",
    designer: "Marie-Louise Gustafsson",
    leadTime: "5-7 Weeks",
    swatches: ["Flax Linen", "Mist White Linen", "Oatmeal Linen"],
    desc: "Deep-seated 3-seater family sofa upholstered in pure pre-washed European linen with duck feather fillings."
  },
  {
    id: 7,
    title: "Modular Sectional Sofa",
    price: 3400.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Sectional Sofa",
    image: "assets/img/fp_sofa_sectional.png",
    w: 260, d: 180, h: 70,
    footprint: { w: 260, d: 180 },
    color: "hsl(30, 15%, 59%)",
    planColor: "hsl(30, 15%, 59%)",
    material: "Bouclé Blend",
    origin: "Copenhagen, Denmark",
    designer: "Lars Lassen",
    leadTime: "8-10 Weeks",
    swatches: ["Cream Bouclé", "Slate Grey Weave"],
    desc: "Generous L-shaped modular sectional sofa featuring configurable segments and low-profile contemporary styling."
  },

  // --- Seating: Dining Chairs & Stools ---
  {
    id: 8,
    title: "Curved Oak Dining Chair",
    price: 249.00,
    category: "dining",
    homeCategory: "dining-room",
    categoryLabel: "Dining Chair",
    image: "assets/img/fur_prod_dining_chair.png",
    w: 50, d: 55, h: 82,
    footprint: { w: 50, d: 55 },
    color: "hsl(35, 38%, 64%)",
    planColor: "hsl(35, 38%, 64%)",
    material: "FSC Oak & Natural Linen",
    origin: "Kyoto, Japan",
    designer: "Tadao Ando",
    leadTime: "2-4 Weeks",
    swatches: ["Natural Linen", "Charcoal Wool", "Sienna Velvet"],
    desc: "Stunning solid wood dining chair featuring a curved backrest and a comfortable cushion upholstered in premium natural linen."
  },
  {
    id: 9,
    title: "Wishbone Oak Dining Chair",
    price: 290.00,
    category: "dining",
    homeCategory: "dining-room",
    categoryLabel: "Dining Chair",
    image: "assets/img/fur_chair_walnut.png",
    w: 52, d: 56, h: 80,
    footprint: { w: 52, d: 56 },
    color: "hsl(33, 23%, 54%)",
    planColor: "hsl(33, 23%, 54%)",
    material: "Ash Wood & Paper Cord",
    origin: "Kyoto, Japan",
    designer: "Hans Wegner",
    leadTime: "3-5 Weeks",
    swatches: ["Natural Oak", "White Ash", "Blackened Oak"],
    desc: "Classic Scandinavian hand-woven paper cord seat over a bentwood ash structure."
  },
  {
    id: 10,
    title: "Blackened Oak Barstool",
    price: 210.00,
    category: "dining",
    homeCategory: "dining-room",
    categoryLabel: "Barstool",
    image: "assets/img/fur_chair_barstool.png",
    w: 42, d: 42, h: 75,
    footprint: { w: 42, d: 42 },
    color: "hsl(30, 10%, 21%)",
    planColor: "hsl(30, 10%, 21%)",
    material: "Blackened Oak & Brass",
    origin: "Helsinki, Finland",
    designer: "Alvar Aalto",
    leadTime: "2-3 Weeks",
    swatches: ["Blackened Oak", "Warm Oak", "White Wash Birch"],
    desc: "High-counter bar stool in blackened oak, featuring a carved saddle seat and steel footrest guards."
  },
  {
    id: 11,
    title: "Brutalist Stone Stool",
    price: 190.00,
    category: "dining",
    homeCategory: "dining-room",
    categoryLabel: "Stone Stool",
    image: "assets/img/fur_chair_stone.png",
    w: 45, d: 45, h: 45,
    footprint: { w: 45, d: 45 },
    color: "hsl(40, 14%, 64%)",
    planColor: "hsl(40, 14%, 64%)",
    material: "Raw Travertine Stone",
    origin: "Tivoli, Italy",
    designer: "Vincent Van Duysen",
    leadTime: "1-2 Weeks",
    swatches: ["Ivory Travertine", "Red Travertine", "Silver Travertine"],
    desc: "Solid travertine stone block stool with chiseled sides, double functioning as a pedestal or side table."
  },

  // --- Tables ---
  {
    id: 12,
    title: "Round Oak Dining Table",
    price: 1250.00,
    category: "tables",
    homeCategory: "dining-room",
    categoryLabel: "Dining Table",
    image: "assets/img/fp_table_oak_round.png",
    w: 120, d: 120, h: 75,
    footprint: { w: 120, d: 120 },
    color: "hsl(35, 41%, 65%)",
    planColor: "hsl(35, 41%, 65%)",
    material: "Solid White Oak",
    origin: "Kyoto, Japan",
    designer: "Studio Nord",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Oak", "White Wash Oak"],
    desc: "Beautiful circular dining table in solid white oak, comfortably seating up to 5 guests."
  },
  {
    id: 13,
    title: "Marble Rectangular Table",
    price: 2400.00,
    category: "tables",
    homeCategory: "dining-room",
    categoryLabel: "Dining Table",
    image: "assets/img/fp_table_marble.png",
    w: 180, d: 90, h: 75,
    footprint: { w: 180, d: 90 },
    color: "hsl(218, 17%, 84%)",
    planColor: "hsl(218, 17%, 84%)",
    material: "Carrara Marble",
    origin: "Carrara, Italy",
    designer: "Piero Lissoni",
    leadTime: "6-8 Weeks",
    swatches: ["Carrara Marble", "Nero Marquina"],
    desc: "Luxurious Italian Carrara marble dining table supported by architectural black powder-coated steel legs."
  },
  {
    id: 14,
    title: "Travertine Coffee Table",
    price: 890.00,
    category: "tables",
    homeCategory: "living-room",
    categoryLabel: "Coffee Table",
    image: "assets/img/fp_table_coffee_travertine.png",
    w: 110, d: 60, h: 40,
    footprint: { w: 110, d: 60 },
    color: "hsl(34, 28%, 81%)",
    planColor: "hsl(34, 28%, 81%)",
    material: "Travertine Stone",
    origin: "Tivoli, Italy",
    designer: "Vincent Van Duysen",
    leadTime: "3-5 Weeks",
    swatches: ["Ivory Travertine", "Noce Travertine"],
    desc: "Low coffee table made of two solid travertine blocks with brushed brass plate joinery."
  },

  // --- Office ---
  {
    id: 15,
    title: "Aniline Leather Office Chair",
    price: 549.00,
    category: "office",
    homeCategory: "office",
    categoryLabel: "Office Chair",
    image: "assets/img/fur_prod_office_chair.png",
    w: 65, d: 65, h: 95,
    footprint: { w: 65, d: 65 },
    color: "hsl(30, 25%, 50%)",
    planColor: "hsl(30, 25%, 50%)",
    material: "Aniline Leather",
    origin: "Tuscany, Italy",
    designer: "Marco Zanini",
    leadTime: "2-4 Weeks",
    swatches: ["Amber Leather", "Noir Leather", "Forest Leather"],
    desc: "Ergonomic workspace comfort wrapped in full-grain aniline leather. Features height adjustment, smooth 360 swivel, and a matte black base."
  },

  // --- Additional Seating ---
  {
    id: 16,
    title: "Molded Plywood Chair",
    price: 280.00,
    category: "dining",
    homeCategory: "dining-room",
    categoryLabel: "Dining Chair",
    image: "assets/img/fur_chair_plywood.png",
    w: 50, d: 52, h: 75,
    footprint: { w: 50, d: 52 },
    color: "hsl(36, 25%, 69%)",
    planColor: "hsl(36, 25%, 69%)",
    material: "Molded Birch & Oak Veneer",
    origin: "Copenhagen, Denmark",
    designer: "Arne Jacobsen",
    leadTime: "3-4 Weeks",
    swatches: ["Natural Birch", "Black Lacquer", "Walnut Veneer"],
    desc: "Classic molded plywood dining chair with ergonomic birch veneer and sleek metal legs."
  },
  {
    id: 17,
    title: "Mid-Century Rocking Chair",
    price: 480.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Rocking Chair",
    image: "assets/img/fur_chair_rocking.png",
    w: 75, d: 85, h: 85,
    footprint: { w: 75, d: 85 },
    color: "hsl(28, 15%, 58%)",
    planColor: "hsl(28, 15%, 58%)",
    material: "European Ash Wood",
    origin: "Oslo, Norway",
    designer: "Peter Opsvik",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Ash", "Stained Charcoal", "White Oak"],
    desc: "Charming wooden rocking chair with premium linen seat pad and solid walnut curved runners."
  },
  {
    id: 18,
    title: "Modular Bouclé Couch",
    price: 1550.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Loveseat",
    image: "assets/img/fur_sofa_boucle.png",
    w: 160, d: 92, h: 75,
    footprint: { w: 160, d: 92 },
    color: "hsl(45, 30%, 84%)",
    planColor: "hsl(45, 30%, 84%)",
    material: "Cream Bouclé",
    origin: "Gothenburg, Sweden",
    designer: "Studio Nord",
    leadTime: "6-8 Weeks",
    swatches: ["White Bouclé", "Clay Velvet", "Charcoal Loop"],
    desc: "Deep lounge loveseat in premium texturized cream white bouclé fabrics."
  },
  {
    id: 19,
    title: "Linen Casual Couch",
    price: 1950.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Couch",
    image: "assets/img/fur_sofa_linen.png",
    w: 200, d: 95, h: 75,
    footprint: { w: 200, d: 95 },
    color: "hsl(38, 24%, 81%)",
    planColor: "hsl(38, 24%, 81%)",
    material: "FSC Pine & Belgian Linen",
    origin: "Ghent, Belgium",
    designer: "Marie-Louise Gustafsson",
    leadTime: "5-7 Weeks",
    swatches: ["Flax Linen", "Mist White Linen", "Oatmeal Linen"],
    desc: "Super soft linen living room couch with scatter cushion backing."
  },
  {
    id: 20,
    title: "Velvet Tufted Chesterfield",
    price: 2300.00,
    category: "lounge",
    homeCategory: "living-room",
    categoryLabel: "Chesterfield",
    image: "assets/img/fur_sofa_velvet.png",
    w: 215, d: 90, h: 75,
    footprint: { w: 215, d: 90 },
    color: "hsl(147, 40%, 17%)",
    planColor: "hsl(147, 40%, 17%)",
    material: "Hardwood & Italian Velvet",
    origin: "London, UK",
    designer: "William Yeoward",
    leadTime: "6-8 Weeks",
    swatches: ["Deep Olive Velvet", "Classic Navy", "Rust Velvet"],
    desc: "Classic Chesterfield style sofa with deep button tufting in rich forest green velvet."
  },

  // --- Outdoor Seating ---
  {
    id: 21,
    title: "Teak Outdoor Sunlounger",
    price: 799.00,
    category: "lounge",
    homeCategory: "outdoor",
    categoryLabel: "Sunlounger",
    image: "assets/img/fur_prod_sunlounger.png",
    w: 65, d: 200, h: 35,
    footprint: { w: 65, d: 200 },
    color: "hsl(28, 32%, 76%)",
    planColor: "hsl(28, 32%, 76%)",
    material: "Premium Teak",
    origin: "Jepara, Indonesia",
    designer: "Finn Juhl",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Teak", "Stained Teak"],
    desc: "Adjustable back outdoor deck lounger in weather-resistant plantation teak wood."
  },

  // --- Bedroom ---
  {
    id: 22,
    title: "Solid Oak Bed Frame",
    price: 1299.00,
    category: "bedroom",
    homeCategory: "bedroom",
    categoryLabel: "Bed Frame",
    image: "assets/img/fur_prod_bed_oak.png",
    w: 160, d: 210, h: 60,
    footprint: { w: 160, d: 210 },
    color: "hsl(33, 27%, 71%)",
    planColor: "hsl(33, 27%, 71%)",
    material: "Solid Oak",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Oak", "White Wash Oak"],
    desc: "Low-profile solid oak queen bed frame featuring a slatted headboard and seamless joinery."
  },
  {
    id: 23,
    title: "Floating Oak Nightstand",
    price: 290.00,
    category: "bedroom",
    homeCategory: "bedroom",
    categoryLabel: "Nightstand",
    image: "assets/img/fur_prod_nightstand.png",
    w: 50, d: 40, h: 30,
    footprint: { w: 50, d: 40 },
    color: "hsl(32, 18%, 65%)",
    planColor: "hsl(32, 18%, 65%)",
    material: "Solid Oak",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "2-3 Weeks",
    swatches: ["Natural Oak", "White Wash Oak"],
    desc: "Wall-mounted single drawer bedside nightstand in solid oak, showcasing a clean minimalist design."
  },
  {
    id: 24,
    title: "Minimal Oak Wardrobe",
    price: 1899.00,
    category: "storage",
    homeCategory: "bedroom",
    categoryLabel: "Wardrobe",
    image: "assets/img/fur_prod_wardrobe.png",
    w: 150, d: 60, h: 190,
    footprint: { w: 150, d: 60 },
    color: "hsl(35, 38%, 64%)",
    planColor: "hsl(35, 38%, 64%)",
    material: "Solid Oak",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Oak", "White Wash Oak"],
    desc: "Tall bedroom wardrobe cabinet in oak featuring standard hanging rails and integrated bottom drawers."
  },

  // --- Storage ---
  {
    id: 25,
    title: "Walnut Fluted Bookshelf",
    price: 899.00,
    category: "storage",
    homeCategory: "living-room",
    categoryLabel: "Bookshelf",
    image: "assets/img/fur_prod_bookshelf.png",
    w: 120, d: 35, h: 160,
    footprint: { w: 120, d: 35 },
    color: "hsl(25, 21%, 41%)",
    planColor: "hsl(25, 21%, 41%)",
    material: "Walnut Wood",
    origin: "Kyoto, Japan",
    designer: "Studio Nord",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Walnut", "Classic Charcoal"],
    desc: "Architectural walnut open shelving unit for displaying journals, books, and ceramic objects."
  },
  {
    id: 26,
    title: "Minimalist Oak Sideboard",
    price: 1250.00,
    category: "storage",
    homeCategory: "living-room",
    categoryLabel: "Sideboard",
    image: "assets/img/fur_prod_sideboard_dark.png",
    w: 160, d: 45, h: 75,
    footprint: { w: 160, d: 45 },
    color: "hsl(32, 28%, 76%)",
    planColor: "hsl(32, 28%, 76%)",
    material: "Solid Oak",
    origin: "Gotland, Sweden",
    designer: "Lars Sundström",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Oak", "Charcoal Oak"],
    desc: "Elegant storage with fluid wood fluting. The Minimalist Oak Sideboard features four soft-close doors and adjustable interior shelving."
  },

  // --- Lighting ---
  {
    id: 27,
    title: "Brass Branch Chandelier",
    price: 899.00,
    category: "lighting",
    homeCategory: "lighting",
    categoryLabel: "Chandelier",
    image: "assets/img/fur_prod_chandelier.png",
    w: 90, d: 90, h: 90,
    footprint: { w: 90, d: 90 },
    color: "hsl(37, 45%, 79%)",
    planColor: "hsl(37, 45%, 79%)",
    material: "Polished Brass",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "4-6 Weeks",
    swatches: ["Polished Brass", "Brushed Steel"],
    desc: "Bespoke ceiling light fixture featuring warm glowing frosted glass spheres suspended from an antique brass frame."
  },
  {
    id: 28,
    title: "Paper Globe Floor Lamp",
    price: 179.00,
    category: "lighting",
    homeCategory: "lighting",
    categoryLabel: "Floor Lamp",
    image: "assets/img/fur_prod_floor_lamp.png",
    w: 45, d: 45, h: 165,
    footprint: { w: 45, d: 45 },
    color: "hsl(33, 16%, 77%)",
    planColor: "hsl(33, 16%, 77%)",
    material: "Washi Paper & Travertine",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "2-4 Weeks",
    swatches: ["Natural Paper", "Charcoal Paper"],
    desc: "Classic paper floor lamp on a black metal tripod base. Distributes a soft, soothing ambient light."
  },

  // --- Decor & Rugs ---
  {
    id: 29,
    title: "Textured Wool Area Rug",
    price: 599.00,
    category: "decor",
    homeCategory: "decor",
    categoryLabel: "Area Rug",
    image: "assets/img/fur_prod_rug.png",
    w: 200, d: 300, h: 1,
    footprint: { w: 200, d: 300 },
    color: "hsl(38, 14%, 90%)",
    planColor: "hsl(38, 14%, 90%)",
    material: "Organic Wool",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "4-6 Weeks",
    swatches: ["Natural Wool", "Grey Wool"],
    desc: "High-low pile custom area rug woven with New Zealand wool. Soft underfoot with minimalist textured geometric linework."
  },

  // --- Office Workspace ---
  {
    id: 30,
    title: "Japandi Writing Desk",
    price: 699.00,
    category: "office",
    homeCategory: "office",
    categoryLabel: "Writing Desk",
    image: "assets/img/fur_prod_desk.png",
    w: 130, d: 65, h: 75,
    footprint: { w: 130, d: 65 },
    color: "hsl(34, 25%, 72%)",
    planColor: "hsl(34, 25%, 72%)",
    material: "Solid Oak",
    origin: "Kyoto, Japan",
    designer: "Tadao Ando",
    leadTime: "3-5 Weeks",
    swatches: ["Natural Oak", "White Wash Oak"],
    desc: "Minimalist oak wood desk with elegant brass accent caps. Perfect for a clean, dedicated study space or home office."
  },
  {
    id: 31,
    title: "Aniline Leather Swivel Chair",
    price: 570.00,
    category: "office",
    homeCategory: "office",
    categoryLabel: "Office Chair",
    image: "assets/img/fur_prod_office_chair.png",
    w: 65, d: 65, h: 95,
    footprint: { w: 65, d: 65 },
    color: "hsl(28, 30%, 51%)",
    planColor: "hsl(28, 30%, 51%)",
    material: "Aniline Leather",
    origin: "Tuscany, Italy",
    designer: "Marco Zanini",
    leadTime: "2-4 Weeks",
    swatches: ["Cognac Leather", "Noir Leather"],
    desc: "Premium high-back desk chair featuring pneumatic lift, tilt controls, and supple tan aniline leather wrap."
  },

  // --- More Decor ---
  {
    id: 32,
    title: "Brass Arch Floor Mirror",
    price: 449.00,
    category: "decor",
    homeCategory: "decor",
    categoryLabel: "Floor Mirror",
    image: "assets/img/fur_prod_mirror.png",
    w: 80, d: 10, h: 180,
    footprint: { w: 80, d: 10 },
    color: "hsl(33, 20%, 90%)",
    planColor: "hsl(33, 20%, 90%)",
    material: "Polished Brass",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "2-4 Weeks",
    swatches: ["Polished Brass", "Matte Black"],
    desc: "Large arches floor-standing mirror with a thin profile antique brass metal frame. Expands space and reflects light beautifully."
  },
  {
    id: 33,
    title: "Earthenware Clay Vases",
    price: 119.00,
    category: "decor",
    homeCategory: "decor",
    categoryLabel: "Clay Vases",
    image: "assets/img/fur_prod_vase.png",
    w: 25, d: 25, h: 40,
    footprint: { w: 25, d: 25 },
    color: "hsl(32, 10%, 61%)",
    planColor: "hsl(32, 10%, 61%)",
    material: "Terracotta Clay",
    origin: "Kyoto, Japan",
    designer: "Naoto Fukasawa",
    leadTime: "1-2 Weeks",
    swatches: ["Terracotta Clay", "Sandy Clay"],
    desc: "Set of three sculptural terracotta and sandy clay vases, handcrafted with a rustic, organic textured plaster finish."
  },

  // --- More Outdoor ---
  {
    id: 34,
    title: "Teak Outdoor Table",
    price: 1499.00,
    category: "tables",
    homeCategory: "outdoor",
    categoryLabel: "Outdoor Table",
    image: "assets/img/fur_prod_outdoor_table.png",
    w: 200, d: 90, h: 75,
    footprint: { w: 200, d: 90 },
    color: "hsl(32, 36%, 72%)",
    planColor: "hsl(32, 36%, 72%)",
    material: "Premium Teak",
    origin: "Semarang, Indonesia",
    designer: "Ib Kofod-Larsen",
    leadTime: "3-5 Weeks",
    swatches: ["Natural Teak", "Oiled Teak"],
    desc: "Weatherproof slatted dining table made from FSC teak wood. Develops a beautiful silvery patina over time."
  },
  {
    id: 35,
    title: "Teak Outdoor Chair",
    price: 399.00,
    category: "dining",
    homeCategory: "outdoor",
    categoryLabel: "Outdoor Chair",
    image: "assets/img/fur_prod_outdoor_chair.png",
    w: 58, d: 58, h: 82,
    footprint: { w: 58, d: 58 },
    color: "hsl(31, 26%, 65%)",
    planColor: "hsl(31, 26%, 65%)",
    material: "Premium Teak",
    origin: "Semarang, Indonesia",
    designer: "Ib Kofod-Larsen",
    leadTime: "2-3 Weeks",
    swatches: ["Natural Teak", "Oiled Teak"],
    desc: "Teak wood outdoor dining chair with quick-dry beige seat cushion. Sturdy, functional, and highly weather-resistant."
  }
];


/**
 * Premium Furniture Shop Theme - Core Interactions
 * Namespace Encapsulated | No Globals | ES2026 Standards
 */

const FUR_Theme = {
  // Application State
  state: {
    theme: "light",
    cart: [
      { id: 1, title: "Luna Lounge Chair", price: 499.00, quantity: 1, image: "assets/img/fur_chair_boucle.png" },
      { id: 4, title: "Woven Accent Basket", price: 89.00, quantity: 1, image: "assets/img/fur_prod_vase.png" }
    ],
    wishlist: [1],
    currentPromoSlide: 0,
    products: window.TFT_Products || []
  },

  // Initialize all theme features
  init: function() {
    this.setupMobileMenu();
    this.setupPromoSlider();
    this.setupCategoryFiltering();
    this.setupCartDrawer();
    this.setupProductDetailsModal();
    this.setupWishlist();
    this.setupScrollAnimations();
    this.setupScrollTransition();
    this.renderCart();
    this.initWebGL();
    this.initStatsCounters();
    this.initTestimonialsCarousel();
    this.initNewsletterForm();
    this.setupLookbookTabs();
    this.setupConfigurator();
    this.setupPlanner();
    this.initMaterialsShowcase();
    this.setupTransformSlider();
    this.setupConsultationModal();
    this.setupTrendingHotspots();
    this.setupInlineBookingForm();
    this.setupMaterialSwatches();
    this.setupVideoJournal();
    this.setupLookbookSlider();
    this.setupOverlayMenu();
    this.setupSplitLayoutObserver();
    this.setupJournalAudioPlayer();
    this.setupJournalScroller();
    this.setupAcousticsSimulator();
    this.setupStockistsHover();
    this.setupJournalSubscription();
    this.setupTimberGrowth();
    this.setupTactileMoodboard();
    this.setupTFTPageInteractions();
    this.setupCurvedHeroSlider();
    this.setupBackToTop();
    this.setupTFTExtendedMegaMenu();
    this.setupActiveNavLinks();
    this.tftSetupMaterialMatrixFiltering();
  },

  // 2. Mobile Responsive Overlay Menu Navigation
    setupMobileMenu: function() {
    // 2b. Bespoke Jnl Mobile Overlay Menu for index-4.html
    const jnlTrigger = document.getElementById("tft-jnl-menu-trigger");
    const jnlMenu = document.getElementById("tft-journal-mobile-menu") || document.getElementById("tft-jnl-mobile-menu");
    const jnlClose = document.getElementById("tft-jnl-menu-close");
    const jnlBackdrop = document.getElementById("tft-jnl-menu-backdrop");

    if (jnlTrigger && jnlMenu) {
      const openJnlMenu = () => {
        jnlMenu.classList.add("tft-jnl-menu--open");
        jnlMenu.setAttribute("aria-hidden", "false");
        jnlTrigger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      };

      const closeJnlMenu = () => {
        jnlMenu.classList.remove("tft-jnl-menu--open");
        jnlMenu.setAttribute("aria-hidden", "true");
        jnlTrigger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      };

      jnlTrigger.addEventListener("click", openJnlMenu);

      if (jnlClose) {
        jnlClose.addEventListener("click", closeJnlMenu);
      }
      if (jnlBackdrop) {
        jnlBackdrop.addEventListener("click", closeJnlMenu);
      }

      // Close menu when clicking outside container (directly on the wrapper backdrop)
      jnlMenu.addEventListener("click", (e) => {
        if (e.target === jnlMenu) {
          closeJnlMenu();
        }
      });

      // Also close menu when any nav links or CTA buttons inside the menu are clicked
      const jnlLinks = jnlMenu.querySelectorAll(".tft-jnl-menu__link, .tft-jnl-menu__btn");
      jnlLinks.forEach(link => {
        link.addEventListener("click", closeJnlMenu);
      });
    }

    const mobileDrawer = document.getElementById("tft-mobile-drawer");
    const sidebarMenu = document.getElementById("fur-sidebar-menu");
    const navs = [mobileDrawer, sidebarMenu].filter(Boolean);
    if (navs.length === 0) return;

    // Inject backdrop overlay
    let overlay = document.querySelector(".tft-menu-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "tft-menu-overlay";
      const layout = document.querySelector(".fur-app-layout") || document.body;
      layout.appendChild(overlay);
    }

    const closeBtns = [];

    navs.forEach(nav => {
      // Inject premium drawer header (brand + close btn) — replaces raw close button
      let drawerHeader = nav.querySelector(".tft-drawer__header") || nav.querySelector(".tft-mobile-drawer__header");
      if (!drawerHeader) {
        drawerHeader = document.createElement("div");
        drawerHeader.className = "tft-drawer__header";
        drawerHeader.innerHTML = `
          <div class="tft-drawer__brand">
            <span class="tft-drawer__brand-mark">Kav<em style="font-style:italic;color:var(--fur-ref-lime-400);font-weight:400;">e</em></span>
            <span class="tft-drawer__brand-tagline">Atelier Furniture</span>
          </div>
          <button class="fur-sidebar__nav-close tft-drawer__close-btn" aria-label="Close Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        `;
        nav.insertBefore(drawerHeader, nav.firstChild);
      }
      
      const closeBtn = nav.querySelector(".fur-sidebar__nav-close") || nav.querySelector(".tft-mobile-drawer__close") || nav.querySelector(".tft-drawer__close-btn");
      if (closeBtn && !closeBtns.includes(closeBtn)) {
        closeBtns.push(closeBtn);
      }

      // Overhaul: Dynamically inject Quick Actions App Grid (only inside Mobile Drawer)
      if (nav.id === "tft-mobile-drawer" && !nav.querySelector(".tft-mobile-drawer__quick-grid")) {
        const searchContainer = nav.querySelector(".tft-mobile-drawer__search");
        if (searchContainer) {
          const quickGrid = document.createElement("div");
          quickGrid.className = "tft-mobile-drawer__quick-grid";
          quickGrid.innerHTML = `
            <a href="shop.html" class="tft-mobile-drawer__quick-card">
              <span class="tft-mobile-drawer__quick-icon">✦</span>
              <span class="tft-mobile-drawer__quick-title">New In</span>
            </a>
            <a href="consultation.html" class="tft-mobile-drawer__quick-card">
              <span class="tft-mobile-drawer__quick-icon">◈</span>
              <span class="tft-mobile-drawer__quick-title">Consult</span>
            </a>
            <a href="index-6.html" class="tft-mobile-drawer__quick-card">
              <span class="tft-mobile-drawer__quick-icon">⚏</span>
              <span class="tft-mobile-drawer__quick-title">3D Planner</span>
              <span class="tft-mobile-drawer__quick-badge">New</span>
            </a>
            <a href="provenance.html" class="tft-mobile-drawer__quick-card">
              <span class="tft-mobile-drawer__quick-icon">◎</span>
              <span class="tft-mobile-drawer__quick-title">Atelier</span>
            </a>
          `;
          searchContainer.parentNode.insertBefore(quickGrid, searchContainer.nextSibling);
        }
      }

      // Overhaul: Inject iOS-style icons for primary links in mobile drawer
      nav.querySelectorAll(".tft-mobile-drawer__link").forEach(btn => {
        if (btn.querySelector(".tft-mobile-drawer__link-icon")) return; // already injected
        const textSpan = btn.querySelector(".tft-mobile-drawer__link-text");
        if (!textSpan) return;
        const text = textSpan.textContent.trim().toLowerCase();
        let iconMarkup = "";
        if (text === "shop") {
          iconMarkup = `<span class="tft-mobile-drawer__link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span>`;
        } else if (text === "rooms") {
          iconMarkup = `<span class="tft-mobile-drawer__link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span>`;
        } else if (text === "inspiration") {
          iconMarkup = `<span class="tft-mobile-drawer__link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></span>`;
        } else if (text === "the studio") {
          iconMarkup = `<span class="tft-mobile-drawer__link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>`;
        }
        if (iconMarkup) {
          btn.insertAdjacentHTML("afterbegin", iconMarkup);
        }
      });

      // Inject premium drawer footer strip (only for desktop sidebar nav)
      if (nav.id === "fur-sidebar-menu" && !nav.querySelector(".tft-drawer__footer")) {
        const drawerFooter = document.createElement("div");
        drawerFooter.className = "tft-drawer__footer";
        drawerFooter.innerHTML = `
          <p class="tft-drawer__footer-tagline">Crafted with care since 2008</p>
          <div class="tft-drawer__footer-links">
            <a href="about.html" class="tft-drawer__footer-link">About</a>
            <a href="contact.html" class="tft-drawer__footer-link">Contact</a>
            <a href="blog.html" class="tft-drawer__footer-link">Journal</a>
          </div>
        `;
        nav.appendChild(drawerFooter);
      }

      // Smooth height-based submenu accordion (instead of display:none/flex snap)
      nav.querySelectorAll(".tft-nav-dropdown__btn").forEach(btn => {
        const menu = btn.nextElementSibling;
        if (!menu || !menu.classList.contains("tft-nav-dropdown__menu")) return;
        // Set initial max-height to 0 for CSS transition
        menu.style.maxHeight = "0px";
        menu.style.overflow = "hidden";
        menu.style.display = "flex"; // always flex, controlled by max-height

        btn.addEventListener("click", () => {
          const expanded = btn.getAttribute("aria-expanded") === "true";
          // Collapse all others inside this specific nav
          nav.querySelectorAll(".tft-nav-dropdown__btn[aria-expanded='true']").forEach(other => {
            if (other !== btn) {
              other.setAttribute("aria-expanded", "false");
              const otherMenu = other.nextElementSibling;
              if (otherMenu) otherMenu.style.maxHeight = "0px";
            }
          });
          btn.setAttribute("aria-expanded", String(!expanded));
          menu.style.maxHeight = expanded ? "0px" : menu.scrollHeight + "px";
        });
      });

      // Click ripple effect on nav items
      nav.querySelectorAll(".fur-sidebar__nav-link, .tft-nav-dropdown__link, .tft-mobile-drawer__link").forEach(el => {
        el.addEventListener("click", function(e) {
          const ripple = document.createElement("span");
          ripple.className = "tft-nav-ripple";
          const rect = this.getBoundingClientRect();
          ripple.style.insetInlineStart = (e.clientX - rect.left) + "px";
          ripple.style.insetBlockStart = (e.clientY - rect.top) + "px";
          this.style.position = "relative";
          this.style.overflow = "hidden";
          this.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
        });
      });

      // Close when nav link clicked (unless it's a dropdown toggle — accordion handles those)
      nav.querySelectorAll(".fur-sidebar__nav-link, .tft-mobile-drawer__sublink").forEach(link => {
        link.addEventListener("click", (e) => {
          if (link.classList.contains("tft-nav-dropdown__btn")) {
            // Accordion handler above owns aria-expanded; just prevent default & return
            e.preventDefault();
            return;
          }
          toggleIds.forEach(id => {
            const btn = document.getElementById(id);
            closeMenu(btn);
          });
        });
      });
    });

    const specialClose = document.getElementById("tft-mobile-drawer-close");
    if (specialClose && !closeBtns.includes(specialClose)) {
      closeBtns.push(specialClose);
    }

    // All hamburger triggers (desktop sidebar, scrolled header, mobile top bar)
    const toggleIds = jnlMenu
      ? ["tft-sidebar-menu-trigger", "fur-menu-toggle", "fur-scrolled-menu-toggle"]
      : ["tft-sidebar-menu-trigger", "fur-menu-toggle", "fur-scrolled-menu-toggle", "fur-menu-toggle-mobile", "fur-menu-toggle-mobile-actions"];

    const openMenu = (btn) => {
      if (btn) btn.setAttribute("aria-expanded", "true");
      navs.forEach(nav => {
        nav.classList.add("fur-sidebar__nav--open");
        nav.classList.add("tft-mobile-drawer--open");
      });
      overlay.classList.add("tft-menu-overlay--visible");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = (btn) => {
      if (btn) btn.setAttribute("aria-expanded", "false");
      navs.forEach(nav => {
        nav.classList.remove("fur-sidebar__nav--open");
        nav.classList.remove("tft-mobile-drawer--open");
      });
      overlay.classList.remove("tft-menu-overlay--visible");
      document.body.style.overflow = "";
    };

    const isMenuOpen = () => {
      return navs.some(nav => nav.classList.contains("fur-sidebar__nav--open") || nav.classList.contains("tft-mobile-drawer--open"));
    };

    toggleIds.forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener("click", () => {
        const isOpen = isMenuOpen();
        isOpen ? closeMenu(btn) : openMenu(btn);
      });
    });

    // Close when nav close button clicked
    closeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        toggleIds.forEach(id => {
          const toggleBtn = document.getElementById(id);
          closeMenu(toggleBtn);
        });
      });
    });

    // Close when overlay clicked
    overlay.addEventListener("click", () => {
      toggleIds.forEach(id => {
        const btn = document.getElementById(id);
        closeMenu(btn);
      });
    });

    // Close when clicking outside the nav
    document.addEventListener("click", (e) => {
      if (!navs.some(nav => nav.contains(e.target)) && !toggleIds.some(id => document.getElementById(id)?.contains(e.target)) && !overlay.contains(e.target)) {
        toggleIds.forEach(id => {
          const btn = document.getElementById(id);
          closeMenu(btn);
        });
      }
    });

    // Mobile cart button and sidebar cart button → open cart drawer
    const mobileCart = document.getElementById("fur-cart-trigger-mobile");
    if (mobileCart) mobileCart.addEventListener("click", () => this.openCart());
    const sidebarCart = document.getElementById("fur-cart-trigger-sidebar");
    if (sidebarCart) sidebarCart.addEventListener("click", () => this.openCart());
  },

  // Auto-highlight current page links across all navigation areas
  setupActiveNavLinks: function() {
    // Normalise the current page name from the path
    const rawPath = window.location.pathname;
    const currentPage = rawPath.split("/").pop() || "index.html";

    // Helper: mark an anchor as active using the correct BEM modifier class
    const markActive = (el, activeClass) => {
      el.classList.add(activeClass);
    };

    // ─── 1. Mobile Drawer: sublinks ───────────────────────────────────────────
    const drawerSublinks = document.querySelectorAll(".tft-mobile-drawer__sublink");
    drawerSublinks.forEach(link => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop().split("?")[0].split("#")[0];
      if (linkPage && linkPage === currentPage) {
        markActive(link, "tft-mobile-drawer__sublink--active");

        // Also expand the parent accordion so the user sees the active item
        const parentMenu = link.closest(".tft-nav-dropdown__menu");
        if (parentMenu) {
          const parentBtn = parentMenu.previousElementSibling;
          if (parentBtn && parentBtn.classList.contains("tft-nav-dropdown__btn")) {
            parentBtn.setAttribute("aria-expanded", "true");
            parentMenu.style.maxHeight = parentMenu.scrollHeight + "px";
            // Mark the parent toggle button too
            markActive(parentBtn, "tft-mobile-drawer__link--active");
          }
        }
      }
    });

    // ─── 2. Mobile Drawer: top-level links (direct anchors, not toggles) ──────
    const drawerLinks = document.querySelectorAll(".tft-mobile-drawer__link:not(.tft-nav-dropdown__btn)");
    drawerLinks.forEach(link => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop().split("?")[0].split("#")[0];
      if (linkPage && linkPage === currentPage) {
        markActive(link, "tft-mobile-drawer__link--active");
      }
    });

    // ─── 3. Desktop Sidebar Nav (fur-sidebar__nav) ────────────────────────────
    const sidebarLinks = document.querySelectorAll(".tft-nav-dropdown__link, .fur-sidebar__nav-link:not(.tft-nav-dropdown__btn)");
    sidebarLinks.forEach(link => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop().split("?")[0].split("#")[0];
      if (linkPage && linkPage === currentPage) {
        markActive(link, "tft-nav-dropdown__link--active");
        // Auto-expand the parent accordion in the sidebar
        const parentMenu = link.closest(".tft-nav-dropdown__menu");
        if (parentMenu) {
          const parentBtn = parentMenu.previousElementSibling;
          if (parentBtn && parentBtn.classList.contains("tft-nav-dropdown__btn")) {
            parentBtn.setAttribute("aria-expanded", "true");
            parentMenu.style.maxHeight = parentMenu.scrollHeight + "px";
          }
        }
      }
    });

    // ─── 4. Mega Menu top-nav links ───────────────────────────────────────────
    const megaLinks = document.querySelectorAll(".tft-mega__link");
    megaLinks.forEach(link => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop().split("?")[0].split("#")[0];
      if (linkPage && linkPage === currentPage) {
        markActive(link, "tft-mega__link--active");
      }
    });

    // ─── 5. Scrolled header nav ───────────────────────────────────────────────
    const scrolledLinks = document.querySelectorAll(".fur-header__scrolled-nav-link");
    scrolledLinks.forEach(link => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop().split("?")[0].split("#")[0];
      if (linkPage && linkPage === currentPage) {
        markActive(link, "fur-header__scrolled-nav-link--active");
      }
    });
  },

  setupPromoSlider: function() {
    const slides = document.querySelectorAll(".fur-promo__slide");
    const dots = document.querySelectorAll(".fur-promo__dot");
    const prevBtn = document.querySelector(".fur-promo__arrow-btn--prev");
    const nextBtn = document.querySelector(".fur-promo__arrow-btn--next");
    let autoPlayInterval;

    if (slides.length === 0) return;

    const showSlide = (index) => {
      // Loop wrapping
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;

      this.state.currentPromoSlide = index;

      // Update Slides active states
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("fur-promo__slide--active");
        } else {
          slide.classList.remove("fur-promo__slide--active");
        }
      });

      // Update Pagination dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("fur-promo__dot--active");
        } else {
          dot.classList.remove("fur-promo__dot--active");
        }
      });
    };

    const nextSlide = () => showSlide(this.state.currentPromoSlide + 1);
    const prevSlide = () => showSlide(this.state.currentPromoSlide - 1);

    // Click controls
    if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoplay(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoplay(); });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoplay();
      });
    });

    // Autoplay Timer (6s)
    const startAutoplay = () => {
      autoPlayInterval = setInterval(nextSlide, 6000);
    };

    const resetAutoplay = () => {
      clearInterval(autoPlayInterval);
      startAutoplay();
    };

    startAutoplay();
  },

  // 4. Product Category Filters
  setupCategoryFiltering: function() {
    const filterButtons = document.querySelectorAll("[data-category]");
    const productGrid = document.getElementById("fur-products-container");
    if (!productGrid) return;

    const filterCategory = (selectedCategory, isInit = false) => {
      const productCards = productGrid.querySelectorAll(".fur-product-card");
      productCards.forEach(card => {
        const cardCategory = card.getAttribute("data-prod-category");
        
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "flex";
          if (!isInit) {
            // trigger slight fade-in animation
            card.animate([
              { opacity: 0, transform: "translateY(10px)" },
              { opacity: 1, transform: "translateY(0)" }
            ], { duration: 300, easing: "ease-out" });
          }
        } else {
          card.style.display = "none";
        }
      });
    };

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedCategory = btn.getAttribute("data-category");

        // Toggle Active styles on filter buttons
        filterButtons.forEach(b => b.classList.remove("fur-categories__btn--active"));
        btn.classList.add("fur-categories__btn--active");

        // Filter products in the container
        filterCategory(selectedCategory);
      });
    });

    // Run filter on page load for the active button
    const activeBtn = document.querySelector(".fur-categories__btn--active");
    if (activeBtn) {
      filterCategory(activeBtn.getAttribute("data-category"), true);
    }
  },

  // 5. Interactive Cart Drawer System
  setupCartDrawer: function() {
    const cartDrawer = document.getElementById("fur-cart-drawer");
    if (!cartDrawer) return;
    const cartTriggers = document.querySelectorAll("#fur-cart-trigger, .fur-header__nav-btn--cart");
    const cartCloseBtn = document.getElementById("fur-cart-close");
    const clearCartBtn = document.getElementById("fur-cart-clear");

    // Open Cart Drawer
    cartTriggers.forEach(trigger => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        cartDrawer.setAttribute("aria-hidden", "false");
      });
    });

    // Close Cart Drawer
    if (cartCloseBtn) {
      cartCloseBtn.addEventListener("click", () => {
        cartDrawer.setAttribute("aria-hidden", "true");
      });
    }

    // Close on overlay background click
    cartDrawer.addEventListener("click", (e) => {
      if (e.target === cartDrawer) {
        cartDrawer.setAttribute("aria-hidden", "true");
      }
    });

    // Clear Cart Click
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        this.state.cart = [];
        this.renderCart();
      });
    }

    // Bind Add to Cart button clicks on the grid
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("fur-product-card__add-btn")) {
        const prodId = parseInt(e.target.closest(".fur-product-card").getAttribute("data-prod-id"), 10);
        this.addToCart(prodId);
        // Open drawer on add
        cartDrawer.setAttribute("aria-hidden", "false");
      }
    });
  },

  openCart: function() {
    const cartDrawer = document.getElementById("fur-cart-drawer");
    if (cartDrawer) {
      cartDrawer.setAttribute("aria-hidden", "false");
    }
  },

  // Add Item to Cart
  addToCart: function(id) {
    const product = this.state.products.find(p => p.id === id);
    if (!product) return;

    const existingItem = this.state.cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    this.renderCart();
  },

  // Render Cart DOM Elements
  renderCart: function() {
    const container = document.getElementById("fur-cart-items-container");
    const subtotalEl = document.getElementById("fur-cart-subtotal");
    const countBadges = document.querySelectorAll(".fur-sidebar__cart-count, .fur-header__cart-count");

    if (!container) return;

    // Clear container
    container.innerHTML = "";

    if (this.state.cart.length === 0) {
      container.innerHTML = `<div class="fur-cart-drawer__empty" style="text-align:center; padding-block: 40px; color: var(--fur-text-muted);">Your shopping cart is empty.</div>`;
      subtotalEl.textContent = "₹0.00";
      countBadges.forEach(b => {
        b.textContent = "0";
        b.style.display = "none";
      });
      return;
    }

    let subtotal = 0;
    let totalItems = 0;

    this.state.cart.forEach(item => {
      subtotal += item.price * item.quantity;
      totalItems += item.quantity;

      const cartItemMarkup = `
        <article class="fur-cart-item" data-cart-id="${item.id}">
          <div class="fur-cart-item__img-wrap">
            <img class="fur-cart-item__img" src="${item.image}" alt="${item.title}" width="80" height="80" loading="lazy">
          </div>
          <div class="fur-cart-item__details">
            <h4 class="fur-cart-item__title">${item.title}</h4>
            <div class="fur-cart-item__price">₹${(item.price * item.quantity).toFixed(2)}</div>
            <div class="fur-cart-item__quantity-controls">
              <button class="fur-cart-item__qty-btn fur-cart-item__qty-btn--minus" aria-label="Decrease quantity">&minus;</button>
              <span class="fur-cart-item__qty-val">${item.quantity}</span>
              <button class="fur-cart-item__qty-btn fur-cart-item__qty-btn--plus" aria-label="Increase quantity">&plus;</button>
            </div>
          </div>
          <button class="fur-cart-item__remove" aria-label="Remove item">Remove</button>
        </article>
      `;
      container.insertAdjacentHTML("beforeend", cartItemMarkup);
    });

    // Update Totals & Badge
    subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    countBadges.forEach(badge => {
      badge.textContent = totalItems.toString();
      badge.style.display = "flex";
    });

    // Bind event listeners to quantity controls inside cart drawer
    container.querySelectorAll(".fur-cart-item").forEach(itemEl => {
      const id = parseInt(itemEl.getAttribute("data-cart-id"), 10);

      itemEl.querySelector(".fur-cart-item__qty-btn--minus").addEventListener("click", () => {
        this.updateQty(id, -1);
      });

      itemEl.querySelector(".fur-cart-item__qty-btn--plus").addEventListener("click", () => {
        this.updateQty(id, 1);
      });

      itemEl.querySelector(".fur-cart-item__remove").addEventListener("click", () => {
        this.removeFromCart(id);
      });
    });
  },

  // Update item quantity
  updateQty: function(id, delta) {
    const item = this.state.cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(id);
    } else {
      this.renderCart();
    }
  },

  // Remove item from cart
  removeFromCart: function(id) {
    this.state.cart = this.state.cart.filter(item => item.id !== id);
    this.renderCart();
  },

  // 6. Product Quick-View Modal
  setupProductDetailsModal: function() {
    const modal = document.getElementById("fur-product-modal");
    if (!modal) return;
    const modalCloseBtn = document.getElementById("fur-modal-close");
    const container = document.getElementById("fur-modal-content-container");

    // Open Modal from Card image or title clicks
    document.addEventListener("click", (e) => {
      const isCardClick = e.target.closest(".fur-product-card__img-wrap") || e.target.closest(".fur-product-card__title");
      // Prevent modal opening when clicking wishlist heart
      const isWishlistClick = e.target.closest(".fur-product-card__wishlist");

      if (isCardClick && !isWishlistClick) {
        const prodCard = e.target.closest(".fur-product-card");
        const id = parseInt(prodCard.getAttribute("data-prod-id"), 10);
        
        this.openQuickView(id);
      }
    });

    // Close Modal Button
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => {
        modal.setAttribute("aria-hidden", "true");
      });
    }

    // Close on overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.setAttribute("aria-hidden", "true");
      }
    });
  },

  // Open modal with dynamic product data
  openQuickView: function(id) {
    const product = this.state.products.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById("fur-product-modal");
    const container = document.getElementById("fur-modal-content-container");
    const isWishlisted = this.state.wishlist.includes(id);

    container.innerHTML = `
      <div class="fur-modal-detail-img-wrap">
        <img class="fur-modal-detail-img" src="${product.image}" alt="${product.title}" width="400" height="400" loading="lazy">
      </div>
      <div class="fur-modal-detail-info">
        <span class="fur-modal-detail-category">${product.category.replace("-", " ")}</span>
        <h2 class="fur-modal-detail-title">${product.title}</h2>
        <div class="fur-modal-detail-price">₹${product.price.toFixed(2)}</div>
        <p class="fur-modal-detail-desc">${product.desc || product.description || ""}</p>
        <div class="fur-modal-detail-actions">
          <button class="fur-modal-detail-add-btn" data-modal-add="${product.id}">Add to Shopping Cart</button>
          <button class="fur-modal-detail-wishlist ${isWishlisted ? "fur-modal-detail-wishlist--active" : ""}" data-modal-wishlist="${product.id}" aria-label="Add to Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          </button>
        </div>
      </div>
    `;

    // Bind Add button in Modal
    container.querySelector(".fur-modal-detail-add-btn").addEventListener("click", () => {
      this.addToCart(product.id);
      modal.setAttribute("aria-hidden", "true");
      const cartDrawer = document.getElementById("fur-cart-drawer");
      if (cartDrawer) cartDrawer.setAttribute("aria-hidden", "false");
    });

    // Bind Wishlist button in Modal
    const wishlistBtn = container.querySelector(".fur-modal-detail-wishlist");
    wishlistBtn.addEventListener("click", () => {
      this.toggleWishlist(product.id);
      wishlistBtn.classList.toggle("fur-modal-detail-wishlist--active");
    });

    // Display the modal
    modal.setAttribute("aria-hidden", "false");
  },

  openProductModal: function(id) {
    this.openQuickView(id);
  },

  // 7. Wishlist functionality
  setupWishlist: function() {
    // Render initial wishlist states on grid
    this.updateGridWishlistStates();

    // Bind grid wishlist buttons clicks
    document.addEventListener("click", (e) => {
      const wishlistBtn = e.target.closest(".fur-product-card__wishlist");
      if (wishlistBtn) {
        const prodId = parseInt(wishlistBtn.closest(".fur-product-card").getAttribute("data-prod-id"), 10);
        this.toggleWishlist(prodId);
        wishlistBtn.classList.toggle("fur-product-card__wishlist--active");
      }
    });
  },

  toggleWishlist: function(id) {
    if (this.state.wishlist.includes(id)) {
      this.state.wishlist = this.state.wishlist.filter(item => item !== id);
    } else {
      this.state.wishlist.push(id);
    }
    this.updateGridWishlistStates();
  },

  updateGridWishlistStates: function() {
    const productGrid = document.getElementById("fur-products-container");
    if (!productGrid) return;

    productGrid.querySelectorAll(".fur-product-card").forEach(card => {
      const id = parseInt(card.getAttribute("data-prod-id"), 10);
      const wishlistBtn = card.querySelector(".fur-product-card__wishlist");

      if (this.state.wishlist.includes(id)) {
        wishlistBtn.classList.add("fur-product-card__wishlist--active");
      } else {
        wishlistBtn.classList.remove("fur-product-card__wishlist--active");
      }
    });
  },

  // 8. Scroll Animations - REMOVED (was setting opacity:0 via IntersectionObserver on wrong scroll container)
  setupScrollAnimations: function() {
    // CSS handles all reveal animations now via .fur-reveal class + IntersectionObserver (no opacity:0 blocking)
  },

  // 9. Scroll Transition from Split-Screen to Standard Top Header
  setupScrollTransition: function() {
    // Disable scroll transition expandation on other pages (only allow on index.html or root page)
    const path = window.location.pathname;
    const isMainHomepage = path === "" || path === "/" || path.endsWith("/") || path.endsWith("index.html");
    if (!isMainHomepage) {
      return;
    }

    // Fix: Classic layout (Home 2) scroll bug.
    // If fur-layout-classic is present on body, we bypass this scroll transition system completely.
    // This disables setting body[data-scrolled="true"], preventing layout recalculation/flickering.
    if (document.body.classList.contains("fur-layout-classic") || document.body.classList.contains("tft-redesign-layout")) {
      return;
    }


    const mainPane = document.querySelector(".fur-main");
    if (!mainPane) return;

    const handleScrollValue = (scrollTop) => {
      const isScrolled = scrollTop > 180; // Intentional threshold to prevent micro-triggering
      const wasScrolled = document.body.getAttribute("data-scrolled") === "true";
      
      if (isScrolled && !wasScrolled) {
        document.body.setAttribute("data-scrolled", "true");
        // Animate WebGL progress to 1
        if (this.webglMaterial) {
          this.webglMaterial.uniforms.uProgress.value = 1.0;
        }
      } else if (!isScrolled && wasScrolled) {
        document.body.removeAttribute("data-scrolled");
        // Animate WebGL progress to 0
        if (this.webglMaterial) {
          this.webglMaterial.uniforms.uProgress.value = 0.0;
        }
      }
    };

    // 1. Scroll listener on the main content feed panel
    mainPane.addEventListener("scroll", () => {
      handleScrollValue(mainPane.scrollTop);
    });

    // 2. Scroll listener on the window (for mobile/tablet layouts)
    window.addEventListener("scroll", () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      handleScrollValue(winScroll || mainPane.scrollTop);
    }, { passive: true });

    // 3. Delegate wheel events outside the main content panel to scroll it programmatically
    window.addEventListener("wheel", (e) => {
      if (!mainPane.contains(e.target)) {
        mainPane.scrollTop += e.deltaY;
        handleScrollValue(mainPane.scrollTop);
      }
    }, { passive: true });

    // 4. Delegate touch swipe gestures outside the main content panel to scroll it programmatically
    let touchStartY = 0;
    window.addEventListener("touchstart", (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!mainPane.contains(e.target)) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        mainPane.scrollTop += deltaY;
        touchStartY = touchY;
        handleScrollValue(mainPane.scrollTop);
      }
    }, { passive: true });
  },

  // 10. WebGL Liquid Distortion Shader Transition using Three.js
  initWebGL: function() {
    const container = document.getElementById("fur-hero-webgl");
    if (!container || typeof THREE === "undefined") return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const lightTex = textureLoader.load("assets/img/hero-bg.jpg");
    const darkTex = textureLoader.load("assets/img/fur_hero_dark.png");
    
    // Texture wrapping/filtering for pixel perfection
    [lightTex, darkTex].forEach(tex => {
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    });

    // Custom shader material
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uLightTexture: { value: lightTex },
        uDarkTexture: { value: darkTex },
        uProgress: { value: 0.0 },
        uTheme: { value: this.state.theme === "dark" ? 1.0 : 0.0 },
        uTime: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uLightTexture;
        uniform sampler2D uDarkTexture;
        uniform float uProgress;
        uniform float uTheme;
        uniform float uTime;

        void main() {
          vec2 uv = vUv;
          
          // Continuous subtle wind wave motion on background
          float wind = sin(uv.y * 6.0 + uTime * 0.8) * 0.003;
          uv.x += wind;
          
          // Transition distortion wave (liquid morph)
          float wave = sin(uv.y * 12.0 + uProgress * 6.0) * 0.08 * uProgress;
          
          // Chromatic aberration splits (red / blue offset)
          vec2 uvR = vec2(uv.x + wave, uv.y);
          vec2 uvG = vec2(uv.x + wave * 0.6, uv.y);
          vec2 uvB = vec2(uv.x, uv.y);
          
          vec4 lightCol = texture2D(uLightTexture, uvG);
          if (uProgress > 0.01) {
            lightCol.r = texture2D(uLightTexture, uvR).r;
            lightCol.b = texture2D(uLightTexture, uvB).b;
          }
          
          vec4 darkCol = texture2D(uDarkTexture, uvG);
          if (uProgress > 0.01) {
            darkCol.r = texture2D(uDarkTexture, uvR).r;
            darkCol.b = texture2D(uDarkTexture, uvB).b;
          }
          
          vec4 baseColor = mix(lightCol, darkCol, uTheme);
          
          // Swipe mask
          float mask = smoothstep(1.0 - uProgress, 0.9 - uProgress, uv.x);
          
          gl_FragColor = vec4(baseColor.rgb, baseColor.a * (1.0 - uProgress) * mask);
        }
      `
    });

    // Create quad plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Save material reference
    this.webglMaterial = material;

    // Show WebGL container
    container.style.opacity = "1";
    const bgSlider = document.querySelector(".fur-hero__background-slider");
    if (bgSlider) {
      const slides = bgSlider.querySelectorAll(".fur-hero__bg-slide");
      slides.forEach(s => s.style.opacity = "0");
    }

    // Animation render loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    window.addEventListener("resize", () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
    });
  },

  // 11. Interactive Lookbook Tabs Controller
  setupLookbookTabs: function() {
    const tabs = document.querySelectorAll(".fur-lookbooks__tab");
    const panels = document.querySelectorAll(".fur-lookbooks__panels .fur-lookbooks__panel");
    
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => {
          t.classList.remove("fur-lookbooks__tab--active");
          t.setAttribute("aria-selected", "false");
        });
        
        panels.forEach(p => {
          p.classList.remove("fur-lookbooks__panel--active");
          p.style.display = "none";
        });
        
        tab.classList.add("fur-lookbooks__tab--active");
        tab.setAttribute("aria-selected", "true");
        
        const targetPanelId = tab.getAttribute("aria-controls");
        const activePanel = document.getElementById(targetPanelId);
        if (activePanel) {
          activePanel.classList.add("fur-lookbooks__panel--active");
          activePanel.style.display = "block";
          
          // GSAP panel animation removed
        }
      });
    });
  },

  // 11b. Before & After Room Transformation Slider Controller
  setupTransformSlider: function() {
    const container = document.querySelector(".fur-transform__slider-container");
    if (!container) return;
    
    const afterLayer = document.getElementById("transform-after-layer");
    const handle = document.getElementById("transform-handle");
    if (!afterLayer || !handle) return;
    
    let isDragging = false;
    
    const updateSlider = (clientX) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      
      afterLayer.style.clipPath = "inset(0 0 0 " + percentage + "%)";
      handle.style.left = percentage + "%";
    };
    
    // Mouse Events
    container.addEventListener("mousedown", (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });
    
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });
    
    window.addEventListener("mouseup", () => {
      isDragging = false;
    });
    
    // Touch Events
    container.addEventListener("touchstart", (e) => {
      isDragging = true;
      if (e.touches && e.touches[0]) {
        updateSlider(e.touches[0].clientX);
      }
    });
    
    window.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        updateSlider(e.touches[0].clientX);
      }
    });
    
    window.addEventListener("touchend", () => {
      isDragging = false;
    });
  },

  // 11c. Bespoke Design Consultation Form Modal Controller
  setupConsultationModal: function() {
    const modal = document.getElementById("fur-consultation-modal");
    const closeBtn = document.getElementById("fur-consultation-close");
    const form = document.getElementById("fur-consultation-form");
    const successBlock = document.getElementById("fur-consultation-success");
    
    if (!modal) return;
    
    // Open modal when any consultation link is clicked
    document.addEventListener("click", (e) => {
      const targetLink = e.target.closest('a[href="#consultation"]');
      if (targetLink) {
        e.preventDefault();
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        
        // Reset form and success blocks
        if (form) form.style.display = "block";
        if (successBlock) successBlock.style.display = "none";
      }
    });
    
    // Close modal
    const closeModal = () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
    
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
    
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Handle form submit
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.style.display = "none";
        if (successBlock) successBlock.style.display = "block";
        
        // Auto-close modal after 4 seconds
        setTimeout(closeModal, 4000);
      });
    }
  },

  setupConfigurator: function() {
    const configurator = document.getElementById("modular-sofa-configurator");
    if (!configurator) return;
    
    const sofaImg = document.getElementById("config-sofa-image");
    const priceDisplay = document.getElementById("config-price-display");
    const materialOptions = configurator.querySelectorAll("[data-target='material'] .fur-configurator__option");
    const legsOptions = configurator.querySelectorAll("[data-target='legs'] .fur-configurator__option");

    const updatePrice = () => {
      const activeMat = configurator.querySelector("[data-target='material'] .fur-configurator__option--active");
      const activeLeg = configurator.querySelector("[data-target='legs'] .fur-configurator__option--active");
      if (!activeMat || !activeLeg) return;

      const basePrice = parseInt(activeMat.getAttribute("data-price-base") || "1899", 10);
      const diffPrice = parseInt(activeLeg.getAttribute("data-price-diff") || "0", 10);
      const total = basePrice + diffPrice;

      if (priceDisplay) {
        priceDisplay.textContent = "₹" + total.toLocaleString() + ".00";
      }
    };
    
    materialOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        if (opt.classList.contains("fur-configurator__option--active")) return;

        materialOptions.forEach(o => o.classList.remove("fur-configurator__option--active"));
        opt.classList.add("fur-configurator__option--active");
        
        const newImgSrc = opt.getAttribute("data-img");
        
        // Dissolve transition
        if (sofaImg && newImgSrc) {
          sofaImg.style.opacity = "0";
          setTimeout(() => {
            sofaImg.src = newImgSrc;
            sofaImg.onload = () => {
              sofaImg.style.opacity = "1";
            };
          }, 150);
        }

        updatePrice();
      });
    });
    
    legsOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        if (opt.classList.contains("fur-configurator__option--active")) return;

        legsOptions.forEach(o => o.classList.remove("fur-configurator__option--active"));
        opt.classList.add("fur-configurator__option--active");
        
        updatePrice();
      });
    });
  },

  // 13. Snap-to-Grid Coordinate Space Planner Canvas
  setupPlanner: function() {
    const canvas = document.getElementById("fur-planner-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const gridCellSize = 40;
    const pixelToMeterRatio = 80;
    let elements = [];
    let draggedElement = null;
    let dragOffset = { x: 0, y: 0 };
    
    // Default initial spatial elements
    elements.push({
      id: "sofa-1",
      type: "Sofa",
      x: 120,
      y: 120,
      w: 160,
      h: 80
    });
    elements.push({
      id: "rug-1",
      type: "Accent Rug",
      x: 80,
      y: 80,
      w: 240,
      h: 160
    });
    
    const snapToGrid = (coord) => {
      return Math.round(coord / gridCellSize) * gridCellSize;
    };
    
    const drawGridLines = () => {
      const theme = document.body.getAttribute("data-theme") === "dark" ? "rgba(255,255,255,0.05)" : "#e2e8f0";
      ctx.strokeStyle = theme;
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridCellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridCellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    const drawElementShape = (el) => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      const strokeColor = isDark ? "rgba(255, 255, 255, 0.85)" : "rgb(16, 44, 29)";
      const fillColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(16, 44, 29, 0.05)";
      
      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = fillColor;
      ctx.lineWidth = 1.5;
      
      ctx.save();
      
      if (el.type === "Accent Rug") {
        // Draw Accent Area Rug: dashed border, inner border frame, texture lines
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.roundRect(el.x, el.y, el.w, el.h, 12);
        ctx.fill();
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(16, 44, 29, 0.15)";
        ctx.beginPath();
        ctx.roundRect(el.x + 8, el.y + 8, el.w - 16, el.h - 16, 8);
        ctx.stroke();
        
        ctx.beginPath();
        for (let offset = 24; offset < el.w - 12; offset += 24) {
          ctx.moveTo(el.x + offset, el.y + 12);
          ctx.lineTo(el.x + offset, el.y + el.h - 12);
        }
        ctx.stroke();
        
      } else if (el.type === "Sofa") {
        // Draw Sofa: cushions, backrest, armrests
        ctx.beginPath();
        ctx.roundRect(el.x, el.y, el.w, el.h, 8);
        ctx.fill();
        ctx.stroke();
        
        // Backrest (runs along top edge)
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(16, 44, 29, 0.08)";
        ctx.beginPath();
        ctx.roundRect(el.x + 4, el.y + 4, el.w - 8, 16, 4);
        ctx.fill();
        ctx.stroke();
        
        // Left & Right Armrests
        ctx.beginPath();
        ctx.roundRect(el.x + 4, el.y + 18, 14, el.h - 22, 4);
        ctx.roundRect(el.x + el.w - 18, el.y + 18, 14, el.h - 22, 4);
        ctx.fill();
        ctx.stroke();
        
        // Seat cushions (three columns inside armrests)
        const innerWidth = el.w - 36;
        const cushionWidth = innerWidth / 3;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.roundRect(el.x + 18 + (i * cushionWidth) + 2, el.y + 24, cushionWidth - 4, el.h - 28, 4);
          ctx.fill();
          ctx.stroke();
        }
        
      } else if (el.type === "Lounge Chair") {
        // Draw Curved Lounge Chair: circular body with wrapped backrest
        const centerX = el.x + el.w / 2;
        const centerY = el.y + el.h / 2;
        const radius = el.w / 2 - 4;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Backrest (outer curved wrap)
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(16, 44, 29, 0.08)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 2, Math.PI, Math.PI * 2);
        ctx.arc(centerX, centerY, radius - 12, Math.PI * 2, Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Seat Cushion
        ctx.beginPath();
        ctx.arc(centerX, centerY + 4, radius - 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
      } else if (el.type === "Dining Table") {
        // Draw 6 Chairs pushed under table (layered below table top)
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(16, 44, 29, 0.03)";
        const chairWidth = 24;
        const chairHeight = 16;
        const spacing = (el.w - 8 - (3 * chairWidth)) / 2;
        
        for (let i = 0; i < 3; i++) {
          // Top chairs
          ctx.beginPath();
          ctx.roundRect(el.x + 4 + spacing + (i * (chairWidth + 4)), el.y - 8, chairWidth, chairHeight, 4);
          ctx.fill();
          ctx.stroke();
          
          // Bottom chairs
          ctx.beginPath();
          ctx.roundRect(el.x + 4 + spacing + (i * (chairWidth + 4)), el.y + el.h - 8, chairWidth, chairHeight, 4);
          ctx.fill();
          ctx.stroke();
        }
        
        // Draw Table top
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.roundRect(el.x, el.y, el.w, el.h, 6);
        ctx.fill();
        ctx.stroke();
        
        // Inner design border on table
        ctx.beginPath();
        ctx.roundRect(el.x + 12, el.y + 12, el.w - 24, el.h - 24, 4);
        ctx.stroke();
      }
      
      ctx.restore();
      
      // Label text alignment and placement
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.9)" : "rgb(16, 44, 29)";
      ctx.font = "bold 10px var(--fur-font-sans), system-ui, sans-serif";
      ctx.textAlign = "center";
      
      const textY = el.y + el.h / 2;
      ctx.fillText(el.type, el.x + el.w / 2, textY - 2);
      ctx.font = "8px var(--fur-font-sans), system-ui, sans-serif";
      ctx.fillText(`${(el.w / pixelToMeterRatio).toFixed(1)}m x ${(el.h / pixelToMeterRatio).toFixed(1)}m`, el.x + el.w / 2, textY + 10);
    };
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGridLines();
      
      const rugs = elements.filter(el => el.type === "Accent Rug");
      const furniture = elements.filter(el => el.type !== "Accent Rug");
      
      rugs.forEach(drawElementShape);
      furniture.forEach(drawElementShape);
    };
    
    canvas.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (mouseX >= el.x && mouseX <= el.x + el.w && mouseY >= el.y && mouseY <= el.y + el.h) {
          draggedElement = el;
          dragOffset.x = mouseX - el.x;
          dragOffset.y = mouseY - el.y;
          elements.splice(i, 1);
          elements.push(el);
          break;
        }
      }
    });
    
    canvas.addEventListener("mousemove", (e) => {
      if (!draggedElement) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const rawX = mouseX - dragOffset.x;
      const rawY = mouseY - dragOffset.y;
      
      draggedElement.x = snapToGrid(rawX);
      draggedElement.y = snapToGrid(rawY);
      
      render();
    });
    
    const endDrag = () => {
      draggedElement = null;
      render();
    };
    
    canvas.addEventListener("mouseup", endDrag);
    canvas.addEventListener("mouseleave", endDrag);
    
    const tools = document.querySelectorAll(".fur-planner__tool");
    tools.forEach(tool => {
      tool.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("item-type", tool.getAttribute("data-item-type"));
        e.dataTransfer.setData("width", tool.getAttribute("data-width"));
        e.dataTransfer.setData("height", tool.getAttribute("data-height"));
      });
    });
    
    canvas.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    
    canvas.addEventListener("drop", (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const dropX = e.clientX - rect.left;
      const dropY = e.clientY - rect.top;
      
      const itemType = e.dataTransfer.getData("item-type");
      const width = parseInt(e.dataTransfer.getData("width") || "80", 10);
      const height = parseInt(e.dataTransfer.getData("height") || "80", 10);
      
      if (itemType) {
        elements.push({
          id: Date.now().toString(36),
          type: itemType,
          x: snapToGrid(dropX - width / 2),
          y: snapToGrid(dropY - height / 2),
          w: width,
          h: height
        });
        render();
      }
    });
    
    const clearBtn = document.getElementById("fur-planner-clear");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        elements = [];
        render();
      });
    }
    
    render();
    
    document.querySelectorAll("[data-set-theme]").forEach(btn => {
      btn.addEventListener("click", () => {
        setTimeout(render, 50);
      });
    });
  },

  // 14. Add Customized Configured Sofa to Shopping Cart
  addConfiguredSofaToCart: function() {
    const matBtn = document.querySelector("[data-target='material'] .fur-configurator__option--active");
    const legBtn = document.querySelector("[data-target='legs'] .fur-configurator__option--active");
    
    const matTextEl = matBtn ? matBtn.querySelector("span + span") : null;
    const legTextEl = legBtn ? legBtn.querySelector("span + span") : null;
    
    const materialActive = matTextEl ? matTextEl.innerText : "Cream Bouclé";
    const legsActive = legTextEl ? legTextEl.innerText : "Natural Oak";
    
    const basePrice = parseInt(matBtn ? matBtn.getAttribute("data-price-base") : "1899", 10);
    const diffPrice = parseInt(legBtn ? legBtn.getAttribute("data-price-diff") : "0", 10);
    const totalPrice = basePrice + diffPrice;
    
    const imageActive = matBtn ? matBtn.getAttribute("data-img") : "assets/img/fur_sofa_boucle.png";
    
    const cartItem = {
      id: "custom-sofa-" + Date.now(),
      title: "Custom Sofa (" + materialActive + " / " + legsActive + ")",
      price: totalPrice,
      image: imageActive,
      quantity: 1
    };
    
    this.state.cart.push(cartItem);
    this.renderCart();
    this.openCart();
  },

  // 14b. Materials Showcase — drag-scroll with dot sync
  initMaterialsShowcase: function() {
    const wrap = document.getElementById("fur-materials-track-wrap");
    const dots = document.querySelectorAll(".fur-materials__dot");
    if (!wrap) return;

    // Drag-to-scroll (mouse)
    let isDown = false, startX = 0, scrollLeft = 0;
    wrap.addEventListener("mousedown", (e) => {
      isDown = true;
      wrap.classList.add("fur-materials--dragging");
      startX = e.pageX - wrap.offsetLeft;
      scrollLeft = wrap.scrollLeft;
    });
    wrap.addEventListener("mouseleave", () => { isDown = false; wrap.classList.remove("fur-materials--dragging"); });
    wrap.addEventListener("mouseup",    () => { isDown = false; wrap.classList.remove("fur-materials--dragging"); });
    wrap.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrap.offsetLeft;
      const walk = (x - startX) * 1.6;
      wrap.scrollLeft = scrollLeft - walk;
    });

    // Dot sync on scroll
    if (dots.length) {
      const cards = wrap.querySelectorAll(".fur-material-card");
      wrap.addEventListener("scroll", () => {
        const scrollRatio = wrap.scrollLeft / (wrap.scrollWidth - wrap.clientWidth);
        const activeIdx = Math.round(scrollRatio * (cards.length - 1));
        dots.forEach((d, i) => d.classList.toggle("fur-materials__dot--active", i === activeIdx));
      }, { passive: true });

      // Click dot to scroll to card
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          const card = cards[i];
          if (!card) return;
          wrap.scrollTo({ left: card.offsetLeft - parseInt(getComputedStyle(wrap).paddingInlineStart || "0", 10), behavior: "smooth" });
        });
      });
    }
  },

  // 15. Stats Counter Animation — IntersectionObserver on .fur-main scroll container
  initStatsCounters: function() {
    const counters = document.querySelectorAll(".fur-stats__number");
    if (!counters.length) return;

    const runCounter = (el) => {
      const target = parseInt(el.getAttribute("data-target"), 10);
      if (target === 0) { el.textContent = "0"; return; }
      const duration = 1800;
      const totalSteps = Math.floor(duration / 16);
      const step = Math.max(1, Math.ceil(target / totalSteps));
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString();
        if (current >= target) clearInterval(timer);
      }, 16);
    };

    // Use window scroll as fallback since .fur-main may not fire IO correctly
    let fired = false;
    const tryFire = () => {
      if (fired) return;
      const statsSection = document.getElementById("wp-block-fur-stats");
      if (!statsSection) return;
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        fired = true;
        counters.forEach(el => runCounter(el));
      }
    };

    const mainPane = document.querySelector(".fur-main");
    if (mainPane) mainPane.addEventListener("scroll", tryFire, { passive: true });
    window.addEventListener("scroll", tryFire, { passive: true });
    setTimeout(tryFire, 800); // Also try on load in case already in view
  },

  // 16. Testimonials — CSS grid handles display; arrows hidden on desktop
  initTestimonialsCarousel: function() {
    const track = document.getElementById("fur-testimonials-track");
    const prevBtn = document.getElementById("fur-testi-prev");
    const nextBtn = document.getElementById("fur-testi-next");
    const controls = document.querySelector(".fur-testimonials__controls");

    const hideArrowsOnWide = () => {
      if (!controls) return;
      controls.style.display = window.innerWidth >= 1025 ? "none" : "flex";
    };
    hideArrowsOnWide();
    window.addEventListener("resize", hideArrowsOnWide, { passive: true });

    if (track && prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        const cardWidth = track.clientWidth;
        track.scrollBy({ left: -cardWidth, behavior: "smooth" });
      });
      nextBtn.addEventListener("click", () => {
        const cardWidth = track.clientWidth;
        track.scrollBy({ left: cardWidth, behavior: "smooth" });
      });
    }
  },

  // 17. Newsletter Form — native submit handler with success state
  initNewsletterForm: function() {
    const form = document.getElementById("fur-newsletter-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".fur-newsletter__input");
      const btn   = form.querySelector(".fur-newsletter__btn");
      if (!input || !input.value.includes("@")) {
        input.style.outline = "2px solid hsl(0, 65%, 60%)";
        setTimeout(() => { input.style.outline = ""; }, 1500);
        return;
      }
      const original = btn.textContent;
      btn.textContent = "Subscribed ✓";
      btn.style.background = "hsl(142, 55%, 38%)";
      btn.style.color = "#fff";
      input.value = "";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "";
        btn.style.color = "";
      }, 3500);
    });
  },

  // 18. Trending Now Editorial Feature Hotspots and Product links Quick View
  setupTrendingHotspots: function() {
    const hotspots = document.querySelectorAll(".fur-trending__hotspot");
    hotspots.forEach(hotspot => {
      const trigger = hotspot.querySelector(".fur-trending__hotspot-trigger");
      const productId = parseInt(hotspot.getAttribute("data-product-id"), 10);
      
      if (trigger && productId) {
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          this.openQuickView(productId);
        });
      }
    });

    const productLinks = document.querySelectorAll(".fur-trending__product-link");
    productLinks.forEach(link => {
      const productId = parseInt(link.getAttribute("data-product-id"), 10);
      if (productId) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          this.openQuickView(productId);
        });
      }
    });
  },

  // 19. Bespoke Design Services Inline Booking form submission handling
  setupInlineBookingForm: function() {
    const form = document.getElementById("fur-inline-booking-form");
    const successMsg = document.getElementById("fur-inline-booking-success");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Toggle display for success simulation
      form.style.display = "none";
      if (successMsg) {
        successMsg.style.display = "flex";
      }

      // Automatically reset form state after a short period
      setTimeout(() => {
        form.reset();
        form.style.display = "flex";
        if (successMsg) {
          successMsg.style.display = "none";
        }
      }, 5000);
    });
  },

  // Material swatch profiles data map
  swatchesData: {
    boucle: {
      category: "Upholstery Range",
      title: "Textured Bouclé Wool",
      text: "Woven in Piedmont, Italy. Spun from 100% natural organic wool fibers to achieve high-pile, extremely tactile loops that offer a plush, enveloping sensory warmth.",
      origin: "Biella, Italy",
      pairing: "Solid White Oak, Travertine",
      products: ["Luna Lounge Chair", "Piedmont Modular Sofa"]
    },
    oak: {
      category: "Solid Hardwood",
      title: "Warm Solid White Oak",
      text: "Sourced from sustainably managed forests in the Baltic region. Kiln-dried and finished with a zero-VOC matte hardwax oil to preserve the raw grain, texture, and natural golden hues.",
      origin: "Baltic Forests",
      pairing: "Textured Bouclé Wool, Brushed Brass",
      products: ["Linea Writing Desk", "Sven Dining Table", "Nora Bed Frame"]
    },
    marble: {
      category: "Natural Stone",
      title: "Travertine Marble",
      text: "Quarried in Tivoli, Italy. Characterized by its unique fibrous appearance and natural pits, left unfilled to honor the raw, organic geological beauty of the stone.",
      origin: "Tivoli, Italy",
      pairing: "Textured Bouclé Wool, Sienna Leather",
      products: ["Livia Sideboard", "Arno Coffee Table"]
    },
    leather: {
      category: "Premium Upholstery",
      title: "Full-Grain Sienna Leather",
      text: "Aniline-dyed leather sourced from select Scandinavian dairies. Tanned with organic chestnut and mimosa extracts, developing a rich, unique patina over years of use.",
      origin: "Tärnsjö, Sweden",
      pairing: "Travertine Marble, Brushed Brass",
      products: ["Clara Armchair", "Soren Office Chair"]
    },
    brass: {
      category: "Structural Details",
      title: "Hand-Brushed Brass",
      text: "Solid virgin brass spun and brushed manually in local workshops. Left unlacquered to allow a gentle, sophisticated oxidation process that darkens into a warm bronze finish.",
      origin: "Kyoto, Japan",
      pairing: "Solid White Oak, Sienna Leather",
      products: ["Brass Arch Mirror", "Piedmont Chandelier"]
    }
  },

  // Setup material selector interactivity
  setupMaterialSwatches: function() {
    const swatches = document.querySelectorAll(".fur-swatches__item");
    const container = document.getElementById("fur-swatch-detail-container");
    if (!swatches.length || !container) return;

    swatches.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Toggle active button
        swatches.forEach(b => b.classList.remove("fur-swatches__item--active"));
        btn.classList.add("fur-swatches__item--active");

        // Get key data
        const key = btn.getAttribute("data-material");
        const data = this.swatchesData[key];
        if (!data) return;

        // Render dynamic fade-in content
        container.innerHTML = `
          <div class="fur-swatches__detail-block">
            <span class="fur-swatches__detail-category">${data.category}</span>
            <h3 class="fur-swatches__detail-title">${data.title}</h3>
            <p class="fur-swatches__detail-text">${data.text}</p>
            
            <div class="fur-swatches__meta-row">
              <div class="fur-swatches__meta-col">
                <span class="fur-swatches__meta-label">Origin</span>
                <span class="fur-swatches__meta-val">${data.origin}</span>
              </div>
              <div class="fur-swatches__meta-col">
                <span class="fur-swatches__meta-label">Recommended Pairing</span>
                <span class="fur-swatches__meta-val">${data.pairing}</span>
              </div>
            </div>
            
            <div class="fur-swatches__products-row">
              <span class="fur-swatches__meta-label">Featured Products</span>
              <div class="fur-swatches__products-list">
                ${data.products.map(p => `<span class="fur-swatches__prod-tag">${p}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      });
    });
  },

  // Setup inline video journal controls
  setupVideoJournal: function() {
    const playBtn = document.getElementById("fur-video-journal-play-btn");
    const ctaBtn = document.getElementById("fur-video-journal-cta-btn");
    const card = document.getElementById("fur-video-journal-card");
    const player = document.getElementById("fur-video-journal-player");

    if (!card || !player || (!playBtn && !ctaBtn)) return;

    const startVideo = () => {
      if (card.classList.contains("fur-video-journal__media-card--playing")) return;
      
      // Load iframe dynamically with autoplay
      player.innerHTML = `
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Savoir-Faire: Curation Journey" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      `;
      // Toggle card state to show player and hide cover
      card.classList.add("fur-video-journal__media-card--playing");
    };

    if (playBtn) playBtn.addEventListener("click", startVideo);
    if (ctaBtn) ctaBtn.addEventListener("click", startVideo);
  },

  // Initialize lookbook horizontal slider dot sync
  setupLookbookSlider: function() {
    const track = document.getElementById("fur-lookbook-track");
    const dots = document.querySelectorAll(".fur-lookbook-slider__dot");
    if (!track || dots.length === 0) return;

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        const slides = track.querySelectorAll(".fur-lookbook-slider__slide");
        if (slides[index]) {
          track.scrollTo({
            left: slides[index].offsetLeft,
            behavior: "smooth"
          });
        }
      });
    });

    // Scroll listener to update dots active state
    track.addEventListener("scroll", () => {
      const scrollRatio = track.scrollLeft / (track.scrollWidth - track.clientWidth);
      const activeIdx = Math.min(
        dots.length - 1,
        Math.max(0, Math.round(scrollRatio * (dots.length - 1)))
      );
      dots.forEach((d, i) => {
        d.classList.toggle("fur-lookbook-slider__dot--active", i === activeIdx);
      });
    });
  },

  // Initialize interactive 2D floor planner teaser drag & rotate logic
  setupInteractivePlannerTeaser: function() {
    const canvas = document.getElementById("fur-planner-canvas");
    const items = document.querySelectorAll(".fur-planner-teaser__drag-item");
    const coordDisplay = document.getElementById("fur-planner-coord-val");
    if (!canvas || items.length === 0) return;

    let activeItem = null;
    let offsetX = 0;
    let offsetY = 0;

    // Click to rotate (90 deg increments)
    items.forEach(item => {
      let rotation = 0;
      item.addEventListener("click", (e) => {
        // Only rotate if not actively dragging
        if (item.dataset.dragging === "true") return;
        rotation = (rotation + 90) % 360;
        item.style.transform = `translate(${item.dataset.x || 0}px, ${item.dataset.y || 0}px) rotate(${rotation}deg)`;
        item.dataset.rotation = rotation;
      });

      // Pointer drag events
      item.addEventListener("pointerdown", (e) => {
        activeItem = item;
        item.setPointerCapture(e.pointerId);
        item.dataset.dragging = "true";
        
        // Calculate offset relative to item origin
        const rect = item.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        canvas.classList.add("fur-planner-teaser__canvas--active");
        e.preventDefault();
      });

      item.addEventListener("pointermove", (e) => {
        if (activeItem !== item) return;
        
        const canvasRect = canvas.getBoundingClientRect();
        let x = e.clientX - canvasRect.left - offsetX;
        let y = e.clientY - canvasRect.top - offsetY;
        
        // Constrain movement inside canvas bounds
        x = Math.max(0, Math.min(x, canvasRect.width - item.clientWidth));
        y = Math.max(0, Math.min(y, canvasRect.height - item.clientHeight));
        
        // Align to a 10px snap grid for a clean architectural feel
        x = Math.round(x / 10) * 10;
        y = Math.round(y / 10) * 10;
        
        const rot = item.dataset.rotation || 0;
        item.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
        item.dataset.x = x;
        item.dataset.y = y;
        
        if (coordDisplay) {
          coordDisplay.textContent = `${item.dataset.name}: X: ${x}px, Y: ${y}px`;
        }
      });

      const handleRelease = (e) => {
        if (activeItem === item) {
          item.releasePointerCapture(e.pointerId);
          setTimeout(() => {
            item.dataset.dragging = "false";
          }, 50);
          activeItem = null;
          canvas.classList.remove("fur-planner-teaser__canvas--active");
        }
      };

      item.addEventListener("pointerup", handleRelease);
      item.addEventListener("pointercancel", handleRelease);
    });
  },

  // 21. Home 3 Fullscreen Responsive Overlay Menu Toggle
  setupOverlayMenu: function() {
    const trigger = document.getElementById("fur-menu-trigger-split");
    const closeBtn = document.getElementById("fur-menu-close-split");
    const menu = document.getElementById("fur-overlay-menu");
    const links = document.querySelectorAll(".fur-overlay-menu__link");

    if (trigger && menu) {
      trigger.addEventListener("click", () => {
        menu.classList.add("fur-overlay-menu--open");
        document.body.style.overflow = "hidden";
      });
    }

    if (closeBtn && menu) {
      closeBtn.addEventListener("click", () => {
        menu.classList.remove("fur-overlay-menu--open");
        document.body.style.overflow = "";
      });
    }

    links.forEach(link => {
      link.addEventListener("click", () => {
        if (menu) {
          menu.classList.remove("fur-overlay-menu--open");
          document.body.style.overflow = "";
        }
      });
    });
  },

  // 20. GSAP removed — native CSS animations used
  initGSAP: function() {
    // All GSAP scroll animations removed. CSS + IntersectionObserver handle reveals.
  },

  // 22. Home 3 Dynamic Split Layout Observer (Changes left cover image on scroll)
  setupSplitLayoutObserver: function() {
    const leftCoverImg = document.getElementById("fur-split-cover-img");
    if (!leftCoverImg) return;

    // Define sections and their matching high-res images
    const sectionImages = {
      "wp-block-fur-split-hero": "assets/img/fur_lookbook_reading.png",
      "wp-block-fur-matrix": "assets/img/fur_materials_showcase.png",
      "wp-block-fur-blueprints": "assets/img/fur_room_dining.png",
      "wp-block-fur-dialogue": "assets/img/fur_room_living.png",
      "wp-block-fur-press-reviews": "assets/img/fur_testimonials_bg.png",
      "wp-block-fur-lifecycle": "assets/img/fur_journal_sustain.png",
      "wp-block-fur-acoustics": "assets/img/fur_mat_boucle.png",
      "wp-block-fur-lighting-lux": "assets/img/fur_prod_chandelier.png",
      "wp-block-fur-color-ratio": "assets/img/fur_mat_brass.png",
      "wp-block-fur-joinery": "assets/img/fur_room_bedroom.png",
      "wp-block-fur-wood-grain": "assets/img/fur_mat_oak.png",
      "wp-block-fur-clearances": "assets/img/fur_room_empty.png",
      "wp-block-fur-textiles-wear": "assets/img/fur_mat_leather.png",
      "wp-block-fur-repairability": "assets/img/fur_journal_craft.png",
      "wp-block-fur-textiles-thermal": "assets/img/fur_mat_leather.png",
      "wp-block-fur-wood-humidity": "assets/img/fur_mat_oak.png"
    };

    let currentSectionId = "";

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the active reading zone
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const targetSrc = sectionImages[id];
          
          if (targetSrc && id !== currentSectionId) {
            currentSectionId = id;
            
            // Add fade-out class
            leftCoverImg.classList.add("fur-fade-out");
            
            // After fade completes, swap src and fade back in
            setTimeout(() => {
              leftCoverImg.src = targetSrc;
              leftCoverImg.classList.remove("fur-fade-out");
            }, 300);
          }
        }
      });
    }, observerOptions);

    // Observe all catalog sections
    Object.keys(sectionImages).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  },

  // 23. Home 4 Audio Read-Along Player Simulator
  setupJournalAudioPlayer: function() {
    const playBtn = document.getElementById("fur-journal-play-btn");
    const progressFill = document.getElementById("fur-audio-progress-fill");
    const playIcon = document.getElementById("fur-audio-play-icon");
    const pauseIcon = document.getElementById("fur-audio-pause-icon");
    const transcriptLines = document.querySelectorAll(".fur-transcript-line");
    
    if (!playBtn) return;
    
    const audioWrapper = playBtn.closest(".fur-journal-audio");
    let isPlaying = false;
    let progress = 0;
    let timer = null;
    const duration = 12; // 12 seconds simulation duration
    
    playBtn.addEventListener("click", () => {
      if (isPlaying) {
        // Pause simulation
        isPlaying = false;
        playIcon.style.display = "";
        pauseIcon.style.display = "none";
        if (audioWrapper) audioWrapper.classList.remove("fur-journal-audio--playing");
        clearInterval(timer);
      } else {
        // Play simulation
        isPlaying = true;
        playIcon.style.display = "none";
        pauseIcon.style.display = "";
        if (audioWrapper) audioWrapper.classList.add("fur-journal-audio--playing");
        
        timer = setInterval(() => {
          progress += 0.1;
          const percent = (progress / duration) * 100;
          
          if (progressFill) progressFill.style.width = `${percent}%`;
          
          // Transcript sync logic based on seconds elapsed
          transcriptLines.forEach(line => {
            const lineTime = parseFloat(line.getAttribute("data-time"));
            if (progress >= lineTime) {
              transcriptLines.forEach(l => l.classList.remove("fur-transcript-line--active"));
              line.classList.add("fur-transcript-line--active");
            }
          });
          
          if (progress >= duration) {
            // Reset when done
            isPlaying = false;
            progress = 0;
            if (progressFill) progressFill.style.width = "0%";
            playIcon.style.display = "";
            pauseIcon.style.display = "none";
            if (audioWrapper) audioWrapper.classList.remove("fur-journal-audio--playing");
            clearInterval(timer);
            
            // Activate first line again
            transcriptLines.forEach((l, i) => {
              if (i === 0) l.classList.add("fur-transcript-line--active");
              else l.classList.remove("fur-transcript-line--active");
            });
          }
        }, 100);
      }
    });
  },

  // 24. Home 4 Horizontal Scroll Horizon Track Controller
  setupJournalScroller: function() {
    const track = document.getElementById("fur-horizon-track");
    const prevBtn = document.getElementById("fur-horizon-prev");
    const nextBtn = document.getElementById("fur-horizon-next");
    const progressBar = document.getElementById("fur-horizon-progress-bar");
    
    if (!track) return;
    
    const wrapper = track.parentElement;
    const scrollAmount = 350; // Scroll increment
    
    const updateProgress = () => {
      if (!progressBar) return;
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      if (maxScroll <= 0) {
        progressBar.style.width = "100%";
        return;
      }
      const scrolled = (wrapper.scrollLeft / maxScroll) * 100;
      progressBar.style.width = `${Math.max(10, scrolled)}%`;
    };
    
    // Listen to scroll events
    wrapper.addEventListener("scroll", updateProgress, { passive: true });
    
    // Initial sync
    setTimeout(updateProgress, 100);
    
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        wrapper.scrollBy({
          left: -scrollAmount,
          behavior: "smooth"
        });
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        wrapper.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      });
    }
  },

  // 25. Home 4 Acoustics Comparison & Web Audio Synthesizer
  setupAcousticsSimulator: function() {
    const tabs = document.querySelectorAll(".fur-journal-sound__tab");
    const infoDesc = document.querySelector(".fur-journal-sound__info-desc");
    const bars = document.querySelectorAll(".fur-journal-sound__bar-item");
    const testEcho = document.getElementById("fur-sound-test-echo");
    const testCalm = document.getElementById("fur-sound-test-calm");
    const feedbackText = document.querySelector(".fur-sound-feedback-txt");
    const feedbackIndicator = document.querySelector(".fur-sound-feedback-indicator");

    if (!tabs.length || !infoDesc) return;

    const presetData = {
      living: {
        desc: "Our living room design service balances high-traffic durability with organic softness. We combine dense oak structural framing with tactile wool upholstery to ground the family space.",
        bars: [
          {
            name: "Textured Wool Bouclé", val: "0.85 Curation Index", pct: 85,
            wave: "M 0 10 Q 6 2 12 14 T 24 8 T 36 15 T 48 4 T 60 13 T 72 5 T 84 14 T 96 7 T 108 13 T 120 10"
          },
          {
            name: "French FSC Oak Wood", val: "0.15 Curation Index", pct: 15,
            wave: "M 0 10 Q 30 8 60 11 T 120 10"
          },
          {
            name: "Honed Travertine Marble", val: "0.35 Curation Index", pct: 35,
            wave: "M 0 10 Q 15 14 35 6 T 70 13 T 100 8 T 120 10"
          }
        ]
      },
      workspace: {
        desc: "Optimizing creative and quiet workspace zones. Incorporating sound-dampening acoustic backing behind oak shelving supports long periods of quiet work.",
        bars: [
          {
            name: "Acoustic Backed Panels", val: "0.90 Curation Index", pct: 90,
            wave: "M 0 10 Q 5 1 10 16 T 20 4 T 30 16 T 40 3 T 50 15 T 60 4 T 70 16 T 80 5 T 90 14 T 100 6 T 110 15 T 120 10"
          },
          {
            name: "Engineered Oak Subfloors", val: "0.20 Curation Index", pct: 20,
            wave: "M 0 10 Q 20 7 45 12 T 90 9 T 120 10"
          },
          {
            name: "Raw Limestone Plaster", val: "0.40 Curation Index", pct: 40,
            wave: "M 0 10 Q 15 5 30 14 T 60 6 T 90 14 T 120 10"
          }
        ]
      },
      bedroom: {
        desc: "Restful retreats and sleeping sanctuaries. Dampening high frequencies using heavy linen curtains and padded fabric headboards ensures absolute rest.",
        bars: [
          {
            name: "Upholstered Bed Headboard", val: "0.75 Curation Index", pct: 75,
            wave: "M 0 10 Q 8 3 16 15 T 32 5 T 48 14 T 64 4 T 80 13 T 96 6 T 112 14 T 120 10"
          },
          {
            name: "European Beech Slats", val: "0.10 Curation Index", pct: 10,
            wave: "M 0 10 Q 60 9 120 10"
          },
          {
            name: "Velvet Drapery Weaves", val: "0.65 Curation Index", pct: 65,
            wave: "M 0 10 Q 12 4 24 14 T 48 5 T 72 14 T 96 6 T 120 10"
          }
        ]
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => {
          t.classList.remove("fur-journal-sound__tab--active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("fur-journal-sound__tab--active");
        tab.setAttribute("aria-selected", "true");

        const presetKey = tab.getAttribute("data-sound-preset");

        // Update index and indicator bar dynamically
        const indexEl = document.querySelector(".tft-sound__current-index");
        const fillEl = document.querySelector(".tft-sound__indicator-fill");
        if (presetKey === "living") {
          if (indexEl) indexEl.textContent = "01";
          if (fillEl) fillEl.style.width = "33%";
        } else if (presetKey === "workspace") {
          if (indexEl) indexEl.textContent = "02";
          if (fillEl) fillEl.style.width = "66%";
        } else if (presetKey === "bedroom") {
          if (indexEl) indexEl.textContent = "03";
          if (fillEl) fillEl.style.width = "100%";
        }

        const data = presetData[presetKey];
        if (data) {
          infoDesc.textContent = data.desc;
          bars.forEach((barEl, index) => {
            const barData = data.bars[index];
            if (barData) {
              barEl.querySelector(".fur-journal-sound__bar-name").textContent = barData.name;
              barEl.querySelector(".fur-journal-sound__bar-value").textContent = barData.val;
              barEl.querySelector(".fur-journal-sound__bar-fill").style.width = `${barData.pct}%`;

              // Update the SVG wave path so each material has a distinct waveform
              const wavePath = barEl.querySelector(".tft-sound__wave-mini path");
              if (wavePath && barData.wave) {
                wavePath.setAttribute("d", barData.wave);
              }
            }
          });
        }
      });
    });

    // Audio synthesis context
    let audioCtx = null;
    let activeSource = null;

    const playSound = (isTreated) => {
      const waveVis = document.getElementById("tft-sound-wave-visualizer");

      // stop current sound
      if (activeSource) {
        try { activeSource.stop(); } catch(e) {}
        activeSource = null;
        if (waveVis) {
          waveVis.classList.remove("tft-jnl-sound__wave-canvas-wrap--active");
        }
      }

      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      // Resume context if suspended (browser security)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      // Generate soft pinkish noise
      const bufferSize = audioCtx.sampleRate * 1.5; // 1.5 seconds
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;

      // Filter settings
      const filterNode = audioCtx.createBiquadFilter();
      filterNode.type = "lowpass";

      // Reverb simulation using delay
      const delayNode = audioCtx.createDelay();
      const feedbackNode = audioCtx.createGain();

      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);

      if (waveVis) {
        waveVis.classList.add("tft-jnl-sound__wave-canvas-wrap--active");
      }

      if (isTreated) {
        // Cozy Sanctuary: clean, deep, short warm sound
        filterNode.frequency.setValueAtTime(400, audioCtx.currentTime);
        noiseNode.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        feedbackText.textContent = "🔊 Curated Concept: Focuses on warm wood, textured boucle fabrics, and organic travertine surfaces.";
        feedbackIndicator.classList.add("fur-sound-feedback-indicator--active");
        
        // fade out quickly
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      } else {
        // Raw Concrete: high frequency, long echoing reverb
        filterNode.frequency.setValueAtTime(1500, audioCtx.currentTime);
        
        // Setup delay echo loop
        delayNode.delayTime.setValueAtTime(0.12, audioCtx.currentTime);
        feedbackNode.gain.setValueAtTime(0.65, audioCtx.currentTime); // high echo feedback
        
        noiseNode.connect(filterNode);
        filterNode.connect(gainNode);
        
        // Connect to echo delay feedback loop
        filterNode.connect(delayNode);
        delayNode.connect(feedbackNode);
        feedbackNode.connect(delayNode);
        feedbackNode.connect(gainNode);

        gainNode.connect(audioCtx.destination);

        feedbackText.textContent = "🔊 Minimalist Concept: Focuses on raw stone, exposed plaster, and structural steel lines.";
        feedbackIndicator.classList.add("fur-sound-feedback-indicator--active");

        // fade out slowly
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
      }

      noiseNode.start();
      activeSource = noiseNode;

      setTimeout(() => {
        if (activeSource === noiseNode) {
          feedbackIndicator.classList.remove("fur-sound-feedback-indicator--active");
          if (waveVis) {
            waveVis.classList.remove("tft-jnl-sound__wave-canvas-wrap--active");
          }
        }
      }, isTreated ? 400 : 1500);
    };

    if (testEcho) {
      testEcho.addEventListener("click", () => playSound(false));
    }
    if (testCalm) {
      testCalm.addEventListener("click", () => playSound(true));
    }
  },

  // 26. Home 4 Stockists Floating Showroom Image Preview
  setupStockistsHover: function() {
    const rows = document.querySelectorAll(".fur-journal-stockists__row");
    const previewCard = document.getElementById("fur-stockist-preview-card");
    const previewImg = document.getElementById("fur-stockist-preview-img");

    if (!rows.length || !previewCard || !previewImg) return;

    rows.forEach(row => {
      row.addEventListener("mouseenter", () => {
        const thumbSrc = row.getAttribute("data-showroom-thumb");
        if (thumbSrc) {
          previewImg.src = thumbSrc;
          previewCard.classList.add("fur-stock-hover-preview--visible");
          previewCard.setAttribute("aria-hidden", "false");
        }
      });

      row.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY - 15;
        previewCard.style.left = `${posX}px`;
        previewCard.style.top = `${posY}px`;
      });

      row.addEventListener("mouseleave", () => {
        previewCard.classList.remove("fur-stock-hover-preview--visible");
        previewCard.setAttribute("aria-hidden", "true");
      });
    });
  },

  // 27. Home 4 Bespoke Journal Subscription Form
  setupJournalSubscription: function() {
    const form = document.getElementById("tft-journal-subscribe-form");
    const successBox = document.getElementById("tft-subscribe-success-box");
    const submitBtn = document.getElementById("tft-subscribe-submit-btn");

    if (!form || !successBox || !submitBtn) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simple mock loading state
      const btnSpan = submitBtn.querySelector("span");
      if (btnSpan) btnSpan.textContent = "Registering...";
      submitBtn.disabled = true;

      setTimeout(() => {
        // Hide form and show success card
        form.style.opacity = "0";
        setTimeout(() => {
          form.style.display = "none";
          successBox.style.display = "flex";
          successBox.setAttribute("aria-hidden", "false");
        }, 200);
      }, 1000);
    });
  },

  // 28. Spessart Timber Growth Ring Simulator
  setupTimberGrowth: function() {
    const range = document.getElementById("tft-growth-range");
    const yearVal = document.getElementById("tft-growth-year-val");
    const rings = document.querySelectorAll(".tft-jnl-growth-ring");
    const highlight = document.getElementById("tft-growth-highlight");

    // Cards
    const cardPeriod = document.getElementById("tft-growth-card-period");
    const cardTitle = document.getElementById("tft-growth-card-title");
    const cardText = document.getElementById("tft-growth-card-text");
    const statDensity = document.getElementById("tft-growth-stat-density");
    const statDiameter = document.getElementById("tft-growth-stat-diameter");

    if (!range || !yearVal || !rings.length || !highlight) return;

    const timelineData = {
      1926: {
        period: "Origin Phase",
        title: "Sapling Takes Root",
        text: "A white oak sapling germinates in the deep sandy loams of the Spessart forest, starting its century-long carbon sequestration cycle.",
        density: "Medium-Loose",
        diameter: "~8 cm",
        radius: 8
      },
      1946: {
        period: "Early Growth",
        title: "Establishing the Crown",
        text: "Survivable post-war years. Growth accelerates as light penetrates the canopy; wood fibers form a highly resilient core.",
        density: "Wide Rings",
        diameter: "~24 cm",
        radius: 24
      },
      1966: {
        period: "Mature Canopy",
        title: "The Golden Decades",
        text: "Dense canopy expansion. The growth rate stabilizes into a tight, consistent cellular pattern, improving stability.",
        density: "Highly Dense",
        diameter: "~44 cm",
        radius: 44
      },
      1986: {
        period: "Structural Core",
        title: "Severe Winter Hardening",
        text: "An historically cold winter tightens growth rings dramatically, forming a dense, self-healing core.",
        density: "Ultra Dense",
        diameter: "~64 cm",
        radius: 64
      },
      2006: {
        period: "Pre-Harvest",
        title: "Canopy Longevity",
        text: "Reaching architectural maturity. The trunk displays signature tight rays and a rich tanin concentration.",
        density: "Consistently Fine",
        diameter: "~84 cm",
        radius: 84
      },
      2026: {
        period: "Sustainable Harvest",
        title: "Architectural Rebirth",
        text: "Sustainable logging selection. Hand-felled and air-dried for 36 months to manufacture premium acoustic veneers.",
        density: "Excellent (Tight)",
        diameter: "~95 cm",
        radius: 95
      }
    };

    function updateSimulator(year) {
      const data = timelineData[year];
      if (!data) return;

      yearVal.textContent = year;
      if (cardPeriod) cardPeriod.textContent = data.period;
      if (cardTitle) cardTitle.textContent = data.title;
      if (cardText) cardText.textContent = data.text;
      if (statDensity) statDensity.textContent = data.density;
      if (statDiameter) statDiameter.textContent = data.diameter;

      rings.forEach(ring => {
        const ringYear = ring.getAttribute("data-year");
        if (ringYear === String(year)) {
          ring.classList.add("tft-jnl-growth-ring--active");
        } else {
          ring.classList.remove("tft-jnl-growth-ring--active");
        }
      });

      highlight.setAttribute("r", data.radius);
      highlight.style.opacity = "1";

      const val = (year - 1926) / (2026 - 1926) * 100;
      range.style.setProperty("--slide-progress", `${val}%`);
    }

    range.addEventListener("input", (e) => {
      updateSimulator(e.target.value);
    });

    updateSimulator(1926);
  },

  // 29. Tactile Swatch Moodboard
  setupTactileMoodboard: function() {
    const buttons = document.querySelectorAll(".tft-jnl-palette__btn");
    const displayImg = document.getElementById("tft-palette-display-img");
    const displayTitle = document.getElementById("tft-palette-caption-title");
    const displayDesc = document.getElementById("tft-palette-caption-desc");

    if (!buttons.length || !displayImg || !displayTitle || !displayDesc) return;

    const paletteData = {
      nordic: {
        img: "assets/img/fur_room_living.png",
        title: "Nordic Silence Composition",
        desc: "A light-filled study utilizing low-absorption textures to foster deep concentration and structural calm."
      },
      earth: {
        img: "assets/img/fur_testimonials_bg.png",
        title: "Raw Earth Composition",
        desc: "Tactile travertine stone meets raw unbleached linen surfaces to forge an earthy, high-sensory environment."
      },
      obsidian: {
        img: "assets/img/fur_hero_dark.png",
        title: "Obsidian Shadow Composition",
        desc: "Moody forest ambiance pairing dark fluted wood columns with aniline leather to establish active architectural focal points."
      }
    };

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const palette = btn.getAttribute("data-palette");
        const data = paletteData[palette];
        if (!data) return;

        buttons.forEach(b => b.classList.remove("tft-jnl-palette__btn--active"));
        btn.classList.add("tft-jnl-palette__btn--active");

        displayImg.style.opacity = "0";
        setTimeout(() => {
          displayImg.src = data.img;
          displayTitle.textContent = data.title;
          displayDesc.textContent = data.desc;
          displayImg.style.opacity = "1";
        }, 200);
      });
    });
  },

  setupTFTPageInteractions: function() {
    // 1. Hotspot Lookbook (Shop Page)
    const hotspots = document.querySelectorAll(".tft-lookbook__hotspot");
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = hotspot.nextElementSibling;
        const isVisible = card && card.classList.contains("tft-lookbook__card--visible");
        
        // Hide all lookbook cards first
        document.querySelectorAll(".tft-lookbook__card").forEach(c => {
          c.classList.remove("tft-lookbook__card--visible");
        });
        
        if (card && !isVisible) {
          card.classList.add("tft-lookbook__card--visible");
        }
      });
    });

    // Close cards on document click
    document.addEventListener("click", () => {
      document.querySelectorAll(".tft-lookbook__card").forEach(c => {
        c.classList.remove("tft-lookbook__card--visible");
      });
    });

    // 2. Custom Accordions (Product details & FAQ)
    const accordionButtons = document.querySelectorAll(".tft-product-accordion__btn");
    accordionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        const panel = btn.nextElementSibling;
        if (panel) {
          if (!expanded) {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } else {
            panel.style.maxHeight = null;
          }
        }
      });
    });

    // 3. Product Swatch Configurators Timeline
    const swatchSelectOptions = document.querySelectorAll(".fur-detail__swatch-option");
    swatchSelectOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        const timelineDays = document.getElementById("tft-timeline-days");
        if (timelineDays) {
          const materialName = opt.getAttribute("title") || "Bespoke Material";
          const randomDays = Math.floor(Math.random() * 15) + 12;
          timelineDays.textContent = `${randomDays} business days (Handcrafting for ${materialName})`;
        }
      });
    });

    // 4. About page: Sustainability Counter animation
    const sustainabilityCounters = document.querySelectorAll(".tft-sustainability-stats__val");
    if (sustainabilityCounters.length > 0 && "IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.getAttribute("data-count"), 10) || 0;
            let startValue = 0;
            const duration = 2000;
            const startTime = performance.now();
            
            function updateCounter(currentTime) {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const currentValue = Math.floor(progress * endValue);
              target.textContent = currentValue.toLocaleString();
              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                target.textContent = endValue.toLocaleString() + (target.getAttribute("data-suffix") || "");
              }
            }
            requestAnimationFrame(updateCounter);
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.1 });
      sustainabilityCounters.forEach(cnt => counterObserver.observe(cnt));
    }

    // 5. Contact page: Calendar Time-slots
    const calendarSlots = document.querySelectorAll(".tft-calendar-slot");
    calendarSlots.forEach(slot => {
      slot.addEventListener("click", () => {
        calendarSlots.forEach(s => s.classList.remove("tft-calendar-slot--selected"));
        slot.classList.add("tft-calendar-slot--selected");
        const bookingField = document.getElementById("tft-booking-time-input");
        if (bookingField) {
          const day = slot.querySelector(".tft-calendar-slot__day").textContent;
          const time = slot.querySelector(".tft-calendar-slot__time").textContent;
          bookingField.value = `${day} at ${time}`;
        }
      });
    });

    // 6. Blog page: Audio podcast player simulation
    const playBtn = document.getElementById("tft-podcast-play");
    const progressBar = document.getElementById("tft-podcast-progress");
    const playText = document.getElementById("tft-podcast-play-text");
    if (playBtn && progressBar) {
      let isPlaying = false;
      let progressPercent = 0;
      let intervalId = null;

      playBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
          playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
          if (playText) playText.textContent = "Playing Spatial Design Journal Audio...";
          intervalId = setInterval(() => {
            progressPercent += 0.5;
            progressBar.style.width = progressPercent + "%";
            if (progressPercent >= 100) {
              clearInterval(intervalId);
              isPlaying = false;
              progressPercent = 0;
              progressBar.style.width = "0%";
              playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
              if (playText) playText.textContent = "Listen to Spatial Theory Article (Audiobook)";
            }
          }, 100);
        } else {
          playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
          if (playText) playText.textContent = "Paused Audio Article (Audiobook)";
          clearInterval(intervalId);
        }
      });
    }

    // Reading Progress Indicator (Blog page)
    const progressBarTop = document.getElementById("tft-blog-scroll-progress");
    if (progressBarTop) {
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBarTop.style.width = scrollPercent + "%";
      });
    }

    // 7. Checkout Page: Stepper Simulator
    const stepperSteps = document.querySelectorAll(".tft-shipping-stepper__step");
    if (stepperSteps.length > 0) {
      let activeIndex = 0;
      setInterval(() => {
        stepperSteps.forEach((step, idx) => {
          step.classList.remove("tft-shipping-stepper__step--active", "tft-shipping-stepper__step--complete");
          if (idx < activeIndex) {
            step.classList.add("tft-shipping-stepper__step--complete");
          } else if (idx === activeIndex) {
            step.classList.add("tft-shipping-stepper__step--active");
          }
        });
        activeIndex = (activeIndex + 1) % stepperSteps.length;
      }, 5000);
    }

    // 8. Stillness Hero Cover V2 Swatch Slider
    const swatchItems = document.querySelectorAll(".tft-stillness-hero-v2__swatch-item");
    const slides = document.querySelectorAll(".tft-stillness-hero-v2__bg-slide");
    const dot = document.querySelector(".tft-stillness-hero-v2__swatches-dot");
    const titleEl = document.getElementById("tft-stillness-hero-heading-v2");
    const descEl = document.querySelector(".tft-stillness-hero-v2__desc");
    const contentEl = document.querySelector(".tft-stillness-hero-v2__content");

    if (swatchItems.length > 0 && slides.length > 0 && dot) {
      const updateDotPosition = (activeItem) => {
        const swatchesContainer = document.querySelector(".tft-stillness-hero-v2__swatches");
        if (swatchesContainer) {
          const containerRect = swatchesContainer.getBoundingClientRect();
          const itemRect = activeItem.getBoundingClientRect();
          const circle = activeItem.querySelector(".tft-stillness-hero-v2__swatch-circle");
          if (circle) {
            const circleRect = circle.getBoundingClientRect();
            const topOffset = (circleRect.top - containerRect.top) + (circleRect.height / 2) - 2.5;
            dot.style.top = `${topOffset}px`;
          }
        }
      };

      // Set initial position
      setTimeout(() => {
        const initialActive = document.querySelector(".tft-stillness-hero-v2__swatch-item.active");
        if (initialActive) updateDotPosition(initialActive);
      }, 300);

      swatchItems.forEach(item => {
        item.addEventListener("click", () => {
          const index = parseInt(item.getAttribute("data-index"), 10);
          
          swatchItems.forEach(si => si.classList.remove("active"));
          item.classList.add("active");

          updateDotPosition(item);

          slides.forEach((slide, sIdx) => {
            if (sIdx === index) {
              slide.classList.add("active");
            } else {
              slide.classList.remove("active");
            }
          });

          if (contentEl && titleEl && descEl) {
            contentEl.classList.add("fade-out");
            setTimeout(() => {
              const newTitle = item.getAttribute("data-title");
              const newDesc = item.getAttribute("data-desc");
              if (newTitle) titleEl.innerHTML = newTitle;
              if (newDesc) descEl.innerHTML = newDesc;
              contentEl.classList.remove("fade-out");
            }, 350);
          }
        });
      });

      window.addEventListener("resize", () => {
        const activeItem = document.querySelector(".tft-stillness-hero-v2__swatch-item.active");
        if (activeItem) updateDotPosition(activeItem);
      });
    }
    // End setupTFTPageInteractions
  },

  // 43. Premium Curved Hero Slider
  setupCurvedHeroSlider: function() {
    const heroSection = document.getElementById("wp-block-hero-curved");
    if (!heroSection) return;

    const taglineEl = heroSection.querySelector(".tft-hero-curved__tagline");
    const titleEl = heroSection.querySelector(".tft-hero-curved__title");
    const descEl = heroSection.querySelector(".tft-hero-curved__description");
    const rightSlides = heroSection.querySelectorAll(".tft-hero-curved__slide");
    
    const cardTagEl = heroSection.querySelector(".tft-hero-curved__card-tag");
    const cardTitleEl = heroSection.querySelector(".tft-hero-curved__card-title");
    const cardImgEl = heroSection.querySelector(".tft-hero-curved__card-item-img");
    
    const dots = heroSection.querySelectorAll(".tft-hero-curved__vertical-dot");

    const slides = [
      {
        tagline: "CURATED FOR CALM. DESIGNED TO LAST.",
        title: 'Nature <br>in every <span class="tft-hero-curved__title-script">detail.</span>',
        desc: "Thoughtfully crafted furniture and décor made from natural materials for a home that feels calm, warm, and uniquely yours.",
        image: "assets/img/fur_room_living.png",
        overlayTag: "New In",
        overlayTitle: "Spring Collection 2026",
        overlayImg: "assets/img/fur_living_split.png"
      },
      {
        tagline: "SILENT LUXURY. DESIGNED FOR COMFORT.",
        title: 'Simplicity <br>and style <span class="tft-hero-curved__title-script">combined.</span>',
        desc: "Discover clean lines, silent luxury, and functional Nordic aesthetics for an organized, peaceful sanctuary.",
        image: "assets/img/fur_hero_harmony_sofa.png",
        overlayTag: "Featured",
        overlayTitle: "The Harmony Sofa",
        overlayImg: "assets/img/fur_dining_split.png"
      },
      {
        tagline: "NATURAL CRAFT. BUILT TO ENDURE.",
        title: 'Crafted <br>to be lived <span class="tft-hero-curved__title-script">in.</span>',
        desc: "Every timber hand-selected, every curve polished to perfection. Furniture that tells a story of longevity.",
        image: "assets/img/fur_hero_boucle_chair.png",
        overlayTag: "Best Seller",
        overlayTitle: "Bouclé Accent Chair",
        overlayImg: "assets/img/fur_bedroom_split.png"
      }
    ];

    let currentIndex = 0;
    let autoPlayTimer = null;

    const transitionToSlide = (newIndex) => {
      if (newIndex === currentIndex) return;
      
      stopAutoplay();
      heroSection.classList.add("tft-hero-curved--transitioning");

      setTimeout(() => {
        const slide = slides[newIndex];
        
        if (taglineEl) taglineEl.textContent = slide.tagline;
        if (titleEl) titleEl.innerHTML = slide.title;
        if (descEl) descEl.textContent = slide.desc;
        
        if (rightSlides.length > 0) {
          rightSlides.forEach((slideEl, idx) => {
            if (idx === newIndex) {
              slideEl.classList.add("tft-hero-curved__slide--active");
            } else {
              slideEl.classList.remove("tft-hero-curved__slide--active");
            }
          });
        }
        
        if (cardTagEl) cardTagEl.textContent = slide.overlayTag;
        if (cardTitleEl) cardTitleEl.textContent = slide.overlayTitle;
        if (cardImgEl) {
          cardImgEl.src = slide.overlayImg;
          cardImgEl.alt = slide.overlayTitle;
        }

        dots.forEach((dot, idx) => {
          if (idx === newIndex) {
            dot.classList.add("tft-hero-curved__vertical-dot--active");
          } else {
            dot.classList.remove("tft-hero-curved__vertical-dot--active");
          }
        });

        currentIndex = newIndex;

        setTimeout(() => {
          heroSection.classList.remove("tft-hero-curved--transitioning");
          startAutoplay();
        }, 100);
      }, 350);
    };

    const startAutoplay = () => {
      autoPlayTimer = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        transitionToSlide(nextIndex);
      }, 6500);
    };

    const stopAutoplay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        transitionToSlide(index);
      });
    });

    startAutoplay();

    // Trigger page-load entrance transitions
    setTimeout(() => {
      heroSection.classList.remove("tft-hero-curved--init");
    }, 150);
  },

  // 42. Sticky Back to Top Button
  setupBackToTop: function() {
    const btn = document.createElement("button");
    btn.className = "tft-back-to-top";
    btn.setAttribute("aria-label", "Scroll to top");
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;
    document.body.appendChild(btn);

    const mainPane = document.querySelector(".fur-main");

    const handleScroll = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const mainScroll = mainPane ? mainPane.scrollTop : 0;
      if (winScroll > 300 || mainScroll > 300) {
        btn.classList.add("tft-back-to-top--visible");
      } else {
        btn.classList.remove("tft-back-to-top--visible");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (mainPane) {
      mainPane.addEventListener("scroll", handleScroll, { passive: true });
    }

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      if (mainPane) {
        mainPane.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  },

  // 43. TFT Redesigned Mega-Menu and Dropdown Interactions
  setupTFTExtendedMegaMenu: function() {
    // Consolidated in TFT_MegaMenu at the bottom of this file to prevent duplicate event listeners
  },

  // Setup material matrix category filtering on index-3.html
  tftSetupMaterialMatrixFiltering: function() {
    const filters = document.querySelectorAll("[data-tft-matrix-filter]");
    const cards = document.querySelectorAll(".tft-matrix__card");
    if (!filters.length || !cards.length) return;

    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedCat = btn.getAttribute("data-tft-matrix-filter");

        // Toggle active button style
        filters.forEach(b => {
          b.classList.remove("tft-matrix__filter--active");
          b.style.backgroundColor = "var(--fur-surface-secondary)";
          b.style.color = "var(--fur-text-muted)";
          b.style.borderColor = "var(--fur-border)";
        });
        
        btn.classList.add("tft-matrix__filter--active");
        btn.style.backgroundColor = "var(--fur-primary)";
        btn.style.color = "var(--fur-button-text)";
        btn.style.borderColor = "var(--fur-primary)";

        // Filter matrix cards
        cards.forEach(card => {
          const cardCat = card.getAttribute("data-tft-matrix-cat");
          if (selectedCat === "all" || cardCat === selectedCat) {
            card.classList.remove("tft-matrix__card--hidden");
            // Trigger fade-in animation
            card.animate([
              { opacity: 0, transform: "translateY(10px)" },
              { opacity: 1, transform: "translateY(0)" }
            ], { duration: 300, easing: "ease-out" });
          } else {
            card.classList.add("tft-matrix__card--hidden");
          }
        });
      });
    });
  }
}; 

// Start the template interactions once DOM content is fully loaded
const TFT_InitAll = () => {
  FUR_Theme.init();

  // Global Event Delegation for Clicks
  document.addEventListener("click", (event) => {
    // 1. Open product modal
    const modalBtn = event.target.closest("[data-tft-click='open-product-modal']");
    if (modalBtn) {
      const prodId = parseInt(modalBtn.getAttribute("data-tft-id"), 10);
      if (prodId) {
        FUR_Theme.openQuickView(prodId);
      }
    }

    // 2. Add customized configured sofa to cart (index.html Configurator)
    if (event.target.closest("[data-tft-click='rc-add-to-cart']")) {
      FUR_Theme.addConfiguredSofaToCart();
    }

    // 2.b Toggle newsletter checkbox active class
    const checkboxWrapper = event.target.closest(".tft-footer__checkbox-wrapper");
    if (checkboxWrapper) {
      checkboxWrapper.classList.toggle("tft-footer__checkbox-wrapper--active");
    }

    // 3. Room planner dimensions adjusting (index-6.html Room Planner)
    const stepDownBtn = event.target.closest("[data-tft-click='rc-step-down']");
    if (stepDownBtn) {
      const targetId = stepDownBtn.getAttribute("data-tft-target");
      const input = document.getElementById(targetId);
      if (input) {
        input.stepDown();
        input.dispatchEvent(new Event("change"));
      }
    }

    const stepUpBtn = event.target.closest("[data-tft-click='rc-step-up']");
    if (stepUpBtn) {
      const targetId = stepUpBtn.getAttribute("data-tft-target");
      const input = document.getElementById(targetId);
      if (input) {
        input.stepUp();
        input.dispatchEvent(new Event("change"));
      }
    }
  });

  // Global Event Delegation for Submissions
  document.addEventListener("submit", (event) => {
    // 1. Newsletter Form in Footers
    const form = event.target.closest("[data-tft-submit='subscribe-newsletter']");
    if (form) {
      event.preventDefault();
      const input = form.querySelector("input[type='email']");
      const btn = form.querySelector("button[type='submit']");
      if (input && btn) {
        const originalText = btn.textContent;
        btn.textContent = "Subscribed ✓";
        btn.style.background = "var(--fur-primary)";
        btn.style.color = "var(--fur-bg)";
        input.value = "";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = "";
          btn.style.color = "";
        }, 3000);
      } else {
        alert("Subscribed successfully!");
      }
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_InitAll);
} else {
  TFT_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: blog-post.js
   ========================================================================== */
/**
 * Premium Furniture Shop Template - Blog Post Details & Comments Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Comments = {
  replyTargetId: null,
  currentUser: null,

  init: function() {
    this.trackScrollProgress();
  },

  trackScrollProgress: function() {
    const progressBar = document.getElementById("tft-post-scroll-progress");
    if (!progressBar) return;
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + "%";
    });
  },

  likeComment: function(btn) {
    const countSpan = btn.querySelector("span");
    if (!countSpan) return;
    let count = parseInt(countSpan.textContent, 10);
    if (btn.classList.contains("tft-comment__action--liked")) {
      count--;
      btn.classList.remove("tft-comment__action--liked");
    } else {
      count++;
      btn.classList.add("tft-comment__action--liked");
    }
    countSpan.textContent = count;
  },

  mockLogin: function(provider) {
    const statusBox = document.getElementById("tft-authbox-status");
    const nameInput = document.getElementById("comment-author-name");
    const emailInput = document.getElementById("comment-author-email");
    
    this.currentUser = {
      name: "Collector Guest",
      avatar: "G"
    };

    if (provider === "Google") {
      this.currentUser.name = "Alexander Vance";
      this.currentUser.avatar = "A";
    } else if (provider === "Apple") {
      this.currentUser.name = "Clara Lindberg";
      this.currentUser.avatar = "C";
    } else {
      this.currentUser.name = "Atelier Inhabitant";
      this.currentUser.avatar = "AI";
    }

    nameInput.value = this.currentUser.name;
    emailInput.value = this.currentUser.name.toLowerCase().replace(" ", "") + "@atelier.com";

    if (statusBox) {
      statusBox.textContent = "Authenticated successfully via " + provider + " as " + this.currentUser.name;
      statusBox.style.display = "block";
    }
  },

  replyTo: function(commentId, authorName) {
    this.replyTargetId = commentId;
    const notifier = document.getElementById("tft-replying-notifier");
    const targetNameSpan = document.getElementById("tft-reply-target-name");
    const commentNode = document.getElementById(commentId);
    const formContainer = document.getElementById("tft-post-comment-form-container");

    if (targetNameSpan && notifier) {
      targetNameSpan.textContent = authorName;
      notifier.style.display = "flex";
    }

    // Reposition form node directly beneath the target comment in the DOM tree
    if (commentNode && formContainer) {
      commentNode.parentNode.insertBefore(formContainer, commentNode.nextSibling);
    }
    
    document.getElementById("comment-text-content").focus();
  },

  cancelReply: function() {
    this.replyTargetId = null;
    const notifier = document.getElementById("tft-replying-notifier");
    const formContainer = document.getElementById("tft-post-comment-form-container");
    const commentsSection = document.getElementById("wp-block-post-comments");

    if (notifier) notifier.style.display = "none";
    
    // Move form back to the bottom of the comments section
    if (commentsSection && formContainer) {
      commentsSection.appendChild(formContainer);
    }
  },

  submitForm: function(e) {
    e.preventDefault();
    const nameInput = document.getElementById("comment-author-name");
    const commentInput = document.getElementById("comment-text-content");
    const treeRoot = document.getElementById("tft-comments-tree-root");
    const counterSpan = document.getElementById("tft-comment-counter");

    if (!nameInput.value.trim() || !commentInput.value.trim()) return;

    const newId = "comment-temp-" + Date.now();
    const avatarLetter = nameInput.value.charAt(0).toUpperCase();

    const newCommentMarkup = `
      <div class="tft-comment ${this.replyTargetId ? 'tft-comment--child' : ''}" id="${newId}">
        <div class="tft-comment__avatar--placeholder">${avatarLetter}</div>
        <div class="tft-comment__body">
          <div class="tft-comment__header">
            <span class="tft-comment__author">${nameInput.value}</span>
            <span class="tft-comment__date">Just now</span>
          </div>
          <p class="tft-comment__text">${commentInput.value}</p>
          <div class="tft-comment__actions">
            <button class="tft-comment__action" data-tft-click="comment-reply" data-tft-comment-id="${newId}" data-tft-author="${nameInput.value}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
              Reply
            </button>
            <button class="tft-comment__action" data-tft-click="comment-like">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              <span>0</span> Likes
            </button>
          </div>
        </div>
      </div>
    `;

    if (this.replyTargetId) {
      const targetNode = document.getElementById(this.replyTargetId);
      if (targetNode) {
        targetNode.insertAdjacentHTML("afterend", newCommentMarkup);
      }
    } else {
      if (treeRoot) {
        treeRoot.insertAdjacentHTML("beforeend", newCommentMarkup);
      }
    }

    // Increment comment counter
    if (counterSpan) {
      let count = parseInt(counterSpan.textContent, 10);
      counterSpan.textContent = count + 1;
    }

    // Clear values & cancel reply hierarchy position
    commentInput.value = "";
    this.cancelReply();
  }
};

const TFT_Comments_InitAll = () => {
  TFT_Comments.init();

  // Event Delegation for comments
  document.addEventListener("click", (event) => {
    // 1. Reply to comment button
    const replyBtn = event.target.closest("[data-tft-click='comment-reply']");
    if (replyBtn) {
      const commentId = replyBtn.getAttribute("data-tft-comment-id");
      const author = replyBtn.getAttribute("data-tft-author");
      TFT_Comments.replyTo(commentId, author);
    }

    // 2. Like comment button
    const likeBtn = event.target.closest("[data-tft-click='comment-like']");
    if (likeBtn) {
      TFT_Comments.likeComment(likeBtn);
    }

    // 3. Mock login button
    const loginBtn = event.target.closest("[data-tft-click='comment-login']");
    if (loginBtn) {
      const provider = loginBtn.getAttribute("data-tft-provider");
      TFT_Comments.mockLogin(provider);
    }

    // 4. Cancel reply button
    if (event.target.closest("[data-tft-click='comment-cancel-reply']")) {
      TFT_Comments.cancelReply();
    }
  });

  // Form submit delegation
  document.addEventListener("submit", (event) => {
    const commentForm = event.target.closest("[data-tft-submit='comment-submit']");
    if (commentForm) {
      TFT_Comments.submitForm(event);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Comments_InitAll);
} else {
  TFT_Comments_InitAll();
}


/* ==========================================================================
   CONSOLIDATED MODULE: blog.js
   ========================================================================== */
/**
 * Premium Furniture Shop Template - Blog Catalog Filtering Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Blog = {
  init: function() {
    // Initialization if needed in the future
  },

  filter: function(tag, btn) {
    // Update active class on tab buttons
    const tabs = document.querySelectorAll(".tft-blg-cats__tab");
    tabs.forEach(t => {
      t.classList.remove("tft-blg-cats__tab--active");
      t.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("tft-blg-cats__tab--active");
    btn.setAttribute("aria-pressed", "true");

    // Filter cards in the grid
    const cards = document.querySelectorAll(".tft-blg-card");
    cards.forEach(card => {
      const cardTag = card.getAttribute("data-tag");
      if (tag === "all" || cardTag === tag) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }
};

const TFT_Blog_InitAll = () => {
  TFT_Blog.init();

  // Event Delegation for Blog actions
  document.addEventListener("click", (event) => {
    // 1. Filter posts
    const filterBtn = event.target.closest("[data-tft-click='blog-filter']");
    if (filterBtn) {
      const category = filterBtn.getAttribute("data-tft-category");
      TFT_Blog.filter(category, filterBtn);
    }

    // 2. Load more posts text update
    const loadMoreBtn = event.target.closest("[data-tft-click='blog-load-more']");
    if (loadMoreBtn) {
      loadMoreBtn.textContent = 'No more articles.';
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Blog_InitAll);
} else {
  TFT_Blog_InitAll();
}


/* ==========================================================================
   CONSOLIDATED MODULE: checkout.js
   ========================================================================== */
/**
 * Premium Furniture Shop Template - Checkout Flow Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Checkout = {
  shippingRate: 0,

  init: function() {
    this._initialLoad = true;
    this.renderRecap();
    this.bindShippingCards();
    this.bindPaymentTabs();
    this.goToStep(1);
    this._initialLoad = false;
  },

  bindShippingCards: function() {
    const cards = document.querySelectorAll('.tft-chk-shipping-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => {
          c.classList.remove('tft-chk-shipping-card--active');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('tft-chk-shipping-card--active');
        card.setAttribute('aria-pressed', 'true');
        TFT_Checkout.shippingRate = parseFloat(card.dataset.rate) || 0;
        TFT_Checkout.updateTotals();
      });
    });
  },

  bindPaymentTabs: function() {
    const tabs = document.querySelectorAll('.tft-chk-payment-tab');
    const cardFields = document.getElementById('tft-pay-card-fields');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('tft-chk-payment-tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('tft-chk-payment-tab--active');
        tab.setAttribute('aria-selected', 'true');
        if (cardFields) {
          cardFields.style.display = tab.id === 'tft-pay-card' ? '' : 'none';
        }
      });
    });
  },

  goToStep: function(stepNum) {
    // Step-to-element mapping
    const stepMap = {
      1: { show: ['wp-block-chk-shipping-info', 'tft-chk-nav-step1'], hide: ['wp-block-chk-dispatch', 'tft-chk-nav-step2', 'wp-block-chk-payment', 'tft-chk-nav-step3'] },
      2: { show: ['wp-block-chk-dispatch', 'tft-chk-nav-step2'],       hide: ['wp-block-chk-shipping-info', 'tft-chk-nav-step1', 'wp-block-chk-payment', 'tft-chk-nav-step3'] },
      3: { show: ['wp-block-chk-payment', 'tft-chk-nav-step3'],         hide: ['wp-block-chk-shipping-info', 'tft-chk-nav-step1', 'wp-block-chk-dispatch', 'tft-chk-nav-step2'] }
    };

    // Validate step 1 fields before advancing from step 1
    if (stepNum === 2) {
      const required1 = ['c-fname','c-lname','c-address','c-city','c-state','c-zip','c-country'];
      for (const id of required1) {
        const el = document.getElementById(id);
        if (el && !el.value.trim()) {
          el.focus();
          el.style.borderColor = 'var(--fur-ref-lime-400)';
          el.addEventListener('input', () => { el.style.borderColor = ''; }, { once: true });
          return;
        }
      }
    }

    const map = stepMap[stepNum];
    if (!map) return;

    map.show.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = '';
    });
    map.hide.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    // Update stepper bubbles
    document.querySelectorAll('.tft-chk-stepper__step').forEach((step, idx) => {
      if (idx + 1 <= stepNum) {
        step.classList.add('tft-chk-stepper__step--active');
      } else {
        step.classList.remove('tft-chk-stepper__step--active');
      }
    });

    // Scroll to top of form (skip on initial page load — let browser start at top)
    if (!this._initialLoad) {
      const form = document.getElementById('wp-block-chk-layout');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  renderRecap: function() {
    const recapContainer = document.getElementById("tft-checkout-recap-items");
    if (!recapContainer) return;

    const cartItems = (window.FUR_Theme && window.FUR_Theme.state.cart) || [];
    recapContainer.innerHTML = "";

    if (cartItems.length === 0) {
      recapContainer.innerHTML = `<p style="font-size:0.8rem; color:var(--fur-text-muted); text-align:center; padding:16px 0;">No items in cart. <a href="shop.html" style="color:var(--fur-primary);">Continue shopping</a></p>`;
      this.updateTotals(0);
      return;
    }

    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
      const img = item.image || 'assets/img/fur_prod_vase.png';
      const markup = `
        <div class="tft-chk-summary-item">
          <div class="tft-chk-summary-item__img-wrap">
            <img class="tft-chk-summary-item__img" src="${img}" alt="${item.title || item.name}" width="64" height="64" loading="lazy">
          </div>
          <div class="tft-chk-summary-item__info">
            <p class="tft-chk-summary-item__title">${item.title || item.name}</p>
            <p class="tft-chk-summary-item__meta">${item.material || ''}</p>
          </div>
          <div class="tft-chk-summary-item__price-qty">
            <span class="tft-chk-summary-item__price">₹${(item.price * item.quantity).toFixed(2)}</span>
            <span class="tft-chk-summary-item__qty">Qty: ${item.quantity}</span>
          </div>
        </div>`;
      recapContainer.insertAdjacentHTML('beforeend', markup);
    });

    this.updateTotals(subtotal);
  },

  updateTotals: function(subtotal) {
    if (subtotal === undefined) {
      const cartItems = (window.FUR_Theme && window.FUR_Theme.state.cart) || [];
      subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
    }
    const tax = subtotal * 0.085;
    const total = subtotal + tax + this.shippingRate;
    const fmt = v => '₹' + v.toFixed(2);

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('tft-checkout-subtotal', fmt(subtotal));
    set('tft-checkout-shipping', this.shippingRate === 0 ? 'Free' : fmt(this.shippingRate));
    set('tft-checkout-tax', fmt(tax));
    set('tft-checkout-total', fmt(total));
  },

  formatCardNumber: function(input) {
    let v = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
    if (parts.length > 0) {
      input.value = parts.join(' ');
    } else {
      input.value = v;
    }
  },

  formatExpiry: function(input) {
    let v = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      input.value = v.substring(0, 2) + '/' + v.substring(2, 4);
    } else {
      input.value = v;
    }
  },

  submitOrder: function(e) {
    e.preventDefault();
    const orderId = "B-" + Math.floor(100000 + Math.random() * 900000);
    const orderIdEl = document.getElementById("tft-success-order-id");
    if (orderIdEl) orderIdEl.textContent = orderId;
    const successModal = document.getElementById("tft-checkout-success-modal");
    if (successModal) {
      successModal.setAttribute("aria-hidden", "false");
    }
    if (window.FUR_Theme) {
      window.FUR_Theme.state.cart = [];
      window.FUR_Theme.renderCart();
    }
  },

  dismissSuccess: function() {
    const successModal = document.getElementById("tft-checkout-success-modal");
    if (successModal) successModal.setAttribute("aria-hidden", "true");
    window.location.href = "index.html";
  }
};

const TFT_Checkout_InitAll = () => {
  TFT_Checkout.init();

  // Event Delegation for Checkout Actions
  document.addEventListener("click", (event) => {
    // 1. Go to step
    const stepBtn = event.target.closest("[data-tft-click='checkout-goto']");
    if (stepBtn) {
      const step = parseInt(stepBtn.getAttribute("data-tft-step"), 10);
      TFT_Checkout.goToStep(step);
    }

    // 2. Dismiss success modal
    if (event.target.closest("[data-tft-click='checkout-dismiss']")) {
      TFT_Checkout.dismissSuccess();
    }
  });

  // Form submits delegation
  document.addEventListener("submit", (event) => {
    const orderForm = event.target.closest("[data-tft-submit='checkout-submit']");
    if (orderForm) {
      TFT_Checkout.submitOrder(event);
    }
  });

  // Oninput delegation for card details
  document.addEventListener("input", (event) => {
    // 1. Format card number
    const cardInput = event.target.closest("[data-tft-input='checkout-format-card']");
    if (cardInput) {
      TFT_Checkout.formatCardNumber(cardInput);
    }

    // 2. Format expiry date
    const expiryInput = event.target.closest("[data-tft-input='checkout-format-expiry']");
    if (expiryInput) {
      TFT_Checkout.formatExpiry(expiryInput);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Checkout_InitAll);
} else {
  TFT_Checkout_InitAll();
}


/* ==========================================================================
   CONSOLIDATED MODULE: consultation.js
   ========================================================================== */
/**
 * Personalized Design Consultation - Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Consultation = {
  // Current active step pointer
  currentStep: 1,
  totalSteps: 6,

  // Initialize
  init: function() {
    this.updateSteps();
  },

  // Navigate to next step
  nextStep: function() {
    if (this.currentStep < this.totalSteps) {
      if (this.validateStep(this.currentStep)) {
        this.currentStep++;
        this.updateSteps();
      }
    }
  },

  // Navigate to previous step
  prevStep: function() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateSteps();
    }
  },

  // Validate inputs in the current step panel
  validateStep: function(step) {
    const currentPanel = document.querySelector(`.tft-form-step[data-step-panel="${step}"]`);
    if (!currentPanel) return true;

    // Check HTML5 standard validation
    const requiredInputs = currentPanel.querySelectorAll("[required]");
    let isValid = true;
    
    requiredInputs.forEach(input => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
    });

    return isValid;
  },

  // Update layout and track bar indicators
  updateSteps: function() {
    // Update step indicator nodes
    const indicatorItems = document.querySelectorAll(".tft-stepper__item");
    indicatorItems.forEach(item => {
      const stepNum = parseInt(item.getAttribute("data-step"), 10);
      item.classList.toggle("tft-stepper__item--active", stepNum === this.currentStep);
      item.classList.toggle("tft-stepper__item--completed", stepNum < this.currentStep);
    });

    // Update progress bar width
    const track = document.querySelector(".tft-stepper__track");
    if (track) {
      const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
      track.style.width = `${progress}%`;
    }

    // Update panel active states
    const panels = document.querySelectorAll(".tft-form-step");
    panels.forEach(panel => {
      const panelNum = parseInt(panel.getAttribute("data-step-panel"), 10);
      panel.classList.toggle("tft-form-step--active", panelNum === this.currentStep);
    });

    // Scroll to the wizard form container on step change for a premium focus transition
    const stepperContainer = document.getElementById("wp-block-consultation-stepper");
    if (stepperContainer && this.currentStep > 1) {
      stepperContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  // Toggle active selection on space type grid
  selectRoomCard: function(element) {
    if (!element) return;
    
    // De-select siblings
    const cards = document.querySelectorAll(".tft-room-card");
    cards.forEach(card => card.classList.remove("tft-room-card--selected"));

    // Select target
    element.classList.add("tft-room-card--selected");

    // Update hidden input
    const roomType = element.getAttribute("data-room-value");
    const inputEl = document.getElementById("tft-input-room-type");
    if (inputEl) {
      inputEl.value = roomType;
    }
  },

  // Choose style aesthetic
  selectAesthetic: function(element) {
    if (!element) return;

    const btns = document.querySelectorAll(".tft-style-choice-btn");
    btns.forEach(btn => btn.classList.remove("tft-style-choice-btn--active"));

    element.classList.add("tft-style-choice-btn--active");

    const value = element.getAttribute("data-aesthetic-val");
    const inputEl = document.getElementById("tft-input-aesthetic");
    if (inputEl) {
      inputEl.value = value;
    }
  },

  // Select slot
  selectSlot: function(element) {
    if (!element) return;

    const btns = document.querySelectorAll(".tft-time-slot-btn");
    btns.forEach(btn => btn.classList.remove("tft-time-slot-btn--active"));

    element.classList.add("tft-time-slot-btn--active");

    const value = element.getAttribute("data-slot-id");
    const inputEl = document.getElementById("tft-input-slot");
    if (inputEl) {
      inputEl.value = value;
    }
  },

  // Final submission of booking
  handleSubmit: function(event) {
    event.preventDefault();

    // Final validation
    if (!this.validateStep(this.currentStep)) return;

    // Show success modal overlay
    const modal = document.getElementById("tft-booking-success-modal");
    if (modal) {
      modal.setAttribute("aria-hidden", "false");
    }
  },

  // Close booking dialog and return
  dismissSuccess: function() {
    const modal = document.getElementById("tft-booking-success-modal");
    if (modal) {
      modal.setAttribute("aria-hidden", "true");
    }
    // Redirect to home page
    window.location.href = "index.html";
  }
};

// Auto initialize on DOM ready
const TFT_Consultation_InitAll = () => {
  TFT_Consultation.init();

  // Event Delegation for Consultation page actions
  document.addEventListener("click", (event) => {
    // 1. Select room card
    const card = event.target.closest("[data-tft-click='consultation-select-room']");
    if (card) {
      TFT_Consultation.selectRoomCard(card);
    }

    // 2. Next step
    if (event.target.closest("[data-tft-click='consultation-next']")) {
      TFT_Consultation.nextStep();
    }

    // 3. Select aesthetic button
    const aestheticBtn = event.target.closest("[data-tft-click='consultation-select-aesthetic']");
    if (aestheticBtn) {
      TFT_Consultation.selectAesthetic(aestheticBtn);
    }

    // 4. Prev step
    if (event.target.closest("[data-tft-click='consultation-prev']")) {
      TFT_Consultation.prevStep();
    }

    // 5. Upload trigger alert
    if (event.target.closest("[data-tft-click='consultation-upload-trigger']")) {
      alert('File upload triggered');
    }

    // 6. Select time slot
    const slotBtn = event.target.closest("[data-tft-click='consultation-select-slot']");
    if (slotBtn) {
      TFT_Consultation.selectSlot(slotBtn);
    }

    // 7. Dismiss success
    if (event.target.closest("[data-tft-click='consultation-dismiss']")) {
      TFT_Consultation.dismissSuccess();
    }
  });

  // Form submit handler
  document.addEventListener("submit", (event) => {
    const consultationForm = event.target.closest("[data-tft-submit='consultation-submit']");
    if (consultationForm) {
      TFT_Consultation.handleSubmit(event);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Consultation_InitAll);
} else {
  TFT_Consultation_InitAll();
}


/* ==========================================================================
   CONSOLIDATED MODULE: contact.js
   ========================================================================== */
/**
 * Premium Furniture Shop Template - Contact page & FAQ Accordion Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Contact = {
  handleFormSubmit: function(e) {
    e.preventDefault();
    
    // Show success modal
    const modal = document.getElementById("tft-booking-success-modal");
    if (modal) {
      modal.setAttribute("aria-hidden", "false");
    }
  },

  dismissSuccess: function() {
    const modal = document.getElementById("tft-booking-success-modal");
    if (modal) {
      modal.setAttribute("aria-hidden", "true");
    }
    
    // Reset contact form
    const form = document.getElementById("tft-contact-form");
    if (form) {
      form.reset();
      TFT_Contact.selectInterest("consultation");
    }
  },

  selectInterest: function(val) {
    const input = document.getElementById("cnt-interest");
    if (input) {
      input.value = val;
    }

    // Toggle active classes
    document.querySelectorAll(".tft-cnt-interest-btn").forEach(btn => {
      const btnValue = btn.getAttribute("data-value");
      btn.classList.toggle("tft-cnt-interest-btn--active", btnValue === val);
    });
  },

  openVirtualConsultation: function() {
    const modal = document.getElementById("fur-consultation-modal");
    if (modal) {
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  },

  selectShowroom: function(key) {
    const details = {
      copenhagen: {
        title: "Copenhagen Flagship Studio",
        address: "Nørregade 14B, 1165 København K, Denmark",
        hours: "Mon-Sat: 10:00 AM - 6:00 PM | Sun: Closed",
        link: "https://maps.google.com/?q=Norregade+14B,+Copenhagen",
        img: "assets/img/fur_room_living.png"
      },
      paris: {
        title: "Paris Atelier & Studio",
        address: "Rue Saint-Honoré 213, 75001 Paris, France",
        hours: "Mon-Sat: 10:00 AM - 7:00 PM | Sun: Closed",
        link: "https://maps.google.com/?q=Rue+Saint-Honore+213,+Paris",
        img: "assets/img/fur_room_dining.png"
      },
      london: {
        title: "London Gallery & Workshop",
        address: "Westbourne Grove 82, W11 2UR London, UK",
        hours: "Mon-Sat: 10:00 AM - 6:00 PM | Sun: 12:00 PM - 5:00 PM",
        link: "https://maps.google.com/?q=Westbourne+Grove+82,+London",
        img: "assets/img/fur_room_office.png"
      }
    };

    const data = details[key];
    if (!data) return;

    // Toggle active tab classes
    document.querySelectorAll(".tft-cnt-showrooms__tab").forEach(tab => {
      tab.classList.toggle("tft-cnt-showrooms__tab--active", tab.getAttribute("data-value") === key);
    });

    // Update showroom elements
    const titleEl = document.getElementById("tft-showroom-title");
    const addressEl = document.getElementById("tft-showroom-address");
    const hoursEl = document.getElementById("tft-showroom-hours");
    const linkEl = document.getElementById("tft-showroom-link");
    const imgEl = document.getElementById("tft-showroom-img");

    if (titleEl) titleEl.textContent = data.title;
    if (addressEl) addressEl.textContent = data.address;
    if (hoursEl) hoursEl.textContent = data.hours;
    if (linkEl) linkEl.setAttribute("href", data.link);
    
    if (imgEl) {
      imgEl.style.opacity = "0";
      setTimeout(() => {
        imgEl.src = data.img;
        imgEl.onload = () => {
          imgEl.style.opacity = "1";
        };
      }, 150);
    }
  },

  toggleFaq: function(btn) {
    const item = btn.closest(".tft-cnt-faq-item");
    if (!item) return;
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    
    // Close other FAQ accordions in the same list
    const list = btn.closest(".tft-cnt-faq-list");
    if (list) {
      list.querySelectorAll(".tft-cnt-faq-btn").forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherPanel = otherBtn.nextElementSibling;
          if (otherPanel) {
            otherPanel.style.maxHeight = null;
          }
        }
      });
    }

    btn.setAttribute("aria-expanded", String(!isExpanded));
    const panel = btn.nextElementSibling;
    if (panel) {
      if (isExpanded) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  },

  handleNewsletterSubmit: function(e) {
    e.preventDefault();
    const input = e.target.querySelector(".tft-cnt-newsletter-input");
    const btn = e.target.querySelector(".tft-cnt-newsletter-submit");
    if (!input || !btn) return;

    const originalText = btn.textContent;
    btn.textContent = "Subscribed ✓";
    btn.style.background = "var(--fur-primary)";
    btn.style.color = "var(--fur-bg)";
    input.value = "";

    const optIn = document.getElementById("newsletter-opt-in");
    if (optIn) optIn.checked = false;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      btn.style.color = "";
    }, 3000);
  }
};

const TFT_Contact_InitAll = () => {
  // Event delegation for Contact page
  document.addEventListener("click", (event) => {
    // 1. Select interest
    const interestBtn = event.target.closest("[data-tft-click='contact-select-interest']");
    if (interestBtn) {
      const val = interestBtn.getAttribute("data-tft-interest");
      TFT_Contact.selectInterest(val);
    }

    // 2. Open virtual consultation
    if (event.target.closest("[data-tft-click='contact-open-consultation']")) {
      TFT_Contact.openVirtualConsultation();
    }

    // 3. Select showroom
    const showroomBtn = event.target.closest("[data-tft-click='contact-select-showroom']");
    if (showroomBtn) {
      const key = showroomBtn.getAttribute("data-tft-showroom");
      TFT_Contact.selectShowroom(key);
    }

    // 4. Toggle FAQ accordion
    const faqBtn = event.target.closest("[data-tft-click='contact-toggle-faq']");
    if (faqBtn) {
      TFT_Contact.toggleFaq(faqBtn);
    }

    // 5. Dismiss success modal
    if (event.target.closest("[data-tft-click='contact-dismiss']")) {
      TFT_Contact.dismissSuccess();
    }
  });

  // Form submit handlers
  document.addEventListener("submit", (event) => {
    // 1. Submit contact form
    const contactForm = event.target.closest("[data-tft-submit='contact-submit']");
    if (contactForm) {
      TFT_Contact.handleFormSubmit(event);
    }

    // 2. Submit newsletter
    const newsletterForm = event.target.closest("[data-tft-submit='contact-newsletter']");
    if (newsletterForm) {
      TFT_Contact.handleNewsletterSubmit(event);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Contact_InitAll);
} else {
  TFT_Contact_InitAll();
}


/* ==========================================================================
   CONSOLIDATED MODULE: index1_redesign.js
   ========================================================================== */
const TFT_Redesign = {
  // Slideshow data for the right hero card
  promoSlides: [
    {
      image: "assets/img/fur_hero_harmony_sofa.png",
      badge: "NEW COLLECTION",
      title: "The Harmony Collection",
      desc: "Where nature meets design. A perfect balance of comfort, elegance, and function.",
      link: "#collections"
    },
    {
      image: "assets/img/fur_hero_dark.png",
      badge: "NEW ARRIVAL",
      title: "The Modern Accent Chair",
      desc: "Comfort meets character in every single curve. Tailored for elevated home comfort.",
      link: "#shop"
    },
    {
      image: "assets/img/fur_banner_sideb.png",
      badge: "PREMIUM DESIGN",
      title: "The Art of Everyday Living",
      desc: "Elegant pieces. Natural materials. Designed to bring balance and peace to your home.",
      link: "#collections"
    }
  ],

  // Slideshow data for the new split-layout hero on index.html
  splitSlides: [
    {
      leftBg: "var(--fur-ref-green-900)",
      tagline: "Exclusive Paintings",
      title: 'Art Made Exclusively for <span class="tft-hero-split__title-script">Khazana Stores</span>',
      desc: "Original artworks inspired by the beauty of Kerala Mural Art. Bring vibrant colours and timeless artistry into your home.",
      btnText: "Shop New Arrivals",
      btnLink: "shop.html",
      rightBg: "assets/img/fur_room_living.png",
      badgeTitle: "SUSTAINABLE BY NATURE • CRAFTED TO LAST •",
      overlayCardTag: "NEW IN",
      overlayCardTitle: "Spring Collection 2026",
      overlayCardLink: "shop-rooms.html",
      overlayCardImg: "assets/img/flower-transparent.png"
    },
    {
      leftBg: "var(--fur-ref-green-800)",
      tagline: "Timeless Brass Collection",
      title: 'Tradition Crafted with <span class="tft-hero-split__title-script">Elegance.</span>',
      desc: "Discover beautifully crafted brass pieces inspired by Indian heritage. Add warmth, character, and timeless charm to your interiors.",
      btnText: "Explore Furniture",
      btnLink: "shop-materials.html",
      rightBg: "assets/img/fur_hero_harmony_sofa.png",
      badgeTitle: "100% ORGANIC COTTON • HAND-FINISHED DETAILS •",
      overlayCardTag: "EDITORIAL",
      overlayCardTitle: "The Autumn Edit",
      overlayCardLink: "shop-editorial.html",
      overlayCardImg: "assets/img/fur_prod_armchair_green_thumb.png"
    },
    {
      leftBg: "var(--fur-ref-forest-950)",
      tagline: "Ceramic Gifts",
      title: 'Crafted to <span class="tft-hero-split__title-script">Delight</span>',
      desc: "Discover charming ceramic pieces that combine artistic beauty with everyday elegance. Beautiful choices for gifting or adding personality to your home.",
      btnText: "Shop Best Sellers",
      btnLink: "shop.html?filter=best-sellers",
      rightBg: "assets/img/fur_hero_boucle_chair.png",
      badgeTitle: "SOLID WHITE OAK • FSC CERTIFIED •",
      overlayCardTag: "HIGHLIGHT",
      overlayCardTitle: "The Harmony Sofa",
      overlayCardLink: "product-single.html",
      overlayCardImg: "assets/img/fur_prod_vase.png"
    }
  ],

  state: {
    currentSlide: 0,
    autoplayTimer: null,
    splitSlideIndex: 0,
    splitAutoplayTimer: null
  },

  // Initialize all redesigned interactions
  init: function() {
    this.setupThemeToggle();
    this.setupMobileDrawer();
    this.setupCategoriesScroll();
    this.setupPromoSlider();
    this.setupSplitSlider();
    this.setupNewArrivalsSlider();
  },

  // 1. Sleek theme toggle syncing with body data-theme attribute
  setupThemeToggle: function() {
    const toggleBtn = document.querySelector(".tft-theme-toggle");
    if (!toggleBtn) return;

    const sunIcon = toggleBtn.querySelector(".tft-icon-sun");
    const moonIcon = toggleBtn.querySelector(".tft-icon-moon");

    // Check initial state
    const updateIcons = () => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      if (isDark) {
        if (sunIcon) sunIcon.style.display = "none";
        if (moonIcon) moonIcon.style.display = "block";
      } else {
        if (sunIcon) sunIcon.style.display = "block";
        if (moonIcon) moonIcon.style.display = "none";
      }
    };

    updateIcons();

    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.body.removeAttribute("data-theme");
      } else {
        document.body.setAttribute("data-theme", "dark");
      }
      updateIcons();
    });

    // Also observe body theme changes (e.g. from the other theme switcher if clicked)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          updateIcons();
        }
      });
    });
    observer.observe(document.body, { attributes: true });
  },

  // 2. Mobile Nav Drawer open / close handlers
  setupMobileDrawer: function() {
    const menuTrigger = document.getElementById("tft-sidebar-menu-trigger");
    const mobTrigger = document.getElementById("fur-menu-toggle-mobile");
    const mobTriggerActions = document.getElementById("fur-menu-toggle-mobile-actions");
    const drawer = document.getElementById("tft-mobile-drawer");
    const closeBtn = document.getElementById("tft-mobile-drawer-close");

    if (menuTrigger && drawer) {
      menuTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        drawer.classList.add("tft-mobile-drawer--open");
      });
    }

    if (mobTrigger && drawer) {
      mobTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        drawer.classList.add("tft-mobile-drawer--open");
      });
    }

    if (mobTriggerActions && drawer) {
      mobTriggerActions.addEventListener("click", (e) => {
        e.stopPropagation();
        drawer.classList.add("tft-mobile-drawer--open");
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener("click", () => {
        drawer.classList.remove("tft-mobile-drawer--open");
      });
    }

    // Close on clicking outside
    document.addEventListener("click", (e) => {
      if (drawer && drawer.classList.contains("tft-mobile-drawer--open")) {
        if (!drawer.contains(e.target) && !e.target.closest("#tft-sidebar-menu-trigger, #fur-menu-toggle-mobile, #fur-menu-toggle-mobile-actions, #fur-menu-toggle, #fur-scrolled-menu-toggle")) {
          drawer.classList.remove("tft-mobile-drawer--open");
        }
      }
    });
  },

  // 3. Horizontal smooth scrolling categories row
  setupCategoriesScroll: function() {
    const arrow = document.querySelector(".tft-categories-bar__arrow");
    const scroller = document.querySelector(".tft-categories-bar__scroller");
    if (!arrow || !scroller) return;

    arrow.addEventListener("click", () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (scroller.scrollLeft >= maxScroll - 10) {
        // Scroll back to start if at the end
        scroller.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroller.scrollBy({ left: 200, behavior: "smooth" });
      }
    });

    // Sync active category state visually (other features handled by main.js)
    const pills = document.querySelectorAll(".tft-categories-bar__pill");
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        pills.forEach(p => {
          p.classList.remove("tft-categories-bar__pill--active");
          p.classList.remove("fur-categories__btn--active");
        });
        pill.classList.add("tft-categories-bar__pill--active");
        pill.classList.add("fur-categories__btn--active");
      });
    });
  },

  // 4. Custom slider logic for the right-side hero card
  setupPromoSlider: function() {
    const rightCard = document.querySelector(".tft-hero-card--right");
    if (!rightCard) return;

    const badge = rightCard.querySelector(".tft-hero-card__badge");
    const title = rightCard.querySelector(".tft-hero-card__title--serif");
    const desc = rightCard.querySelector(".tft-hero-card__desc");
    const exploreBtn = rightCard.querySelector(".tft-hero-card__btn-explore");
    const dots = rightCard.querySelectorAll(".tft-hero-card__slider-dot");
    const prevBtn = rightCard.querySelector(".tft-hero-card__arrow-btn--prev");
    const nextBtn = rightCard.querySelector(".tft-hero-card__arrow-btn--next");

    const renderSlide = (index) => {
      const data = this.promoSlides[index];
      if (!data) return;

      // Add transitioning class
      rightCard.classList.add("tft-hero-card--transitioning");

      // Wait 300ms for fade out
      setTimeout(() => {
        // Update background
        rightCard.style.backgroundImage = `url('${data.image}')`;

        // Update contents
        if (badge) badge.textContent = data.badge;
        if (title) title.textContent = data.title;
        if (desc) desc.textContent = data.desc;
        if (exploreBtn) exploreBtn.setAttribute("href", data.link);

        // Update indicators
        dots.forEach((dot, dIdx) => {
          if (dIdx === index) {
            dot.classList.add("tft-hero-card__slider-dot--active");
          } else {
            dot.classList.remove("tft-hero-card__slider-dot--active");
          }
        });

        // Fade back in
        setTimeout(() => {
          rightCard.classList.remove("tft-hero-card--transitioning");
        }, 50);
      }, 300);
    };

    const nextSlide = () => {
      this.state.currentSlide = (this.state.currentSlide + 1) % this.promoSlides.length;
      renderSlide(this.state.currentSlide);
      resetAutoplay();
    };

    const prevSlide = () => {
      this.state.currentSlide = (this.state.currentSlide - 1 + this.promoSlides.length) % this.promoSlides.length;
      renderSlide(this.state.currentSlide);
      resetAutoplay();
    };

    const resetAutoplay = () => {
      clearInterval(this.state.autoplayTimer);
      this.state.autoplayTimer = setInterval(nextSlide, 5000);
    };

    // Events
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.state.currentSlide = index;
        renderSlide(index);
        resetAutoplay();
      });
    });

    // Start autoplay
    resetAutoplay();
  },

  // 5. Custom slider logic for the new split-layout hero on index.html
  setupSplitSlider: function() {
    const splitSection = document.getElementById("wp-block-hero-split");
    if (!splitSection) return;

    const leftPanel = splitSection.querySelector(".tft-hero-split__left");
    const rightPanel = splitSection.querySelector(".tft-hero-split__right");
    if (!leftPanel || !rightPanel) return;

    // Left elements
    const tagline = leftPanel.querySelector(".tft-hero-split__tagline");
    const title = leftPanel.querySelector(".tft-hero-split__title");
    const desc = leftPanel.querySelector(".tft-hero-split__description");
    const actionBtn = leftPanel.querySelector(".tft-hero-split__btn-primary");
    const actionBtnText = actionBtn ? actionBtn.querySelector("span") : null;
    const dots = leftPanel.querySelectorAll(".tft-hero-split__vertical-dot");

    // Right elements
    const overlayCardTag = rightPanel.querySelector(".tft-hero-split__card-tag");
    const overlayCardTitle = rightPanel.querySelector(".tft-hero-split__card-title");
    const overlayCardCta = rightPanel.querySelector(".tft-hero-split__card-cta");
    const overlayCardImg = rightPanel.querySelector(".tft-hero-split__card-branch");
    const prevBtn = rightPanel.querySelector(".tft-hero-split__arrow-btn--prev");
    const nextBtn = rightPanel.querySelector(".tft-hero-split__arrow-btn--next");

    const renderSlide = (index) => {
      const data = this.splitSlides[index];
      if (!data) return;

      // Add transitioning class to fade out text/overlay elements
      splitSection.classList.add("tft-hero-split--transitioning");

      // Smoothly transition background color via CSS transition
      leftPanel.style.backgroundColor = data.leftBg;

      // Background image transitions smoothly via JS crossfade helper
      const currentBg = rightPanel.style.backgroundImage;
      if (currentBg && !currentBg.includes(data.rightBg)) {
        // Create a temporary layer displaying the CURRENT (old) background
        const tempBg = document.createElement("div");
        tempBg.className = "tft-hero-split__temp-bg";
        tempBg.style.position = "absolute";
        tempBg.style.inset = "0";
        tempBg.style.backgroundImage = currentBg;
        tempBg.style.backgroundSize = "cover";
        tempBg.style.backgroundPosition = "center";
        tempBg.style.opacity = "1";
        tempBg.style.transition = "opacity 0.6s ease-in-out";
        tempBg.style.zIndex = "0";
        
        // Insert as first child of rightPanel
        rightPanel.insertBefore(tempBg, rightPanel.firstChild);
        
        // Update container's background to the new image (hidden behind tempBg)
        rightPanel.style.backgroundImage = `url('${data.rightBg}')`;
        
        // Force reflow and fade out the old background layer
        tempBg.offsetHeight;
        tempBg.style.opacity = "0";
        
        setTimeout(() => {
          tempBg.remove();
        }, 600);
      } else {
        rightPanel.style.backgroundImage = `url('${data.rightBg}')`;
      }

      // Wait 300ms for text contents to fade out before updating
      setTimeout(() => {
        // Update left contents
        if (tagline) tagline.textContent = data.tagline;
        if (title) title.innerHTML = data.title;
        if (desc) desc.textContent = data.desc;
        if (actionBtn) actionBtn.setAttribute("href", data.btnLink);
        if (actionBtnText) actionBtnText.textContent = data.btnText;

        // Update right contents
        if (overlayCardTag) overlayCardTag.textContent = data.overlayCardTag;
        if (overlayCardTitle) overlayCardTitle.textContent = data.overlayCardTitle;
        if (overlayCardCta) overlayCardCta.setAttribute("href", data.overlayCardLink);
        if (overlayCardImg && data.overlayCardImg) {
          overlayCardImg.setAttribute("src", data.overlayCardImg);
          overlayCardImg.setAttribute("alt", data.overlayCardTitle);
        }

        // Update vertical dots state
        dots.forEach((dot, dIdx) => {
          if (dIdx === index) {
            dot.classList.add("tft-hero-split__vertical-dot--active");
          } else {
            dot.classList.remove("tft-hero-split__vertical-dot--active");
          }
        });

        // Fade back in new contents
        setTimeout(() => {
          splitSection.classList.remove("tft-hero-split--transitioning");
        }, 50);
      }, 300);
    };

    const nextSlide = () => {
      this.state.splitSlideIndex = (this.state.splitSlideIndex + 1) % this.splitSlides.length;
      renderSlide(this.state.splitSlideIndex);
      resetAutoplay();
    };

    const prevSlide = () => {
      this.state.splitSlideIndex = (this.state.splitSlideIndex - 1 + this.splitSlides.length) % this.splitSlides.length;
      renderSlide(this.state.splitSlideIndex);
      resetAutoplay();
    };

    const resetAutoplay = () => {
      clearInterval(this.state.splitAutoplayTimer);
      this.state.splitAutoplayTimer = setInterval(nextSlide, 6500);
    };

    // Listeners
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.state.splitSlideIndex = index;
        renderSlide(index);
        resetAutoplay();
      });
    });

    // Start
    renderSlide(this.state.splitSlideIndex);
    resetAutoplay();
  },

  // 6. Responsive new arrivals horizontal carousel setup
  setupNewArrivalsSlider: function() {
    const section = document.getElementById("wp-block-new-arrivals");
    if (!section) return;

    const grid = section.querySelector(".tft-new-arrivals__grid");
    const dots = section.querySelectorAll(".tft-new-arrivals__dot");
    const nextBtn = section.querySelector(".tft-new-arrivals__slider-next");
    const cards = section.querySelectorAll(".tft-product-card");

    if (!grid || dots.length === 0 || cards.length === 0) return;

    let currentIndex = 0;

    // Helper to calculate visible slides
    const getVisibleSlides = () => {
      const width = window.innerWidth;
      if (width > 1200) return 3;
      if (width > 768) return 2;
      return 1;
    };

    const updateSlider = () => {
      const visibleSlides = getVisibleSlides();
      const maxIndex = cards.length - visibleSlides;

      // Bounds checks
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      if (currentIndex < 0) {
        currentIndex = 0;
      }

      // Calculate exact offset translation
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 24; // 24px gap in css
      const translateAmount = currentIndex * (cardWidth + gap);

      grid.style.transform = `translateX(-${translateAmount}px)`;

      // Update dot state
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add("tft-new-arrivals__dot--active");
        } else {
          dot.classList.remove("tft-new-arrivals__dot--active");
        }

        // Hide excess dots since we can't scroll past maxIndex
        if (idx > maxIndex) {
          dot.style.display = "none";
        } else {
          dot.style.display = "inline-block";
        }
      });
    };

    // Dot navigation
    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        const visibleSlides = getVisibleSlides();
        const maxIndex = cards.length - visibleSlides;
        if (idx <= maxIndex) {
          currentIndex = idx;
          updateSlider();
        }
      });
    });

    // Next navigation button
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const visibleSlides = getVisibleSlides();
        const maxIndex = cards.length - visibleSlides;

        if (currentIndex >= maxIndex) {
          currentIndex = 0; // Wrap around to start
        } else {
          currentIndex++;
        }
        updateSlider();
      });
    }

    // Touch swipe & Mouse drag grab support for mobile and desktop
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTranslate = 0;
    let dragMoveActive = false;

    const dragStart = (e) => {
      isDragging = true;
      dragMoveActive = false;
      grid.style.transition = "none";
      const viewport = grid.closest(".tft-new-arrivals__grid-viewport");
      if (viewport) viewport.style.cursor = "grabbing";
      
      startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      currentX = startX;

      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 24; // 24px gap in css
      startTranslate = -currentIndex * (cardWidth + gap);
    };

    const dragMove = (e) => {
      if (!isDragging) return;
      currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      const deltaX = currentX - startX;
      
      if (Math.abs(deltaX) > 5) {
        dragMoveActive = true;
        // Apply visual offset dynamically in real time
        const currentTranslate = startTranslate + deltaX;
        grid.style.transform = `translateX(${currentTranslate}px)`;
      }
    };

    const dragEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      
      const viewport = grid.closest(".tft-new-arrivals__grid-viewport");
      if (viewport) viewport.style.cursor = "grab";
      
      grid.style.transition = "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

      const deltaX = currentX - startX;
      const threshold = 60; // 60px drag threshold

      const visibleSlides = getVisibleSlides();
      const maxIndex = cards.length - visibleSlides;

      if (dragMoveActive && Math.abs(deltaX) > threshold) {
        if (deltaX < 0) {
          // drag left -> next slide
          if (currentIndex < maxIndex) {
            currentIndex++;
          }
        } else {
          // drag right -> prev slide
          if (currentIndex > 0) {
            currentIndex--;
          }
        }
      }

      updateSlider();
    };

    // Touch events
    grid.addEventListener("touchstart", dragStart, { passive: true });
    grid.addEventListener("touchmove", dragMove, { passive: true });
    grid.addEventListener("touchend", dragEnd, { passive: true });

    // Mouse events on the grid
    grid.addEventListener("mousedown", (e) => {
      // Prevent selecting text/elements, but don't block clicks on links
      const isLink = e.target.closest("a") || e.target.closest("button");
      if (!isLink) {
        e.preventDefault();
      }
      dragStart(e);
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        dragMove(e);
      }
    });

    window.addEventListener("mouseup", dragEnd);

    // Prevent default click behavior on links inside cards if we actually dragged
    grid.addEventListener("click", (e) => {
      if (dragMoveActive) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { capture: true });

    // Adjust on resize
    window.addEventListener("resize", () => {
      updateSlider();
    }, { passive: true });

    // Initial render
    updateSlider();
  }
};

// Start the theme interactions once loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    TFT_Redesign.init();
  });
} else {
  TFT_Redesign.init();
}


/* ==========================================================================
   CONSOLIDATED MODULE: index5.js
   ========================================================================== */
/**
 * TFT Furniture Finder 3D Spatial Canvas Engine (Index 5)
 * Pure HTML5, Vanilla CSS3 & Vanilla JavaScript (ES2026)
 * Hardware Accelerated CSS 3D Grid Render System
 */

const TFT_Finder = {
  // App Configurations & 20 Unique Chairs
  config: {
    products: (window.TFT_Products || []).filter(p => ["lounge", "dining", "office"].includes(p.category)).map(p => ({
      id: p.id,
      title: p.title,
      category: p.category === "lounge" ? "lounge-chairs" : (p.category === "dining" ? "dining-chairs" : "office-chairs"),
      categoryLabel: p.categoryLabel,
      price: `₹${p.price.toFixed(2)}`,
      image: p.image,
      description: p.desc || p.description,
      origin: p.origin,
      material: p.material,
      dimensions: p.dimensions || `${p.w}cm x ${p.d}cm x ${p.h}cm`,
      leadTime: p.leadTime,
      designer: p.designer,
      swatches: p.swatches
    })),
    gridSpacingX: 380,
    gridSpacingY: 480
  },

  // 3D Scene Nodes
  viewport: null,
  scene: null,
  cards: [],

  // Camera Physics Coordinates
  cameraTarget: { x: 0, y: 0, z: -550 },
  cameraCurrent: { x: 0, y: 0, z: -550 },
  isDragging: false,
  previousMousePosition: { x: 0, y: 0 },
  selectedProduct: null,
  activeFilter: "all",
  defaultCameraY: 120,

  init: function() {
    this.viewport = document.getElementById("tft-viewport");
    this.scene = document.getElementById("tft-scene");

    if (!this.viewport || !this.scene) return;

    // Detect mobile viewports to scale down 3D grid spacing and center position
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.config.gridSpacingX = 240;
      this.config.gridSpacingY = 480; // 1 item per row vertical layout spacing
    }

    const header = document.querySelector(".tft-header");
    const headerHeight = header ? header.offsetHeight : 140;
    
    // Calculate the camera Y offset so the top row of cards starts exactly below the header
    const cardGap = isMobile ? 25 : 35;
    const cardHeight = isMobile ? 380 : 400;
    const posY_top = isMobile ? -4800 : -240; // Align to top item of vertical list on mobile
    const scale = 1000 / (1000 - this.cameraTarget.z);
    const centerY = window.innerHeight / 2;
    const calculatedY = (headerHeight + cardGap - centerY) / scale + (cardHeight / 2) - posY_top;
    
    this.defaultCameraY = isMobile ? calculatedY : Math.max(220, calculatedY);
    
    this.cameraTarget.y = this.defaultCameraY;
    this.cameraCurrent.y = this.defaultCameraY;

    // 1. Build spatial grid cards
    this.buildProductGrid();

    // 2. Wire event listeners
    this.bindEvents();

    // 3. Launch physics layout loops
    this.animate();

    // 4. Fade loader
    const loader = document.getElementById("tft-loader");
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.setProperty("display", "none", "important");
        }, 500);
      }, 1000);
    }
  },

  buildProductGrid: function() {
    const isMobile = window.innerWidth <= 768;
    const cols = isMobile ? 1 : 11;
    const spacingX = this.config.gridSpacingX;
    const spacingY = isMobile ? 480 : this.config.gridSpacingY;

    // Add 3D section header placards dynamically positioned vertically on mobile, horizontally on desktop
    const sections = [
      { 
        x: isMobile ? 0 : -1140, 
        y: isMobile ? (-10 * spacingY - 260) : -500, 
        title: "01 // Lounge & Accent" 
      },
      { 
        x: 0, 
        y: isMobile ? (-3 * spacingY - 260) : -500, 
        title: "02 // Dining & Workspace" 
      },
      { 
        x: isMobile ? 0 : 1140, 
        y: isMobile ? (4 * spacingY - 260) : -500, 
        title: "03 // Modular & Outdoor" 
      }
    ];

    sections.forEach(sec => {
      const placard = document.createElement("div");
      placard.className = "tft-fnd-placard";
      placard.style.transform = `translate3d(${sec.x}px, ${sec.y}px, -120px)`;
      placard.style.setProperty('--pos-x', `${sec.x}px`);
      placard.style.setProperty('--pos-y', `${sec.y}px`);
      placard.innerHTML = `<span class="tft-fnd-placard__label">${sec.title}</span>`;
      this.scene.appendChild(placard);
    });

    this.config.products.forEach((prod, index) => {
      // Calculate matrix coordinates
      const col = index % cols;
      const row = Math.floor(index / cols);

      const posX = isMobile ? 0 : (col - (cols - 1) / 2) * spacingX;
      const posY = (row - (Math.ceil(this.config.products.length / cols) - 1) / 2) * spacingY;

      // Create card element structure
      const card = document.createElement("div");
      card.className = "tft-fnd-card";
      card.setAttribute("data-id", prod.id);
      card.setAttribute("data-category", prod.category);
      
      // Position card in 3D coordinate space with default tracking parameters
      card.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
      card.style.setProperty('--pos-x', `${posX}px`);
      card.style.setProperty('--pos-y', `${posY}px`);
      card.style.setProperty('--pos-z', '0px');
      card.style.setProperty('--rot-x', '0deg');
      card.style.setProperty('--rot-y', '0deg');
      card.style.setProperty('--scale', '1');
      card.userData = { 
        posX, 
        posY, 
        targetRotateX: 0,
        targetRotateY: 0,
        currentRotateX: 0,
        currentRotateY: 0,
        targetScale: 1,
        currentScale: 1,
        targetZ: 0,
        currentZ: 0,
        product: prod 
      };

      card.innerHTML = `
        <span class="tft-fnd-card__badge">${prod.categoryLabel}</span>
        <div class="tft-fnd-card__img-wrap">
          <img class="tft-fnd-card__img" src="${prod.image}" alt="${prod.title}" loading="lazy" width="220" height="220">
        </div>
        <div class="tft-fnd-card__info">
          <h3 class="tft-fnd-card__title">${prod.title}</h3>
          <div class="tft-fnd-card__price">${prod.price}</div>
          <div class="tft-fnd-card__action-link">View Specimen &rarr;</div>
        </div>
      `;

      this.scene.appendChild(card);
      this.cards.push(card);
    });
  },

  bindEvents: function() {
    this.dragged = false;

    // A. Drag support
    this.viewport.addEventListener("mousedown", (e) => {
      if (this.selectedProduct) return;
      this.isDragging = true;
      this.dragged = false;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("mousemove", (e) => {
      if (this.isDragging && !this.selectedProduct) {
        const deltaX = e.clientX - this.previousMousePosition.x;
        const deltaY = e.clientY - this.previousMousePosition.y;

        if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
          this.dragged = true;
        }

        const sensitivity = 0.85;
        this.cameraTarget.x += deltaX * sensitivity;
        this.cameraTarget.y += deltaY * sensitivity;

        const isMobile = window.innerWidth <= 768;
        const limitX = isMobile ? 80 : 1900;
        const limitY = isMobile ? 5300 : 350;
        this.cameraTarget.x = Math.max(-limitX, Math.min(limitX, this.cameraTarget.x));
        this.cameraTarget.y = Math.max(-limitY, Math.min(limitY, this.cameraTarget.y));

        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    // B. Touch support
    this.viewport.addEventListener("touchstart", (e) => {
      if (this.selectedProduct || e.touches.length === 0) return;
      this.isDragging = true;
      this.dragged = false;
      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    this.viewport.addEventListener("touchmove", (e) => {
      if (this.isDragging && !this.selectedProduct && e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
        const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

        if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
          this.dragged = true;
        }

        const sensitivity = 1.0;
        this.cameraTarget.x += deltaX * sensitivity;
        this.cameraTarget.y += deltaY * sensitivity;

        const isMobile = window.innerWidth <= 768;
        const limitX = isMobile ? 80 : 1900;
        const limitY = isMobile ? 5300 : 350;
        this.cameraTarget.x = Math.max(-limitX, Math.min(limitX, this.cameraTarget.x));
        this.cameraTarget.y = Math.max(-limitY, Math.min(limitY, this.cameraTarget.y));

        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    });

    this.viewport.addEventListener("touchend", () => {
      this.isDragging = false;
    });

    // C. Scroll zoom (bound to viewport instead of window)
    this.viewport.addEventListener("wheel", (e) => {
      if (this.selectedProduct) return;
      e.preventDefault();
      const zoomSpeed = 0.6;
      this.cameraTarget.z -= e.deltaY * zoomSpeed;
      this.cameraTarget.z = Math.max(-750, Math.min(50, this.cameraTarget.z));
    }, { passive: false });

    // D. Hover Tilt parallax calculations (Smoothly interpolated)
    this.cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const isDimmed = card.classList.contains("tft-fnd-card--dimmed");
        if (this.selectedProduct || isDimmed) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.userData.targetRotateY = (x / (rect.width / 2)) * 14;
        card.userData.targetRotateX = -(y / (rect.height / 2)) * 14;
        card.userData.targetScale = 1.05;
        card.userData.targetZ = 25;
      });

      card.addEventListener("mouseleave", () => {
        const isDimmed = card.classList.contains("tft-fnd-card--dimmed");
        if (this.selectedProduct || isDimmed) return;

        card.userData.targetRotateX = 0;
        card.userData.targetRotateY = 0;
        card.userData.targetScale = 1.0;
        card.userData.targetZ = 0;
      });

      card.addEventListener("click", () => {
        const isDimmed = card.classList.contains("tft-fnd-card--dimmed");
        if (this.selectedProduct || isDimmed) return;
        if (this.dragged) return;
        this.focusProduct(card);
      });
    });

    // E. Dynamic Island category filter
    const filterButtons = document.querySelectorAll(".tft-fnd-island__btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("tft-fnd-island__btn--active"));
        btn.classList.add("tft-fnd-island__btn--active");

        const filter = btn.getAttribute("data-filter");
        this.applyFilter(filter);
      });
    });

    // F. Close Drawer button click
    const closeBtn = document.getElementById("tft-drawer-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.unfocusProduct());
    }

    // G. Theme Switcher buttons
    const themeButtons = document.querySelectorAll("[data-set-theme]");
    themeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-set-theme");
        if (theme === "dark") {
          document.body.setAttribute("data-theme", "dark");
        } else {
          document.body.removeAttribute("data-theme");
        }
        themeButtons.forEach(b => b.classList.remove("fur-theme-switcher__btn--active"));
        btn.classList.add("fur-theme-switcher__btn--active");
      });
    });

    // H. Add to Cart toast alert
    const cartBtn = document.getElementById("tft-drawer-cart-btn");
    const toast = document.getElementById("tft-cart-toast");
    if (cartBtn && toast) {
      cartBtn.addEventListener("click", () => {
        toast.classList.add("tft-fnd-toast--visible");
        setTimeout(() => {
          toast.classList.remove("tft-fnd-toast--visible");
        }, 3000);
      });
    }

    // I. Keyboard escape key handler to close active drawer preview
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        this.unfocusProduct();
      }
    });
  },

  applyFilter: function(category) {
    this.activeFilter = category;

    this.cards.forEach(card => {
      const cardCat = card.getAttribute("data-category");
      if (category === "all" || cardCat === category) {
        card.classList.remove("tft-fnd-card--dimmed");
      } else {
        card.classList.add("tft-fnd-card--dimmed");
      }
    });
  },

  focusProduct: function(card) {
    const prod = card.userData.product;
    this.selectedProduct = prod;

    // Track pre-focus positions to restore user context on close
    this.preFocusCameraY = this.cameraTarget.y;
    this.preFocusCameraX = this.cameraTarget.x;

    // Zoom and position scene directly onto the clicked card coordinates
    this.cameraTarget.x = -card.userData.posX;
    this.cameraTarget.y = -card.userData.posY;
    this.cameraTarget.z = 250; // Dynamic close zoom

    card.style.transform = `translate3d(${card.userData.posX}px, ${card.userData.posY}px, 60px) rotateX(0deg) rotateY(0deg) scale(1.02)`;
    card.style.setProperty('--pos-x', `${card.userData.posX}px`);
    card.style.setProperty('--pos-y', `${card.userData.posY}px`);
    card.style.setProperty('--pos-z', '60px');
    card.style.setProperty('--rot-x', '0deg');
    card.style.setProperty('--rot-y', '0deg');
    card.style.setProperty('--scale', '1.02');

    // Populate drawer labels
    const drawer = document.getElementById("tft-finder-drawer");
    const island = document.getElementById("tft-finder-island");
    if (drawer) {
      const setElTxt = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
      setElTxt("tft-drawer-title", prod.title);
      setElTxt("tft-drawer-cat", prod.categoryLabel);
      setElTxt("tft-drawer-price", prod.price);
      setElTxt("tft-drawer-desc", prod.description);
      setElTxt("tft-drawer-spec-designer", prod.designer);
      setElTxt("tft-drawer-spec-dimensions", prod.dimensions);
      setElTxt("tft-drawer-spec-origin", prod.origin);
      setElTxt("tft-drawer-spec-material", prod.material);
      setElTxt("tft-drawer-spec-leadtime", prod.leadTime);

      // Populate dynamic clickable swatches
      const swatchesWrap = document.getElementById("tft-drawer-swatches");
      if (swatchesWrap) swatchesWrap.innerHTML = "";
      setElTxt("tft-drawer-spec-swatch", prod.swatches[0]);

      prod.swatches.forEach((swatchName, i) => {
        const btn = document.createElement("button");
        btn.className = `tft-fnd-drawer__swatch ${i === 0 ? 'tft-fnd-drawer__swatch--active' : ''}`;
        btn.title = swatchName;
        btn.ariaLabel = swatchName;

        let bg = "#e8e0d5";
        if (swatchName.includes("Oak") || swatchName.includes("Linen") || swatchName.includes("Travertine") || swatchName.includes("Sand")) bg = "#d7ccc8";
        if (swatchName.includes("Walnut") || swatchName.includes("Leather") || swatchName.includes("Sienna")) bg = "#5d4037";
        if (swatchName.includes("Blackened") || swatchName.includes("Noir") || swatchName.includes("Steel") || swatchName.includes("Charcoal") || swatchName.includes("Ebony")) bg = "#212121";
        if (swatchName.includes("Olive") || swatchName.includes("Forest")) bg = "#4b5320";
        if (swatchName.includes("Brass") || swatchName.includes("Gold")) bg = "#cfb53b";
        if (swatchName.includes("Chrome") || swatchName.includes("White") || swatchName.includes("Glass")) bg = "#f5f5f5";

        btn.style.backgroundColor = bg;
        btn.addEventListener("click", () => {
          document.querySelectorAll(".tft-fnd-drawer__swatch").forEach(b => b.classList.remove("tft-fnd-drawer__swatch--active"));
          btn.classList.add("tft-fnd-drawer__swatch--active");
          const swEl = document.getElementById("tft-drawer-spec-swatch");
          if (swEl) swEl.textContent = swatchName;
        });

        if (swatchesWrap) swatchesWrap.appendChild(btn);
      });

      drawer.classList.add("tft-fnd-drawer--open");
    }
    if (island) {
      island.style.opacity = "0";
      island.style.pointerEvents = "none";
    }
  },

  unfocusProduct: function() {
    if (!this.selectedProduct) return;

    this.selectedProduct = null;

    // Restore camera defaults to center the grid vertically and horizontally
    const isMobile = window.innerWidth <= 768;
    this.cameraTarget.x = isMobile ? (this.preFocusCameraX || 0) : 0;
    this.cameraTarget.y = isMobile ? (this.preFocusCameraY || this.defaultCameraY) : this.defaultCameraY;
    this.cameraTarget.z = -550;

    this.cards.forEach(card => {
      card.userData.targetRotateX = 0;
      card.userData.targetRotateY = 0;
      card.userData.targetScale = 1.0;
      card.userData.targetZ = 0;
    });

    const drawer = document.getElementById("tft-finder-drawer");
    const island = document.getElementById("tft-finder-island");
    if (drawer) {
      drawer.classList.remove("tft-fnd-drawer--open");
    }
    if (island) {
      island.style.opacity = "1";
      island.style.pointerEvents = "auto";
    }
  },

  animate: function() {
    requestAnimationFrame(() => this.animate());

    // 1. Interpolation / Damping camera updates
    this.cameraCurrent.x += (this.cameraTarget.x - this.cameraCurrent.x) * 0.085;
    this.cameraCurrent.y += (this.cameraTarget.y - this.cameraCurrent.y) * 0.085;
    this.cameraCurrent.z += (this.cameraTarget.z - this.cameraCurrent.z) * 0.085;

    this.scene.style.transform = `translate3d(${this.cameraCurrent.x}px, ${this.cameraCurrent.y}px, ${this.cameraCurrent.z}px)`;

    // 2. Interpolation / Damping individual card hover transforms (Smooths entering jumpiness)
    this.cards.forEach(card => {
      if (this.selectedProduct && this.selectedProduct.id === card.userData.product.id) {
        return; // Handled directly in focusProduct()
      }

      const isFilteredOut = this.activeFilter !== "all" && card.getAttribute("data-category") !== this.activeFilter;

      if (isFilteredOut) {
        card.userData.targetScale = 0.55;
        card.userData.targetZ = -450;
        card.userData.targetRotateX = 8;
        card.userData.targetRotateY = -8;
      } else if (card.userData.targetZ === -450) {
        // Restore targets if previously filtered out
        card.userData.targetScale = 1.0;
        card.userData.targetZ = 0;
        card.userData.targetRotateX = 0;
        card.userData.targetRotateY = 0;
      }

      card.userData.currentRotateX += (card.userData.targetRotateX - card.userData.currentRotateX) * 0.12;
      card.userData.currentRotateY += (card.userData.targetRotateY - card.userData.currentRotateY) * 0.12;
      card.userData.currentScale += (card.userData.targetScale - card.userData.currentScale) * 0.12;
      card.userData.currentZ += (card.userData.targetZ - card.userData.currentZ) * 0.12;

      card.style.transform = `translate3d(${card.userData.posX}px, ${card.userData.posY}px, ${card.userData.currentZ}px) rotateX(${card.userData.currentRotateX}deg) rotateY(${card.userData.currentRotateY}deg) scale(${card.userData.currentScale})`;
      card.style.setProperty('--pos-x', `${card.userData.posX}px`);
      card.style.setProperty('--pos-y', `${card.userData.posY}px`);
      card.style.setProperty('--pos-z', `${card.userData.currentZ}px`);
      card.style.setProperty('--rot-x', `${card.userData.currentRotateX}deg`);
      card.style.setProperty('--rot-y', `${card.userData.currentRotateY}deg`);
      card.style.setProperty('--scale', card.userData.currentScale);
    });
  }
};

// Initialize spatial catalog on DOM load
const TFT_Finder_InitAll = () => {
  TFT_Finder.init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Finder_InitAll);
} else {
  TFT_Finder_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: index6.js
   ========================================================================== */
/**
 * PREMIUM FURNITURE SHOP - ROOM COMPOSER ENGINE (HOME 6)
 * Encapsulated Namespace: TFT_Composer
 */
const TFT_Composer = {
  // 1. PRODUCT CATALOG WITH REAL-WORLD METRIC FOOTPRINTS (CM)
  products: [
    ...(window.TFT_Products || []).map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      category: p.category,
      image: p.image,
      footprint: p.footprint || { w: p.w, d: p.d },
      planColor: p.planColor || p.color || "hsl(36, 30%, 90%)",
      desc: p.desc || p.description
    })),
    { id: 99, title: "Custom Shape", price: 0.00, category: "decor", image: "assets/img/fur_chair_stone.png", footprint: { w: 100, d: 100 }, planColor: "hsl(0, 0%, 82%)", desc: "A customizable structural block to represent columns, stairs, pre-existing furniture, or wall offsets.", custom: true }
  ],

  // 2. ROOM PRESET DEFINITIONS
  presets: [
    { id: "living", name: "Living Room", width: 5.0, length: 4.0 },
    { id: "bedroom", name: "Master Bedroom", width: 4.5, length: 4.0 },
    { id: "office", name: "Home Office", width: 3.5, length: 3.0 },
    { id: "studio", name: "Compact Studio", width: 6.0, length: 4.5 }
  ],

  // Product heights mapping in cm for realistic 3D volume pedestals
  productHeights: (() => {
    const heights = { 99: 100 };
    (window.TFT_Products || []).forEach(p => {
      heights[p.id] = p.h;
    });
    return heights;
  })(),

  // 3. INTERNAL ENGINE STATE
  state: {
    roomWidth: 5.0,
    roomLength: 4.0,
    scale: 60,
    unit: "m",
    snapToGrid: true,
    gridSize: 0.25,
    placedItems: [],
    selectedId: null,
    isGrabPan: false,
    panX: 0,
    panY: 0,
    zoom: 1.0,
    viewMode: "plan",
    axoRotationX: 55,
    axoRotationZ: 45,
    armedProductId: null,
    showLeftPanel: true,
    showDebugPanel: false,
    openings: [
      { type: "door", wall: "bottom", position: 2.4, width: 0.9, swing: "right" }
    ],
    selectedOpeningIdx: 0,
    measureMode: false,
    wallColor: "default",    // "default"|"white"|"grey"|"dark"|"warm"
    wallThickness: 4         // cm: 4 | 8 | 12 | 16
  },

  // Mouse pan tracking variables
  panStart: { x: 0, y: 0 },
  panOffset: { x: 0, y: 0 },
  isPanning: false,
  isDraggingItem: false,
  draggedIndex: null,
  dragOffset: { x: 0, y: 0 },
  
  // Mouse rotation tracking variables
  rotateStart: { x: 0, y: 0 },
  rotateOffset: { x: 0, y: 0 },
  isRotatingRoom: false,

  // HTML Element cache
  canvas: null,
  ctx: null,
  canvasWrap: null,
  axoLayer: null,
  itemToolbar: null,

  // Image texture cache: keyed by image URL, value is HTMLImageElement (or null while loading)
  _imgCache: {},

  // Helper to resolve HSL/RGB colors from CSS Variables
  getCSSVar: function(name, fallback) {
    try {
      const val = getComputedStyle(document.body).getPropertyValue(name).trim();
      if (val.startsWith("var(")) {
        const nestedName = val.substring(4, val.length - 1).trim();
        return this.getCSSVar(nestedName, fallback);
      }
      return val || fallback;
    } catch (e) {
      return fallback;
    }
  },

  // 4. INITIALIZE APP
  init: function() {
    this.canvas = document.getElementById("tft-rc-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.canvasWrap = document.getElementById("tft-rc-canvas-wrap");
    this.axoLayer = document.getElementById("tft-rc-axo-layer");
    this.itemToolbar = document.getElementById("tft-rc-item-toolbar");

    // Load state from localStorage if it exists
    this.loadSavedState();
    this.applyAxoRotationStyles();

    // Setup viewport bounds
    this.hasUserPanned = false;
    this.resizeCanvas();
    this.centerRoom();

    // Render presets list
    this.renderPresets();

    // Render filters & catalog list
    this.renderCatalogFilters();
    this.renderCatalog("all");

    // Event bindings
    this.bindEvents();
    this.bindStructureTabs();
    this.bindOpeningControls();

    // Refresh UI totals
    this.updateCartList();
    this.updateStats();

    // Create 2D hover popup card
    this.createHoverCard();

    // Render initially loaded preset/custom plan
    this.render();

    // Fade out loader
    const loader = document.getElementById("tft-rc-loader");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("tft-rc-loader--hidden");
      }, 800);
    }

    // Auto-save loop (every 30 seconds)
    setInterval(() => {
      this.saveState();
      this.showAutoSaveToast();
    }, 30000);

    // Handle URL parameters to arm product on initial load
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const loadProdId = parseInt(urlParams.get("loadProduct"), 10);
      if (loadProdId) {
        this.armProduct(loadProdId);
      }
    } catch (e) {
      console.warn("Failed to auto-arm product from URL parameters", e);
    }
  },

  // Create 2D hover popup card container inside canvas wrapper
  createHoverCard: function() {
    let card = document.getElementById("tft-rc-hover-card");
    if (!card && this.canvasWrap) {
      card = document.createElement("div");
      card.id = "tft-rc-hover-card";
      card.className = "tft-rc-hover-card";
      this.canvasWrap.appendChild(card);
    }
  },

  // Setup presets buttons list
  renderPresets: function() {
    const container = document.getElementById("tft-rc-presets");
    if (!container) return;
    container.innerHTML = "";

    const presetIcons = {
      living: `<svg class="tft-rc-preset-btn__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 9v6h16V9M2 9v11h20V9M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 15v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg>`,
      bedroom: `<svg class="tft-rc-preset-btn__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 4v16M22 4v16M2 8h20M2 17h20M6 8v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8M13 8v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8"/></svg>`,
      office: `<svg class="tft-rc-preset-btn__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="3" width="20" height="12" rx="2"/><path d="M12 15v5M5 20h14"/></svg>`,
      studio: `<svg class="tft-rc-preset-btn__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 12h18"/></svg>`
    };

    this.presets.forEach(preset => {
      const btn = document.createElement("button");
      btn.className = "tft-rc-preset-btn";
      
      // Determine active class
      if (Math.abs(this.state.roomWidth - preset.width) < 0.01 && 
          Math.abs(this.state.roomLength - preset.length) < 0.01) {
        btn.classList.add("tft-rc-preset-btn--active");
      }

      btn.innerHTML = `
        ${presetIcons[preset.id] || '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>'}
        <span>${preset.name}</span>
      `;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tft-rc-preset-btn").forEach(b => b.classList.remove("tft-rc-preset-btn--active"));
        btn.classList.add("tft-rc-preset-btn--active");
        
        this.state.roomWidth = preset.width;
        this.state.roomLength = preset.length;
        
        // Sync custom input textboxes
        const rcW = document.getElementById("tft-rc-width");
        const rcL = document.getElementById("tft-rc-length");
        if (rcW) rcW.value = preset.width;
        if (rcL) rcL.value = preset.length;

        this.centerRoom();
        this.render();
        this.updateStats();
        this.saveState();
      });
      container.appendChild(btn);
    });
  },

  // Setup Catalog categories
  renderCatalogFilters: function() {
    const container = document.getElementById("tft-rc-cat-filters");
    if (!container) return;
    container.innerHTML = "";

    const cats = [
      { id: "all", label: "All" },
      { id: "lounge", label: "Lounge" },
      { id: "dining", label: "Dining" },
      { id: "tables", label: "Tables" },
      { id: "bedroom", label: "Bedroom" },
      { id: "storage", label: "Storage" },
      { id: "lighting", label: "Lighting" },
      { id: "rugs", label: "Rugs" },
      { id: "office", label: "Office" },
      { id: "decor", label: "Decor" }
    ];

    cats.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "tft-rc-cat-btn" + (cat.id === "all" ? " tft-rc-cat-btn--active" : "");
      btn.innerText = cat.label;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tft-rc-cat-btn").forEach(b => b.classList.remove("tft-rc-cat-btn--active"));
        btn.classList.add("tft-rc-cat-btn--active");
        this.renderCatalog(cat.id);
      });
      container.appendChild(btn);
    });
  },

  // Render catalog cards
  renderCatalog: function(category) {
    const container = document.getElementById("tft-rc-catalog-list");
    if (!container) return;
    container.innerHTML = "";

    const filtered = category === "all" 
      ? this.products 
      : this.products.filter(p => p.category === category);

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "tft-rc-prod-card";
      card.setAttribute("draggable", "true");
      
      const isPlaced = this.state.placedItems.some(item => item.id === p.id);
      const checkBadge = isPlaced ? `<span class="tft-rc-prod-card__check" title="Already placed">&#10003;</span>` : "";

      card.innerHTML = `
        <button class="tft-rc-prod-card__wishlist" type="button" aria-label="Add to wishlist">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <div class="tft-rc-prod-card__img-wrap">
          <img class="tft-rc-prod-card__img" src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="tft-rc-prod-card__info">
          <h3 class="tft-rc-prod-card__title">${p.title}</h3>
          <span class="tft-rc-prod-card__spec">${p.footprint.w} &times; ${p.footprint.d} cm</span>
          <span class="tft-rc-prod-card__price">₹${p.price.toFixed(2)}</span>
        </div>
        <button class="tft-rc-prod-card__btn" data-place-id="${p.id}">+ ADD</button>
      `;

      card.querySelector(".tft-rc-prod-card__btn").addEventListener("click", (e) => {
        e.stopPropagation();
        this.armProduct(p.id);
      });

      // Drag and drop event bindings
      card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", p.id);
        e.dataTransfer.effectAllowed = "move";
        this.state.armedProductId = p.id;
        
        // If in Axo View, switch to Plan View for accurate positioning
        if (this.state.viewMode !== "plan") {
          this.toggleViewMode();
        }
      });

      card.addEventListener("dragend", () => {
        if (this.state.armedProductId === p.id) {
          this.cancelArmedState();
        }
      });

      container.appendChild(card);
    });
  },

  // 5. RENDERING CORE CANVAS
  resizeCanvas: function() {
    if (!this.canvasWrap) return;
    this.canvas.width = this.canvasWrap.clientWidth;
    this.canvas.height = this.canvasWrap.clientHeight;
    if (this.axoLayer) {
      this.axoLayer.style.width = `${this.canvasWrap.clientWidth}px`;
      this.axoLayer.style.height = `${this.canvasWrap.clientHeight}px`;
    }
  },

  centerRoom: function() {
    if (!this.canvas) return;
    // Calculate layout coordinates
    const scale = this.state.scale * this.state.zoom;
    const roomPxW = this.state.roomWidth * scale;
    const roomPxH = this.state.roomLength * scale;

    this.state.panX = (this.canvas.width - roomPxW) / 2;
    this.state.panY = (this.canvas.height - roomPxH) / 2;
    this.hasUserPanned = false;
  },

  render: function() {
    if (!this.ctx) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    // Clear canvas
    this.ctx.clearRect(0, 0, w, h);

    // Apply viewport zoom & pan transformations
    const scale = this.state.scale * this.state.zoom;
    const pxW = this.state.roomWidth * scale;
    const pxH = this.state.roomLength * scale;

    // Draw background blueprint pattern on entire canvas viewport
    this.drawBlueprintBackground(w, h, scale);

    // If in Axo Mode, skip drawing placed items on 2D canvas, as they are drawn as vertical DOM sprites
    if (this.state.viewMode === "axo") {
      this.drawRoomOutline(this.state.panX, this.state.panY, pxW, pxH, scale);
      this.renderAxoSites(scale);
      this.updateToolbarPosition();
      this.updateDebugPanel();
      return;
    }

    // Hide axo sprites and debug panel
    if (this.axoLayer) {
      this.axoLayer.style.visibility = "hidden";
      this.axoLayer.style.opacity = "0";
    }
    const dp = document.getElementById("tft-rc-debug-panel");
    if (dp) dp.style.display = "none";

    // 1. Draw room floor boundary outline
    this.drawRoomOutline(this.state.panX, this.state.panY, pxW, pxH, scale);

    // 2. Draw placed items on canvas
    this.state.placedItems.forEach((item, index) => {
      this.drawPlacedItem(item, index, scale);
    });

    // 3. Collision warning flags
    this.checkCollisions();

    // 4. Update floating toolbar position
    this.updateToolbarPosition();

    // 5. Measure mode overlay
    if (this.state.measureMode && this._measureResult) {
      const r = this._measureResult;
      const ctx = this.ctx;
      ctx.save();
      // Dashed red line between the two points
      ctx.strokeStyle = "hsl(0,78%,52%)";
      ctx.lineWidth = 1.8;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(r.p1.x, r.p1.y);
      ctx.lineTo(r.p2.x, r.p2.y);
      ctx.stroke();
      ctx.setLineDash([]);
      // End-point dots
      [r.p1, r.p2].forEach(pt => {
        ctx.fillStyle = "hsl(0,78%,52%)";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
      // Midpoint label pill
      const mx = (r.p1.x + r.p2.x) / 2;
      const my = (r.p1.y + r.p2.y) / 2;
      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const tw = ctx.measureText(r.label).width + 12;
      ctx.fillStyle = "hsl(0,78%,52%)";
      ctx.beginPath();
      ctx.roundRect(mx - tw / 2, my - 9, tw, 18, 4);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText(r.label, mx, my);
      ctx.restore();
    }
  },

  drawBlueprintBackground: function(w, h, scale) {
    this.ctx.strokeStyle = "rgba(0,0,0,0.035)";
    if (document.body.getAttribute("data-theme") === "dark") {
      this.ctx.strokeStyle = "rgba(255,255,255,0.02)";
    }
    this.ctx.lineWidth = 0.5;

    // Grid size equals 0.25 meters per square
    const gridPx = scale * 0.25;
    
    // Calculate horizontal grids
    const startX = this.state.panX % gridPx;
    for (let x = startX; x < w; x += gridPx) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }

    // Calculate vertical grids
    const startY = this.state.panY % gridPx;
    for (let y = startY; y < h; y += gridPx) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }
  },

  drawRoomOutline: function(x, y, w, h, scale) {
    const isDark = (document.body.getAttribute("data-theme") === "dark");
    
    // Fill room floor space with resolved color
    this.ctx.fillStyle = this.getCSSVar("--fur-bg-secondary", isDark ? "hsl(126, 34%, 8%)" : "hsl(36, 30%, 98%)");
    this.ctx.fillRect(x, y, w, h);

    // Draw main solid perimeter walls
    const wallColorMap = {
      default: null,  // use CSS var
      white:   "hsl(0,0%,92%)",
      grey:    "hsl(0,0%,55%)",
      dark:    "hsl(0,0%,18%)",
      warm:    "hsl(30,18%,38%)"
    };
    const wallStrokeColor = wallColorMap[this.state.wallColor] ||
      this.getCSSVar("--fur-text", isDark ? "hsl(0,0%,94%)" : "hsl(0,0%,11%)");
    const wallPxThick = Math.max(2, (this.state.wallThickness / 100) * scale);
    this.ctx.strokeStyle = wallStrokeColor;
    this.ctx.lineWidth = wallPxThick;
    this.ctx.strokeRect(x, y, w, h);

    // Double line architectural wall detail
    this.ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.06)";
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(x - 6, y - 6, w + 12, h + 12);

    // Draw dynamic openings from state
    this.drawOpenings(x, y, w, h, scale, isDark);

    // Draw dimension texts next to boundary walls
    this.ctx.fillStyle = this.getCSSVar("--fur-text-muted", isDark ? "hsl(0, 0%, 63%)" : "hsl(0, 0%, 48%)");
    this.ctx.font = "bold 9px 'Plus Jakarta Sans', sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "bottom";

    const labelW = this.formatUnit(this.state.roomWidth);
    const labelL = this.formatUnit(this.state.roomLength);

    // Horizontal dimension labels
    this.ctx.fillText(labelW, x + w / 2, y - 10);
    this.ctx.textBaseline = "top";
    this.ctx.fillText(labelW, x + w / 2, y + h + 24);

    // Dynamic door dimension tick — use first bottom-wall door from state
    const _bottomDoor = this.state.openings.find(o => o.wall === "bottom" && o.type === "door");
    if (_bottomDoor) {
      const _dX = x + _bottomDoor.position * scale;
      const _posLabel = this.formatUnit(_bottomDoor.position);
      this.ctx.font = "600 9px 'Plus Jakarta Sans', sans-serif";
      this.ctx.fillText(_posLabel, x + _bottomDoor.position * scale / 2, y + h + 24);
      this.ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)";
      this.ctx.lineWidth = 0.8;
      this.ctx.beginPath();
      this.ctx.moveTo(x, y + h + 16);
      this.ctx.lineTo(_dX, y + h + 16);
      this.ctx.moveTo(x, y + h + 12);
      this.ctx.lineTo(x, y + h + 20);
      this.ctx.moveTo(_dX, y + h + 12);
      this.ctx.lineTo(_dX, y + h + 20);
      this.ctx.stroke();
    }

    // Vertical dimension labels
    this.ctx.save();
    this.ctx.translate(x - 10, y + h / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.textBaseline = "bottom";
    this.ctx.fillText(labelL, 0, 0);
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(x + w + 8, y + h / 2);
    this.ctx.rotate(Math.PI / 2);
    this.ctx.textBaseline = "bottom";
    this.ctx.fillText(labelL, 0, 0);
    this.ctx.restore();
  },

  drawPlacedItem: function(item, index, scale) {
    const p = this.products.find(prod => prod.id === item.id);
    if (!p) return;

    // Convert cm to real world scale px sizing
    const widthCm = item.width || p.footprint.w;
    const depthCm = item.depth || p.footprint.d;
    const pxW = (widthCm / 100) * scale;
    const pxH = (depthCm / 100) * scale;

    const cX = this.state.panX + item.x * scale;
    const cY = this.state.panY + item.y * scale;

    this.ctx.save();
    this.ctx.translate(cX, cY);
    this.ctx.rotate((item.rotation * Math.PI) / 180);

    const isSelected = (index === this.state.selectedId);
    const isDark = (document.body.getAttribute("data-theme") === "dark");

    // --- LAYER 1: Collision / fallback background fill ---
    if (item.hasCollision) {
      this.ctx.fillStyle = "rgba(230, 80, 80, 0.15)";
      this.ctx.fillRect(-pxW / 2, -pxH / 2, pxW, pxH);
    }

    // --- LAYER 2: Product image texture (top-down floor plan view) ---
    const imgSrc = p.image;
    if (imgSrc) {
      // Retrieve or create a cached Image object
      if (!this._imgCache[imgSrc]) {
        const img = new Image();
        img.src = imgSrc;
        // Re-render once fully loaded so the first frame isn't blank
        img.onload = () => { this.render(); };
        this._imgCache[imgSrc] = img;
      }
      const cachedImg = this._imgCache[imgSrc];
      // Only drawImage when the browser has fully decoded it
      if (cachedImg.complete && cachedImg.naturalWidth > 0) {
        this.ctx.save();
        // Clip drawing to the item's bounding rectangle so image never bleeds
        this.ctx.beginPath();
        this.ctx.rect(-pxW / 2, -pxH / 2, pxW, pxH);
        this.ctx.clip();
        // Draw image slightly brightened; darken when collision flag is active
        if (item.hasCollision) {
          this.ctx.globalAlpha = 0.45;
        } else {
          this.ctx.globalAlpha = isDark ? 0.82 : 1.0;
        }
        this.ctx.drawImage(cachedImg, -pxW / 2, -pxH / 2, pxW, pxH);
        this.ctx.globalAlpha = 1.0;
        this.ctx.restore();
      } else {
        // Image still loading — show a soft planColor placeholder
        this.ctx.fillStyle = item.hasCollision
          ? "rgba(230, 80, 80, 0.15)"
          : (isDark ? "rgba(255, 255, 255, 0.05)" : p.planColor);
        this.ctx.fillRect(-pxW / 2, -pxH / 2, pxW, pxH);
      }
    } else {
      // No image in product definition — fall back to planColor block
      this.ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.05)" : p.planColor;
      this.ctx.fillRect(-pxW / 2, -pxH / 2, pxW, pxH);
    }

    // --- LAYER 3: Blueprint stroke outline ---
    const strokeCol = isSelected
      ? this.getCSSVar("--fur-primary", "hsl(88, 38%, 21%)")
      : (item.hasCollision ? "hsl(0, 70%, 45%)" : (isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.35)"));

    this.ctx.strokeStyle = strokeCol;
    this.ctx.lineWidth = isSelected ? 2.2 : 1.2;
    if (item.hasCollision) { this.ctx.setLineDash([3, 2]); }
    this.ctx.strokeRect(-pxW / 2, -pxH / 2, pxW, pxH);
    this.ctx.setLineDash([]);

    // --- LAYER 4: Subtle inner architectural detail lines (semi-transparent) ---
    this.ctx.strokeStyle = isSelected
      ? this.getCSSVar("--fur-primary", "hsl(88, 38%, 21%)")
      : (isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.14)");
    this.ctx.lineWidth = 0.7;

    if (p.category === "lounge" || p.title.toLowerCase().includes("sofa") || p.title.toLowerCase().includes("chair") || p.title.toLowerCase().includes("stool")) {
      const backDepth = Math.min(pxH * 0.18, 12);
      this.ctx.strokeRect(-pxW / 2, -pxH / 2, pxW, backDepth);
      const armWidth = Math.min(pxW * 0.14, 9);
      this.ctx.strokeRect(-pxW / 2, -pxH / 2 + backDepth, armWidth, pxH - backDepth);
      this.ctx.strokeRect(pxW / 2 - armWidth, -pxH / 2 + backDepth, armWidth, pxH - backDepth);
      this.ctx.strokeRect(-pxW / 2 + armWidth, -pxH / 2 + backDepth, pxW - 2 * armWidth, pxH - backDepth);
      if (widthCm > 130) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, -pxH / 2 + backDepth);
        this.ctx.lineTo(0, pxH / 2);
        this.ctx.stroke();
      }
    } else if (p.category === "tables") {
      if (p.title.toLowerCase().includes("round")) {
        const radius = Math.min(pxW, pxH) / 2;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius - 4, 0, 2 * Math.PI);
        this.ctx.stroke();
      } else {
        this.ctx.strokeRect(-pxW / 2 + 3, -pxH / 2 + 3, pxW - 6, pxH - 6);
        this.ctx.beginPath();
        this.ctx.moveTo(-pxW / 2 + 6, 0);
        this.ctx.lineTo(pxW / 2 - 6, 0);
        this.ctx.stroke();
      }
    } else {
      this.ctx.beginPath();
      this.ctx.moveTo(-pxW / 2 + 5, -pxH / 2 + 5);
      this.ctx.lineTo(pxW / 2 - 5, pxH / 2 - 5);
      this.ctx.moveTo(pxW / 2 - 5, -pxH / 2 + 5);
      this.ctx.lineTo(-pxW / 2 + 5, pxH / 2 - 5);
      this.ctx.stroke();
    }

    // --- LAYER 5: Front-face direction indicator dot ---
    this.ctx.fillStyle = isSelected
      ? this.getCSSVar("--fur-primary", "hsl(88, 38%, 21%)")
      : (isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.38)");
    this.ctx.beginPath();
    this.ctx.arc(0, -pxH / 2 + 5, 2.2, 0, 2 * Math.PI);
    this.ctx.fill();

    // --- LAYER 6: Name label pill (semi-opaque backdrop for readability) ---
    const title = item.title || p.title;
    const words = title.split(" ");
    const line1 = words.slice(0, 2).join(" ");
    const line2 = words.slice(2).join(" ");

    this.ctx.font = "700 7px 'Plus Jakarta Sans', sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    // Measure label to draw a subtle backdrop pill
    const labelText = line2 ? line1 + " " + line2 : line1;
    const labelW2 = Math.min(this.ctx.measureText(labelText).width + 8, pxW - 4);
    const labelH2 = line2 ? 18 : 11;
    const labelY2 = line2 ? pxH * 0.09 : pxH * 0.14;

    this.ctx.fillStyle = isDark ? "rgba(0,0,0,0.52)" : "rgba(255,255,255,0.62)";
    this.ctx.beginPath();
    this.ctx.roundRect(-labelW2 / 2, labelY2 - labelH2 / 2, labelW2, labelH2, 3);
    this.ctx.fill();

    this.ctx.fillStyle = isSelected
      ? this.getCSSVar("--fur-text", isDark ? "hsl(0,0%,100%)" : "hsl(0,0%,11%)")
      : (isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.78)");

    if (line2) {
      this.ctx.fillText(line1, 0, pxH * 0.09);
      this.ctx.fillText(line2, 0, pxH * 0.20);
    } else {
      this.ctx.fillText(line1, 0, pxH * 0.14);
    }

    this.ctx.restore();
  },

  // Axis-aligned bounding box (AABB) intersection check for collision warning system
  checkCollisions: function() {
    // Reset collision states
    this.state.placedItems.forEach(item => item.hasCollision = false);

    const scale = this.state.scale * this.state.zoom;

    for (let i = 0; i < this.state.placedItems.length; i++) {
      for (let j = i + 1; j < this.state.placedItems.length; j++) {
        const itemA = this.state.placedItems[i];
        const itemB = this.state.placedItems[j];

        const prodA = this.products.find(p => p.id === itemA.id);
        const prodB = this.products.find(p => p.id === itemB.id);

        if (!prodA || !prodB) continue;

        // Fetch rectangular dimensions depending on active rotation angle
        const isRotA = (itemA.rotation % 180 !== 0);
        const wA = isRotA ? (itemA.depth || prodA.footprint.d) / 100 : (itemA.width || prodA.footprint.w) / 100;
        const hA = isRotA ? (itemA.width || prodA.footprint.w) / 100 : (itemA.depth || prodA.footprint.d) / 100;

        const isRotB = (itemB.rotation % 180 !== 0);
        const wB = isRotB ? (itemB.depth || prodB.footprint.d) / 100 : (itemB.width || prodB.footprint.w) / 100;
        const hB = isRotB ? (itemB.width || prodB.footprint.w) / 100 : (itemB.depth || prodB.footprint.d) / 100;

        // Check horizontal & vertical overlaps
        const collisionX = Math.abs(itemA.x - itemB.x) * 2 < (wA + wB);
        const collisionY = Math.abs(itemA.y - itemB.y) * 2 < (hA + hB);

        if (collisionX && collisionY) {
          itemA.hasCollision = true;
          itemB.hasCollision = true;
        }
      }
    }
  },

  // 6. AXONOMETRIC 2.5D RENDER LAYERING
  renderAxoSites: function(scale) {
    if (!this.axoLayer) return;
    this.axoLayer.style.visibility = "visible";
    this.axoLayer.style.opacity = "1";
    this.axoLayer.innerHTML = "";

    this.state.placedItems.forEach((item, index) => {
      const p = this.products.find(prod => prod.id === item.id);
      if (!p) return;

      const widthCm = item.width || p.footprint.w;
      const depthCm = item.depth || p.footprint.d;
      const heightCm = item.height || this.productHeights[p.id] || 50;
      const pxW = (widthCm / 100) * scale;
      const pxH = (depthCm / 100) * scale;
      const pxLength = (heightCm / 100) * scale; // Z-axis height in pixels

      const cX = this.state.panX + item.x * scale;
      const cY = this.state.panY + item.y * scale;

      const div = document.createElement("div");
      
      const isSelected = (index === this.state.selectedId);
      const cubeSelClass = isSelected ? " tft-rc-cube--selected" : "";

      div.className = `tft-rc-cube${cubeSelClass}`;
      div.setAttribute("data-index", index);
      div.style.left = `${cX}px`;
      div.style.top = `${cY}px`;
      div.style.width = `${pxW}px`;
      div.style.height = `${pxH}px`;
      div.style.transform = `translate(-50%, -50%) rotateZ(${item.rotation}deg)`;

      // Generate solid 3D cubes styled by categories and dimensions
      const isDarkColor = p.planColor.includes("141") || p.planColor.includes("147") || p.planColor.includes("210") || p.planColor.includes("25");
      const textColor = isDarkColor ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.65)";

      div.innerHTML = `
        <div class="tft-cube-face tft-cube-face--top" style="width: ${pxW}px; height: ${pxH}px; transform: translateZ(${pxLength}px); background-color: ${p.planColor} !important; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 4px; box-sizing: border-box;">
          <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8px; font-weight: 700; color: ${textColor}; text-align: center; line-height: 1.1; pointer-events: none; text-transform: uppercase;">
            ${(item.title || p.title).split(" ").slice(0, 2).join("<br>")}
          </span>
        </div>
        <div class="tft-cube-face tft-cube-face--front" style="width: ${pxW}px; height: ${pxLength}px; top: ${pxH}px; transform: rotateX(90deg); background-color: ${p.planColor} !important; filter: brightness(0.82) !important;"></div>
        <div class="tft-cube-face tft-cube-face--back" style="width: ${pxW}px; height: ${pxLength}px; top: 0px; transform: rotateX(90deg); background-color: ${p.planColor} !important; filter: brightness(0.72) !important;"></div>
        <div class="tft-cube-face tft-cube-face--left" style="width: ${pxLength}px; height: ${pxH}px; left: 0px; transform: rotateY(-90deg); background-color: ${p.planColor} !important; filter: brightness(0.78) !important;"></div>
        <div class="tft-cube-face tft-cube-face--right" style="width: ${pxLength}px; height: ${pxH}px; left: ${pxW}px; transform: rotateY(-90deg); background-color: ${p.planColor} !important; filter: brightness(0.88) !important;"></div>
      `;

      // 2D hover card details popup triggers
      div.addEventListener("mouseenter", () => {
        const card = document.getElementById("tft-rc-hover-card");
        if (!card) return;

        const title = item.title || p.title;

        card.innerHTML = `
          <div class="tft-rc-hcard__img-wrap">
            <img src="${p.image}" alt="${title}">
          </div>
          <div class="tft-rc-hcard__info">
            <h4 class="tft-rc-hcard__title">${title}</h4>
            <div class="tft-rc-hcard__specs">${widthCm} &times; ${depthCm} &times; ${heightCm} cm</div>
            <div class="tft-rc-hcard__price">${p.price > 0 ? `₹${p.price.toFixed(2)}` : 'Custom'}</div>
          </div>
        `;
        card.classList.add("tft-rc-hover-card--visible");

        // Align coordinates centered above the top face of the hovered 3D cube
        const rect = div.getBoundingClientRect();
        const wrapRect = this.canvasWrap.getBoundingClientRect();
        
        const cardX = rect.left - wrapRect.left + rect.width / 2;
        const cardY = rect.top - wrapRect.top - 12;

        card.style.left = `${cardX}px`;
        card.style.top = `${cardY}px`;
      });

      div.addEventListener("mouseleave", () => {
        const card = document.getElementById("tft-rc-hover-card");
        if (card) {
          card.classList.remove("tft-rc-hover-card--visible");
        }
      });

      // Click event registers anywhere on the 3D element bounds
      div.addEventListener("click", (e) => {
        e.stopPropagation();
        this.selectItem(index);
      });

      this.axoLayer.appendChild(div);
    });
  },

  updateDebugPanel: function() {
    // Debug panel disabled per user preference
  },

  // 7. INTERACTIVE INPUT CONTROLLER & EVENTS
  bindEvents: function() {
    // A. Canvas Click & Mouse coordinates
    this.canvasWrap.addEventListener("mousedown", (e) => this.onMouseDown(e));
    window.addEventListener("mousemove", (e) => this.onMouseMove(e));
    window.addEventListener("mouseup", () => this.onMouseUp());
    this.canvasWrap.addEventListener("wheel", (e) => this.onWheel(e), { passive: false });

    // Drag and Drop canvas handlers
    this.canvasWrap.addEventListener("dragenter", (e) => {
      e.preventDefault();
      this.canvasWrap.classList.add("tft-rc-canvas-wrap--dragover");
    });
    
    this.canvasWrap.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      this.canvasWrap.classList.add("tft-rc-canvas-wrap--dragover");
    });

    this.canvasWrap.addEventListener("dragleave", () => {
      this.canvasWrap.classList.remove("tft-rc-canvas-wrap--dragover");
    });

    this.canvasWrap.addEventListener("drop", (e) => {
      e.preventDefault();
      this.canvasWrap.classList.remove("tft-rc-canvas-wrap--dragover");
      
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const productId = parseInt(e.dataTransfer.getData("text/plain"), 10);
      if (!isNaN(productId)) {
        this.state.armedProductId = productId;
        this.placeArmedProduct(mouseX, mouseY);
      }
    });

    // B. Custom wall inputs drawing
    const drawBtn = document.getElementById("tft-rc-draw-btn");
    if (drawBtn) {
      drawBtn.addEventListener("click", () => {
        const wEl = document.getElementById("tft-rc-width");
        const lEl = document.getElementById("tft-rc-length");
        if (!wEl || !lEl) return;
        const wVal = parseFloat(wEl.value);
        const lVal = parseFloat(lEl.value);
        if (wVal >= 2 && wVal <= 30 && lVal >= 2 && lVal <= 30) {
          this.state.roomWidth = wVal;
          this.state.roomLength = lVal;
          
          document.querySelectorAll(".tft-rc-preset-btn").forEach(b => b.classList.remove("tft-rc-preset-btn--active"));
          this.centerRoom();
          this.render();
          this.updateStats();
          this.saveState();
        }
      });
    }

    // B2. Live dimension sync — +/− step buttons dispatch 'change'; wire it here
    // so the canvas redraws instantly without requiring "Draw Room" click.
    const applyDimChange = () => {
      const wEl = document.getElementById("tft-rc-width");
      const lEl = document.getElementById("tft-rc-length");
      if (!wEl || !lEl) return;
      const wVal = parseFloat(wEl.value);
      const lVal = parseFloat(lEl.value);
      if (wVal >= 2 && wVal <= 30 && lVal >= 2 && lVal <= 30) {
        this.state.roomWidth = wVal;
        this.state.roomLength = lVal;
        document.querySelectorAll(".tft-rc-preset-btn").forEach(b => b.classList.remove("tft-rc-preset-btn--active"));
        this.centerRoom();
        this.render();
        this.updateStats();
        this.saveState();
      }
    };
    const widthInputEl = document.getElementById("tft-rc-width");
    const lengthInputEl = document.getElementById("tft-rc-length");
    if (widthInputEl) widthInputEl.addEventListener("change", applyDimChange);
    if (lengthInputEl) lengthInputEl.addEventListener("change", applyDimChange);

    // C. Units toggle
    const unitM = document.getElementById("tft-rc-unit-m");
    const unitFt = document.getElementById("tft-rc-unit-ft");
    if (unitM && unitFt) {
      unitM.addEventListener("click", () => this.setUnit("m"));
      unitFt.addEventListener("click", () => this.setUnit("ft"));
    }

    // D. Grid snap toggles
    const snapToggle = document.getElementById("tft-rc-snap-toggle");
    if (snapToggle) {
      snapToggle.addEventListener("click", () => {
        this.state.snapToGrid = !this.state.snapToGrid;
        snapToggle.classList.toggle("tft-rc-toggle-btn--on", this.state.snapToGrid);
        snapToggle.innerText = this.state.snapToGrid ? "ON" : "OFF";
      });
    }

    // Item Customization sidebar fields change listeners
    const inputW = document.getElementById("tft-rc-item-w");
    const inputD = document.getElementById("tft-rc-item-d");
    const inputH = document.getElementById("tft-rc-item-h");
    const inputName = document.getElementById("tft-rc-item-name");

    const updateSelectedItemCustom = () => {
      if (this.state.selectedId === null) return;
      const item = this.state.placedItems[this.state.selectedId];
      if (inputW) item.width = parseInt(inputW.value, 10) || 10;
      if (inputD) item.depth = parseInt(inputD.value, 10) || 10;
      if (inputH) item.height = parseInt(inputH.value, 10) || 1;
      if (inputName) item.title = inputName.value || "Custom Shape";
      
      this.render();
      this.updateCartList();
      this.updateStats();
      this.saveState();
    };

    if (inputW) inputW.addEventListener("input", updateSelectedItemCustom);
    if (inputD) inputD.addEventListener("input", updateSelectedItemCustom);
    if (inputH) inputH.addEventListener("input", updateSelectedItemCustom);
    if (inputName) inputName.addEventListener("input", updateSelectedItemCustom);

    // E. Zoom & view controllers
    const zIn = document.getElementById("tft-rc-zoom-in");
    const zOut = document.getElementById("tft-rc-zoom-out");
    const zFit = document.getElementById("tft-rc-fit-btn");
    if (zIn) zIn.addEventListener("click", () => this.adjustZoom(0.1));
    if (zOut) zOut.addEventListener("click", () => this.adjustZoom(-0.1));
    if (zFit) zFit.addEventListener("click", () => {
      this.state.zoom = 1.0;
      this.centerRoom();
      this.render();
    });

    const viewToggle = document.getElementById("tft-rc-view-toggle");
    if (viewToggle) {
      viewToggle.addEventListener("click", () => this.toggleViewMode());
    }

    const btn2D = document.getElementById("tft-rc-view-2d");
    const btn3D = document.getElementById("tft-rc-view-3d");
    const selectView = document.getElementById("tft-rc-select-view");

    if (btn2D && btn3D) {
      btn2D.addEventListener("click", () => {
        if (this.state.viewMode !== "plan") this.toggleViewMode();
        btn2D.classList.add("tft-rc-view-btn--active");
        btn3D.classList.remove("tft-rc-view-btn--active");
        if (selectView) selectView.value = "Plan View";
      });
      btn3D.addEventListener("click", () => {
        if (this.state.viewMode !== "axo") this.toggleViewMode();
        btn3D.classList.add("tft-rc-view-btn--active");
        btn2D.classList.remove("tft-rc-view-btn--active");
        if (selectView) selectView.value = "Isometric View";
      });
    }

    // Plan View / Isometric View dropdown
    if (selectView) {
      selectView.addEventListener("change", () => {
        const wantAxo = selectView.value === "Isometric View";
        const isAxo   = this.state.viewMode === "axo";
        if (wantAxo !== isAxo) this.toggleViewMode();
        if (btn2D && btn3D) {
          btn2D.classList.toggle("tft-rc-view-btn--active", !wantAxo);
          btn3D.classList.toggle("tft-rc-view-btn--active", wantAxo);
        }
      });
    }

    // F. Axo Rotation view controllers
    const rotL = document.getElementById("tft-rc-rot-left");
    const rotR = document.getElementById("tft-rc-rot-right");
    if (rotL) {
      rotL.addEventListener("click", () => {
        this.state.axoRotationZ = (this.state.axoRotationZ || 45) - 15;
        this.applyAxoRotationStyles();
      });
    }
    if (rotR) {
      rotR.addEventListener("click", () => {
        this.state.axoRotationZ = (this.state.axoRotationZ || 45) + 15;
        this.applyAxoRotationStyles();
      });
    }

    // G. Reset layout controller
    const clearBtn = document.getElementById("tft-rc-clear-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your custom room layout? This cannot be undone.")) {
          this.state.placedItems = [];
          this.deselectItem();
          this.render();
          this.updateCartList();
          this.updateStats();
          this.saveState();
          this.renderCatalog(document.querySelector(".tft-rc-cat-btn--active")?.innerText?.toLowerCase() || "all");
          this.showToast("Room layout reset.");
        }
      });
    }

    const clearBtnStats = document.getElementById("tft-rc-clear-btn-stats");
    if (clearBtnStats) {
      clearBtnStats.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your custom room layout? This cannot be undone.")) {
          this.state.placedItems = [];
          this.deselectItem();
          this.render();
          this.updateCartList();
          this.updateStats();
          this.saveState();
          this.renderCatalog(document.querySelector(".tft-rc-cat-btn--active")?.innerText?.toLowerCase() || "all");
          this.showToast("Room layout reset.");
        }
      });
    }

    // Collapse/Expand Left Panel
    const leftCollapse = document.getElementById("tft-rc-left-collapse");
    if (leftCollapse) {
      leftCollapse.addEventListener("click", () => {
        this.state.showLeftPanel = !this.state.showLeftPanel;
        const mainComposer = document.getElementById("wp-block-room-composer");
        if (mainComposer) {
          mainComposer.classList.toggle("tft-rc-main--collapsed-left", !this.state.showLeftPanel);
        }
        leftCollapse.classList.toggle("tft-rc-panel-collapse--collapsed", !this.state.showLeftPanel);
      });
    }



    // G. Key bindings
    window.addEventListener("keydown", (e) => this.onKeyDown(e));

    // H. Drawer interactions
    const drawerClose = document.getElementById("tft-rc-drawer-close");
    const overlay = document.getElementById("tft-rc-overlay");
    if (drawerClose) drawerClose.addEventListener("click", () => this.closeDrawer());
    if (overlay) overlay.addEventListener("click", () => this.closeDrawer());

    // I. Floating Toolbar events
    const tbRotate = document.getElementById("tft-rc-btn-rotate");
    const tbDelete = document.getElementById("tft-rc-btn-delete");
    const tbInfo = document.getElementById("tft-rc-btn-info");
    
    if (tbRotate) tbRotate.addEventListener("click", () => this.rotateSelected());
    if (tbDelete) tbDelete.addEventListener("click", () => this.deleteSelected());
    if (tbInfo) tbInfo.addEventListener("click", () => this.showSelectedInfo());

    // J. Add to cart actions
    const addCartBtn = document.getElementById("tft-rc-addcart-btn");
    if (addCartBtn) {
      addCartBtn.addEventListener("click", () => {
        if (this.state.placedItems.length === 0) return;
        this.showToast("Furniture layout configurations noted for checkout!");
      });
    }

    // K. Export PDF spec sheet
    const printBtn = document.getElementById("tft-rc-print-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => this.triggerPdfExport());
    }

    // ResizeObserver responsive adjustment
    if (window.ResizeObserver && this.canvasWrap) {
      const resizeObserver = new ResizeObserver(() => {
        this.resizeCanvas();
        if (!this.hasUserPanned && this.canvas.width > 0 && this.canvas.height > 0) {
          this.centerRoom();
        }
        this.render();
      });
      resizeObserver.observe(this.canvasWrap);
    } else {
      window.addEventListener("resize", () => {
        this.resizeCanvas();
        if (!this.hasUserPanned && this.canvas.width > 0 && this.canvas.height > 0) {
          this.centerRoom();
        }
        this.render();
      });
    }
  },

  projectScreenToFloor: function(sx, sy) {
    const wrapRect = this.canvasWrap.getBoundingClientRect();
    const cx = wrapRect.left + wrapRect.width / 2;
    const cy = wrapRect.top + wrapRect.height / 2;

    const dx = sx - cx;
    const dy = sy - cy;

    const pitch = (this.state.axoRotationX || 55) * Math.PI / 180;
    const yaw = (this.state.axoRotationZ || 45) * Math.PI / 180;
    const d = 1200; // perspective depth in CSS

    // Invert perspective and pitch rotation
    const denom = Math.cos(pitch) + (dy * Math.sin(pitch)) / d;
    if (Math.abs(denom) < 0.0001) return { x: 0, y: 0 };
    const yDoublePrime = dy / denom;
    const xDoublePrime = dx * (1 - (yDoublePrime * Math.sin(pitch)) / d);

    // Rotate back by -yaw
    const xPrime = xDoublePrime * Math.cos(yaw) + yDoublePrime * Math.sin(yaw);
    const yPrime = -xDoublePrime * Math.sin(yaw) + yDoublePrime * Math.cos(yaw);

    // Relativize to canvas wrap origin
    const wcx = wrapRect.width / 2;
    const wcy = wrapRect.height / 2;

    return {
      x: wcx + xPrime,
      y: wcy + yPrime
    };
  },

  onMouseDown: function(e) {
    this.hasUserPanned = true;
    let mouseX, mouseY;
    if (this.state.viewMode === "axo") {
      const coords = this.projectScreenToFloor(e.clientX, e.clientY);
      mouseX = coords.x;
      mouseY = coords.y;
    } else {
      const rect = this.canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    // ── MEASURE MODE: capture two points then compute distance ──────────────
    if (this.state.measureMode) {
      if (!this._measurePoints) this._measurePoints = [];
      this._measurePoints.push({ x: mouseX, y: mouseY });
      if (this._measurePoints.length >= 2) {
        const p1 = this._measurePoints[0];
        const p2 = this._measurePoints[1];
        const scale = this.state.scale * this.state.zoom;
        const dx = (p2.x - p1.x) / scale;
        const dy = (p2.y - p1.y) / scale;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const label = this.state.unit === "ft"
          ? (dist * 3.28084).toFixed(2) + " ft"
          : dist.toFixed(2) + " m";
        this._measureResult = { p1, p2, label };
        this._measurePoints = []; // reset for next pair
        this.render();
        this.showToast("Distance: " + label + " — click two more points to re-measure.");
      } else {
        // First point placed — draw a preview dot
        this._measureResult = null;
        this.render();
        // Draw first-point crosshair
        const ctx = this.ctx;
        ctx.save();
        ctx.strokeStyle = "hsl(0,80%,50%)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      return;
    }

    // Armed placement state checking
    if (this.state.armedProductId) {
      this.placeArmedProduct(mouseX, mouseY);
      return;
    }

    // Check if dragging or panning
    if (e.button === 1 || e.button === 2 || e.shiftKey || this.state.isGrabPan) {
      // Pan viewport bounds
      this.isPanning = true;
      this.panStart.x = e.clientX;
      this.panStart.y = e.clientY;
      this.panOffset.x = this.state.panX;
      this.panOffset.y = this.state.panY;
      this.canvasWrap.classList.add("tft-rc-canvas-wrap--grabbing");
      e.preventDefault();
      return;
    }

    // Axo mode allows dragging the room to rotate OR dragging items
    if (this.state.viewMode === "axo") {
      const cubeEl = e.target.closest(".tft-rc-cube");
      if (cubeEl) {
        const cubeIndex = parseInt(cubeEl.getAttribute("data-index"), 10);
        if (!isNaN(cubeIndex)) {
          this.selectItem(cubeIndex);
          this.isDraggingItem = true;
          this.draggedIndex = cubeIndex;

          const scale = this.state.scale * this.state.zoom;
          const item = this.state.placedItems[cubeIndex];
          const worldMouseX = (mouseX - this.state.panX) / scale;
          const worldMouseY = (mouseY - this.state.panY) / scale;
          this.dragOffset.x = worldMouseX - item.x;
          this.dragOffset.y = worldMouseY - item.y;
        }
      } else {
        this.isRotatingRoom = true;
        this.rotateStart.x = e.clientX;
        this.rotateStart.y = e.clientY;
        this.rotateOffset.x = this.state.axoRotationZ || 45;
        this.rotateOffset.y = this.state.axoRotationX || 55;
        this.canvasWrap.classList.add("tft-rc-canvas-wrap--grabbing");
        
        this.deselectItem();
        e.preventDefault();
      }
      return;
    }

    // Check if mouse clicked a placed product footprint on floor plan
    const clickedIndex = this.hitTest(mouseX, mouseY);
    if (clickedIndex !== -1) {
      this.selectItem(clickedIndex);
      this.isDraggingItem = true;
      this.draggedIndex = clickedIndex;

      const scale = this.state.scale * this.state.zoom;
      const item = this.state.placedItems[clickedIndex];
      
      // Capture offset positioning
      const worldMouseX = (mouseX - this.state.panX) / scale;
      const worldMouseY = (mouseY - this.state.panY) / scale;
      
      this.dragOffset.x = worldMouseX - item.x;
      this.dragOffset.y = worldMouseY - item.y;
    } else {
      this.deselectItem();
    }
  },

  onMouseMove: function(e) {
    if (this.isRotatingRoom) {
      if (e.buttons === 0) {
        this.isRotatingRoom = false;
        this.canvasWrap.classList.remove("tft-rc-canvas-wrap--grabbing");
        this.saveState();
        return;
      }
      const dx = e.clientX - this.rotateStart.x;
      const dy = e.clientY - this.rotateStart.y;
      this.state.axoRotationZ = this.rotateOffset.x - dx * 0.4;
      this.state.axoRotationX = Math.max(10, Math.min(85, this.rotateOffset.y - dy * 0.4));
      this.applyAxoRotationStyles();
      return;
    }

    if (this.isPanning) {
      const dx = e.clientX - this.panStart.x;
      const dy = e.clientY - this.panStart.y;
      this.state.panX = this.panOffset.x + dx;
      this.state.panY = this.panOffset.y + dy;
      this.render();
      return;
    }

    if (this.isDraggingItem && this.draggedIndex !== null) {
      let mouseX, mouseY;
      if (this.state.viewMode === "axo") {
        const coords = this.projectScreenToFloor(e.clientX, e.clientY);
        mouseX = coords.x;
        mouseY = coords.y;
      } else {
        const rect = this.canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      }

      const scale = this.state.scale * this.state.zoom;
      
      let newWorldX = (mouseX - this.state.panX) / scale - this.dragOffset.x;
      let newWorldY = (mouseY - this.state.panY) / scale - this.dragOffset.y;

      // Handle coordinate snapping logic (0.25m steps)
      if (this.state.snapToGrid) {
        newWorldX = Math.round(newWorldX / this.state.gridSize) * this.state.gridSize;
        newWorldY = Math.round(newWorldY / this.state.gridSize) * this.state.gridSize;
      }

      // Constrain furniture center within floor walls boundary
      const item = this.state.placedItems[this.draggedIndex];
      const p = this.products.find(prod => prod.id === item.id);
      if (p) {
        const itemW = item.width || p.footprint.w;
        const itemD = item.depth || p.footprint.d;
        const halfW = (itemW / 100) / 2;
        const halfD = (itemD / 100) / 2;
        
        newWorldX = Math.max(halfW, Math.min(this.state.roomWidth - halfW, newWorldX));
        newWorldY = Math.max(halfD, Math.min(this.state.roomLength - halfD, newWorldY));
      }

      item.x = newWorldX;
      item.y = newWorldY;
      this.render();
      this.updateStats();
    }
  },

  onMouseUp: function() {
    if (this.isRotatingRoom) {
      this.isRotatingRoom = false;
      this.canvasWrap.classList.remove("tft-rc-canvas-wrap--grabbing");
      this.saveState();
    }
    if (this.isPanning) {
      this.isPanning = false;
      this.canvasWrap.classList.remove("tft-rc-canvas-wrap--grabbing");
    }
    if (this.isDraggingItem) {
      this.isDraggingItem = false;
      this.draggedIndex = null;
      this.saveState();
      this.updateCartList();
    }
  },

  onWheel: function(e) {
    e.preventDefault();
    this.hasUserPanned = true;
    const zoomFactor = 0.05;
    const delta = e.deltaY < 0 ? zoomFactor : -zoomFactor;
    this.adjustZoom(delta);
  },

  onKeyDown: function(e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.key === "Escape") {
      this.deselectItem();
      this.cancelArmedState();
      this.closeDrawer();
    }

    if (this.state.selectedId !== null) {
      const idx = this.state.selectedId;
      const item = this.state.placedItems[idx];
      const step = 0.05; // 5cm fine-tuning steps

      switch (e.key) {
        case "r":
        case "R":
          this.rotateSelected();
          break;
        case "Delete":
        case "Backspace":
          this.deleteSelected();
          break;
        case "ArrowLeft":
          item.x = Math.max(0, item.x - step);
          this.render();
          e.preventDefault();
          break;
        case "ArrowRight":
          item.x = Math.min(this.state.roomWidth, item.x + step);
          this.render();
          e.preventDefault();
          break;
        case "ArrowUp":
          item.y = Math.max(0, item.y - step);
          this.render();
          e.preventDefault();
          break;
        case "ArrowDown":
          item.y = Math.min(this.state.roomLength, item.y + step);
          this.render();
          e.preventDefault();
          break;
      }
      this.saveState();
    }

    // Spacebar toggles panning mode cursor
    if (e.key === " ") {
      this.state.isGrabPan = true;
      this.canvasWrap.classList.add("tft-rc-canvas-wrap--grabbing");
    }
  },

  hitTest: function(mx, my) {
    const scale = this.state.scale * this.state.zoom;

    // Check backwards to select top layer elements first
    for (let i = this.state.placedItems.length - 1; i >= 0; i--) {
      const item = this.state.placedItems[i];
      const p = this.products.find(prod => prod.id === item.id);
      if (!p) continue;

      // Coordinate calculations depending on active rotation angles
      const cX = this.state.panX + item.x * scale;
      const cY = this.state.panY + item.y * scale;

      const isRot = (item.rotation % 180 !== 0);
      const widthCm = item.width || p.footprint.w;
      const depthCm = item.depth || p.footprint.d;
      const pxW = (isRot ? depthCm / 100 : widthCm / 100) * scale;
      const pxH = (isRot ? widthCm / 100 : depthCm / 100) * scale;

      if (mx >= cX - pxW / 2 && mx <= cX + pxW / 2 && 
          my >= cY - pxH / 2 && my <= cY + pxH / 2) {
        return i;
      }
    }
    return -1;
  },

  // 8. INTERACTIVE ENGINE OPERATIONS
  armProduct: function(productId) {
    this.state.armedProductId = productId;
    
    // Switch to Plan view automatically so coordinates map correctly and the user sees the flat layout
    if (this.state.viewMode !== "plan") {
      this.toggleViewMode();
    }

    // Add banner layout hint classes
    const hint = document.getElementById("tft-rc-placement-hint");
    if (hint) {
      hint.classList.add("tft-rc-placement-hint--visible");
    }

    // Display cursor help pointer inside viewport
    this.canvasWrap.style.cursor = "crosshair";
  },

  cancelArmedState: function() {
    this.state.armedProductId = null;
    const hint = document.getElementById("tft-rc-placement-hint");
    if (hint) hint.classList.remove("tft-rc-placement-hint--visible");
    this.canvasWrap.style.cursor = "grab";
  },

  placeArmedProduct: function(mx, my) {
    const scale = this.state.scale * this.state.zoom;
    const worldX = (mx - this.state.panX) / scale;
    const worldY = (my - this.state.panY) / scale;

    // Wall perimeter bounds validation checks
    if (worldX < 0 || worldX > this.state.roomWidth || 
        worldY < 0 || worldY > this.state.roomLength) {
      this.cancelArmedState();
      return;
    }

    let itemX = worldX;
    let itemY = worldY;

    if (this.state.snapToGrid) {
      itemX = Math.round(itemX / this.state.gridSize) * this.state.gridSize;
      itemY = Math.round(itemY / this.state.gridSize) * this.state.gridSize;
    }

    const p = this.products.find(prod => prod.id === this.state.armedProductId);
    const newItem = {
      id: this.state.armedProductId,
      x: itemX,
      y: itemY,
      rotation: 0,
      width: p ? p.footprint.w : 100,
      depth: p ? p.footprint.d : 100,
      height: p ? (this.productHeights[p.id] || 50) : 100,
      title: p ? p.title : "Custom Shape"
    };

    this.state.placedItems.push(newItem);
    this.cancelArmedState();
    
    // Select newly placed product
    this.selectItem(this.state.placedItems.length - 1);
    
    this.render();
    this.updateCartList();
    this.updateStats();
    this.saveState();

    // Re-highlight checklist badges in list cards
    this.renderCatalog(document.querySelector(".tft-rc-cat-btn--active").innerText.toLowerCase());
  },

  selectItem: function(index) {
    this.state.selectedId = index;
    this.render();
    this.updateToolbarPosition();
    this.updateCustomizationPanel();
  },

  deselectItem: function() {
    this.state.selectedId = null;
    this.render();
    this.updateToolbarPosition();
    this.updateCustomizationPanel();
  },

  // Toggle & synchronize sidebar Item Customization controls
  updateCustomizationPanel: function() {
    const sec = document.getElementById("tft-rc-item-customization-sec");
    if (!sec) return;

    if (this.state.selectedId === null) {
      sec.style.display = "none";
      return;
    }

    const item = this.state.placedItems[this.state.selectedId];
    const p = this.products.find(prod => prod.id === item.id);
    if (!p) {
      sec.style.display = "none";
      return;
    }

    sec.style.display = "block";

    const inputW = document.getElementById("tft-rc-item-w");
    const inputD = document.getElementById("tft-rc-item-d");
    const inputH = document.getElementById("tft-rc-item-h");
    const inputName = document.getElementById("tft-rc-item-name");

    if (inputW) inputW.value = item.width || p.footprint.w;
    if (inputD) inputD.value = item.depth || p.footprint.d;
    if (inputH) inputH.value = item.height || this.productHeights[p.id] || 50;
    if (inputName) inputName.value = item.title || p.title;
  },

  rotateSelected: function() {
    if (this.state.selectedId === null) return;
    const item = this.state.placedItems[this.state.selectedId];
    item.rotation = (item.rotation + 90) % 360;
    this.render();
    this.saveState();
  },

  deleteSelected: function() {
    if (this.state.selectedId === null) return;
    this.state.placedItems.splice(this.state.selectedId, 1);
    this.state.selectedId = null;
    this.render();
    this.updateCartList();
    this.updateStats();
    this.saveState();
    
    // Re-check catalog checklists
    this.renderCatalog(document.querySelector(".tft-rc-cat-btn--active").innerText.toLowerCase());
  },

  showSelectedInfo: function() {
    if (this.state.selectedId === null) return;
    const item = this.state.placedItems[this.state.selectedId];
    const p = this.products.find(prod => prod.id === item.id);
    if (p) this.openDrawer(p);
  },

  adjustZoom: function(delta) {
    this.state.zoom = Math.max(0.4, Math.min(2.5, this.state.zoom + delta));
    this.render();
  },

  setUnit: function(unit) {
    this.state.unit = unit;
    
    // Convert text inside custom inputs
    const widthInput = document.getElementById("tft-rc-width");
    const lengthInput = document.getElementById("tft-rc-length");
    
    const lblW = document.getElementById("tft-rc-lbl-w");
    const lblL = document.getElementById("tft-rc-lbl-l");

    const btnM = document.getElementById("tft-rc-unit-m");
    const btnFt = document.getElementById("tft-rc-unit-ft");

    if (unit === "ft") {
      if (btnM) btnM.classList.remove("tft-rc-seg__btn--active");
      if (btnFt) btnFt.classList.add("tft-rc-seg__btn--active");
      
      // Change input meters to feet display
      if (lblW) lblW.innerText = "ft";
      if (lblL) lblL.innerText = "ft";
      
      if (widthInput) widthInput.value = (this.state.roomWidth * 3.28084).toFixed(1);
      if (lengthInput) lengthInput.value = (this.state.roomLength * 3.28084).toFixed(1);
    } else {
      if (btnFt) btnFt.classList.remove("tft-rc-seg__btn--active");
      if (btnM) btnM.classList.add("tft-rc-seg__btn--active");
      
      if (lblW) lblW.innerText = "m";
      if (lblL) lblL.innerText = "m";
      
      if (widthInput) widthInput.value = this.state.roomWidth.toFixed(1);
      if (lengthInput) lengthInput.value = this.state.roomLength.toFixed(1);
    }

    this.render();
    this.updateStats();
  },

  toggleViewMode: function() {
    const viewToggle = document.getElementById("tft-rc-view-toggle");
    const rotL = document.getElementById("tft-rc-rot-left");
    const rotR = document.getElementById("tft-rc-rot-right");
    
    const btn2D = document.getElementById("tft-rc-view-2d");
    const btn3D = document.getElementById("tft-rc-view-3d");
    
    if (this.state.viewMode === "plan") {
      this.state.viewMode = "axo";
      this.canvasWrap.classList.add("tft-rc-canvas-wrap--axo");
      if (viewToggle) {
        viewToggle.classList.add("tft-rc-tool--active");
        viewToggle.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          Axo View
        `;
      }
      if (btn2D) btn2D.classList.remove("tft-rc-view-btn--active");
      if (btn3D) btn3D.classList.add("tft-rc-view-btn--active");
      if (rotL) rotL.style.display = "inline-flex";
      if (rotR) rotR.style.display = "inline-flex";
      this.applyAxoRotationStyles();
    } else {
      this.state.viewMode = "plan";
      this.canvasWrap.classList.remove("tft-rc-canvas-wrap--axo");
      if (viewToggle) {
        viewToggle.classList.remove("tft-rc-tool--active");
        viewToggle.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          Plan View
        `;
      }
      if (btn2D) btn2D.classList.add("tft-rc-view-btn--active");
      if (btn3D) btn3D.classList.remove("tft-rc-view-btn--active");
      if (rotL) rotL.style.display = "none";
      if (rotR) rotR.style.display = "none";
    }

    this.render();
    this.updateStats();
  },

  applyAxoRotationStyles: function() {
    const rx = this.state.axoRotationX || 55;
    const rz = this.state.axoRotationZ || 45;
    this.canvasWrap.style.setProperty("--axo-rx", `${rx}deg`);
    this.canvasWrap.style.setProperty("--axo-rz", `${rz}deg`);
  },

  // 9. QUANTITY & CART DATA SINKS
  updateCartList: function() {
    const list = document.getElementById("tft-rc-cart-list");
    const countBadge = document.getElementById("tft-rc-cart-count");
    const totalLabel = document.getElementById("tft-rc-cart-total");
    
    if (!list) return;

    if (this.state.placedItems.length === 0) {
      list.innerHTML = `<p class="tft-rc-cart__empty">Place furniture to begin building your room</p>`;
      if (countBadge) countBadge.innerText = "0";
      if (totalLabel) totalLabel.innerText = "$0.00";
      return;
    }

    // Group items count by ID and custom signature matching
    const groups = {};
    this.state.placedItems.forEach(item => {
      const key = item.id + (item.width ? `-${item.width}-${item.depth}-${item.height}-${item.title}` : '');
      if (!groups[key]) {
        groups[key] = { id: item.id, count: 0, item: item };
      }
      groups[key].count++;
    });

    list.innerHTML = "";
    let totalSum = 0;

    Object.keys(groups).forEach(key => {
      const group = groups[key];
      const p = this.products.find(prod => prod.id === group.id);
      if (!p) return;

      const item = group.item;
      const title = item.title || p.title;
      const widthCm = item.width || p.footprint.w;
      const depthCm = item.depth || p.footprint.d;
      const sub = p.price * group.count;
      totalSum += sub;

      const itemDiv = document.createElement("div");
      itemDiv.className = "tft-rc-cart-item";
      itemDiv.innerHTML = `
        <div class="tft-rc-cart-item__img-wrap">
          <img src="${p.image}" alt="${title}" width="40" height="40" style="object-fit: cover;">
        </div>
        <div class="tft-rc-cart-item__info">
          <span class="tft-rc-cart-item__name">${title}</span>
          <span class="tft-rc-cart-item__desc">Qty: ${group.count} &bull; ${widthCm} &times; ${depthCm} cm</span>
        </div>
        <div class="tft-rc-cart-item__right">
          <span class="tft-rc-cart-item__price">${p.price > 0 ? `₹${sub.toFixed(2)}` : 'Custom'}</span>
          <button class="tft-rc-cart-item__delete" title="Remove this item group">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `;

      // Highlight corresponding canvas structures on hover in list
      itemDiv.addEventListener("mouseenter", () => {
        this.state.placedItems.forEach((itm, idx) => {
          if (itm.id === p.id) {
            // Faintly highlight items
          }
        });
      });

      // Clicking drawer items brings detail views (disabled for custom shapes)
      if (!p.custom) {
        itemDiv.addEventListener("click", () => this.openDrawer(p));
      }

      // Remove specific product class group
      itemDiv.querySelector(".tft-rc-cart-item__delete").addEventListener("click", (e) => {
        e.stopPropagation();
        this.state.placedItems = this.state.placedItems.filter(itm => {
          const itmKey = itm.id + (itm.width ? `-${itm.width}-${itm.depth}-${itm.height}-${itm.title}` : '');
          return itmKey !== key;
        });
        this.deselectItem();
        this.render();
        this.updateCartList();
        this.updateStats();
        this.saveState();
        this.renderCatalog(document.querySelector(".tft-rc-cat-btn--active").innerText.toLowerCase());
      });

      list.appendChild(itemDiv);
    });

    if (countBadge) countBadge.innerText = this.state.placedItems.length.toString();
    if (totalLabel) totalLabel.innerText = `₹${totalSum.toFixed(2)}`;
  },

  updateStats: function() {
    const roomLabel = document.getElementById("tft-rc-room-label");
    const statRoom = document.getElementById("tft-rc-stat-room");
    const statArea = document.getElementById("tft-rc-stat-area");
    const statCoverage = document.getElementById("tft-rc-stat-coverage");
    const statItems = document.getElementById("tft-rc-stat-items");

    const widthStr = this.formatUnit(this.state.roomWidth);
    const lengthStr = this.formatUnit(this.state.roomLength);

    const titleMsg = `Room Scale: ${widthStr} &times; ${lengthStr}`;
    if (roomLabel) roomLabel.innerHTML = titleMsg;
    if (statRoom) statRoom.innerHTML = `Floor Plan (${widthStr} &times; ${lengthStr})`;

    // Total area calculation
    const totalAreaM2 = this.state.roomWidth * this.state.roomLength;
    if (statArea) {
      if (this.state.unit === "ft") {
        const areaFt2 = totalAreaM2 * 10.7639;
        statArea.innerText = `Area: ${areaFt2.toFixed(1)} sq ft`;
      } else {
        statArea.innerText = `Area: ${totalAreaM2.toFixed(1)} m²`;
      }
    }

    // Footprints sum coverage percentage calculation
    let furnitureAreaM2 = 0;
    this.state.placedItems.forEach(item => {
      const p = this.products.find(prod => prod.id === item.id);
      if (p) {
        const itemW = item.width || p.footprint.w;
        const itemD = item.depth || p.footprint.d;
        furnitureAreaM2 += (itemW / 100) * (itemD / 100);
      }
    });

    const percent = Math.min(100, Math.round((furnitureAreaM2 / totalAreaM2) * 100));
    if (statCoverage) statCoverage.innerText = `Coverage: ${percent}%`;

    if (statItems) {
      statItems.innerText = `${this.state.placedItems.length} items placed`;
    }
  },

  updateToolbarPosition: function() {
    if (this.state.selectedId === null) {
      this.itemToolbar.classList.remove("tft-rc-item-toolbar--visible");
      return;
    }

    if (this.state.viewMode === "axo") {
      // Position toolbar using 3D cube's bounding box
      const index = this.state.selectedId;
      const cubeEl = this.axoLayer.querySelector(`.tft-rc-cube[data-index="${index}"]`);
      if (!cubeEl) {
        this.itemToolbar.classList.remove("tft-rc-item-toolbar--visible");
        return;
      }
      
      const rect = cubeEl.getBoundingClientRect();
      const wrapRect = this.canvasWrap.getBoundingClientRect();
      
      // Position toolbar above the top center of the 3D cube
      this.itemToolbar.style.left = `${rect.left - wrapRect.left + rect.width / 2}px`;
      this.itemToolbar.style.top = `${rect.top - wrapRect.top - 40}px`;
      this.itemToolbar.classList.add("tft-rc-item-toolbar--visible");
      return;
    }

    const scale = this.state.scale * this.state.zoom;
    const item = this.state.placedItems[this.state.selectedId];
    const p = this.products.find(prod => prod.id === item.id);
    if (!p) return;

    // Calculate vertical top center coordinates
    const isRot = (item.rotation % 180 !== 0);
    const itemH = isRot ? p.footprint.w / 100 : p.footprint.d / 100;

    const cX = this.state.panX + item.x * scale;
    const cY = this.state.panY + (item.y - itemH / 2) * scale;

    const wrapRect = this.canvasWrap.getBoundingClientRect();
    
    // Position toolbar above selected element
    this.itemToolbar.style.left = `${wrapRect.left + cX}px`;
    this.itemToolbar.style.top = `${wrapRect.top + cY}px`;
    this.itemToolbar.classList.add("tft-rc-item-toolbar--visible");
  },

  // 10. PERSISTENT STORAGE
  saveState: function() {
    const layout = {
      roomWidth: this.state.roomWidth,
      roomLength: this.state.roomLength,
      unit: this.state.unit,
      axoRotationZ: this.state.axoRotationZ || 45,
      placedItems: this.state.placedItems
    };
    localStorage.setItem("tft-composer-layout", JSON.stringify(layout));
  },

  loadSavedState: function() {
    const stored = localStorage.getItem("tft-composer-layout");
    if (!stored) {
      // Set the mockup room layout as the default starter layout
      this.state.roomWidth = 6.0;
      this.state.roomLength = 4.5;
      this.state.unit = "m";
      this.state.placedItems = [
        { id: 12, x: 1.5, y: 1.3, rotation: 0, width: 120, depth: 120, height: 75, title: "Round Oak Dining Table" },
        { id: 3, x: 3.0, y: 1.3, rotation: 0, width: 80, depth: 85, height: 85, title: "Vintage Velvet Lounge" },
        { id: 1, x: 4.2, y: 1.3, rotation: 0, width: 78, depth: 82, height: 80, title: "Luna Lounge Chair" },
        { id: 2, x: 5.3, y: 1.3, rotation: 0, width: 85, depth: 88, height: 80, title: "Woven Cane Club Chair" },
        { id: 13, x: 1.5, y: 3.2, rotation: 0, width: 120, depth: 60, height: 75, title: "Marble Rectangular Table" },
        { id: 1, x: 3.3, y: 3.2, rotation: 0, width: 78, depth: 82, height: 80, title: "Luna Lounge Chair" },
        { id: 1, x: 4.8, y: 3.2, rotation: 0, width: 78, depth: 82, height: 80, title: "Luna Lounge Chair" },
        { id: 33, x: 5.4, y: 3.2, rotation: 0, width: 40, depth: 40, height: 60, title: "Earthenware Clay Vases" }
      ];
      this.state.axoRotationZ = 45;
      
      // Update inputs to match
      const wInput = document.getElementById("tft-rc-width");
      const lInput = document.getElementById("tft-rc-length");
      if (wInput) wInput.value = this.state.roomWidth;
      if (lInput) lInput.value = this.state.roomLength;
      return;
    }
    try {
      const data = JSON.parse(stored);
      this.state.roomWidth = data.roomWidth || 5.0;
      this.state.roomLength = data.roomLength || 4.0;
      this.state.unit = data.unit || "m";
      this.state.axoRotationZ = data.axoRotationZ || 45;
      this.state.placedItems = data.placedItems || [];

      // Sync settings and inputs
      const wInput = document.getElementById("tft-rc-width");
      const lInput = document.getElementById("tft-rc-length");
      if (wInput) wInput.value = this.state.roomWidth;
      if (lInput) lInput.value = this.state.roomLength;
    } catch (e) {
      console.warn("Could not reload cached room layout config.", e);
    }
  },

  showAutoSaveToast: function() {
    const autosave = document.getElementById("tft-rc-autosave-label");
    if (!autosave) return;
    autosave.innerText = "Auto-saved layout";
    autosave.classList.add("tft-rc-stats__autosave--visible");
    setTimeout(() => {
      autosave.classList.remove("tft-rc-stats__autosave--visible");
    }, 2500);
  },

  // 11. PDF SPEC SHEETS GENERATION
  triggerPdfExport: function() {
    this.deselectItem(); // Clean view
    
    const metaLabel = document.getElementById("tft-rc-print-meta");
    const diagramContainer = document.getElementById("tft-rc-print-diagram");
    const infoContainer = document.getElementById("tft-rc-print-room-info");
    const rowsContainer = document.getElementById("tft-rc-print-rows");
    const totalLabel = document.getElementById("tft-rc-print-total");
    const dateLabel = document.getElementById("tft-rc-print-date");

    // Capture Canvas data URI
    const dataUrl = this.canvas.toDataURL("image/png");
    
    // Load metadata labels
    const timestamp = new Date().toLocaleString();
    if (metaLabel) metaLabel.innerText = `Spec generation date: ${timestamp}`;
    if (dateLabel) dateLabel.innerText = new Date().toLocaleDateString();

    // Render Canvas screenshot
    if (diagramContainer) {
      diagramContainer.innerHTML = `<img src="${dataUrl}" alt="Room floor plan diagram">`;
    }

    // Render Room Stats summary
    const wVal = this.formatUnit(this.state.roomWidth);
    const lVal = this.formatUnit(this.state.roomLength);
    const totalAreaM2 = this.state.roomWidth * this.state.roomLength;
    const areaStr = this.state.unit === "ft" 
      ? `${(totalAreaM2 * 10.7639).toFixed(1)} sq ft` 
      : `${totalAreaM2.toFixed(1)} m²`;

    if (infoContainer) {
      infoContainer.innerHTML = `
        <strong>Room Scale:</strong> ${wVal} &times; ${lVal} (${areaStr}) &bull; 
        <strong>Snap to Grid:</strong> ${this.state.snapToGrid ? "Enabled (0.25m steps)" : "Disabled"} &bull; 
        <strong>Total items:</strong> ${this.state.placedItems.length}
      `;
    }

    // Populate products lists
    if (rowsContainer) {
      rowsContainer.innerHTML = "";
      if (this.state.placedItems.length === 0) {
        rowsContainer.innerHTML = `<tr><td colspan="5" style="text-align:center;">No furniture elements configured in this layout spec.</td></tr>`;
        if (totalLabel) totalLabel.innerText = "$0.00";
      } else {
        const groups = {};
        this.state.placedItems.forEach(item => {
          const key = item.id + (item.width ? `-${item.width}-${item.depth}-${item.height}-${item.title}` : '');
          if (!groups[key]) {
            groups[key] = { id: item.id, count: 0, item: item };
          }
          groups[key].count++;
        });

        let totalSum = 0;
        Object.keys(groups).forEach(key => {
          const group = groups[key];
          const p = this.products.find(prod => prod.id === group.id);
          if (!p) return;

          const item = group.item;
          const qty = group.count;
          const title = item.title || p.title;
          const w = item.width || p.footprint.w;
          const d = item.depth || p.footprint.d;
          const sub = p.price * qty;
          totalSum += sub;

          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td><strong>${title}</strong></td>
            <td>${w} &times; ${d} cm</td>
            <td>${p.price > 0 ? `₹${p.price.toFixed(2)}` : 'Custom'}</td>
            <td>${qty}</td>
            <td>${p.price > 0 ? `₹${sub.toFixed(2)}` : 'Custom'}</td>
          `;
          rowsContainer.appendChild(tr);
        });

        if (totalLabel) totalLabel.innerText = `₹${totalSum.toFixed(2)}`;
      }
    }

    // Trigger Print View
    window.print();
  },

  // 12. DRAWERS & SYSTEM UTILS
  openDrawer: function(product) {
    const content = document.getElementById("tft-rc-drawer-content");
    const drawer = document.getElementById("tft-rc-drawer");
    const overlay = document.getElementById("tft-rc-overlay");

    if (!content || !drawer || !overlay) return;

    content.innerHTML = `
      <div class="tft-rc-detail">
        <div class="tft-rc-detail__img-wrap">
          <img class="tft-rc-detail__img" src="${product.image}" alt="${product.title}">
        </div>
        <h3 class="tft-rc-detail__title">${product.title}</h3>
        <span class="tft-rc-detail__price">₹${product.price.toFixed(2)}</span>
        
        <div class="tft-rc-detail__spec">
          <div class="tft-rc-detail__spec-item">
            <span class="tft-rc-detail__spec-label">Width</span>
            <span class="tft-rc-detail__spec-val">${product.footprint.w} cm</span>
          </div>
          <div class="tft-rc-detail__spec-item">
            <span class="tft-rc-detail__spec-label">Depth</span>
            <span class="tft-rc-detail__spec-val">${product.footprint.d} cm</span>
          </div>
          <div class="tft-rc-detail__spec-item">
            <span class="tft-rc-detail__spec-label">Category</span>
            <span class="tft-rc-detail__spec-val" style="text-transform: capitalize;">${product.category}</span>
          </div>
          <div class="tft-rc-detail__spec-item">
            <span class="tft-rc-detail__spec-label">Status</span>
            <span class="tft-rc-detail__spec-val" style="color:var(--fur-primary);">Available</span>
          </div>
        </div>

        <p class="tft-rc-detail__desc">${product.desc}</p>
      </div>
    `;

    drawer.classList.add("tft-rc-drawer--visible");
    overlay.classList.add("tft-rc-overlay--visible");
  },

  closeDrawer: function() {
    const drawer = document.getElementById("tft-rc-drawer");
    const overlay = document.getElementById("tft-rc-overlay");

    if (drawer) drawer.classList.remove("tft-rc-drawer--visible");
    if (overlay) overlay.classList.remove("tft-rc-overlay--visible");
  },

  formatUnit: function(val) {
    if (this.state.unit === "ft") {
      const feet = val * 3.28084;
      return `${feet.toFixed(1)} ft`;
    }
    return `${val.toFixed(1)} m`;
  },

  // ── DYNAMIC OPENING DRAWING ──────────────────────────────────────────────
  drawOpenings: function(rx, ry, rw, rh, scale, isDark) {
    this.state.openings.forEach((op, idx) => {
      const isSelected = (idx === this.state.selectedOpeningIdx);
      const posPx = op.position * scale;
      const wPx   = op.width   * scale;

      if (op.type === "window") {
        // ── Window: thin coloured bar on the wall ──
        let wx, wy, wbw, wbh;
        if (op.wall === "left")   { wx = rx - 4; wy = ry + posPx; wbw = 8; wbh = wPx; }
        else if (op.wall === "right")  { wx = rx + rw - 4; wy = ry + posPx; wbw = 8; wbh = wPx; }
        else if (op.wall === "top")    { wx = rx + posPx; wy = ry - 4; wbw = wPx; wbh = 8; }
        else                           { wx = rx + posPx; wy = ry + rh - 4; wbw = wPx; wbh = 8; }
        this.ctx.fillStyle = isSelected ? "#93C5FD" : "#E0F2FE";
        this.ctx.fillRect(wx, wy, wbw, wbh);
        this.ctx.strokeStyle = isSelected ? "#2563EB" : "#0284C7";
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(wx, wy, wbw, wbh);

      } else if (op.type === "archway") {
        // ── Archway: semi-circle arc on wall ──
        let ax, ay, aAngleStart, aAngleEnd;
        if (op.wall === "left")  { ax = rx; ay = ry + posPx + wPx / 2; aAngleStart = -Math.PI / 2; aAngleEnd = Math.PI / 2; }
        else if (op.wall === "right") { ax = rx + rw; ay = ry + posPx + wPx / 2; aAngleStart = Math.PI / 2; aAngleEnd = 3 * Math.PI / 2; }
        else if (op.wall === "top")   { ax = rx + posPx + wPx / 2; ay = ry; aAngleStart = Math.PI; aAngleEnd = 2 * Math.PI; }
        else                          { ax = rx + posPx + wPx / 2; ay = ry + rh; aAngleStart = 0; aAngleEnd = Math.PI; }
        this.ctx.strokeStyle = isSelected ? "#7C3AED" : (isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)");
        this.ctx.lineWidth = isSelected ? 2 : 1.5;
        this.ctx.beginPath();
        this.ctx.arc(ax, ay, wPx / 2, aAngleStart, aAngleEnd);
        this.ctx.stroke();
        // clear wall line in the archway gap
        const bgCol = this.getCSSVar("--fur-bg-secondary", isDark ? "hsl(126,34%,8%)" : "hsl(36,30%,98%)");
        this.ctx.fillStyle = bgCol;
        if (op.wall === "top" || op.wall === "bottom") { this.ctx.fillRect(rx + posPx, (op.wall === "top" ? ry - 3 : ry + rh - 3), wPx, 6); }
        else { this.ctx.fillRect((op.wall === "left" ? rx - 3 : rx + rw - 3), ry + posPx, 6, wPx); }

      } else {
        // ── Door: gap + jambs + swing arc + leaf ──
        const bgCol = this.getCSSVar("--fur-bg-secondary", isDark ? "hsl(126,34%,8%)" : "hsl(36,30%,98%)");
        const wallCol = this.getCSSVar("--fur-text", isDark ? "hsl(0,0%,94%)" : "hsl(0,0%,11%)");
        let dx, dy, dJambLen = 6;

        if (op.wall === "left" || op.wall === "right") {
          const wallX = op.wall === "left" ? rx : rx + rw;
          dy = ry + posPx;
          // clear gap
          this.ctx.fillStyle = bgCol;
          this.ctx.fillRect(wallX - 3, dy, 6, wPx);
          // jambs
          this.ctx.strokeStyle = wallCol; this.ctx.lineWidth = 2;
          this.ctx.beginPath();
          this.ctx.moveTo(wallX - 3, dy); this.ctx.lineTo(wallX + 3, dy);
          this.ctx.moveTo(wallX - 3, dy + wPx); this.ctx.lineTo(wallX + 3, dy + wPx);
          this.ctx.stroke();
          // swing arc
          const hingeY2 = op.swing === "right" ? dy + wPx : dy;
          const sweepDir2 = op.swing === "right";
          this.ctx.strokeStyle = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)";
          this.ctx.setLineDash([3,3]); this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.arc(wallX, hingeY2, wPx,
            sweepDir2 ? -Math.PI / 2 : Math.PI / 2,
            sweepDir2 ? 0 : Math.PI, false);
          this.ctx.stroke(); this.ctx.setLineDash([]);
          // leaf
          this.ctx.strokeStyle = wallCol; this.ctx.lineWidth = 2.5;
          this.ctx.beginPath();
          const leafY2 = op.swing === "right" ? hingeY2 - wPx : hingeY2 + wPx;
          this.ctx.moveTo(wallX, hingeY2); this.ctx.lineTo(wallX + (op.wall === "left" ? wPx : -wPx), hingeY2);
          this.ctx.stroke();

        } else {
          const wallY = op.wall === "top" ? ry : ry + rh;
          dx = rx + posPx;
          // clear gap
          this.ctx.fillStyle = bgCol;
          this.ctx.fillRect(dx, wallY - 3, wPx, 6);
          // jambs
          this.ctx.strokeStyle = wallCol; this.ctx.lineWidth = 2;
          this.ctx.beginPath();
          this.ctx.moveTo(dx, wallY - 3); this.ctx.lineTo(dx, wallY + 3);
          this.ctx.moveTo(dx + wPx, wallY - 3); this.ctx.lineTo(dx + wPx, wallY + 3);
          this.ctx.stroke();
          // swing arc
          const hingeX2 = op.swing === "right" ? dx + wPx : dx;
          const arcStart = op.wall === "top"
            ? (op.swing === "right" ? Math.PI : 0)
            : (op.swing === "right" ? Math.PI : 0);
          this.ctx.strokeStyle = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)";
          this.ctx.setLineDash([3,3]); this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.arc(hingeX2, wallY, wPx, Math.PI, 1.5 * Math.PI, op.swing !== "right");
          this.ctx.stroke(); this.ctx.setLineDash([]);
          // leaf
          this.ctx.strokeStyle = wallCol; this.ctx.lineWidth = 2.5;
          this.ctx.beginPath();
          this.ctx.moveTo(hingeX2, wallY);
          this.ctx.lineTo(hingeX2, wallY + (op.wall === "top" ? wPx : -wPx));
          this.ctx.stroke();
        }
      }
    });
  },

  // ── STRUCTURE TABS ────────────────────────────────────────────────────────
  bindStructureTabs: function() {
    const tabs = document.querySelectorAll(".tft-rc-structure-tab");
    if (!tabs.length) return;

    const panel = document.getElementById("wp-block-room-setup");
    if (!panel) return;
    const allSections = panel.querySelectorAll(".tft-rc-panel__section");

    const tabSectionMap = [
      ["settings", "keyboard"],
      ["wall openings", "selected opening"],
      ["room presets", "custom dimensions"],
      ["keyboard"]
    ];

    const getHeading = (sec) => {
      const h = sec.querySelector("h2,h3");
      return h ? h.textContent.trim().toLowerCase() : "";
    };

    const switchTab = (activeIdx) => {
      tabs.forEach((t, i) => t.classList.toggle("tft-rc-structure-tab--active", i === activeIdx));
      const keywords = tabSectionMap[activeIdx] || [];
      const alwaysVisible = ["room presets", "custom dimensions", "room structure"];
      allSections.forEach(sec => {
        const heading = getHeading(sec);
        if (sec.id === "tft-rc-item-customization-sec") return;
        const isAlways = alwaysVisible.some(k => heading.includes(k));
        const isTarget = keywords.some(k => heading.includes(k));
        sec.style.display = (isAlways || isTarget) ? "" : "none";
      });

      // ── WALLS TAB (index 0): inject wall controls section once ──
      if (activeIdx === 0) {
        let wallSec = document.getElementById("tft-rc-wall-controls-sec");
        if (!wallSec) {
          wallSec = document.createElement("section");
          wallSec.id = "tft-rc-wall-controls-sec";
          wallSec.className = "tft-rc-panel__section";
          wallSec.innerHTML = `
            <h3 class="tft-rc-panel__subheading">Wall Colour</h3>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-block:8px 14px;">
              ${[
                {val:"default",color:"hsl(0,0%,11%)",label:"Default"},
                {val:"white",  color:"hsl(0,0%,92%)",label:"White"},
                {val:"grey",   color:"hsl(0,0%,55%)",label:"Grey"},
                {val:"dark",   color:"hsl(0,0%,18%)",label:"Dark"},
                {val:"warm",   color:"hsl(30,18%,38%)",label:"Warm"}
              ].map(s => `<button type="button"
                  data-wcolor="${s.val}"
                  title="${s.label}"
                  style="width:28px;height:28px;border-radius:50%;background:${s.color};border:2px solid var(--fur-border);cursor:pointer;flex-shrink:0;"
                  aria-label="Wall colour ${s.label}"></button>`).join("")}
            </div>
            <h3 class="tft-rc-panel__subheading">Wall Thickness</h3>
            <div class="tft-rc-seg" style="margin-block:8px 0;" id="tft-rc-wall-thick-seg">
              <button type="button" class="tft-rc-seg__btn tft-rc-seg__btn--active" data-thick="4">Thin</button>
              <button type="button" class="tft-rc-seg__btn" data-thick="8">Mid</button>
              <button type="button" class="tft-rc-seg__btn" data-thick="12">Thick</button>
              <button type="button" class="tft-rc-seg__btn" data-thick="16">Heavy</button>
            </div>
          `;
          // Insert before keyboard shortcuts (last section)
          const kbSec = panel.querySelector(".tft-rc-panel__section--controls");
          panel.insertBefore(wallSec, kbSec || null);

          // Bind colour swatches
          wallSec.querySelectorAll("[data-wcolor]").forEach(btn => {
            btn.addEventListener("click", () => {
              this.state.wallColor = btn.dataset.wcolor;
              wallSec.querySelectorAll("[data-wcolor]").forEach(b =>
                b.style.outline = b.dataset.wcolor === this.state.wallColor
                  ? "2px solid var(--fur-primary)" : "none");
              this.render();
            });
          });

          // Bind thickness buttons
          wallSec.querySelectorAll("[data-thick]").forEach(btn => {
            btn.addEventListener("click", () => {
              this.state.wallThickness = parseInt(btn.dataset.thick, 10);
              wallSec.querySelectorAll("[data-thick]").forEach(b =>
                b.classList.toggle("tft-rc-seg__btn--active", b.dataset.thick === btn.dataset.thick));
              this.render();
            });
          });
        }
        wallSec.style.display = "";
      } else {
        const wallSec = document.getElementById("tft-rc-wall-controls-sec");
        if (wallSec) wallSec.style.display = "none";
      }

      // Measure tab (index 3) — arm distance measurement mode
      if (activeIdx === 3) {
        this.state.measureMode = !this.state.measureMode;
        if (this.state.measureMode) {
          this.showToast("Measure mode: click two points on the canvas to measure distance. Click tab again to exit.");
          this.canvas.style.cursor = "crosshair";
          this._measurePoints = [];
        } else {
          this.showToast("Measure mode off.");
          this.canvas.style.cursor = "";
          this._measurePoints = [];
          this.render();
        }
      } else {
        // Leaving measure — reset
        if (this.state.measureMode) {
          this.state.measureMode = false;
          this.canvas.style.cursor = "";
          this._measurePoints = [];
          this.render();
        }
      }
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => switchTab(idx));
    });
    switchTab(1);
  },

  // ── OPENING CONTROLS ─────────────────────────────────────────────────────
  bindOpeningControls: function() {
    // Opening type selector buttons (Door / Window / Archway)
    const openingBtns = document.querySelectorAll(".tft-rc-opening-btn");
    openingBtns.forEach((btn, idx) => {
      const typeMap = ["door", "window", "archway"];
      btn.addEventListener("click", () => {
        openingBtns.forEach(b => b.classList.remove("tft-rc-opening-btn--active"));
        btn.classList.add("tft-rc-opening-btn--active");
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (op) { op.type = typeMap[idx]; this.render(); }
        // sync the Type select in the form
        const typeSelect = document.querySelector(".tft-rc-select[aria-label='Opening type']");
        if (typeSelect) typeSelect.value = typeMap[idx].charAt(0).toUpperCase() + typeMap[idx].slice(1);
      });
    });

    // Type select dropdown
    const typeSelect = document.querySelector(".tft-rc-select[aria-label='Opening type']");
    if (typeSelect) {
      typeSelect.addEventListener("change", () => {
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (op) { op.type = typeSelect.value.toLowerCase(); this.render(); }
      });
    }

    // Wall select dropdown
    const wallSelect = document.querySelector(".tft-rc-select[aria-label='Target wall']");
    if (wallSelect) {
      wallSelect.addEventListener("change", () => {
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (op) { op.wall = wallSelect.value.toLowerCase(); this.render(); }
      });
    }

    // Position +/− buttons
    const posInput = document.querySelector(".tft-rc-input[aria-label='Opening position']");
    const posBtns  = posInput ? posInput.closest(".tft-rc-dim-wrap").querySelectorAll(".tft-rc-dim-btn") : [];
    if (posBtns.length === 2) {
      posBtns[0].addEventListener("click", () => {
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (!op) return;
        op.position = Math.max(0, parseFloat((op.position - 0.1).toFixed(2)));
        if (posInput) posInput.value = op.position.toFixed(1) + " m";
        this.render();
      });
      posBtns[1].addEventListener("click", () => {
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (!op) return;
        const maxPos = op.wall === "left" || op.wall === "right" ? this.state.roomLength : this.state.roomWidth;
        op.position = Math.min(maxPos - op.width, parseFloat((op.position + 0.1).toFixed(2)));
        if (posInput) posInput.value = op.position.toFixed(1) + " m";
        this.render();
      });
    }

    // Width +/− buttons
    const widInput = document.querySelector(".tft-rc-input[aria-label='Opening width']");
    const widBtns  = widInput ? widInput.closest(".tft-rc-dim-wrap").querySelectorAll(".tft-rc-dim-btn") : [];
    if (widBtns.length === 2) {
      widBtns[0].addEventListener("click", () => {
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (!op) return;
        op.width = Math.max(0.3, parseFloat((op.width - 0.1).toFixed(2)));
        if (widInput) widInput.value = Math.round(op.width * 100) + " cm";
        this.render();
      });
      widBtns[1].addEventListener("click", () => {
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (!op) return;
        op.width = Math.min(3.0, parseFloat((op.width + 0.1).toFixed(2)));
        if (widInput) widInput.value = Math.round(op.width * 100) + " cm";
        this.render();
      });
    }

    // Swing segment buttons (Left / Right / None)
    const swingBtns = document.querySelectorAll(".tft-rc-seg--sm .tft-rc-seg__btn--sm");
    const swingMap  = ["left", "right", "none"];
    swingBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        swingBtns.forEach(b => b.classList.remove("tft-rc-seg__btn--active"));
        btn.classList.add("tft-rc-seg__btn--active");
        const op = this.state.openings[this.state.selectedOpeningIdx];
        if (op) { op.swing = swingMap[idx]; this.render(); }
      });
    });

    // Add Opening button
    const addBtn = document.querySelector(".tft-rc-btn--add-opening");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        const typeSelect2 = document.querySelector(".tft-rc-select[aria-label='Opening type']");
        const wallSelect2 = document.querySelector(".tft-rc-select[aria-label='Target wall']");
        const newOp = {
          type: typeSelect2 ? typeSelect2.value.toLowerCase() : "door",
          wall: wallSelect2 ? wallSelect2.value.toLowerCase() : "bottom",
          position: 1.0,
          width: 0.9,
          swing: "right"
        };
        this.state.openings.push(newOp);
        this.state.selectedOpeningIdx = this.state.openings.length - 1;
        this.render();
        this.showToast("Opening added to " + newOp.wall + " wall.");
      });
    }

    // Delete opening button
    const delBtn = document.querySelector(".tft-rc-icon-btn[aria-label='Delete opening']");
    if (delBtn) {
      delBtn.addEventListener("click", () => {
        if (this.state.openings.length === 0) return;
        this.state.openings.splice(this.state.selectedOpeningIdx, 1);
        this.state.selectedOpeningIdx = Math.max(0, this.state.selectedOpeningIdx - 1);
        this.render();
        this.showToast("Opening removed.");
      });
    }
  },

  showToast: function(message) {
    const toast = document.getElementById("tft-rc-toast");
    if (!toast) return;

    toast.innerText = message;
    toast.classList.add("tft-rc-toast--visible");
    setTimeout(() => {
      toast.classList.remove("tft-rc-toast--visible");
    }, 3500);
  }
};

// Start Room Composer Engine on layout load
document.addEventListener("DOMContentLoaded", () => {
  TFT_Composer.init();
});


/* ==========================================================================
   CONSOLIDATED MODULE: material-lab.js
   ========================================================================== */
/**
 * TFT Material Lab Interactive Handler
 * Encapsulated in single Object Namespace to prevent global conflicts.
 */
const TFT_MaterialLab = {
  maxSamples: 5,
  selectedSamples: [],
  currentCategory: "all",
  currentSort: "featured",
  currentLayout: "grid",

  // Material Specimen Database
  materials: [
    { id: "fsc-oak", category: "woods", name: "French FSC Oak", img: "assets/img/fur_mat_oak.png", detail: "Natural Matte Lacquer", desc: "Sourced from sustainably managed oak forests in eastern France. Kiln-dried and sealed with organic matte protectant.", tag: "Workshop Cut" },
    { id: "smoked-chestnut", category: "woods", name: "Smoked Chestnut", img: "assets/img/fur_mat_oak.png", detail: "Hardwax Oil Patina", desc: "Smoked chestwood displaying deep molasses tones and accentuated grain structures. Finished with natural waxes.", tag: "Atelier Finish" },
    { id: "ebonized-ash", category: "woods", name: "Ebonized Ash", img: "assets/img/fur_mat_oak.png", detail: "Charcoal Stain Matte", desc: "Deep black coloration that preserves the rich tactile growth rings of mature Ash wood.", tag: "Charcoal Dyed" },
    { id: "italian-walnut", category: "woods", name: "Italian Walnut", img: "assets/img/fur_mat_oak.png", detail: "Warm Honey Oil", desc: "Select heartwood from northern Italy. Rich walnut tones with smooth, organic figuring.", tag: "Premium Select" },
    { id: "bleached-maple", category: "woods", name: "Bleached Maple", img: "assets/img/fur_mat_oak.png", detail: "Whitewashed Matte", desc: "Light, Nordic aesthetic maple wood treated with mineral whitewash to resist UV yellowing.", tag: "Nordic Series" },
    { id: "salvaged-teak", category: "woods", name: "Salvaged Teak", img: "assets/img/fur_mat_oak.png", detail: "Marine Grade Seal", desc: "Reclaimed architectural beams repurposed and smoothed, preserving centuries of weathering.", tag: "Reclaimed" },
    { id: "douglas-fir", category: "woods", name: "Douglas Fir", img: "assets/img/fur_mat_oak.png", detail: "Softwood Oil", desc: "Straight-grained softwood with subtle pink undertones, cured for architectural furniture stability.", tag: "Sustainably Grown" },
    { id: "cedarwood", category: "woods", name: "Aromatic Cedar", img: "assets/img/fur_mat_oak.png", detail: "Raw Untreated", desc: "Highly fragrant cedarwood blocks, left raw to naturally diffuse comforting wood tones.", tag: "Raw Specimen" },
    
    { id: "carrara-marble", category: "stones", name: "Carrara Arabescato", img: "assets/img/fur_mat_marble.png", detail: "Honed White Veined", desc: "Quarried in Tuscany, Italy. Features strong grey arabesque veining on a warm white background.", tag: "Tuscan Quarry" },
    { id: "noir-marquina", category: "stones", name: "Noir Marquina", img: "assets/img/fur_mat_marble.png", detail: "Polished Jet Black", desc: "Spanish deep black limestone punctuated by brilliant white calcite veins.", tag: "Spanish Import" },
    { id: "persian-travertine", category: "stones", name: "Persian Travertine", img: "assets/img/fur_mat_marble.png", detail: "Unfilled Honed", desc: "Classic beige travertine showing beautiful natural pores and raw sediment striations.", tag: "Sedimentary Rock" },
    { id: "verde-alpi", category: "stones", name: "Verde Alpi Marble", img: "assets/img/fur_mat_marble.png", detail: "Honed Deep Green", desc: "Exquisite alpine marble featuring dramatic forest green shades and fine light green web details.", tag: "Alpine Quarry" },
    { id: "bluestone", category: "stones", name: "Belgian Bluestone", img: "assets/img/fur_mat_marble.png", detail: "Fine Chiseled Edge", desc: "Extremely durable grey-blue limestone containing ancient fossilized shells.", tag: "Fossilized" },
    { id: "viola-marble", category: "stones", name: "Calacatta Viola", img: "assets/img/fur_mat_marble.png", detail: "High Gloss Polished", desc: "Bold, luxury marble with deep purple-cabernet tones swirling through creamy white fields.", tag: "Limited Run" },

    { id: "cozy-boucle", category: "fabrics", name: "Looped Wool Bouclé", img: "assets/img/fur_mat_linen.png", detail: "Warm Cream", desc: "Heavy, luxurious boucle fabric woven with organic wool fibers. Extremely tactile and soft.", tag: "Looped Fiber" },
    { id: "flax-linen", category: "fabrics", name: "Belgian Flax Linen", img: "assets/img/fur_mat_linen.png", detail: "Natural Slub Weave", desc: "Woven in Belgium from premium organic flax. Pre-washed for a soft drape and high breathability.", tag: "Loose Weave" },
    { id: "cotton-velvet", category: "fabrics", name: "Cotton Velvet", img: "assets/img/fur_mat_linen.png", detail: "Forest Green", desc: "Dense, low-pile cotton velvet with a rich matte finish and exceptional color depth.", tag: "Atelier Weave" },
    { id: "earth-tweed", category: "fabrics", name: "Speckled Tweed", img: "assets/img/fur_mat_linen.png", detail: "Earth Grey Mix", desc: "Traditional home-spun feel woven from heathered yarns of contrasting stone and sand tones.", tag: "Hardwearing" },
    { id: "oatmeal-chenille", category: "fabrics", name: "Woven Chenille", img: "assets/img/fur_mat_linen.png", detail: "Soft Oatmeal", desc: "Textured weave utilizing plush fuzzy yarns, offering a cozy modern touch.", tag: "Family Friendly" },
    { id: "sand-canvas", category: "fabrics", name: "Recycled PET Canvas", img: "assets/img/fur_mat_linen.png", detail: "Sand Grey", desc: "High-performance canvas woven from recycled water bottle fibers, water and stain repellent.", tag: "Outdoor Ready" },
    { id: "alpaca-wool", category: "fabrics", name: "Brushed Alpaca", img: "assets/img/fur_mat_linen.png", detail: "Pale Ivory", desc: "Silky, featherlight blend of baby alpaca wool for unparalleled luxury and cloud-like texture.", tag: "Premium Loft" },

    { id: "aniline-leather", category: "leathers", name: "Saddle Aniline Leather", img: "assets/img/fur_mat_leather.png", detail: "Saddle Tan", desc: "Aniline-dyed leather showcasing all the natural markings and pores of the hide. Will patina beautifully.", tag: "Full Grain" },
    { id: "obsidian-leather", category: "leathers", name: "Matte Nappa Leather", img: "assets/img/fur_mat_leather.png", detail: "Obsidian Black", desc: "Ultra-soft full grain calfskin leather finished with a sleek matte topcoat for clean aesthetics.", tag: "Nappa Select" },

    { id: "solid-brass", category: "metals", name: "Solid Brushed Brass", img: "assets/img/fur_mat_brass.png", detail: "Hand-Brushed Patina", desc: "Real structural brass blocks brushed by hand in our metalwork studio. Will naturally age.", tag: "Atelier Finish" },
    { id: "bronzed-steel", category: "metals", name: "Bronzed Steel", img: "assets/img/fur_mat_brass.png", detail: "Satin Patina", desc: "Oxidized structural steel with beautiful amber highlights and satin wax coat protection.", tag: "Architectural" },
    { id: "matte-aluminum", category: "metals", name: "Sandblasted Aluminum", img: "assets/img/fur_mat_brass.png", detail: "Silver Matte", desc: "Anodized aluminum alloy with a fine-grain frosted texture, resist fingerprints.", tag: "Contemporary" },

    { id: "raw-plaster", category: "finishes", name: "Roman Clay Plaster", img: "assets/img/fur_mat_boucle.png", detail: "Alabaster White", desc: "Eco-friendly natural clay plaster with gentle shade variations, bringing depth to walls.", tag: "Textured Clay" }
  ],

  init: function() {
    this.restoreSession();
    this.restoreLayout();
    this.setupBadges();
    this.renderGrid();
    this.setupFilters();
    this.setupSort();
    this.setupLayoutToggle();
    this.setupTrayToggle();
    this.setupForm();
  },

  setupBadges: function() {
    // Count items and update badges
    const totalCount = this.materials.length;
    const badgeAll = document.getElementById("tft-count-all");
    if (badgeAll) badgeAll.textContent = totalCount;

    const categories = ["woods", "stones", "fabrics", "leathers", "metals", "finishes"];
    categories.forEach(cat => {
      const count = this.materials.filter(m => m.category === cat).length;
      const badge = document.getElementById(`tft-count-${cat}`);
      if (badge) badge.textContent = count;
    });

    const gridItemsCount = document.getElementById("tft-grid-items-count");
    if (gridItemsCount) {
      gridItemsCount.textContent = `${totalCount} Materials`;
    }
  },

  renderGrid: function() {
    const grid = document.getElementById("tft-swatch-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // Filter
    let items = this.materials;
    if (this.currentCategory !== "all") {
      items = items.filter(m => m.category === this.currentCategory);
    }

    // Sort
    if (this.currentSort === "name-asc") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.currentSort === "name-desc") {
      items.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // default / featured: keep database order
      items.sort((a, b) => {
        const idOrder = this.materials.map(m => m.id);
        return idOrder.indexOf(a.id) - idOrder.indexOf(b.id);
      });
    }

    const gridItemsCount = document.getElementById("tft-grid-items-count");
    if (gridItemsCount) {
      gridItemsCount.textContent = `${items.length} Materials`;
    }

    if (this.currentLayout === "list") {
      grid.classList.add("tft-swatch-grid--list");
    } else {
      grid.classList.remove("tft-swatch-grid--list");
    }

    items.forEach(material => {
      const isSelected = this.selectedSamples.some(s => s.id === material.id);
      
      const card = document.createElement("article");
      card.className = `tft-swatch-card ${isSelected ? "tft-swatch-card--selected" : ""}`;
      card.setAttribute("data-id", material.id);
      card.setAttribute("data-category", material.category);

      // SVG icon representing category
      let categoryIcon = "";
      if (material.category === "woods") {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" stroke-dasharray="1 3"/><path d="M12 14c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"/><path d="M12 12l4 4"/></svg>`;
      } else if (material.category === "stones") {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3z"/><path d="M12 14c2.761 0 5-1.119 5-2.5S14.761 9 12 9 7 10.119 7 11.5s2.239 2.5 5 2.5z"/><path d="M12 9c2.21 0 4-.895 4-2s-1.79-2-4-2-4 .895-4 2 1.79 2 4 2z"/></svg>`;
      } else if (material.category === "fabrics") {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7V3a2 2 0 0 1 2 2"/><path d="M21 9.5L12 6 3 9.5c-.5.2-.5.8 0 1l9 3.5 9-3.5c.5-.2.5-.8 0-1z"/><path d="M5 11v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"/><path d="M9 11v10M15 11v10"/></svg>`;
      } else if (material.category === "leathers") {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C9.5 3.5 7.5 3 6 4 4.5 5 4.5 8 4 10c-.5 2-1.5 2.5-1.5 4.5s1 3.5 2 4.5c1 1 2.5.5 3.5.5 1 0 1.5.5 4-1 2.5 1.5 3 1 4 1 1 0 2.5.5 3.5-.5 1-1 2-2.5 2-4.5s-1-2.5-1.5-4.5c-.5-2-.5-5-2-6-1.5-1-3.5-.5-6-2z"/></svg>`;
      } else if (material.category === "metals") {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 17l2.5-6h11l2.5 6H2z"/><path d="M6 11l2-5h8l2 5H6z"/><path d="M20 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/></svg>`;
      } else if (material.category === "finishes") {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 3H6a2 2 0 0 0-2 2v4h16V5a2 2 0 0 0-2-2z"/><path d="M4 9h16v2H4V9z"/><path d="M10 11v8a2 2 0 0 0 4 0v-8h-4z"/></svg>`;
      } else {
        categoryIcon = `<svg class="tft-swatch-card__footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;
      }

      card.innerHTML = `
        <div class="tft-swatch-card__media">
          <button class="tft-swatch-card__add-btn" aria-label="Toggle specimen tray selection">${isSelected ? "✓" : "+"}</button>
          <img class="tft-swatch-card__img" src="${material.img}" alt="${material.name} Close-up Detail" width="300" height="300" loading="lazy">
        </div>
        <div class="tft-swatch-card__info">
          <div class="tft-swatch-card__info-main">
            <h3 class="tft-swatch-card__name">${material.name}</h3>
            <span class="tft-swatch-card__detail">${material.detail}</span>
          </div>
          <p class="tft-swatch-card__desc">${material.desc}</p>
          <div class="tft-swatch-card__footer">
            <span>${material.tag}</span>
            ${categoryIcon}
          </div>
        </div>
      `;

      // Event listener for the card selection toggle
      const addBtn = card.querySelector(".tft-swatch-card__add-btn");
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleSample(material);
      });

      card.addEventListener("click", () => {
        this.toggleSample(material);
      });

      grid.appendChild(card);
    });
  },

  setupFilters: function() {
    const tabs = document.querySelectorAll(".tft-mat-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("tft-mat-tab--active"));
        tab.classList.add("tft-mat-tab--active");
        this.currentCategory = tab.getAttribute("data-category");
        this.renderGrid();
      });
    });
  },

  setupSort: function() {
    const select = document.getElementById("tft-sort-select");
    if (select) {
      select.addEventListener("change", () => {
        this.currentSort = select.value;
        this.renderGrid();
      });
    }
  },

  setupTrayToggle: function() {
    const trigger = document.getElementById("tft-tray-trigger");
    const drawer = document.getElementById("tft-tray-drawer");
    const closeBtn = document.getElementById("tft-tray-close");

    if (trigger && drawer) {
      trigger.addEventListener("click", () => {
        drawer.classList.toggle("tft-tray-drawer--open");
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener("click", () => {
        drawer.classList.remove("tft-tray-drawer--open");
      });
    }
  },

  toggleSample: function(material) {
    const existsIndex = this.selectedSamples.findIndex(s => s.id === material.id);
    if (existsIndex !== -1) {
      // Remove
      this.selectedSamples.splice(existsIndex, 1);
      this.updateUIPostToggle(material.id, false);
      this.saveSession();
      this.showToast(`Removed ${material.name} from your swatch tray.`);
    } else {
      // Add
      if (this.selectedSamples.length >= this.maxSamples) {
        this.showToast(`Limit reached. You can select up to ${this.maxSamples} physical swatches.`);
        return;
      }
      this.selectedSamples.push(material);
      this.updateUIPostToggle(material.id, true);
      this.saveSession();
      this.showToast(`Added ${material.name} to your swatch tray.`);
    }
  },

  updateUIPostToggle: function(targetId, isAdded) {
    // Update the card class on grid
    const card = document.querySelector(`.tft-swatch-card[data-id="${targetId}"]`);
    if (card) {
      const addBtn = card.querySelector(".tft-swatch-card__add-btn");
      if (isAdded) {
        card.classList.add("tft-swatch-card--selected");
        if (addBtn) addBtn.textContent = "✓";
      } else {
        card.classList.remove("tft-swatch-card--selected");
        if (addBtn) addBtn.textContent = "+";
      }
    }

    // Update count overlay
    const countBadge = document.getElementById("tft-tray-count");
    if (countBadge) {
      countBadge.textContent = this.selectedSamples.length;
    }

    // Render list
    const listContainer = document.getElementById("tft-tray-list");
    const checkoutTrigger = document.getElementById("tft-tray-checkout-btn");

    if (listContainer) {
      listContainer.innerHTML = "";

      if (this.selectedSamples.length === 0) {
        listContainer.innerHTML = `
          <div class="tft-tray-sidebar__empty-placeholder">
            <svg class="tft-tray-sidebar__empty-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
            <span>Empty Tray</span>
          </div>
        `;
        if (checkoutTrigger) checkoutTrigger.disabled = true;
      } else {
        if (checkoutTrigger) checkoutTrigger.disabled = false;
        this.selectedSamples.forEach(sample => {
          const item = document.createElement("div");
          item.className = "tft-tray-item";
          item.innerHTML = `
            <img class="tft-tray-item__img" src="${sample.img}" alt="${sample.name} Close-up Detail" width="50" height="50" loading="lazy">
            <div class="tft-tray-item__details">
              <span class="tft-tray-item__name">${sample.name}</span>
              <span class="tft-tray-item__category">${sample.detail}</span>
            </div>
            <button class="tft-tray-item__remove" aria-label="Remove specimen">&times;</button>
          `;
          
          item.querySelector(".tft-tray-item__remove").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleSample(sample);
          });
          
          listContainer.appendChild(item);
        });
      }
    }
  },

  setupForm: function() {
    const form = document.getElementById("tft-tray-checkout-form");
    const overlay = document.getElementById("tft-tray-success-overlay");
    const orderBtn = document.getElementById("tft-tray-checkout-btn");
    const modal = document.getElementById("tft-tray-checkout-modal");
    const modalClose = document.getElementById("tft-modal-close");

    if (orderBtn && modal) {
      orderBtn.addEventListener("click", () => {
        modal.classList.add("tft-modal--open");
      });
    }

    if (modalClose && modal) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("tft-modal--open");
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (overlay) {
          overlay.classList.add("tft-tray-success-overlay--visible");
          
          setTimeout(() => {
            // Reset samples
            const oldSamples = [...this.selectedSamples];
            this.selectedSamples = [];
            this.saveSession();
            
            oldSamples.forEach(s => {
              this.updateUIPostToggle(s.id, false);
            });
            
            this.updateUIPostToggle(null, false);
            
            form.reset();
            overlay.classList.remove("tft-tray-success-overlay--visible");
            if (modal) modal.classList.remove("tft-modal--open");
          }, 3000);
        }
      });
    }
  },

  showToast: function(msg) {
    let container = document.getElementById("tft-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "tft-toast-container";
      container.className = "tft-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "tft-toast";
    toast.textContent = msg;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("tft-toast--visible");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("tft-toast--visible");
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3500);
  },

  saveSession: function() {
    try {
      localStorage.setItem("tft-selected-samples-redesign", JSON.stringify(this.selectedSamples));
    } catch (e) {
      console.warn("Storage warning: Session persistent state failed", e);
    }
  },

  restoreSession: function() {
    try {
      const stored = localStorage.getItem("tft-selected-samples-redesign");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.selectedSamples = parsed;
        }
      }
    } catch (e) {
      console.warn("Storage warning: Could not restore previous session", e);
    }
  },

  restoreLayout: function() {
    try {
      const stored = localStorage.getItem("tft-material-layout");
      if (stored === "list" || stored === "grid") {
        this.currentLayout = stored;
      }
    } catch (e) {
      console.warn("Storage warning: Could not restore previous layout", e);
    }
  },

  setupLayoutToggle: function() {
    const gridBtn = document.getElementById("tft-layout-grid-btn");
    const listBtn = document.getElementById("tft-layout-list-btn");
    const gridEl = document.getElementById("tft-swatch-grid");

    const updateLayoutUI = () => {
      if (this.currentLayout === "list") {
        if (gridEl) gridEl.classList.add("tft-swatch-grid--list");
        if (listBtn) listBtn.classList.add("tft-swatch-grid-controls__layout-btn--active");
        if (gridBtn) gridBtn.classList.remove("tft-swatch-grid-controls__layout-btn--active");
      } else {
        if (gridEl) gridEl.classList.remove("tft-swatch-grid--list");
        if (gridBtn) gridBtn.classList.add("tft-swatch-grid-controls__layout-btn--active");
        if (listBtn) listBtn.classList.remove("tft-swatch-grid-controls__layout-btn--active");
      }
    };

    // Apply layout on load
    updateLayoutUI();

    if (gridBtn) {
      gridBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.currentLayout !== "grid") {
          this.currentLayout = "grid";
          try {
            localStorage.setItem("tft-material-layout", "grid");
          } catch (e) {}
          updateLayoutUI();
        }
      });
    }

    if (listBtn) {
      listBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.currentLayout !== "list") {
          this.currentLayout = "list";
          try {
            localStorage.setItem("tft-material-layout", "list");
          } catch (e) {}
          updateLayoutUI();
        }
      });
    }
  }
};

// Automatic initialization on document loaded
const TFT_MaterialLab_InitAll = () => {
  TFT_MaterialLab.init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_MaterialLab_InitAll);
} else {
  TFT_MaterialLab_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: mega-menu.js
   ========================================================================== */
/**
 * Premium Furniture Shop Template - Mega Menu Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_MegaMenu = {
  backdrop: null,
  activeItem: null,
  openTimeout: null,
  closeTimeout: null,
  HEADER_HEIGHT_VAR: '--tft-header-total-height',

  init() {
    // Ensure backdrop exists
    this.backdrop = document.getElementById('tft-mega-backdrop');
    if (!this.backdrop) {
      this.backdrop = document.createElement('div');
      this.backdrop.className = 'tft-mega__backdrop';
      this.backdrop.id = 'tft-mega-backdrop';
      document.body.appendChild(this.backdrop);
    }

    // Measure header height and set CSS var
    this.updateHeaderHeight();
    window.addEventListener('resize', () => this.updateHeaderHeight(), { passive: true });

    // Wire up all triggers
    document.querySelectorAll('.tft-mega--has-dropdown').forEach(item => {
      const trigger = item.querySelector('.tft-mega__trigger');
      if (!trigger) return;

      // Hover open/close
      item.addEventListener('mouseenter', () => {
        if (this.closeTimeout) {
          clearTimeout(this.closeTimeout);
          this.closeTimeout = null;
        }
        if (this.openTimeout) {
          clearTimeout(this.openTimeout);
        }

        // Check if any mega menu is already open
        const anyOpen = Array.from(document.querySelectorAll('.tft-mega--has-dropdown')).some(el => el.dataset.open === 'true');

        if (anyOpen) {
          // Switch instantly without delay if another menu is already open
          document.querySelectorAll('.tft-mega--has-dropdown').forEach(other => {
            if (other !== item) this.close(other);
          });
          this.open(item);
        } else {
          // Otherwise use a small intent delay to prevent accidental swipe opening
          this.openTimeout = setTimeout(() => {
            this.open(item);
          }, 150);
        }
      });

      item.addEventListener('mouseleave', () => {
        if (this.openTimeout) {
          clearTimeout(this.openTimeout);
          this.openTimeout = null;
        }
        this.closeTimeout = setTimeout(() => {
          this.close(item);
        }, 200); // 200ms debounce window to cross gaps safely
      });

      // Click toggle (for touch / accessibility)
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (this.openTimeout) clearTimeout(this.openTimeout);
        if (this.closeTimeout) clearTimeout(this.closeTimeout);
        
        if (item.dataset.open === 'true') {
          this.close(item);
        } else {
          document.querySelectorAll('.tft-mega--has-dropdown').forEach(other => {
            if (other !== item) this.close(other);
          });
          this.open(item);
        }
      });

      // Keyboard navigation
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (this.openTimeout) clearTimeout(this.openTimeout);
          if (this.closeTimeout) clearTimeout(this.closeTimeout);
          if (item.dataset.open === 'true') {
            this.close(item);
          } else {
            document.querySelectorAll('.tft-mega--has-dropdown').forEach(other => {
              if (other !== item) this.close(other);
            });
            this.open(item);
          }
        }
        if (e.key === 'Escape') this.closeAll();
      });
    });

    // Backdrop click closes all
    this.backdrop.addEventListener('click', () => this.closeAll());

    // Click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.tft-mega--has-dropdown')) this.closeAll();
    });

    // Escape key global
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAll();
    });
  },

  updateHeaderHeight() {
    const header = document.querySelector('.tft-header, header');
    if (header) {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty(this.HEADER_HEIGHT_VAR, h + 'px');
    }
  },

  open(item) {
    if (this.activeItem && this.activeItem !== item) this.close(this.activeItem);
    this.activeItem = item;
    item.dataset.open = 'true';
    const trigger = item.querySelector('.tft-mega__trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    this.backdrop.classList.add('tft-mega__backdrop--visible');
    document.body.classList.add('tft-mega-open');
  },

  close(item) {
    item.dataset.open = 'false';
    const trigger = item.querySelector('.tft-mega__trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (this.activeItem === item) {
      this.activeItem = null;
      this.backdrop.classList.remove('tft-mega__backdrop--visible');
      document.body.classList.remove('tft-mega-open');
    }
  },

  closeAll() {
    if (this.openTimeout) {
      clearTimeout(this.openTimeout);
      this.openTimeout = null;
    }
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    document.querySelectorAll('.tft-mega--has-dropdown').forEach(item => this.close(item));
    this.backdrop.classList.remove('tft-mega__backdrop--visible');
    document.body.classList.remove('tft-mega-open');
  }
};

if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', () => TFT_MegaMenu.init());
} else {
  TFT_MegaMenu.init();
}


/* ==========================================================================
   CONSOLIDATED MODULE: product-single.js
   ========================================================================== */
/**
 * Premium Furniture Shop Template - Product Single Details Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Single = {
  // Products list (synced with unified database)
  products: window.TFT_Products,

  init: function() {
    const detailPane = document.getElementById("tft-prod-single-details");
    const mainProdImg = document.getElementById("tft-prod-single-image");
    if (!detailPane && !mainProdImg) return;

    const urlParams = new URLSearchParams(window.location.search);
    const prodId = parseInt(urlParams.get("id"), 10) || 1;
    const product = this.products.find(p => p.id === prodId) || this.products[0];

    // Populate premium header
    const headerBg = document.getElementById("tft-prod-single-header-bg");
    const headerTag = document.getElementById("tft-prod-single-header-tag");
    const headerTitle = document.getElementById("tft-prod-single-header-title");
    const headerDesc = document.getElementById("tft-prod-single-header-desc");

    if (headerBg) headerBg.src = product.image;
    if (headerTag) headerTag.textContent = product.category;
    if (headerTitle) headerTitle.textContent = product.title;
    if (headerDesc) headerDesc.textContent = product.desc || product.description;
    // Breadcrumb current name
    const bcName = document.getElementById("tft-ps-bc-name");
    if (bcName) bcName.textContent = product.title;

    // Populate product photo & detail panel
    if (mainProdImg) {
      mainProdImg.src = product.image;
      mainProdImg.alt = product.title;
    }

    // Bind 2D/3D Mode switches
    const btn2d = document.getElementById("tft-btn-view-2d");
    const btn3d = document.getElementById("tft-btn-view-3d");
    const pane2d = document.getElementById("tft-single-2d-pane");
    const pane3d = document.getElementById("tft-single-3d-pane");
    const cubeBlock = document.getElementById("tft-single-cube-block");
    const roomFloor = document.getElementById("tft-single-room-floor");

    if (btn2d && btn3d && pane2d && pane3d) {
      btn2d.addEventListener("click", () => {
        btn2d.classList.add("tft-ps-view-toggle__btn--active");
        btn3d.classList.remove("tft-ps-view-toggle__btn--active");
        pane2d.classList.remove("tft-ps-gallery__stage--hidden");
        pane3d.classList.add("tft-ps-gallery__stage--hidden");
      });

      btn3d.addEventListener("click", () => {
        btn3d.classList.add("tft-ps-view-toggle__btn--active");
        btn2d.classList.remove("tft-ps-view-toggle__btn--active");
        pane3d.classList.remove("tft-ps-gallery__stage--hidden");
        pane2d.classList.add("tft-ps-gallery__stage--hidden");

        // Apply metric calculations for 3D footprint pedestal
        const scale = 1.2;
        const pxWidth = Math.round(product.w * scale);
        const pxDepth = Math.round(product.d * scale);
        const pxHeight = Math.round(product.h * scale);

        if (cubeBlock) {
          cubeBlock.style.setProperty("--cube-w", `${pxWidth}px`);
          cubeBlock.style.setProperty("--cube-d", `${pxDepth}px`);
          cubeBlock.style.setProperty("--cube-h", `${pxHeight}px`);
          cubeBlock.style.setProperty("--cube-color", product.color || "var(--fur-primary)");
        }
      });
    }

    // Setup Drag-to-Orbit support on 3D Pedestal
    if (pane3d && roomFloor) {
      let isDragging = false;
      let startX = 0, startY = 0;
      let rx = 55, rz = -45;
      let startRx = 0, startRz = 0;

      pane3d.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startRx = rx;
        startRz = rz;
        e.preventDefault();
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        rz = startRz - dx * 0.5;
        rx = Math.max(15, Math.min(85, startRx - dy * 0.5));

        roomFloor.style.setProperty("--axo-rx", `${rx}deg`);
        roomFloor.style.setProperty("--axo-rz", `${rz}deg`);
      });

      window.addEventListener("mouseup", () => {
        isDragging = false;
      });
    }

    if (detailPane) {
      detailPane.innerHTML = `
      <span class="tft-ps-det__category">${product.category}</span>
      <h2 class="tft-ps-det__title">${product.title}</h2>

      <div class="tft-ps-det__rating" aria-label="Rating 4.8 out of 5">
        <span class="tft-ps-det__stars">★★★★<span style="opacity:.35">★</span></span>
        <span class="tft-ps-det__review-count">4.8 &nbsp;·&nbsp; 312 reviews</span>
      </div>

      <div class="tft-ps-det__price-row">
        <span class="tft-ps-det__price">₹${product.price.toFixed(2)}</span>
        <span class="tft-ps-det__price-orig">₹${(product.price * 1.2).toFixed(2)}</span>
        <span class="tft-ps-det__sale-badge">20% OFF</span>
      </div>

      <div class="tft-scarcity-ticker">
        <span class="tft-scarcity-ticker__dot"></span>
        <span>Only 3 items remaining — custom oiled on order.</span>
      </div>

      <p class="tft-ps-det__desc">${product.desc || product.description}</p>

      <div class="tft-ps-det__group">
        <span class="tft-ps-det__label">Select Finish</span>
        <div class="tft-ps-det__swatches">
          <button class="tft-ps-det__swatch tft-ps-det__swatch--active" style="--sw-bg:hsl(30,28%,62%)" onclick="TFT_Single.changeSwatch(this,'${product.material}')" title="${product.material}"></button>
          <button class="tft-ps-det__swatch" style="--sw-bg:hsl(0,0%,14%)" onclick="TFT_Single.changeSwatch(this,'Blackened Ash')" title="Blackened Ash"></button>
          <button class="tft-ps-det__swatch" style="--sw-bg:hsl(40,36%,86%)" onclick="TFT_Single.changeSwatch(this,'Natural Linen')" title="Natural Linen"></button>
        </div>
        <span class="tft-ps-det__swatch-name" id="tft-ps-finish-name">${product.material}</span>
      </div>

      <div class="tft-ps-det__specs">
        <div class="tft-ps-det__spec"><span>Width</span><strong>${product.w} cm</strong></div>
        <div class="tft-ps-det__spec"><span>Depth</span><strong>${product.d} cm</strong></div>
        <div class="tft-ps-det__spec"><span>Height</span><strong>${product.h} cm</strong></div>
        <div class="tft-ps-det__spec"><span>Origin</span><strong>EU Certified</strong></div>
      </div>

      <div class="tft-ps-det__qty-row">
        <span class="tft-ps-det__label">Quantity</span>
        <div class="tft-ps-det__stepper">
          <button type="button" class="tft-ps-det__step-btn" id="tft-ps-qty-minus" aria-label="Decrease">−</button>
          <input type="number" class="tft-ps-det__qty-input" id="tft-ps-qty" value="1" min="1" max="10" aria-label="Quantity">
          <button type="button" class="tft-ps-det__step-btn" id="tft-ps-qty-plus" aria-label="Increase">+</button>
        </div>
      </div>

      <div class="tft-ps-det__actions">
        <button class="tft-ps-det__add-btn" onclick="TFT_Single.addToCart(${product.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          Add to Cart
        </button>
        <a href="index-6.html?loadProduct=${product.id}" class="tft-ps-det__room-btn">Open in Room Composer →</a>
      </div>

      <div class="tft-ps-det__delivery">
        <div class="tft-ps-det__delivery-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Free shipping on orders $500+</div>
        <div class="tft-ps-det__delivery-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg> 30-day hassle-free returns</div>
        <div class="tft-ps-det__delivery-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Secure payment guaranteed</div>
      </div>

      <!-- Craft timeline -->
      <div class="tft-configurator-timeline">
        <div class="tft-configurator-timeline__step"><span class="tft-configurator-timeline__icon">1</span><div><h4 class="tft-configurator-timeline__step-title">Timber Curing &amp; Selection</h4><p class="tft-configurator-timeline__step-desc">FSC raw Oak inspected in workshop.</p></div></div>
        <div class="tft-configurator-timeline__step"><span class="tft-configurator-timeline__icon">2</span><div><h4 class="tft-configurator-timeline__step-title">Handcrafting &amp; Joinery</h4><p class="tft-configurator-timeline__step-desc">Hand-sanded and double-dowelled.</p></div></div>
        <div class="tft-configurator-timeline__step"><span class="tft-configurator-timeline__icon">3</span><div><h4 class="tft-configurator-timeline__step-title">Estimated Dispatch</h4><p class="tft-configurator-timeline__step-desc" id="tft-timeline-days">14 business days (${product.material})</p></div></div>
      </div>

      <!-- ARTISAN SPEC ACCORDIONS -->
      <div class="tft-product-accordion">
        <div class="tft-product-accordion__item">
          <button class="tft-product-accordion__btn" aria-expanded="false" onclick="TFT_Single.toggleAccordion(this)">
            <span>Craftsmanship & Sustainability</span>
            <svg class="fur-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="tft-product-accordion__panel">
            <p class="tft-product-accordion__content">
              Hand-built by Soren Lassen in our Copenhagen studio. Uses mortise-and-tenon joints, requiring zero metallic fasteners. Hand-rubbed with natural linseed oils to preserve natural wood respiration.
            </p>
          </div>
        </div>

        <div class="tft-product-accordion__item">
          <button class="tft-product-accordion__btn" aria-expanded="false" onclick="TFT_Single.toggleAccordion(this)">
            <span>Product Dimensions & Tolerance</span>
            <svg class="fur-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="tft-product-accordion__panel">
            <p class="tft-product-accordion__content">
              W: ${product.w} cm | D: ${product.d} cm | H: ${product.h} cm. Crafting tolerance +/- 2mm. Recommended weight limit up to 180kg. Designed for indoor residential climates.
            </p>
          </div>
        </div>
      </div>

      <div class="tft-shop-modal__actions" style="margin-top:24px;">
        <button class="tft-shop-modal__add-btn" onclick="TFT_Single.addToCart(${product.id})">Add to Shopping Cart</button>
        <a href="index-6.html?loadProduct=${product.id}" class="tft-shop-modal__composer-btn">Open in Room Composer &rarr;</a>
      </div>
    `;
    }

    this.renderRelated(product.category, product.id);
  },

  changeSwatch: function(btn, finish) {
    const swatches = btn.parentNode.querySelectorAll(".tft-shop-filters__swatch");
    swatches.forEach(s => s.classList.remove("tft-shop-filters__swatch--active"));
    btn.classList.add("tft-shop-filters__swatch--active");
    
    const timelineDays = document.getElementById("tft-timeline-days");
    if (timelineDays) {
      const randomDays = Math.floor(Math.random() * 8) + 10;
      timelineDays.textContent = `${randomDays} business days (Handcrafting for ${finish})`;
    }
  },

  toggleAccordion: function(btn) {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    const panel = btn.nextElementSibling;
    if (panel) {
      if (!expanded) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    }
  },

  addToCart: function(id) {
    if (window.FUR_Theme && typeof window.FUR_Theme.addToCart === "function") {
      window.FUR_Theme.addToCart(id);
      const cartDrawer = document.getElementById("fur-cart-drawer");
      if (cartDrawer) {
        cartDrawer.setAttribute("aria-hidden", "false");
      }
    }
  },

  renderRelated: function(category, currentId) {
    const relatedGrid = document.getElementById("tft-prod-single-related");
    if (!relatedGrid) return;

    const related = this.products.filter(p => p.id !== currentId).slice(0, 4);
    relatedGrid.innerHTML = "";

    related.forEach(prod => {
      const cardMarkup = `
        <a href="product-single.html?id=${prod.id}" class="tft-related-card-anchor" style="text-decoration: none; color: inherit; display: block;">
          <article class="tft-related-card">
            <div class="tft-related-card__image-wrap">
              <img class="tft-related-card__img" src="${prod.image}" alt="${prod.title}" width="300" height="300" loading="lazy">
              <div class="tft-related-card__overlay">
                <span class="tft-related-card__overlay-btn">Explore Details &rarr;</span>
              </div>
            </div>
            <div class="tft-related-card__body">
              <span class="tft-related-card__category">${prod.category}</span>
              <h3 class="tft-related-card__title">${prod.title}</h3>
              <div class="tft-related-card__divider"></div>
              <div class="tft-related-card__footer">
                <span class="tft-related-card__price">₹${prod.price.toFixed(2)}</span>
                <span class="tft-related-card__badge">Solid Wood</span>
              </div>
            </div>
          </article>
        </a>
      `;
      relatedGrid.insertAdjacentHTML("beforeend", cardMarkup);
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    TFT_Single.init();
  });
} else {
  TFT_Single.init();
}


/* ==========================================================================
   CONSOLIDATED MODULE: provenance.js
   ========================================================================== */
/**
 * Savoré Provenance & Sourcing - Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_Provenance = {
  // Initialize Page Interactivity
  init: function() {
    // Close popovers if clicked outside the viewer area
    document.addEventListener("click", (e) => {
      const isPopoverTrigger = e.target.closest(".tft-hotspot__trigger");
      const isPopover = e.target.closest(".tft-hotspot__popover");
      if (!isPopoverTrigger && !isPopover) {
        this.closeHotspots();
      }
    });

    // Close sample drawer when clicking on the overlay backdrop (outside the drawer)
    const swatchOverlay = document.getElementById("tft-swatch-modal");
    if (swatchOverlay) {
      swatchOverlay.addEventListener("click", (e) => {
        // Only close if the click is directly on the overlay, not the inner drawer panel
        if (e.target === swatchOverlay) {
          this.closeSamplesDrawer();
        }
      });
    }
  },

  // Toggle dynamic pulsing hotspots — fixes + button overlapping popover
  toggleHotspot: function(id, triggerBtn) {
    const popover = document.getElementById(`tft-hotspot-popover-${id}`);
    if (!popover) return;

    const isCurrentlyOpen = popover.getAttribute("aria-hidden") === "false";

    // Close all other popovers and reset z-index on all hotspot wrappers first
    this.closeHotspots();

    if (!isCurrentlyOpen) {
      // Open this popover
      popover.setAttribute("aria-hidden", "false");
      triggerBtn.classList.add("tft-hotspot__trigger--active");

      // Switch + to × so the trigger button doesn't overlap the popover content
      const plusSpan = triggerBtn.querySelector(".tft-hotspot__plus");
      if (plusSpan) plusSpan.textContent = "×";

      // Raise this hotspot's wrapper above sibling hotspots to prevent stacking overlap
      const parentHotspot = triggerBtn.closest(".tft-hotspot");
      if (parentHotspot) {
        parentHotspot.style.zIndex = "50";
      }
    }
    // If it was open, closeHotspots() already handled closing it above
  },

  // Close all hotspot info boxes and reset all trigger states
  closeHotspots: function() {
    const popovers = document.querySelectorAll(".tft-hotspot__popover");
    popovers.forEach(popover => popover.setAttribute("aria-hidden", "true"));

    const triggers = document.querySelectorAll(".tft-hotspot__trigger");
    triggers.forEach(trigger => {
      trigger.classList.remove("tft-hotspot__trigger--active");
      // Restore + icon
      const plusSpan = trigger.querySelector(".tft-hotspot__plus");
      if (plusSpan) plusSpan.textContent = "+";
    });

    // Reset z-index on all hotspot wrappers
    const hotspots = document.querySelectorAll(".tft-hotspot");
    hotspots.forEach(hs => { hs.style.zIndex = ""; });
  },

  // Open Craft Video Documentary Modal
  playProcessVideo: function() {
    const modal = document.getElementById("tft-video-modal");
    const iframe = document.getElementById("tft-video-iframe");
    if (modal && iframe) {
      iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  },

  // Close Craft Video Modal
  closeVideoModal: function() {
    const modal = document.getElementById("tft-video-modal");
    const iframe = document.getElementById("tft-video-iframe");
    if (modal && iframe) {
      iframe.removeAttribute("src");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  },

  // Open Samples Order side drawer — WITHOUT triggering the mobile menu overlay
  openSamplesDrawer: function() {
    const drawer = document.getElementById("tft-swatch-modal");
    if (drawer) {
      drawer.setAttribute("aria-hidden", "false");
      // Lock body scroll without using the mobile menu overlay class
      document.body.style.overflow = "hidden";
    }
  },

  // Close Samples drawer
  closeSamplesDrawer: function() {
    const drawer = document.getElementById("tft-swatch-modal");
    if (drawer) {
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  },

  // Visual checkbox active card toggle
  updateSwatchCheckbox: function(checkboxEl) {
    const labelCard = checkboxEl.closest(".tft-swatch-option");
    if (!labelCard) return;

    if (checkboxEl.checked) {
      labelCard.style.borderColor = "var(--fur-primary)";
      labelCard.style.backgroundColor = "var(--fur-bg-secondary)";
    } else {
      labelCard.style.borderColor = "var(--fur-border)";
      labelCard.style.backgroundColor = "transparent";
    }
  },

  // Submit Swatches sample order form
  submitSwatchesOrder: function(event) {
    event.preventDefault();

    // Check if at least one swatch is selected
    const checkedSwatches = document.querySelectorAll('input[name="swatches"]:checked');
    if (checkedSwatches.length === 0) {
      alert("Please select at least one material swatch sample.");
      return;
    }

    // Dismiss drawer and trigger success dialog
    this.closeSamplesDrawer();
    const successModal = document.getElementById("tft-swatch-success");
    if (successModal) {
      successModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  },

  // Close success window
  dismissSwatchSuccess: function() {
    const successModal = document.getElementById("tft-swatch-success");
    if (successModal) {
      successModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    // Reset swatch checkboxes
    const form = document.getElementById("tft-swatches-form");
    if (form) {
      form.reset();
      const swcards = document.querySelectorAll(".tft-swatch-option");
      swcards.forEach(card => {
        card.style.borderColor = "var(--fur-border)";
        card.style.backgroundColor = "transparent";
      });
    }
  }
};

// Initializer
const TFT_Provenance_InitAll = () => {
  TFT_Provenance.init();

  // Event Delegation for Provenance actions
  document.addEventListener("click", (event) => {
    // Play video
    if (event.target.closest("[data-tft-click='prov-play-video']")) {
      TFT_Provenance.playProcessVideo();
    }

    // Toggle hotspot — stop propagation so the document close listener doesn't fire
    const hotspotBtn = event.target.closest("[data-tft-click='prov-toggle-hotspot']");
    if (hotspotBtn) {
      event.stopPropagation();
      const id = hotspotBtn.getAttribute("data-tft-id");
      TFT_Provenance.toggleHotspot(id, hotspotBtn);
    }

    // Close hotspots
    if (event.target.closest("[data-tft-click='prov-close-hotspots']")) {
      TFT_Provenance.closeHotspots();
    }

    // Open samples
    if (event.target.closest("[data-tft-click='prov-open-samples']")) {
      TFT_Provenance.openSamplesDrawer();
    }

    // Close video
    if (event.target.closest("[data-tft-click='prov-close-video']")) {
      TFT_Provenance.closeVideoModal();
    }

    // Close samples
    if (event.target.closest("[data-tft-click='prov-close-samples']")) {
      TFT_Provenance.closeSamplesDrawer();
    }

    // Dismiss success
    if (event.target.closest("[data-tft-click='prov-dismiss-success']")) {
      TFT_Provenance.dismissSwatchSuccess();
    }

    // Close video modal on overlay click
    const videoModal = document.getElementById("tft-video-modal");
    if (videoModal && event.target === videoModal) {
      TFT_Provenance.closeVideoModal();
    }
  });

  // Watch update checkbox change
  document.addEventListener("change", (event) => {
    const swatchCheck = event.target.closest("[data-tft-change='prov-update-swatch']");
    if (swatchCheck) {
      TFT_Provenance.updateSwatchCheckbox(swatchCheck);
    }
  });

  // Form submit
  document.addEventListener("submit", (event) => {
    const swatchesForm = event.target.closest("[data-tft-submit='prov-submit-swatches']");
    if (swatchesForm) {
      TFT_Provenance.submitSwatchesOrder(event);
    }
  });

  // Escape key closes modals
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      TFT_Provenance.closeHotspots();
      TFT_Provenance.closeSamplesDrawer();
      TFT_Provenance.closeVideoModal();
      TFT_Provenance.dismissSwatchSuccess();
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_Provenance_InitAll);
} else {
  TFT_Provenance_InitAll();
}


/* ==========================================================================
   CONSOLIDATED MODULE: shop-complete-room.js
   ========================================================================== */
/**
 * SOVEREIGN ELITE MANIFESTO Section IV & V
 * Namespace: TFT_CompleteRoom
 * Bulk cart operations matching global FUR_Theme structures.
 */
const TFT_CompleteRoom = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    const trigger = document.getElementById("tft-cpt-add-all-trigger");
    if (trigger) {
      trigger.addEventListener("click", () => {
        this.addEntireRoomSet();
      });
    }
  },

  /**
   * Bulk-adds all 6 room bundle elements to the theme state cart
   */
  addEntireRoomSet() {
    if (typeof FUR_Theme === "undefined" || !FUR_Theme.state || !FUR_Theme.state.cart) {
      alert("Shopping cart is temporarily unavailable.");
      return;
    }

    const items = [
      { id: "com-sofa", title: "Como Modular Sofa", price: 2890, image: "assets/img/fur_sofa_linen.png" },
      { id: "ron-table", title: "Rondo Coffee Table", price: 1090, image: "assets/img/fp_table_coffee_travertine.png" },
      { id: "cal-chair", title: "Calma Lounge Chair", price: 1290, image: "assets/img/fur_chair_leather_lounge.png" },
      { id: "nar-side", title: "Nara Credenza Sideboard", price: 2490, image: "assets/img/fur_prod_sideboard_dark.png" },
      { id: "kyo-lamp", title: "Kyoto Table Lamp", price: 650, image: "assets/img/fur_prod_floor_lamp.png" },
      { id: "nai-rug", title: "Naima Jute Rug", price: 190, image: "assets/img/fur_prod_rug.png" }
    ];

    // Push each items
    items.forEach(item => {
      const existing = FUR_Theme.state.cart.find(c => c.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        FUR_Theme.state.cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          quantity: 1
        });
      }
    });

    // Update global drawer view
    FUR_Theme.renderCart();

    // Trigger cart drawer open by setting aria-hidden="false" or adding open class
    const drawer = document.getElementById("fur-cart-drawer");
    if (drawer) {
      drawer.classList.add("fur-cart-drawer--open");
      drawer.setAttribute("aria-hidden", "false");
    }
  },

  /**
   * Add a single item element to the cart
   */
  addItemToCart(id, title, price, image) {
    if (typeof FUR_Theme === "undefined" || !FUR_Theme.state || !FUR_Theme.state.cart) {
      return;
    }

    const existing = FUR_Theme.state.cart.find(c => c.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      FUR_Theme.state.cart.push({ id, title, price, image, quantity: 1 });
    }

    FUR_Theme.renderCart();

    const drawer = document.getElementById("fur-cart-drawer");
    if (drawer) {
      drawer.classList.add("fur-cart-drawer--open");
      drawer.setAttribute("aria-hidden", "false");
    }
  }
};

const TFT_CompleteRoom_InitAll = () => {
  TFT_CompleteRoom.init();

  // Event Delegation for Single Room Item additions
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-tft-click='add-room-item']");
    if (btn) {
      const id = btn.getAttribute("data-tft-id");
      const title = btn.getAttribute("data-tft-title");
      const price = parseInt(btn.getAttribute("data-tft-price"), 10);
      const image = btn.getAttribute("data-tft-image");
      TFT_CompleteRoom.addItemToCart(id, title, price, image);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_CompleteRoom_InitAll);
} else {
  TFT_CompleteRoom_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: shop-editorial.js
   ========================================================================== */
/**
 * Editorial Shop Controller
 * Encapsulated Namespace | ES2026 Modern Spec | Strict Mode
 */
const TFT_EditorialShop = {
  // Map of products and their matching cart image paths
  imageMap: {
    "Como Cozy Bouclé Sofa": "assets/img/fur_sofa_boucle.png",
    "Travertine Block Coffee Table": "assets/img/fur_pairing_travertine_walnut.png",
    "Rondo Oak Accent Chair": "assets/img/fur_hero_boucle_chair.png",
    "Calma Brass Floor Lamp": "assets/img/fur_prod_floor_lamp.png",
    "Tevere Oak Dining Table": "assets/img/fur_mat_oak.png",
    "Woven Cord Dining Chair": "assets/img/fur_prod_dining_chair.png",
    "Organic Stoneware Carafe": "assets/img/fur_prod_vase.png",
    "Arc Oak Sideboard": "assets/img/fur_prod_sideboard_dark.png"
  },

  // Initialize page interactions
  init: function() {
    this.setupIntersectionObserver();
    this.setupCarouselDrag();
  },

  // Scroll carousel tracks horizontally
  scrollCarousel: function(trackId, direction) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const scrollAmount = 320; // card width + gap
    const targetScroll = direction === "next" 
      ? track.scrollLeft + scrollAmount 
      : track.scrollLeft - scrollAmount;

    track.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  },

  // Enable drag to scroll for mobile/mouse users on carousels
  setupCarouselDrag: function() {
    const tracks = document.querySelectorAll(".tft-eds-carousel__track");
    tracks.forEach(track => {
      let isDown = false;
      let startX;
      let scrollLeft;

      track.addEventListener("mousedown", (e) => {
        isDown = true;
        track.classList.add("tft-eds-carousel__track--dragging");
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });

      track.addEventListener("mouseleave", () => {
        isDown = false;
        track.classList.remove("tft-eds-carousel__track--dragging");
      });

      track.addEventListener("mouseup", () => {
        isDown = false;
        track.classList.remove("tft-eds-carousel__track--dragging");
      });

      track.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed modifier
        track.scrollLeft = scrollLeft - walk;
      });
    });
  },

  // Setup reveal transitions on scroll using IntersectionObserver
  setupIntersectionObserver: function() {
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px"
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tft-eds-reveal--visible");
          obs.unobserve(entry.target);
        }
      });
    }, options);

    // Track targets
    const revealTargets = document.querySelectorAll(
      ".tft-eds-hero__content, .tft-eds-hero__media, .tft-eds-section__media, .tft-eds-section__content, .tft-eds-promo__content"
    );

    revealTargets.forEach(target => {
      target.classList.add("tft-eds-reveal");
      observer.observe(target);
    });
  },

  // Add Item to global FUR_Theme Cart System
  addToCart: function(title, price) {
    if (typeof FUR_Theme === "undefined" || !FUR_Theme.state) {
      alert(`${title} added to cart!`);
      return;
    }

    const cart = FUR_Theme.state.cart || [];
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      // Find matching image or fallback to a default product image
      const imagePath = this.imageMap[title] || "assets/img/fur_prod_vase.png";
      // Generate a unique ID
      const newId = Date.now() + Math.floor(Math.random() * 1000);
      
      cart.push({
        id: newId,
        title: title,
        price: parseFloat(price),
        image: imagePath,
        quantity: 1
      });
    }

    // Trigger re-render of global cart
    if (typeof FUR_Theme.renderCart === "function") {
      FUR_Theme.renderCart();
    }

    // Open Cart Drawer
    const cartDrawer = document.getElementById("fur-cart-drawer");
    if (cartDrawer) {
      cartDrawer.setAttribute("aria-hidden", "false");
    }
  }
};

// Auto-initialize when content is ready
const TFT_EditorialShop_InitAll = () => {
  TFT_EditorialShop.init();

  // Event Delegation for Editorial Shop Actions
  document.addEventListener("click", (event) => {
    // 1. Scroll carousel direction
    const scrollBtn = event.target.closest("[data-tft-click='editorial-scroll']");
    if (scrollBtn) {
      const carouselId = scrollBtn.getAttribute("data-tft-carousel");
      const dir = scrollBtn.getAttribute("data-tft-dir");
      TFT_EditorialShop.scrollCarousel(carouselId, dir);
    }

    // 2. Add to cart
    const addBtn = event.target.closest("[data-tft-click='editorial-add-to-cart']");
    if (addBtn) {
      const title = addBtn.getAttribute("data-tft-title");
      const price = parseInt(addBtn.getAttribute("data-tft-price"), 10);
      TFT_EditorialShop.addToCart(title, price);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_EditorialShop_InitAll);
} else {
  TFT_EditorialShop_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: shop-home.js
   ========================================================================== */
/**
 * SOVEREIGN ELITE MANIFESTO Section IV & V
 * Namespace: TFT_ShopHome
 * Spatial hotspot interactive viewer.
 */
const TFT_ShopHome = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    // Dismiss popups when clicking outside the spot wrap
    document.addEventListener("click", (e) => {
      const activePopup = document.querySelector(".tft-sth-popup--active");
      if (activePopup) {
        const spotWrap = activePopup.closest(".tft-sth-spot-wrap");
        if (!spotWrap || !spotWrap.contains(e.target)) {
          activePopup.classList.remove("tft-sth-popup--active");
          const btn = spotWrap.querySelector(".tft-sth-spot");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  },

  /**
   * Toggles the popup of a clicked hotspot dot
   */
  togglePopup(btn) {
    const parent = btn.closest(".tft-sth-spot-wrap");
    if (!parent) return;

    const popup = parent.querySelector(".tft-sth-popup");
    if (!popup) return;

    const isActive = popup.classList.contains("tft-sth-popup--active");

    // Close others
    const activePopups = document.querySelectorAll(".tft-sth-popup--active");
    activePopups.forEach(p => {
      p.classList.remove("tft-sth-popup--active");
      const b = p.closest(".tft-sth-spot-wrap").querySelector(".tft-sth-spot");
      if (b) b.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      popup.classList.add("tft-sth-popup--active");
      btn.setAttribute("aria-expanded", "true");
    } else {
      popup.classList.remove("tft-sth-popup--active");
      btn.setAttribute("aria-expanded", "false");
    }

    // Stop propagation so document click doesn't close it instantly
    event.stopPropagation();
  },

  /**
   * Pushes the hotspot item directly to global cart state
   */
  addItem(id, title, price, image) {
    if (typeof FUR_Theme === "undefined" || !FUR_Theme.state || !FUR_Theme.state.cart) {
      return;
    }

    const existing = FUR_Theme.state.cart.find(c => c.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      FUR_Theme.state.cart.push({ id, title, price, image, quantity: 1 });
    }

    FUR_Theme.renderCart();

    const drawer = document.getElementById("fur-cart-drawer");
    if (drawer) {
      drawer.classList.add("fur-cart-drawer--open");
      drawer.setAttribute("aria-hidden", "false");
    }
  }
};

const TFT_ShopHome_InitAll = () => {
  TFT_ShopHome.init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_ShopHome_InitAll);
} else {
  TFT_ShopHome_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: shop-materials.js
   ========================================================================== */
/**
 * SOVEREIGN ELITE MANIFESTO Section IV & V
 * Namespace: TFT_MaterialShop
 * Tab switches & cart additions.
 */
const TFT_MaterialShop = {
  init() {
  },

  /**
   * Switches the active material tab pane
   */
  switchTab(materialSlug) {
    // 1. Deactivate all tabs
    const tabs = document.querySelectorAll(".tft-mat-tab");
    tabs.forEach(tab => {
      tab.classList.remove("tft-mat-tab--active");
      tab.setAttribute("aria-selected", "false");
    });

    // 2. Deactivate all panes
    const panes = document.querySelectorAll(".tft-mat-pane");
    panes.forEach(pane => {
      pane.classList.remove("tft-mat-pane--active");
    });

    // 3. Activate selected tab
    const activeTab = document.getElementById(`tft-tab-${materialSlug}`);
    if (activeTab) {
      activeTab.classList.add("tft-mat-tab--active");
      activeTab.setAttribute("aria-selected", "true");
    }

    // 4. Activate selected pane with a fade animation
    const activePane = document.getElementById(`tft-mat-pane-${materialSlug}`);
    if (activePane) {
      activePane.classList.add("tft-mat-pane--active");
      
      // Animate items
      const items = activePane.querySelectorAll(".tft-mat-item-card");
      items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(15px)";
        setTimeout(() => {
          item.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 80);
      });
    }
  },

  /**
   * Pushes selected item into the global cart drawer
   */
  addItem(id, title, price, image) {
    if (typeof FUR_Theme === "undefined" || !FUR_Theme.state || !FUR_Theme.state.cart) {
      return;
    }

    const existing = FUR_Theme.state.cart.find(c => c.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      FUR_Theme.state.cart.push({ id, title, price, image, quantity: 1 });
    }

    // Update bag
    FUR_Theme.renderCart();

    // Slide open drawer
    const drawer = document.getElementById("fur-cart-drawer");
    if (drawer) {
      drawer.classList.add("fur-cart-drawer--open");
      drawer.setAttribute("aria-hidden", "false");
    }
  }
};

const TFT_MaterialShop_InitAll = () => {
  TFT_MaterialShop.init();

  // Event Delegation for Material Shop Actions
  document.addEventListener("click", (event) => {
    // 1. Tab switching
    const tabBtn = event.target.closest("[data-tft-click='switch-tab']");
    if (tabBtn) {
      const tabId = tabBtn.getAttribute("data-tft-tab");
      TFT_MaterialShop.switchTab(tabId);
    }

    // 2. Add material item to cart
    const addBtn = event.target.closest("[data-tft-click='add-material-item']");
    if (addBtn) {
      const id = addBtn.getAttribute("data-tft-id");
      const title = addBtn.getAttribute("data-tft-title");
      const price = parseInt(addBtn.getAttribute("data-tft-price"), 10);
      const image = addBtn.getAttribute("data-tft-image");
      TFT_MaterialShop.addItem(id, title, price, image);
    }

    // 3. Request Swatch Kit
    const swatchBtn = event.target.closest("#tft-sampler-request-btn");
    if (swatchBtn) {
      const originalText = swatchBtn.textContent;
      swatchBtn.textContent = "Swatch Box Added ✓";
      swatchBtn.style.backgroundColor = "var(--fur-primary-hover)";
      setTimeout(() => {
        swatchBtn.textContent = originalText;
        swatchBtn.style.backgroundColor = "";
      }, 3000);
      TFT_MaterialShop.addItem("swatch-kit", "Atelier Material Swatch Kit", 15, "assets/img/atelier_swatch_box.png");
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_MaterialShop_InitAll);
} else {
  TFT_MaterialShop_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: shop-rooms.js
   ========================================================================== */
/**
 * SOVEREIGN ELITE MANIFESTO Section IV & V
 * Namespace: TFT_RoomShop
 * Modern ES2026 & IntersectionObserver
 */
const TFT_RoomShop = {
  init() {
    this.setupIntersectionObserver();
  },

  /**
   * Set up scroll reveals for room cards using native IntersectionObserver
   */
  setupIntersectionObserver() {
    const cards = document.querySelectorAll(".tft-rms-card");
    if (!cards.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add("tft-rms-card--visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      // Set initial state
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      observer.observe(card);
    });
  }
};

const TFT_RoomShop_InitAll = () => {
  TFT_RoomShop.init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", TFT_RoomShop_InitAll);
} else {
  TFT_RoomShop_InitAll();
}

/* ==========================================================================
   CONSOLIDATED MODULE: shop-split.js
   ========================================================================== */
/**
 * SOVEREIGN ELITE MANIFESTO Section IV & V
 * Namespace: TFT_ShopSplit
 * Pure ES2026, Strict Mode, No Globals
 */

const TFT_ShopSplit = {
  customProducts: [
    {
      id: 101,
      title: "Como Sofa",
      price: 2890.00,
      category: "lounge",
      homeCategory: "living-room",
      categoryLabel: "Sofa",
      image: "assets/img/fur_sofa_boucle.png",
      w: 240, d: 100, h: 75,
      color: "hsl(36, 30%, 90%)",
      material: "Cozy Bouclé",
      availability: "in-stock",
      desc: "Large modular lounge sofa featuring premium white boucle loop wool fabric and an organic low-slung architectural shape."
    },
    {
      id: 102,
      title: "Calma Lounge Chair",
      price: 1390.00,
      category: "lounge",
      homeCategory: "living-room",
      categoryLabel: "Lounge Chair",
      image: "assets/img/fur_chair_leather_lounge.png",
      w: 82, d: 86, h: 80,
      color: "hsl(32, 31%, 42%)",
      material: "Aniline Leather",
      availability: "in-stock",
      desc: "A sleek, low-slung lounge chair wrapped in rich cognac aniline saddle leather over a charcoal ash wood structure."
    },
    {
      id: 103,
      title: "Rondo Coffee Table",
      price: 1090.00,
      category: "tables",
      homeCategory: "living-room",
      categoryLabel: "Coffee Table",
      image: "assets/img/fp_table_coffee_travertine.png",
      w: 110, d: 110, h: 38,
      color: "hsl(34, 28%, 81%)",
      material: "Travertine Stone",
      availability: "in-stock",
      desc: "Circular travertine coffee table featuring raw texture, quiet structural thickness, and three massive cylindrical leg columns."
    },
    {
      id: 104,
      title: "Nara Sideboard",
      price: 2490.00,
      category: "storage",
      homeCategory: "living-room",
      categoryLabel: "Sideboard",
      image: "assets/img/fur_prod_sideboard_dark.png",
      w: 180, d: 45, h: 72,
      color: "hsl(32, 28%, 76%)",
      material: "Oak",
      availability: "custom-order",
      desc: "Solid white oak sideboard featuring four drawers, vertical fluid timber fluted sliding doors, and architectural iron hardware."
    },
    {
      id: 105,
      title: "Kyoto Table Lamp",
      price: 450.00,
      category: "lighting",
      homeCategory: "living-room",
      categoryLabel: "Table Lamp",
      image: "assets/img/fur_prod_nightstand.png",
      w: 32, d: 32, h: 58,
      color: "hsl(33, 16%, 77%)",
      material: "Ceramic",
      availability: "in-stock",
      desc: "Artisanal sandy ceramic base paired with a hand-woven organic flax linen shade distributing warm ambient reading light."
    },
    {
      id: 106,
      title: "Terra Ceramic Vase",
      price: 120.00,
      category: "decor",
      homeCategory: "living-room",
      categoryLabel: "Vase",
      image: "assets/img/fur_prod_vase.png",
      w: 22, d: 22, h: 38,
      color: "hsl(32, 10%, 61%)",
      material: "Ceramic",
      availability: "in-stock",
      desc: "Hand-thrown earthenware clay vase with a rustic plaster slip surface texture and organic handle detail."
    },
    {
      id: 107,
      title: "Jute Rug",
      price: 390.00,
      category: "decor",
      homeCategory: "living-room",
      categoryLabel: "Rug",
      image: "assets/img/fur_prod_rug.png",
      w: 240, d: 340, h: 1,
      color: "hsl(38, 14%, 90%)",
      material: "Linen",
      availability: "in-stock",
      desc: "Flat-woven floor rug crafted with 100% natural organic jute fibers, showcasing subtle light oatmeal border details."
    },
    {
      id: 108,
      title: "Abstract Wall Art",
      price: 280.00,
      category: "decor",
      homeCategory: "living-room",
      categoryLabel: "Wall Art",
      image: "assets/img/material_room_moodboard.png",
      w: 90, d: 4, h: 120,
      color: "hsl(36, 25%, 69%)",
      material: "Linen",
      availability: "custom-order",
      desc: "Minimalist plaster abstract canvas painting framed in thin profile solid white oak timber borders."
    }
  ],

  state: {
    searchQuery: "",
    selectedCategories: [],
    selectedMaterial: "all",
    maxPrice: 4000,
    sortBy: "default",
    selectedAvailability: ["in-stock", "custom-order"]
  },

  init() {
    this.injectCustomProducts();
    this.initFilterStates();
    this.bindFilterEvents();
    this.filterCatalog();
  },

  injectCustomProducts() {
    if (window.TFT_Products) {
      this.customProducts.forEach(prod => {
        if (!window.TFT_Products.find(p => p.id === prod.id)) {
          window.TFT_Products.push(prod);
        }
      });
    }
    if (window.FUR_Theme && window.FUR_Theme.state && window.FUR_Theme.state.products) {
      this.customProducts.forEach(prod => {
        if (!window.FUR_Theme.state.products.find(p => p.id === prod.id)) {
          window.FUR_Theme.state.products.push(prod);
        }
      });
    }
  },

  initFilterStates() {
    const categoryChecks = document.querySelectorAll('input[name="category"]');
    this.state.selectedCategories = Array.from(categoryChecks)
      .filter(c => c.checked)
      .map(c => c.value);

    const availabilityChecks = document.querySelectorAll('input[name="availability"]');
    this.state.selectedAvailability = Array.from(availabilityChecks)
      .filter(c => c.checked)
      .map(c => c.value);
  },

  bindFilterEvents() {
    const searchInput = document.getElementById("tft-shop-search");
    const categoryChecks = document.querySelectorAll('input[name="category"]');
    const materialSwatches = document.querySelectorAll(".tft-shop-filters__swatch");
    const priceSlider = document.getElementById("tft-shop-price-slider");
    const priceValue = document.getElementById("tft-shop-price-val");
    const sortSelectDesktop = document.getElementById("tft-shop-sort");
    const sortSelectMobile = document.getElementById("tft-shop-sort-split-mobile");
    const availabilityChecks = document.querySelectorAll('input[name="availability"]');
    const clearBtn = document.getElementById("tft-shop-clear-filters");

    const openFiltersBtn = document.getElementById("tft-shop-open-filters");
    const closeFiltersBtn = document.getElementById("tft-shop-close-filters");
    const filtersPanel = document.getElementById("tft-shop-filters");

    // Open/Close Mobile Filters Drawer
    if (openFiltersBtn && filtersPanel) {
      openFiltersBtn.addEventListener("click", () => {
        filtersPanel.setAttribute("data-open", "true");
      });
    }
    if (closeFiltersBtn && filtersPanel) {
      closeFiltersBtn.addEventListener("click", () => {
        filtersPanel.removeAttribute("data-open");
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value.toLowerCase().trim();
        this.filterCatalog();
      });
    }

    // Categories checkboxes
    categoryChecks.forEach(chk => {
      chk.addEventListener("change", () => {
        this.state.selectedCategories = Array.from(categoryChecks)
          .filter(c => c.checked)
          .map(c => c.value);
        this.filterCatalog();
      });
    });

    // Material Swatches
    materialSwatches.forEach(swatch => {
      swatch.addEventListener("click", () => {
        materialSwatches.forEach(s => s.classList.remove("tft-shop-filters__swatch--active"));
        swatch.classList.add("tft-shop-filters__swatch--active");
        this.state.selectedMaterial = swatch.getAttribute("data-material");
        this.filterCatalog();
      });
    });

    // Price Slider
    if (priceSlider && priceValue) {
      priceSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        this.state.maxPrice = val;
        priceValue.textContent = `$${val.toLocaleString()}`;
        this.filterCatalog();
      });
    }

    // Sorting select (desktop and mobile elements)
    if (sortSelectDesktop) {
      sortSelectDesktop.addEventListener("change", (e) => {
        this.state.sortBy = e.target.value;
        if (sortSelectMobile) sortSelectMobile.value = e.target.value;
        this.filterCatalog();
      });
    }
    if (sortSelectMobile) {
      sortSelectMobile.addEventListener("change", (e) => {
        this.state.sortBy = e.target.value;
        if (sortSelectDesktop) sortSelectDesktop.value = e.target.value;
        this.filterCatalog();
      });
    }

    // Availability checks
    availabilityChecks.forEach(chk => {
      chk.addEventListener("change", () => {
        this.state.selectedAvailability = Array.from(availabilityChecks)
          .filter(c => c.checked)
          .map(c => c.value);
        this.filterCatalog();
      });
    });

    // Clear filters
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        this.state.searchQuery = "";
        this.state.selectedCategories = [];
        this.state.selectedMaterial = "all";
        this.state.maxPrice = 4000;
        this.state.sortBy = "default";
        this.state.selectedAvailability = ["in-stock", "custom-order"];

        if (searchInput) searchInput.value = "";
        
        categoryChecks.forEach(chk => {
          chk.checked = true;
          this.state.selectedCategories.push(chk.value);
        });

        materialSwatches.forEach(s => s.classList.remove("tft-shop-filters__swatch--active"));
        const allSwatch = document.querySelector('.tft-shop-filters__swatch[data-material="all"]');
        if (allSwatch) allSwatch.classList.add("tft-shop-filters__swatch--active");

        if (priceSlider) priceSlider.value = 4000;
        if (priceValue) priceValue.textContent = "$4,000";

        if (sortSelectDesktop) sortSelectDesktop.value = "default";
        if (sortSelectMobile) sortSelectMobile.value = "default";

        availabilityChecks.forEach(chk => {
          chk.checked = true;
        });

        this.filterCatalog();
      });
    }
  },

  filterCatalog() {
    const cards = document.querySelectorAll(".fur-product-card");
    let visibleCount = 0;
    const sortedCards = [];

    cards.forEach(card => {
      const prodId = parseInt(card.getAttribute("data-prod-id"), 10);
      const prod = this.customProducts.find(p => p.id === prodId);
      if (!prod) return;

      // 1. Search Query
      const matchesSearch = !this.state.searchQuery || 
        prod.title.toLowerCase().includes(this.state.searchQuery) ||
        prod.desc.toLowerCase().includes(this.state.searchQuery);

      // 2. Categories
      const matchesCategory = this.state.selectedCategories.includes(prod.category);

      // 3. Materials
      let matchesMaterial = false;
      if (this.state.selectedMaterial === "all") {
        matchesMaterial = true;
      } else {
        const queryMat = this.state.selectedMaterial.toLowerCase();
        matchesMaterial = prod.material.toLowerCase().includes(queryMat);
      }

      // 4. Price
      const matchesPrice = prod.price <= this.state.maxPrice;

      // 5. Availability
      const matchesAvailability = this.state.selectedAvailability.includes(prod.availability || "in-stock");

      if (matchesSearch && matchesCategory && matchesMaterial && matchesPrice && matchesAvailability) {
        card.style.display = "";
        visibleCount++;
        sortedCards.push({ element: card, price: prod.price, title: prod.title });
      } else {
        card.style.display = "none";
      }
    });

    // Handle Sorting
    if (this.state.sortBy !== "default" && sortedCards.length > 0) {
      if (this.state.sortBy === "price-asc") {
        sortedCards.sort((a, b) => a.price - b.price);
      } else if (this.state.sortBy === "price-desc") {
        sortedCards.sort((a, b) => b.price - a.price);
      } else if (this.state.sortBy === "name-asc") {
        sortedCards.sort((a, b) => a.title.localeCompare(b.title));
      }

      const grid = document.querySelector(".tft-sgs-catalog__grid");
      if (grid) {
        sortedCards.forEach(item => {
          grid.appendChild(item.element);
        });
      }
    }

    // Update Count Display
    const countEl = document.querySelector(".tft-sgs-catalog__count");
    if (countEl) {
      countEl.textContent = `${visibleCount} item${visibleCount === 1 ? "" : "s"} in this scene`;
    }
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    TFT_ShopSplit.init();
  });
} else {
  TFT_ShopSplit.init();
}


/* ==========================================================================
   CONSOLIDATED MODULE: shop.js
   ========================================================================== */
/**
 * Premium Furniture Shop Theme - Shop Catalog & 3D Quick View Engine
 * Namespace Encapsulated | No Globals | ES2026 Standards
 */

const TFT_Shop = {
  // Product Catalog Dataset with Real-World Metric Footprints (CM)
  products: window.TFT_Products || [],

  // Current states for filters and grid layout
  state: {
    searchQuery: "",
    selectedCategories: [],
    selectedMaterial: "all",
    maxPrice: 4000,
    layoutMode: "grid4", // "grid4" or "grid2"
    wishlist: [],
    sortBy: "default",
    selectedAvailability: ["in-stock", "custom-order"]
  },

  // 3D rotation state variables
  rotateState: {
    rx: 55, // Pitch X rotation
    rz: -45, // Yaw Z rotation
    isDragging: false,
    startX: 0,
    startY: 0,
    startRx: 0,
    startRz: 0
  },

  // Initialize all functions
  init: function() {
    // Sync wishlist from LocalStorage if available
    this.syncWishlist();

    // Populate categories checklist values dynamically if needed, or bind events
    this.bindFilterEvents();
    this.bindLayoutEvents();
    
    // Initial catalog render
    this.filterCatalog();
  },

  // Sync wishlist items from local storage
  syncWishlist: function() {
    try {
      const saved = localStorage.getItem("tft-shop-wishlist");
      if (saved) {
        this.state.wishlist = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Failed to load wishlist from localStorage", e);
    }
  },

  // Toggle single wishlist ID
  toggleWishlist: function(id) {
    if (this.state.wishlist.includes(id)) {
      this.state.wishlist = this.state.wishlist.filter(item => item !== id);
    } else {
      this.state.wishlist.push(id);
    }
    try {
      localStorage.setItem("tft-shop-wishlist", JSON.stringify(this.state.wishlist));
    } catch (e) {
      console.warn("Failed to save wishlist", e);
    }
    this.updateWishlistDOMStates();
  },

  updateWishlistDOMStates: function() {
    const cards = document.querySelectorAll(".tft-shop-card");
    cards.forEach(card => {
      const id = parseInt(card.getAttribute("data-id"), 10);
      const btn = card.querySelector(".tft-shop-card__wishlist");
      if (btn) {
        if (this.state.wishlist.includes(id)) {
          btn.classList.add("tft-shop-card__wishlist--active");
        } else {
          btn.classList.remove("tft-shop-card__wishlist--active");
        }
      }
    });
  },

  // Listen to UI changes in sidebar inputs
  bindFilterEvents: function() {
    const searchInput = document.getElementById("tft-shop-search");
    const categoryChecks = document.querySelectorAll('input[name="category"]');
    const materialSwatches = document.querySelectorAll(".tft-shop-filters__swatch");
    const priceSlider = document.getElementById("tft-shop-price-slider");
    const priceValue = document.getElementById("tft-shop-price-val");

    // Open/Close filter buttons on responsive viewport
    const openFiltersBtn = document.getElementById("tft-shop-open-filters");
    const closeFiltersBtn = document.getElementById("tft-shop-close-filters");
    const filtersPanel = document.getElementById("tft-shop-filters");

    if (openFiltersBtn && filtersPanel) {
      openFiltersBtn.addEventListener("click", () => {
        filtersPanel.setAttribute("data-open", "true");
      });
    }

    if (closeFiltersBtn && filtersPanel) {
      closeFiltersBtn.addEventListener("click", () => {
        filtersPanel.removeAttribute("data-open");
      });
    }

    // Search bar typing
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value.toLowerCase().trim();
        this.filterCatalog();
      });
    }

    // Categories checkbox selection
    categoryChecks.forEach(chk => {
      // Gather initial active categories
      if (chk.checked) {
        this.state.selectedCategories.push(chk.value);
      }
      chk.addEventListener("change", () => {
        this.state.selectedCategories = Array.from(categoryChecks)
          .filter(c => c.checked)
          .map(c => c.value);
        this.filterCatalog();
      });
    });

    // Material Swatches
    materialSwatches.forEach(swatch => {
      swatch.addEventListener("click", () => {
        materialSwatches.forEach(s => s.classList.remove("tft-shop-filters__swatch--active"));
        swatch.classList.add("tft-shop-filters__swatch--active");
        this.state.selectedMaterial = swatch.getAttribute("data-material");
        this.filterCatalog();
      });
    });

    // Price Slider
    if (priceSlider && priceValue) {
      priceSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        this.state.maxPrice = val;
        priceValue.textContent = `$${val.toLocaleString()}`;
        this.filterCatalog();
      });
    }

    // Sort Select
    const sortSelect = document.getElementById("tft-shop-sort");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.state.sortBy = e.target.value;
        this.filterCatalog();
      });
    }

    // Availability Checks
    const availabilityChecks = document.querySelectorAll('input[name="availability"]');
    availabilityChecks.forEach(chk => {
      // Initialize active states based on check elements
      if (chk.checked) {
        if (!this.state.selectedAvailability.includes(chk.value)) {
          this.state.selectedAvailability.push(chk.value);
        }
      } else {
        this.state.selectedAvailability = this.state.selectedAvailability.filter(v => v !== chk.value);
      }
      chk.addEventListener("change", () => {
        this.state.selectedAvailability = Array.from(availabilityChecks)
          .filter(c => c.checked)
          .map(c => c.value);
        this.filterCatalog();
      });
    });

    // Clear Filters
    const clearBtn = document.getElementById("tft-shop-clear-filters");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        // Reset state
        this.state.searchQuery = "";
        this.state.selectedCategories = [];
        this.state.selectedMaterial = "all";
        this.state.maxPrice = 4000;
        this.state.sortBy = "default";
        this.state.selectedAvailability = ["in-stock", "custom-order"];

        // Reset UI inputs
        if (searchInput) searchInput.value = "";
        
        categoryChecks.forEach(chk => {
          chk.checked = true;
          this.state.selectedCategories.push(chk.value);
        });

        materialSwatches.forEach(s => s.classList.remove("tft-shop-filters__swatch--active"));
        const allSwatch = document.querySelector('.tft-shop-filters__swatch[data-material="all"]');
        if (allSwatch) allSwatch.classList.add("tft-shop-filters__swatch--active");

        if (priceSlider) priceSlider.value = 4000;
        if (priceValue) priceValue.textContent = "$4,000";

        if (sortSelect) sortSelect.value = "default";

        availabilityChecks.forEach(chk => {
          chk.checked = true;
        });

        this.filterCatalog();
      });
    }
  },

  // Grid column switches
  bindLayoutEvents: function() {
    const btnGrid4 = document.getElementById("tft-btn-grid4");
    const btnGrid2 = document.getElementById("tft-btn-grid2");
    const gridContainer = document.getElementById("tft-shop-grid-container");

    if (btnGrid4 && btnGrid2 && gridContainer) {
      btnGrid4.addEventListener("click", () => {
        btnGrid4.classList.add("tft-shop-controls__mode-btn--active");
        btnGrid2.classList.remove("tft-shop-controls__mode-btn--active");
        this.state.layoutMode = "grid4";
        gridContainer.className = "tft-shop-grid tft-shop-grid--4col";
      });

      btnGrid2.addEventListener("click", () => {
        btnGrid2.classList.add("tft-shop-controls__mode-btn--active");
        btnGrid4.classList.remove("tft-shop-controls__mode-btn--active");
        this.state.layoutMode = "grid2";
        gridContainer.className = "tft-shop-grid tft-shop-grid--2col";
      });
    }
  },

  // Modal events, close triggers, and dragging 3D floor logic removed

  getProductAvailability: function(prod) {
    const leadTime = prod.leadTime || "";
    if (/^[567891]\d*-\d+/.test(leadTime) || leadTime.includes("6-") || leadTime.includes("8-") || leadTime.includes("5-")) {
      return "custom-order";
    }
    return "in-stock";
  },

  // Perform client-side filter sorting and render products
  filterCatalog: function() {
    const gridContainer = document.getElementById("tft-shop-grid-container");
    const countLabel = document.getElementById("tft-shop-item-count");
    if (!gridContainer) return;

    // Filter rules
    let filtered = this.products.filter(prod => {
      const prodDesc = prod.desc || prod.description || "";
      const matchSearch = prod.title.toLowerCase().includes(this.state.searchQuery) || 
                          prodDesc.toLowerCase().includes(this.state.searchQuery);
      
      const matchCategory = this.state.selectedCategories.length === 0 || 
                            this.state.selectedCategories.includes(prod.category);
      
      const matchMaterial = this.state.selectedMaterial === "all" || 
                            prod.material.toLowerCase().includes(this.state.selectedMaterial.toLowerCase());
      
      const matchPrice = prod.price <= this.state.maxPrice;

      const avail = this.getProductAvailability(prod);
      const matchAvailability = this.state.selectedAvailability.includes(avail);

      return matchSearch && matchCategory && matchMaterial && matchPrice && matchAvailability;
    });

    // Apply Sorting
    if (this.state.sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.state.sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.state.sortBy === "name-asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Update item counter
    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} of ${this.products.length} products`;
    }

    // Render HTML Cards
    gridContainer.innerHTML = "";
    if (filtered.length === 0) {
      gridContainer.innerHTML = `<div class="tft-shop-grid__empty" style="grid-column: 1 / -1; padding-block: 60px; text-align: center; color: var(--fur-text-muted);">No products matching selected filters.</div>`;
      return;
    }

    filtered.forEach(prod => {
      const isWish = this.state.wishlist.includes(prod.id);
      const cardMarkup = `
        <article class="tft-shop-card" data-id="${prod.id}">
          <div class="tft-shop-card__image-wrap">
            <button class="tft-shop-card__wishlist ${isWish ? "tft-shop-card__wishlist--active" : ""}" aria-label="Toggle Wishlist" data-action="wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            </button>
            <a href="product-single.html?id=${prod.id}" class="tft-shop-card__img-link">
              <img class="tft-shop-card__img" src="${prod.image}" alt="${prod.title}" width="300" height="300" loading="lazy">
            </a>
          </div>
          <div class="tft-shop-card__body">
            <span class="tft-shop-card__category">${prod.category}</span>
            <h3 class="tft-shop-card__title">
              <a href="product-single.html?id=${prod.id}" class="tft-shop-card__title-link">${prod.title}</a>
            </h3>
            <p class="tft-shop-card__desc">${prod.desc || prod.description || ""}</p>
            <div class="tft-shop-card__footer">
              <span class="tft-shop-card__price">₹${prod.price.toFixed(2)}</span>
              <button class="tft-shop-card__add-btn" data-action="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </article>
      `;
      gridContainer.insertAdjacentHTML("beforeend", cardMarkup);
    });

    // Bind event delegation on cards
    gridContainer.querySelectorAll(".tft-shop-card").forEach(card => {
      const id = parseInt(card.getAttribute("data-id"), 10);
      
      // Wishlist trigger
      card.querySelector('[data-action="wishlist"]').addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleWishlist(id);
      });

      // Add to Cart Trigger
      card.querySelector('[data-action="add-to-cart"]').addEventListener("click", () => {
        if (window.FUR_Theme && typeof window.FUR_Theme.addToCart === "function") {
          window.FUR_Theme.addToCart(id);
          // Show the cart drawer
          const cartDrawer = document.getElementById("fur-cart-drawer");
          if (cartDrawer) {
            cartDrawer.setAttribute("aria-hidden", "false");
          }
        }
      });
    });
  }
};

// Fire when page is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    TFT_Shop.init();
  });
} else {
  TFT_Shop.init();
}
