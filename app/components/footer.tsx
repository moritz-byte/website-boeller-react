import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Boeller Solution</h3>
            <p className="text-gray-400">
              Professionelles Webdesign, Logo-Erstellung und Büro-Automatisierung aus Deutschland.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:info@boeller-solution.de" className="hover:text-white transition-colors">
                  info@boeller-solution.de
                </a>
              </li>
              <li>
                <a href="tel:+491608519661" className="hover:text-white transition-colors">
                  +49 160 8519661
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2025 Boeller Solution. Alle Rechte vorbehalten.</p>
          <p>Crafted with care by Boeller Solution</p>
        </div>
      </div>
    </footer>
  );
}
