export default function Impressum() {
  return (
    <main className="bg-black text-white">
      {/* Page Header */}
      <section className="py-24 px-4 md:px-8 bg-slate-900/50 min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-gray-400">Rechtliche Informationen zu Boeller Solution</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Angaben */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Moritz</strong></p>
              <p>Boeller Solution</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Telefon:</strong> <a href="tel:+491608519661" className="text-purple-400 hover:text-purple-300">+49 160 8519661</a></p>
              <p><strong>E-Mail:</strong> <a href="mailto:info@boeller-solution.de" className="text-purple-400 hover:text-purple-300">info@boeller-solution.de</a></p>
            </div>
          </div>

          {/* Haftung */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Haftung für Inhalte</h2>
            <p className="text-gray-400 leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Haftung für Links</h2>
            <p className="text-gray-400 leading-relaxed">
              Unsere Website enthält Links zu externen Websites. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Wir haben keinen Einfluss auf die Gestaltung und die Inhalte der verlinkten Seiten. Zum Zeitpunkt der Verlinkung waren die externen Seiten frei von illegalen Inhalten. Sollte uns eine Rechtsverletzung bekannt werden, werden wir die betroffenen Links sofort entfernen.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Urheberrecht</h2>
            <p className="text-gray-400 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>

          {/* Datenschutz */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Datenschutz</h2>
            <p className="text-gray-400 leading-relaxed">
              Durch die Nutzung unserer Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäß nachfolgender Datenschutzerklärung einverstanden. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </div>

          {/* Streitbeilegung */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Streitbeilegung</h2>
            <p className="text-gray-400 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div className="text-sm text-gray-500 pt-8 border-t border-purple-500/20">
            <p>Zuletzt aktualisiert: 2025</p>
          </div>
        </div>
      </section>
    </main>
  );
}
