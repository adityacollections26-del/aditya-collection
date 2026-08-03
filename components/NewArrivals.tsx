import Image from "next/image";

const images = [
  "/images/products/bracelet1.jpeg",
  "/images/products/bracelet2.jpeg",
  "/images/products/earring1.jpeg",
  "/images/products/necklace1.jpeg",
  "/images/products/pendant1.jpeg",
  "/images/products/bracelet3.jpeg",
];

export default function InstagramGallery() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Instagram Gallery
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Follow Our Style
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-3xl group"
            >
              <Image
                src={image}
                alt="Jewellery"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-4xl">♡</span>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Follow on Instagram
          </a>

        </div>

      </div>
    </section>
  );
}