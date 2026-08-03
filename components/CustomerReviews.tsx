export default function CustomerReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      city: "Jaipur",
      review:
        "Absolutely loved the jewellery. The quality is amazing and it looks even better in person.",
    },
    {
      name: "Neha Agarwal",
      city: "Delhi",
      review:
        "Beautiful finishing, lightweight and perfect for weddings. Highly recommended.",
    },
    {
      name: "Aditi Jain",
      city: "Mumbai",
      review:
        "Excellent packaging and fast delivery. I received so many compliments.",
    },
  ];

  return (
    <section className="bg-[#080808] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          CUSTOMER REVIEWS
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Loved By Our Customers
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-[#111] border border-yellow-500/10 p-8 hover:border-yellow-500 transition"
            >

              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8">
                "{review.review}"
              </p>

              <div className="mt-8">

                <h3
                  className="text-white text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {review.name}
                </h3>

                <p className="text-gray-500">
                  {review.city}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}