"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo.png"
              alt="Aditya Collections"
              width={190}
              height={70}
              priority
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">

            <Link
              href="/"
              className="text-white hover:text-yellow-500 transition"
            >
              Home
            </Link>

            <Link
              href="/collections"
              className="text-white hover:text-yellow-500 transition"
            >
              Collections
            </Link>

            <Link
              href="/products"
              className="text-white hover:text-yellow-500 transition"
            >
              Products
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-yellow-500 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-yellow-500 transition"
            >
              Contact
            </Link>

          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919864196559?text=Hi%20Aditya%20Collections,%20I%20am%20interested%20in%20your%20jewellery."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </header>
  );
}