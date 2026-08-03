import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function BraceletsPage() {
  const bracelets = products.filter(
    (product) => product.category === "Bracelets"
  );

  return (
    <section className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[6px] text-yellow-500">
            Aditya Collections
          </p>

          <h1 className="mb-4 text-6xl">
            Bracelets Collection
          </h1>

          <p className="text-gray-600">
            Explore our handcrafted bracelet collection.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {bracelets.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-96 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="mb-2 text-2xl">
                  {product.name}
                </h3>

                <p className="mb-6 text-yellow-600 font-semibold">
                  {product.price}
                </p>

                <div className="rounded-full border border-yellow-500 py-3 text-center transition hover:bg-yellow-500 hover:text-black">
                  View Product
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}