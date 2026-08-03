export default function ContactSection() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-center uppercase tracking-[8px] text-yellow-500 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Contact Us
        </p>

        <h2
          className="text-center text-white text-5xl mt-4 mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let's Connect
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-[#111] rounded-3xl p-10 border border-yellow-500/20">

            <h3
              className="text-white text-3xl mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Details
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>📍 Jaipur, Rajasthan</p>

              <p>📞 +91 XXXXXXXXXX</p>

              <p>✉️ support@adityacollections.com</p>

              <p>🕒 Monday - Sunday</p>

              <p>10:00 AM - 8:00 PM</p>

            </div>

          </div>

          <div className="bg-[#111] rounded-3xl p-10 border border-yellow-500/20 flex flex-col justify-center items-center text-center">

            <h3
              className="text-white text-3xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              WhatsApp Orders
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              Place your jewellery order directly through WhatsApp and get
              quick assistance from our team.
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}