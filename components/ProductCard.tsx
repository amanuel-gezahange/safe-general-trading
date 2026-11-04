import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";

export default function ProductCard({
    product,
}: {
    product: (typeof products)[number];
}) {
    return (
        <Link href={`/products/${product.slug}`} className="productcard">
            <div className="productvisual">
                <Image
                    src={product.image}
                    alt={`Photographic representation of ${product.name}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="productbody">
                <span className="eyebrow">{product.category}</span>

                <div className="producttitle">
                    <h3>{product.name}</h3>
                    <ArrowUpRight size={20} />
                </div>

                <p>{product.short}</p>

                <span className="textlink">View product details →</span>
            </div>
        </Link>
    );
}
