export default function GoatNightPage() {
  return (
    <main className="bg-[#2d1f3a] min-h-screen text-white px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img src="/BestMelogo.jpeg" alt="The Best Me logo" className="h-40 w-40 object-contain" />
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Better Renew Facial Night Cream
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">
            Better Renew Facial Night Cream
          </h1>
          <p className="text-lg text-gray-300">
            2 oz | $23 | *Shipping not included
          </p>
        </div>

        {/* Key Ingredient Benefits */}
        <div className="bg-[#3a2f35] p-10 md:p-14 rounded-3xl shadow-lg mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-white">
            Key Ingredient Benefits
          </h2>

          <ul className="space-y-6 text-lg leading-relaxed">
            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Vitamin C</span> is essential for collagen and elastin synthesis.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Vitamin A</span> is a fat-soluble nutrient rich in retinoids (like retinol, tretinoin, isotretinoin) known for stimulating collagen production.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Vitamin E</span> is a fat-soluble nutrient that acts as an anti-oxidant acting as a protective barrier keeping moisture in the skin sebum.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Peptides</span> are short chain amino acids that signal skin cells to produce key proteins, like collagen and elastin.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Tamarind Seed Extract</span> is high in polysaccharides which significantly improves elasticity, hydration and smoothness.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Cucumber Seed Oil</span> contains phenylalanine, an amino acid that regulates melanin transfer for even skin tone.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-gray-400 font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Cucumber extract</span> is a hydrosol distilled from whole Non-GMO cucumber that moisturizes and nourishes the skin.
              </div>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/#products"
            className="inline-block bg-white text-[#2d1f3a] px-8 py-3 rounded-md hover:bg-gray-200 font-medium tracking-wide"
          >
            SHOP NOW
          </a>
        </div>
      </section>
    </main>
  );
}
