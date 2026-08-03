import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function BestSellers() {
  const bestSellers = products.slice(0, 4);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Best Sellers
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Customer Favorites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {bestSellers.map((product) => (

            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
            >

              <div className="overflow-hidden rounded-3xl bg-[#111]">

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <p className="text-yellow-500 text-xs uppercase tracking-widest">
                    Bestseller
                  </p>

                  <h3
                    className="mt-2 text-2xl text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {product.name}
                  </h3>

                  <p className="mt-4 text-yellow-500 text-xl font-semibold">
                    {product.price}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}