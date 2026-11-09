import { products } from "@/lib/data";
import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Product from Safe General Trading PLC";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) ?? products[0];

  return renderOgImage({
    eyebrow: product.category,
    title: product.name,
    subtitle: `${product.fullName}. ${product.function}`,
    tiles: product.packaging.slice(0, 3),
  });
}
