import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/images/logo/logo.png"
              alt="Aditya Collections"
              width={180}
              height={70}
              className="mb-6 h-16 w-auto"
            />

            <p className="leading-8 text-gray-400">
              Premium artificial jewellery crafted for
              weddings, parties and everyday elegance.
              Stylish, affordable and skin-friendly designs
              for every occasion.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-500">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link href="/" className="hover:text-yellow-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-yellow-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/collections" className="hover:text-yellow-500 transition">
                  Collections
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-500">
              Categories
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link href="/collections/necklaces" className="hover:text-yellow-500 transition">
                  Necklaces
                </Link>
              </li>

              <li>
                <Link href="/collections/earrings" className="hover:text-yellow-500 transition">
                  Earrings
                </Link>
              </li>

              <li>
                <Link href="/collections/bracelets" className="hover:text-yellow-500 transition">
                  Bracelets
                </Link>
              </li>

              <li>
                <Link href="/collections/rings" className="hover:text-yellow-500 transition">
                  Rings
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-500">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                📍 Watika, Jaipur,
                Rajasthan - 303905
              </p>

              <p>
                📞
                <a
                  href="tel:+919864196559"
                  className="ml-2 hover:text-yellow-500"
                >
                  +91 9864196559
                </a>
              </p>

              <p>
                📞
                <a
                  href="tel:+918486779157"
                  className="ml-2 hover:text-yellow-500"
                >
                  +91 8486779157
                </a>
              </p>

              <p>
                ✉️
                <a
                  href="mailto:adityacollections26@gmail.com"
                  className="ml-2 hover:text-yellow-500"
                >
                  adityacollections26@gmail.com
                </a>
              </p>

              <p>
                <a
                  href="https://instagram.com/aditya_collections"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500"
                >
                  📷 @aditya_collections
                </a>
              </p>

              <a
                href="https://wa.me/919864196559?text=Hi%20Aditya%20Collections,%20I%20am%20interested%20in%20your%20jewellery."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-yellow-500/20 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Aditya Collections.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}