export default function AboutPage() {
  return (
    <main className="bg-[#f7f2ec] min-h-screen text-[#3a2f2a] px-6 py-16">
      <section className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
            The Better Me LLC
          </h1>
          <p className="text-lg text-[#8c7b6b]">
            Naturally-Derived Skincare & Personal Care
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg mb-12 space-y-8">
          {/* Product Philosophy */}
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6 text-[#3a2f2a]">
              Our Philosophy
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              All of our products utilize naturally-derived, botanical extracts and essential oils that offer the consumer and spa owners the opportunity to live more holistic lives. Some have been documented in traditional medical practices, like Ayurveda, to treat common ailments.
            </p>
          </div>

          {/* Important Guidance */}
          <div className="border-l-4 border-[#8c7b6b] pl-6 py-4 bg-[#f7f2ec] rounded">
            <h3 className="text-xl font-semibold mb-4 text-[#3a2f2a]">
              Important Guidance
            </h3>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">•</span>
                <span>Always consult your physician or physical therapist before starting a health regimen.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">•</span>
                <span>Test topical creams and balms on a small area of skin and wait for any reaction before implementing full use.</span>
              </li>
            </ul>
          </div>

          {/* FDA Disclaimer */}
          <div className="border-t-2 border-[#8c7b6b] pt-8">
            <h3 className="text-xl font-semibold mb-4 text-[#3a2f2a]">
              Disclaimer
            </h3>
            <p className="text-lg leading-relaxed italic text-[#8c7b6b]">
              None of the statements made on our products have been evaluated by the U.S. Food & Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/#products"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 font-medium tracking-wide"
          >
            SHOP ALL PRODUCTS
          </a>
        </div>
      </section>
    </main>
  );
}
