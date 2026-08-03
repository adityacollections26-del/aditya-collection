import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.slug !== product.slug
    )
    .slice(0, 4);

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}

        <p className="text-sm text-gray-500 mb-8">
          Home / {product.category} / {product.name}
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Image */}

          <div>

            <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-xl">

              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />

            </div>

          </div>

          {/* Details */}

          <div className="flex flex-col justify-center">

            <p className="uppercase tracking-[6px] text-yellow-600 mb-3">
              Aditya Collections
            </p>

            <h1 className="text-6xl mb-6">
              {product.name}
            </h1>

            <div className="text-yellow-500 text-xl mb-5">
              ★★★★★
              <span className="text-gray-500 text-base ml-3">
                (24 Reviews)
              </span>
            </div>

            <h2 className="text-4xl text-yellow-600 font-semibold mb-6">
              {product.price}
            </h2>

            <p className="text-gray-600 leading-8 mb-10">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">

              <div>✔ Premium Quality</div>

              <div>✔ Skin Friendly</div>

              <div>✔ Lightweight</div>

              <div>✔ Perfect Gift</div>

            </div>

            <div className="flex flex-col gap-4">

              <button className="bg-yellow-500 text-black py-4 rounded-full font-semibold hover:bg-yellow-400 transition">
                Add to Cart
              </button>

              <button className="border border-black py-4 rounded-full hover:bg-black hover:text-white transition">
                Buy Now
              </button>

              <button className="bg-green-600 text-white py-4 rounded-full hover:bg-green-700 transition">
                WhatsApp Order
              </button>

            </div>

          </div>

        </div>

        {/* Related Products */}

        <div className="mt-28">

          <h2 className="text-5xl text-center mb-16">
            Related Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {relatedProducts.map((item) => (

              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >

                <div className="relative h-80">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-2xl mb-2">
                    {item.name}
                  </h3>

                  <p className="text-yellow-600">
                    {item.price}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
