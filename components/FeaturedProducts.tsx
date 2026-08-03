import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="bg-[#080808] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Featured Collection
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Handpicked Jewellery
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {featured.map((product) => (

            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
            >

              <div className="overflow-hidden rounded-3xl bg-[#111111] border border-[#222] hover:border-yellow-500 transition duration-300">

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <p className="text-yellow-500 uppercase tracking-widest text-xs">
                    {product.category}
                  </p>

                  <h3
                    className="mt-3 text-2xl text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {product.name}
                  </h3>

                  <p className="mt-4 text-2xl font-bold text-yellow-500">
                    {product.price}
                  </p>

                  <button className="mt-6 w-full rounded-full bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400">
                    View Details
                  </button>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}