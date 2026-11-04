
export const company = {
  name: "SAFE GENERAL TRAINING PLC",
  short: "SGT PLC",
  domain: "https://safe-general-trading.netlify.app",
  manager: "Yonas Mekonnen",
  email: "sanoymekonnen85@gmail.com",
  phones: ["+251913033179", "+251911447609", "+251965209944"],
  whatsapp: ["251913033179", "251911447609"],
};

export const products = [
  {
    slug: "labsa-96",
    name: "LABSA 96%",
    category: "Surfactants",
    short:
      "Linear alkylbenzene sulfonic acid, an important raw material used in the production of household and industrial detergents.",
    description:
      "LABSA 96% is a concentrated anionic surfactant raw material widely used in detergent manufacturing. Following appropriate neutralization and formulation, it contributes to cleaning performance and the removal of grease and dirt. Product specifications, active matter, packaging, and availability should be confirmed before purchase.",
    uses: [
      "Detergent manufacturing",
      "Laundry detergent formulations",
      "Dishwashing detergent formulations",
      "Industrial cleaning formulations",
    ],
    image: "/products/labsa.jpg",
    tone: "amber",
  },
  {
    slug: "sles-70",
    name: "SLES 70%",
    category: "Surfactants",
    short:
      "Sodium laureth sulfate, a surfactant commonly used in liquid detergents, shampoos, and personal-care products.",
    description:
      "SLES 70% is a concentrated anionic surfactant used in cleaning and personal-care formulations. It is valued for its foaming, wetting, and cleansing properties. Suitability for a specific formulation depends on the product grade and verified technical specifications.",
    uses: [
      "Detergent manufacturing",
      "Liquid soap production",
      "Shampoo and body wash formulations",
      "Cosmetics manufacturing",
    ],
    image: "/products/sles.jpg",
    tone: "aqua",
  },
  {
    slug: "caustic-soda-flakes",
    name: "Caustic Soda Flakes",
    category: "Alkalis",
    short:
      "Sodium hydroxide flakes used in chemical processing, detergent manufacturing, and water treatment.",
    description:
      "Caustic soda flakes are a solid form of sodium hydroxide, a strong alkali used in many industrial processes. Common applications include pH adjustment, chemical manufacturing, and soap production. This material is highly corrosive and requires appropriate handling, storage, and safety procedures.",
    uses: [
      "Detergent manufacturing",
      "Soap production",
      "Water treatment",
      "Industrial chemical processing",
    ],
    image: "/products/caustic.jpg",
    tone: "ice",
  },
  {
    slug: "soda-ash-light",
    name: "Soda Ash Light",
    category: "Alkalis",
    short:
      "Light-grade sodium carbonate powder used in detergent manufacturing and industrial water treatment.",
    description:
      "Soda Ash Light is a light-density grade of sodium carbonate used as an alkaline ingredient in industrial formulations. It is commonly used in detergent manufacturing, water softening, and other chemical processes. Exact density, purity, and packaging specifications should be confirmed for each order.",
    uses: [
      "Detergent manufacturing",
      "Water treatment",
      "Water softening",
      "Industrial chemical processing",
    ],
    image: "/products/soda.jpg",
    tone: "chalk",
  },
  {
    slug: "light-paraffin",
    name: "Light Paraffin",
    category: "Mineral oils",
    short:
      "Light mineral oil used in selected industrial and cosmetic formulations, depending on the grade.",
    description:
      "Light paraffin is a refined mineral oil characterized by relatively low viscosity compared with heavier mineral oil grades. Depending on its purity and technical specifications, it may be used in cosmetic formulations, lubrication, and other industrial applications. Cosmetic or pharmaceutical suitability must be verified from the supplied grade and documentation.",
    uses: [
      "Cosmetics manufacturing",
      "Industrial manufacturing",
      "Selected lubrication applications",
    ],
    image: "/products/light.jpg",
    tone: "gold",
  },
  {
    slug: "heavy-paraffin",
    name: "Heavy Paraffin",
    category: "Mineral oils",
    short:
      "Higher-viscosity mineral oil used in suitable industrial and personal-care formulations.",
    description:
      "Heavy paraffin is a refined mineral oil with a higher viscosity than light paraffin. Depending on the grade, it can serve as a lubricant, carrier, or formulation ingredient in industrial and personal-care applications. Buyers should verify viscosity, purity, and intended-use requirements before ordering.",
    uses: [
      "Industrial manufacturing",
      "Cosmetics manufacturing",
      "Lubrication applications",
    ],
    image: "/products/heavy.jpg",
    tone: "honey",
  },
  {
    slug: "glycerin",
    name: "Glycerin",
    category: "Specialty ingredients",
    short:
      "A versatile humectant and formulation ingredient used in cosmetics, soaps, and other industrial products.",
    description:
      "Glycerin, also known as glycerol, is a clear, viscous, hygroscopic liquid widely used as a moisture-retaining ingredient. It is commonly found in cosmetics, soaps, and personal-care formulations. Food, pharmaceutical, or cosmetic applications require the appropriate verified grade and supporting documentation.",
    uses: [
      "Cosmetics manufacturing",
      "Soap production",
      "Detergent manufacturing",
      "Personal-care formulations",
    ],
    image: "/products/glycerin.jpg",
    tone: "mint",
  },
] as const;

export const industries = [
  "Detergent manufacturers",
  "Paint industry",
  "Spring water manufacturers",
  "Water treatment companies",
  "Beverage factories",
  "Cosmetics manufacturers",
];
