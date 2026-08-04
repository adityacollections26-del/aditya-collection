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

  const product = products.find(
    (item) => item.slug === slug
  );

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
    <section className="min-h-screen bg-[#080808] pt-32 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}

        <div className="mb-10">

          <Link
            href="/"
            className="text-gray-400 hover:text-yellow-500 transition"
          >
            Home
          </Link>

          <span className="mx-3 text-gray-600">
            /
          </span>

          <Link
            href={`/collections/${product.category.toLowerCase()}`}
            className="text-gray-400 hover:text-yellow-500 transition"
          >
            {product.category}
          </Link>

          <span className="mx-3 text-gray-600">
            /
          </span>

          <span className="text-yellow-500">
            {product.name}
          </span>

        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Product Image */}

          <div>

            <div className="relative h-[650px] overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111]">

              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

          {/* Product Details */}

          <div className="flex flex-col justify-center">

            <p
              className="mb-3 uppercase tracking-[8px] text-yellow-500"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Aditya Collections
            </p>

            <h1
              className="mb-6 text-6xl text-white"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              {product.name}
            </h1>

            <div className="mb-6 text-xl text-yellow-500">

              ★★★★★

              <span className="ml-3 text-base text-gray-400">
                (24 Reviews)
              </span>

            </div>

            <h2 className="mb-8 text-4xl font-bold text-yellow-500">
              {product.price}
            </h2>

            <p className="mb-10 leading-8 text-gray-300">
              {product.description}
            </p>
                        <div className="mb-10 space-y-4">

              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-500">✔</span>
                Premium Quality
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-500">✔</span>
                Skin Friendly
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-500">✔</span>
                Lightweight & Comfortable
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-500">✔</span>
                Perfect for Gifting
              </div>

            </div>

            <div className="flex flex-col gap-4">

              <a
                href={`https://wa.me/919864196559?text=${encodeURIComponent(
                  `Hi Aditya Collections, I am interested in ${product.name} (${product.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-green-700"
              >
                Order on WhatsApp
              </a>

              <Link
                href={`/collections/${product.category.toLowerCase()}`}
                className="rounded-full border border-yellow-500 py-4 text-center text-lg text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
              >
                ← Back to {product.category}
              </Link>

            </div>

          </div>

        </div>

        {/* Related Products */}

        <div className="mt-28">

          <h2
            className="mb-16 text-center text-5xl text-white"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Related Products
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {relatedProducts.map((item) => (

              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-yellow-500"
              >

                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">

                  <h3 className="mb-3 text-2xl text-white">
                    {item.name}
                  </h3>

                  <p className="mb-6 text-xl font-semibold text-yellow-500">
                    {item.price}
                  </p>

                  <div className="rounded-full border border-yellow-500 py-3 text-center text-white transition hover:bg-yellow-500 hover:text-black">
                    View Details
                  </div>

                </div>

              </Link>

            ))}

          </div>
                  </div>

        {/* Help Section */}

        <div className="mt-24 rounded-3xl border border-yellow-500/20 bg-[#111] p-12 text-center">

          <h2
            className="mb-6 text-4xl text-white"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Need Help Choosing?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-8 text-gray-300">
            Have questions about this jewellery or need assistance selecting the
            perfect design? Our team is here to help you.
          </p>

          <a
            href={`https://wa.me/919864196559?text=${encodeURIComponent(
              `Hi Aditya Collections, I need help regarding ${product.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-500 px-10 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}