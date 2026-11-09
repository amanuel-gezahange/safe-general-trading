import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/lib/data";

/** Image tile with a grey title bar; the whole tile links to the product. */
export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/products/${product.slug}`} className="sgt-tile">
            <span className="sgt-tile-image">
                <Image
                    src={product.image}
                    alt={`Illustrative image of ${product.name}`}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                />
            </span>

            <span className="sgt-tile-bar">
                <span className="sgt-tile-title">
                    {product.name}
                    <small>{product.fullName}</small>
                </span>
                <ChevronRight className="sgt-tile-icon" size={20} aria-hidden="true" />
            </span>
        </Link>
    );
}
