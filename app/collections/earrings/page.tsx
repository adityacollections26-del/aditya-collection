import Image from "next/image";

const earrings = [
  {
    name: "Classic Pearl Earrings",
    image: "/images/products/earring1.jpeg",
  },
  {
    name: "Rose Gold Earrings",
    image: "/images/products/earring2.jpeg",
  },
  {
    name: "Designer Earrings",
    image: "/images/products/earring3.jpeg",
  },
];

export default function EarringsPage() {
  return (
    <section className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[6px] text-yellow-500 mb-3">
          Aditya Collections
        </p>

        <h1 className="text-6xl text-center mb-4">
          Earrings Collection
        </h1>

        <p className="text-center text-gray-600 mb-16">
          Elegant earrings crafted to complement every style.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {earrings.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >

              <div className="relative h-96">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl mb-3">
                  {item.name}
                </h3>

                <button className="w-full rounded-full border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                  View Product
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}