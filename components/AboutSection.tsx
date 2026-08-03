export default function AboutSection() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p
              className="uppercase tracking-[8px] text-yellow-500 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About Us
            </p>

            <h2
              className="text-white text-5xl mt-4 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Aditya Collections
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              Aditya Collections offers premium artificial jewellery crafted
              for weddings, parties and everyday elegance. Every piece is
              carefully selected to combine luxury, affordability and timeless
              beauty.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              Our mission is to provide elegant jewellery that helps you shine
              on every special occasion while ensuring premium quality and
              exceptional customer service.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-[#111] rounded-3xl p-8 text-center border border-yellow-500/20">
              <h3 className="text-yellow-500 text-5xl font-bold">500+</h3>
              <p className="text-gray-300 mt-3">Happy Customers</p>
            </div>

            <div className="bg-[#111] rounded-3xl p-8 text-center border border-yellow-500/20">
              <h3 className="text-yellow-500 text-5xl font-bold">100+</h3>
              <p className="text-gray-300 mt-3">Designs</p>
            </div>

            <div className="bg-[#111] rounded-3xl p-8 text-center border border-yellow-500/20">
              <h3 className="text-yellow-500 text-5xl font-bold">4.9★</h3>
              <p className="text-gray-300 mt-3">Rating</p>
            </div>

            <div className="bg-[#111] rounded-3xl p-8 text-center border border-yellow-500/20">
              <h3 className="text-yellow-500 text-5xl font-bold">24×7</h3>
              <p className="text-gray-300 mt-3">Support</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}