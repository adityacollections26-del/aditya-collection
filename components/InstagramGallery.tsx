import Image from "next/image";

const images = [
  "/images/instagram/1.jpg",
  "/images/instagram/2.jpg",
  "/images/instagram/3.jpg",
  "/images/instagram/4.jpg",
  "/images/instagram/5.jpg",
  "/images/instagram/6.jpg",
];

export default function InstagramGallery() {
  return (
    <section className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          FOLLOW US
        </p>

        <h2
          className="text-center text-white text-5xl mt-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Instagram Gallery
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Discover the latest collections, styling inspiration and customer
          favourites from Aditya Collections.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

          {images.map((image, index) => (

            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-3xl"
            >

              <Image
                src={image}
                alt="Instagram"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>

            </div>

          ))}

        </div>

        <div className="text-center mt-14">

          <a
            href="https://instagram.com/aditya__collections"
            target="_blank"
            className="inline-block rounded-full bg-yellow-500 px-10 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Follow on Instagram
          </a>

        </div>

      </div>
    </section>
  );
}