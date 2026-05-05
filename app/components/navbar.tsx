"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Start" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-purple-500/20 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
          BS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/kontakt"
          className="hidden md:inline-block px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Projekt starten
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 border-t border-purple-500/20 p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 transition-colors ${
                pathname === link.href
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="block w-full px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Projekt starten
          </Link>
        </div>
      )}
    </nav>
  );
}
