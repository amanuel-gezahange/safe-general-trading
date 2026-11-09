
export const company = {
  name: "Safe General Trading PLC",
  short: "SGT PLC",
  established: 2026,
  /**
   * Public site URL (no trailing slash). Set NEXT_PUBLIC_SITE_URL in Netlify
   * when the custom domain goes live, e.g. https://safegeneraltrading.com
   */
  domain: (process.env.NEXT_PUBLIC_SITE_URL || "https://safe-general-trading.netlify.app").replace(/\/$/, ""),
  manager: "Yonas Mekonnen",
  address: {
    city: "Addis Ababa",
    country: "Ethiopia",
    countryCode: "ET",
  },
  email: "sanoymekonnen85@gmail.com",
  phones: ["+251913033179", "+251911447609", "+251965209944"],
  whatsapp: ["251913033179", "251911447609"],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.whatsapp[0]}?text=${encodeURIComponent(message)}`;

export type Spec = { label: string; value: string };

export const products = [
  {
    slug: "labsa-96",
    chemicalName: "Linear Alkyl Benzene Sulphonic Acid",
    shortName: "LABSA",
    symbol: "LAS",
    badge: "96%",
    group: "Surfactants",
    name: "LABSA 96%",
    fullName: "Linear Alkyl Benzene Sulphonic Acid",
    category: "Anionic Surfactant",
    function: "High-active primary cleansing and foaming agent.",
    short:
      "High-active anionic surfactant that generates foam and dissolves grease in laundry, dishwashing, and industrial cleaners.",
    description:
      "LABSA is the primary active ingredient used to generate foam and dissolve grease in cleaning products. It provides strong detergent action and emulsification.",
    specs: [
      { label: "Active Matter", value: "≥ 96%" },
      { label: "Free Oil", value: "≤ 1.5%" },
      { label: "Free Acid (Sulfuric Acid)", value: "≤ 1.5%" },
      { label: "Color (Klett Value, 5% Amine Salt)", value: "≤ 30" },
    ],
    uses: [
      "Household laundry powder detergents",
      "Liquid dishwashing detergents",
      "Industrial surface cleaners",
      "Vehicle washing solutions",
    ],
    packaging: [
      "215 kg HDPE drums",
      "250 kg plastic drums",
      "ISO tank containers",
    ],
    image: "/products/labsa.jpg",
    tone: "amber",
  },
  {
    slug: "sles-70",
    chemicalName: "Sodium Lauryl Ether Sulfate",
    shortName: "SLES",
    symbol: "SLES",
    badge: "70%",
    group: "Surfactants",
    name: "SLES 70%",
    fullName: "Sodium Lauryl Ether Sulfate",
    category: "Anionic Surfactant",
    function: "High-foaming agent, emulsifier, and viscosity builder.",
    short:
      "Rich-foaming, skin-mild surfactant for shampoos, body washes, hand soaps, and liquid detergents.",
    description:
      "SLES creates rich, stable foam and provides gentle cleaning. It is easily thickened with salt and is mild on the skin compared to harsher primary surfactants.",
    specs: [
      { label: "Active Matter", value: "70% (± 2%)" },
      { label: "Unsulfated Matter", value: "≤ 2.0%" },
      { label: "Sodium Sulfate", value: "≤ 1.0%" },
      { label: "pH Value (1% aqueous solution)", value: "7.0 – 9.5" },
      { label: "Color (Hazen, 5% Am. Sol.)", value: "≤ 10" },
    ],
    uses: [
      "Hair shampoos",
      "Liquid hand soaps",
      "Body washes",
      "Bubble baths",
      "Liquid dishwashing detergents",
      "Cosmetic formulations",
    ],
    packaging: [
      "170 kg plastic drums",
      "220 kg wide-mouth plastic drums",
    ],
    image: "/products/sles.jpg",
    tone: "aqua",
  },
  {
    slug: "caustic-soda-flakes",
    chemicalName: "Sodium Hydroxide",
    shortName: "Caustic Soda",
    symbol: "NaOH",
    badge: "99%",
    group: "Alkalis",
    name: "Caustic Soda Flakes 99%",
    fullName: "Sodium Hydroxide (NaOH)",
    category: "Industrial Alkali / Strong Base",
    function: "Saponification agent, neutralizer, and alkaline cleaner.",
    short:
      "Strong base for soap making, pH adjustment, water treatment, and heavy-duty industrial cleaning.",
    description:
      "A strong chemical base that reacts with fats and oils to produce soap. It is also used to raise pH levels and break down organic matter in heavy industrial cleaning.",
    specs: [
      { label: "Purity (NaOH Content)", value: "≥ 99.0%" },
      { label: "Sodium Carbonate (Na₂CO₃)", value: "≤ 0.9%" },
      { label: "Sodium Chloride (NaCl)", value: "≤ 0.15%" },
      { label: "Iron (Fe)", value: "≤ 0.005%" },
      { label: "Physical Form", value: "White, odorless flakes" },
    ],
    uses: [
      "Laundry and toilet soap manufacturing",
      "Chemical synthesis",
      "Water treatment",
      "Industrial equipment cleaning (CIP)",
      "Textile processing",
    ],
    packaging: [
      "25 kg PP/PE woven bags with double inner polyethylene liner",
    ],
    image: "/products/caustic.jpg",
    tone: "ice",
  },
  {
    slug: "soda-ash-light",
    chemicalName: "Sodium Carbonate",
    shortName: "Soda Ash Light",
    symbol: "Na₂CO₃",
    badge: "99.2%",
    group: "Alkalis",
    name: "Soda Ash Light 99.2%",
    fullName: "Sodium Carbonate (Na₂CO₃)",
    category: "Industrial Alkali / Detergent Builder",
    function: "Water softener, pH buffer, and alkaline builder.",
    short:
      "Water-softening alkaline builder that boosts surfactant performance in powder detergents.",
    description:
      "Soda Ash Light neutralizes water hardness by precipitating calcium and magnesium ions, allowing surfactants to work more effectively. It also acts as a bulk builder in powder formulations.",
    specs: [
      { label: "Total Soluble Alkali (Na₂CO₃ basis)", value: "≥ 99.2%" },
      { label: "Sodium Chloride (NaCl)", value: "≤ 0.7%" },
      { label: "Iron (Fe)", value: "≤ 0.003%" },
      { label: "Water Insoluble Matter", value: "≤ 0.03%" },
      { label: "Physical Form", value: "Fine white crystalline powder" },
    ],
    uses: [
      "Powder detergent manufacturing",
      "Glass production",
      "Water softening",
      "Chemical manufacturing",
      "Textile processing",
    ],
    packaging: ["25 kg or 50 kg moisture-proof PP/PE woven bags"],
    image: "/products/soda.jpg",
    tone: "chalk",
  },
  {
    slug: "glycerin",
    chemicalName: "Glycerol",
    shortName: "Glycerin",
    symbol: "C₃H₈O₃",
    badge: "99.5%",
    group: "Polyols",
    name: "Refined Glycerin 99.5%",
    fullName: "Glycerol",
    category: "Polyol / Specialty Organic Compound",
    function: "Humectant, solvent, moisturizing agent, and lubricant.",
    short:
      "High-purity humectant that draws moisture into lotions, soaps, and pharmaceutical ointments.",
    description:
      "A clear, viscous, sweet-tasting liquid that draws moisture into formulations. It keeps lotions soft, prevents soap from drying out, and acts as a safe carrier liquid.",
    specs: [
      { label: "Glycerol Content", value: "≥ 99.5%" },
      { label: "Color (APHA)", value: "≤ 10" },
      { label: "Specific Gravity (at 20°C)", value: "≥ 1.261 g/cm³" },
      { label: "Heavy Metals", value: "Compliant with USP / BP grade standards" },
      { label: "Physical Form", value: "Odorless, colorless, viscous liquid" },
    ],
    uses: [
      "Cosmetics",
      "Moisturizing creams",
      "Liquid hand soaps",
      "Pharmaceutical ointments",
      "Food processing additives",
      "Specialty chemical synthesis",
    ],
    packaging: ["250 kg HDPE drums", "1100 kg IBC totes", "Steel drums"],
    image: "/products/glycerin.jpg",
    tone: "mint",
  },
  {
    slug: "light-paraffin",
    chemicalName: "Mineral Oil",
    shortName: "Light Paraffin",
    symbol: "LLP",
    badge: "Light",
    group: "Mineral Oils",
    name: "Light Liquid Paraffin",
    fullName: "Mineral Oil – Light Grade",
    category: "Hydrocarbon Fluid / Mineral Oil",
    function: "Emollient, solvent, lubricant, and moisturizing base.",
    short:
      "Low-viscosity, fully refined mineral oil for hair oils, baby oils, light lotions, and topicals.",
    description:
      "A highly refined, low-viscosity mineral oil that acts as a light protective skin barrier. It absorbs quickly without leaving a heavy, sticky feel.",
    specs: [
      { label: "Kinematic Viscosity (at 40°C)", value: "12 – 18 cSt" },
      { label: "Density (at 20°C)", value: "0.830 – 0.860 g/cm³" },
      {
        label: "Odor & Color",
        value: "Odorless, clear colorless liquid (Saybolt Color +30)",
      },
      {
        label: "Purity Standard",
        value: "Fully refined, sulfur-free, compliant with pharma/cosmetic standards",
      },
    ],
    uses: [
      "Hair oils",
      "Light body lotions",
      "Baby oils",
      "Cosmetic creams",
      "Pharmaceutical topicals",
      "Light industrial machinery lubrication",
    ],
    packaging: ["175 kg or 200 kg steel/HDPE drums", "Bulk flexitanks"],
    image: "/products/light.jpg",
    tone: "gold",
  },
  {
    slug: "heavy-paraffin",
    chemicalName: "Mineral Oil",
    shortName: "Heavy Paraffin",
    symbol: "HLP",
    badge: "Heavy",
    group: "Mineral Oils",
    name: "Heavy Liquid Paraffin",
    fullName: "Mineral Oil – Heavy Grade",
    category: "Hydrocarbon Fluid / Mineral Oil",
    function:
      "Emollient, occlusive barrier agent, binding agent, and lubricant.",
    short:
      "High-viscosity USP/BP mineral oil for ointments, cold creams, petroleum jelly, and lubricants.",
    description:
      "A thicker, higher-viscosity mineral oil that forms a strong protective barrier against moisture loss. It provides rich lubrication and smooth texture in heavy ointments and creams.",
    specs: [
      { label: "Kinematic Viscosity (at 40°C)", value: "60 – 75 cSt" },
      { label: "Density (at 20°C)", value: "0.860 – 0.890 g/cm³" },
      { label: "Flash Point", value: "≥ 210°C" },
      { label: "Odor & Color", value: "Odorless, transparent viscous liquid" },
      {
        label: "Purity Standard",
        value: "Fully refined, pharmaceutical/cosmetic grade (USP/BP)",
      },
    ],
    uses: [
      "Heavy skin ointments",
      "Cold creams",
      "Petroleum jelly blending",
      "Specialized industrial lubricants",
      "Rubber processing",
      "Plasticizers",
    ],
    packaging: ["180 kg or 200 kg steel/HDPE drums", "ISO tank containers"],
    image: "/products/heavy.jpg",
    tone: "honey",
  },
] as const;

export const businessFields = [
  {
    slug: "detergents",
    shortTitle: "Detergents",
    image: "/industries/detergent.jpg",
    title: "Detergents & Household Cleaners",
    description:
      "High-active anionic surfactants for powder and liquid detergents.",
    products: ["labsa-96", "sles-70", "soda-ash-light"],
  },
  {
    slug: "personal-care",
    shortTitle: "Personal Care",
    image: "/industries/Cosmetics.jpg",
    title: "Personal Care & Cosmetics",
    description:
      "Foaming agents, humectants, emollients, and ointment bases for cosmetics, creams, and lotions.",
    products: ["sles-70", "glycerin", "light-paraffin", "heavy-paraffin"],
  },
  {
    slug: "pharmaceuticals",
    shortTitle: "Pharma",
    image: "/products/glycerin.jpg",
    title: "Pharmaceuticals & Healthcare",
    description:
      "High-purity USP/BP mineral oils and glycerin for topical formulations.",
    products: ["glycerin", "light-paraffin", "heavy-paraffin"],
  },
  {
    slug: "soaps",
    shortTitle: "Soaps",
    image: "/products/caustic.jpg",
    title: "Soaps & Saponification",
    description:
      "Heavy-duty alkali materials and additives for soap manufacturing.",
    products: ["caustic-soda-flakes", "glycerin"],
  },
  {
    slug: "industrial",
    shortTitle: "Industrial",
    image: "/products/heavy.jpg",
    title: "Industrial & Lubricant Processing",
    description:
      "Specialty mineral oils, processing aids, and pH adjustment builders.",
    products: ["light-paraffin", "heavy-paraffin", "caustic-soda-flakes", "soda-ash-light"],
  },
] as const;

export const industries = businessFields.map((field) => field.title);

export type Product = (typeof products)[number];
export type BusinessField = (typeof businessFields)[number];
