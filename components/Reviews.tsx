export default function Reviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      text: "Beautiful jewellery! The quality exceeded my expectations and delivery was super fast.",
    },
    {
      name: "Ananya Gupta",
      text: "Exactly as shown in the pictures. Elegant packaging and premium finish. Highly recommended!",
    },
    {
      name: "Riya Jain",
      text: "I ordered for a wedding and everyone loved it. Will definitely shop again.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Customer Reviews
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Loved by Our Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 transition"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8">
                "{review.text}"
              </p>

              <h3
                className="text-white mt-6 text-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}