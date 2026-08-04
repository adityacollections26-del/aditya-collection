import { products } from "@/data/products";
import ProductCard from "./ProductCard";

interface CollectionPageProps {
  category: string;
  title: string;
  description: string;
}

export default function CollectionPage({
  category,
  title,
  description,
}: CollectionPageProps) {

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Banner */}

        <div className="mb-20 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#111] to-[#1d1d1d] p-12 text-center">

          <p className="mb-4 uppercase tracking-[8px] text-yellow-500">
            Aditya Collections
          </p>

          <h1
            className="mb-6 text-5xl text-white md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {description}
          </p>

        </div>

        {/* Header */}

        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">

          <h2 className="text-3xl text-white">
            {filteredProducts.length} Products
          </h2>

          <a
            href="https://wa.me/919864196559?text=Hi Aditya Collections, I want help selecting jewellery."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Need Help? WhatsApp Us
          </a>

        </div>

        {/* Products */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </main>
  );
}