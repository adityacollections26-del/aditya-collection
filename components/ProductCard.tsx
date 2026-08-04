import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-yellow-500/10 bg-[#111] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl">

      <Link href={`/products/${product.slug}`}>

        <div className="relative h-80 overflow-hidden">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

        </div>

      </Link>

      <div className="p-6">

        <h3 className="mb-3 text-2xl text-white">
          {product.name}
        </h3>

        <p className="mb-6 text-xl font-semibold text-yellow-500">
          {product.price}
        </p>

        <div className="flex gap-3">

          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-full border border-yellow-500 py-3 text-center text-white transition hover:bg-yellow-500 hover:text-black"
          >
            View Details
          </Link>

          <a
            href={`https://wa.me/919864196559?text=Hi Aditya Collections, I am interested in ${encodeURIComponent(
              product.name
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}