import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function Leistungen() {
  return (
    <main className="bg-black text-white">
      {/* Page Hero */}
      <section className="py-24 px-4 md:px-8 bg-slate-900/50 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm font-medium text-gray-200">Was wir für Sie tun</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unsere <span className="text-purple-400">Leistungen</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Maßgeschneiderte digitale Lösungen, die Ihr Unternehmen wirklich voranbringen.
            </p>
          </div>
        </div>
      </section>

      {/* Logo & Branding */}
      <section id="logo" className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="text-sm font-medium text-gray-200">Leistung 01</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Logo & Markenidentität</h2>
              <p className="text-gray-400 text-lg mb-8">
                Ihr Logo ist das Gesicht Ihres Unternehmens. Wir entwerfen Logos, die Ihre Werte widerspiegeln, im Gedächtnis bleiben und auf allen Kanälen überzeugen – von der Visitenkarte bis zum Billboard.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Professionelles Logo-Design (Erst- und Überarbeitungsrunden inklusive)",
                  "Corporate Identity Paket (Farben, Schriften, Muster)",
                  "Lieferung in allen Formaten (SVG, PNG, PDF, AI)",
                  "Visitenkarten- und Briefpapier-Design",
                  "Social-Media-Vorlagen für Ihre Kanäle",
                  "Brand Style Guide als Referenzdokument",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Logo-Projekt anfragen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-2xl p-12 border border-purple-500/20 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-400 mb-4">BS</div>
                <p className="text-gray-400">Boeller Solution Logo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webdesign */}
      <section id="web" className="py-24 px-4 md:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl p-12 border border-blue-500/20 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <p className="text-gray-400">Responsive Website Design</p>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-sm font-medium text-gray-200">Leistung 02</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Webdesign & Entwicklung</h2>
              <p className="text-gray-400 text-lg mb-8">
                Wir entwickeln Websites, die nicht nur schön aussehen, sondern auch performen. Schnell, sicher, mobiloptimiert und für Suchmaschinen optimiert – damit Sie online gefunden werden.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Individuelle Website-Konzeption und Design",
                  "Responsive Design für alle Geräte (Mobile-First)",
                  "Performance-Optimierung (Ladezeiten unter 2 Sekunden)",
                  "Grundlegende Suchmaschinenoptimierung (On-Page SEO)",
                  "Content-Management-System nach Bedarf",
                  "SSL, Hosting-Beratung und technischer Support",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Website anfragen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Automatisierung */}
      <section id="auto" className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="text-sm font-medium text-gray-200">Leistung 03</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Büro-Automatisierung</h2>
              <p className="text-gray-400 text-lg mb-8">
                Wir analysieren Ihre Prozesse, identifizieren Engpässe und automatisieren repetitive Aufgaben. Das Ergebnis: höhere Effizienz, weniger Fehler, zufriedenere Mitarbeiter.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Prozessanalyse und Optimierungsberatung",
                  "Automatisierung von E-Mail-Workflows",
                  "Datenintegration und Synchronisierung",
                  "Custom Automation mit No-Code/Low-Code Tools",
                  "Mitarbeiterschulung und Dokumentation",
                  "Kontinuierliche Überwachung und Verbesserung",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Automatisierung anfragen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 rounded-2xl p-12 border border-cyan-500/20 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚙️</div>
                <p className="text-gray-400">Prozessautomatisierung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welche Leistung passt zu Ihnen?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Egal ob Logo, Website oder Automatisierung – wir finden die perfekte Lösung für Ihre Herausforderung.
          </p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Kostenlose Beratung buchen <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
