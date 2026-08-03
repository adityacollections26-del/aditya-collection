import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero/zero.png"
        alt="Luxury Jewellery"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="max-w-2xl">

            <p
              className="mb-5 uppercase tracking-[8px] text-yellow-500 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Premium Artificial Jewellery
            </p>

            <h1
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "88px",
                lineHeight: "0.95",
              }}
            >
              ADITYA
              <br />
              <span className="text-yellow-500">
                COLLECTIONS
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-xl leading-9 text-gray-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Timeless elegance crafted with premium artificial jewellery,
              designed to make every occasion unforgettable.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="rounded-full bg-yellow-500 px-10 py-4 font-semibold text-black transition hover:bg-yellow-400">
                Shop Collection
              </button>

              <button className="rounded-full border border-yellow-500 px-10 py-4 text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
                WhatsApp Order
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}