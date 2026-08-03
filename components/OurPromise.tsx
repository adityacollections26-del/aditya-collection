export default function OurPromise() {
  const promises = [
    {
      title: "Premium Quality",
      icon: "✨",
      description:
        "Beautifully crafted jewellery made with premium materials and exceptional finishing.",
    },
    {
      title: "Skin Friendly",
      icon: "💎",
      description:
        "Designed for everyday comfort with skin-friendly plating and lightweight construction.",
    },
    {
      title: "Fast Delivery",
      icon: "🚚",
      description:
        "Quick and secure delivery across India with premium protective packaging.",
    },
    {
      title: "Secure Shopping",
      icon: "🔒",
      description:
        "Safe ordering experience with trusted support and secure payment options.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center text-sm uppercase tracking-[8px] text-yellow-500"
          style={{ fontFamily: "var(--font-body)" }}
        >
          OUR PROMISE
        </p>

        <h2
          className="mt-4 text-center text-5xl text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Luxury You Can Trust
        </h2>

        <p
          className="mx-auto mt-6 max-w-3xl text-center text-gray-400 leading-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Every piece at Aditya Collections is selected to combine elegance,
          comfort and quality, so you can wear jewellery that looks beautiful
          and feels exceptional.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {promises.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
            >

              <div className="mb-6 text-5xl">
                {item.icon}
              </div>

              <h3
                className="text-2xl text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>

              <p
                className="mt-5 leading-8 text-gray-400"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}