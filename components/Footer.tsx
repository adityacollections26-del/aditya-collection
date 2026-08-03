import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2
              className="text-white text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Aditya Collections
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Premium artificial jewellery crafted for weddings,
              parties and everyday elegance.
            </p>

          </div>

          <div>

            <h3 className="text-white text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/collections">Collections</Link></li>

              <li><Link href="/products">Products</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          <div>

            <h3 className="text-white text-xl mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Bracelets</li>

              <li>Earrings</li>

              <li>Necklaces</li>

              <li>Pendants</li>

              <li>Rings</li>

            </ul>

          </div>

          <div>

            <h3 className="text-white text-xl mb-5">
              Contact
            </h3>

            <p className="text-gray-400">Jaipur, Rajasthan</p>

            <p className="text-gray-400 mt-2">
              +91 XXXXXXXXXX
            </p>

            <p className="text-gray-400 mt-2">
              support@adityacollections.com
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

        <div className="border-t border-yellow-500/20 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Aditya Collections. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}