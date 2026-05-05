import AetherFlowHero from "@/components/ui/aether-flow-hero";
import { ArrowRight, Zap, Globe, Cpu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <AetherFlowHero />

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm font-medium text-gray-200">Was wir tun</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie auf dem gesamten Weg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Branding */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 mb-6">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Logo & Markenidentität</h3>
              <p className="text-gray-400 mb-6">
                Einzigartige Logos und konsistente Corporate-Identity-Pakete, die Ihre Marke unverwechselbar machen.
              </p>
              <Link href="/leistungen#logo" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Webdesign */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 mb-6">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Webdesign & Entwicklung</h3>
              <p className="text-gray-400 mb-6">
                Professionelle, schnelle und mobiloptimierte Websites, die Besucher zu Kunden machen.
              </p>
              <Link href="/leistungen#web" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Automatisierung */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 mb-6">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Büro-Automatisierung</h3>
              <p className="text-gray-400 mb-6">
                Wir analysieren und automatisieren Ihre wiederkehrenden Prozesse – mehr Zeit für das Wesentliche.
              </p>
              <Link href="/leistungen#auto" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Lassen Sie uns gemeinsam etwas Großartiges aufbauen. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/kontakt" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/leistungen" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
