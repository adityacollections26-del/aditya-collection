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

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Details */}

          <div className="rounded-3xl border border-yellow-500/20 bg-[#111] p-10">

            <h3
              className="mb-8 text-3xl text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Details
            </h3>

            <div className="space-y-6 text-lg text-gray-300">

              <div>
                <span className="text-yellow-500">📍 Address</span>
                <p className="mt-2">
                  Watika, Jaipur, Rajasthan - 303905
                </p>
              </div>

              <div>
                <span className="text-yellow-500">📞 Phone</span>
                <p className="mt-2">
                  <a
                    href="tel:+918486779157"
                    className="hover:text-yellow-500 transition"
                  >
                    +91 8486779157
                  </a>
                  <br />
                  <a
                    href="tel:+919864196559"
                    className="hover:text-yellow-500 transition"
                  >
                    +91 9864196559
                  </a>
                </p>
              </div>

              <div>
                <span className="text-yellow-500">💬 WhatsApp</span>
                <p className="mt-2">
                  <a
                    href="https://wa.me/919864196559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    +91 9864196559
                  </a>
                </p>
              </div>

              <div>
                <span className="text-yellow-500">✉️ Email</span>
                <p className="mt-2">
                  <a
                    href="mailto:adityacollections26@gmail.com"
                    className="hover:text-yellow-500 transition"
                  >
                    adityacollections26@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <span className="text-yellow-500">📷 Instagram</span>
                <p className="mt-2">
                  <a
                    href="https://instagram.com/aditya_collections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    @aditya_collections
                  </a>
                </p>
              </div>

              <div>
                <span className="text-yellow-500">🕒 Business Hours</span>
                <p className="mt-2">
                  Monday - Sunday
                  <br />
                  10:00 AM - 8:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* WhatsApp */}

          <div className="flex flex-col items-center justify-center rounded-3xl border border-yellow-500/20 bg-[#111] p-10 text-center">

            <h3
              className="mb-6 text-3xl text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Order on WhatsApp
            </h3>

            <p className="mb-8 max-w-md leading-8 text-gray-300">
              Have questions or want to place an order?
              Chat with us directly on WhatsApp for quick assistance,
              product details and ordering.
            </p>

            <a
              href="https://wa.me/919864196559?text=Hi%20Aditya%20Collections,%20I%20am%20interested%20in%20your%20jewellery."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 px-10 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}