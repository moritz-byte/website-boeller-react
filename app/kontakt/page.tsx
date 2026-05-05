"use client";

import { Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-black text-white">
      {/* Page Hero */}
      <section className="py-24 px-4 md:px-8 bg-slate-900/50 min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm font-medium text-gray-200">Nehmen Sie Kontakt auf</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sprechen wir über<br />
              <span className="text-purple-400">Ihr Projekt.</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Kostenlose Erstberatung, unverbindlich und ohne Verpflichtung. Wir freuen uns auf Ihre Anfrage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">E-Mail</p>
                  <p className="font-semibold">info@boeller-solution.de</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefon</p>
                  <p className="font-semibold">+49 160 8519661</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Antwortzeit</p>
                  <p className="font-semibold">Innerhalb von 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-xl bg-slate-900/50 border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-2">Nachricht senden</h2>
              <p className="text-gray-400 mb-8">
                Füllen Sie das Formular aus – wir melden uns schnellstmöglich bei Ihnen.
              </p>

              {submitted ? (
                <div className="p-6 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
                  <p className="text-green-300 font-semibold">✓ Nachricht erfolgreich versendet!</p>
                  <p className="text-gray-400 text-sm mt-2">Wir melden uns in Kürze bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Max Mustermann"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="max@beispiel.de"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Betreff *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte wählen Sie ein Thema</option>
                      <option value="logo">Logo-Design</option>
                      <option value="website">Website-Design</option>
                      <option value="automatisierung">Büro-Automatisierung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 px-4 md:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Bürozeiten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-black/50 border border-purple-500/20">
              <p className="text-gray-400 mb-2">Montag – Freitag</p>
              <p className="text-2xl font-bold">09:00 – 18:00 Uhr</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-black/50 border border-purple-500/20">
              <p className="text-gray-400 mb-2">Samstag</p>
              <p className="text-2xl font-bold">10:00 – 14:00 Uhr</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-black/50 border border-purple-500/20">
              <p className="text-gray-400 mb-2">Sonntag</p>
              <p className="text-2xl font-bold text-gray-500">Geschlossen</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
