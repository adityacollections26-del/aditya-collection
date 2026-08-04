import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Necklaces",
    image: "/images/categories/necklace.jpg",
    href: "/collections/necklaces",
  },
  {
    title: "Earrings",
    image: "/images/categories/earrings.jpg",
    href: "/collections/earrings",
  },
  {
    title: "Bracelets",
    image: "/images/categories/bracelets.jpg",
    href: "/collections/bracelets",
  },
  {
    title: "Rings",
    image: "/images/categories/ring.jpg",
    href: "/collections/rings",
  },
];

export default function CategorySection() {
  return (
    <section
      id="categories"
      className="bg-[#080808] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Shop by Category
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Explore Our Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block"
            >
              <div className="relative h-80 overflow-hidden rounded-3xl">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-all duration-300" />

                <div className="absolute bottom-6 left-0 right-0 text-center">

                  <h3
                    className="text-white text-3xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Collection →
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