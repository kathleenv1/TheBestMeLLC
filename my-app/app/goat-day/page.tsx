export default function GoatDayPage() {
  return (
    <main className="bg-[#f7f2ec] min-h-screen text-[#3a2f2a] px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img src="/BestMelogo.jpeg" alt="The Best Me logo" className="h-40 w-40 object-contain" />
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8c7b6b] mb-4">
            Better Face Day Cream
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">
            Better Face Day Cream
          </h1>
          <p className="text-lg text-[#8c7b6b]">
            2 oz | $23 | *Shipping not included
          </p>
        </div>

        {/* Key Ingredient Benefits */}
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-[#3a2f2a]">
            Key Ingredient Benefits
          </h2>

          <ul className="space-y-6 text-lg leading-relaxed">
            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Goat milk solids</span> with high levels of Casein that contribute to cell nucleic acid production.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Honey</span> — a pure humectant that attracts moisture to the skin.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Peptides</span> — short chain amino acids that signal skin cells to produce key proteins, like collagen and elastin.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Algae derived peptides</span> — tightens skin and reduces fine wrinkles.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Raspberry Seed Oil</span> — an exceptional anti-oxidant with high levels of gamma-tocopherol which has natural sunscreen properties. High levels of alpha-linoleic acid also contribute to moisturizing and nourishing the skin.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Tamarind seed extract</span> — high in polysaccharides which significantly improves elasticity, hydration and smoothness.
              </div>
            </li>

            <li className="flex gap-4">
              <span className="text-[#8c7b6b] font-bold flex-shrink-0">•</span>
              <div>
                <span className="font-semibold">Cucumber Seed Oil</span> — contains phenylalanine, an amino acid that regulates melanin transfer for even skin tone.
              </div>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/#products"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 font-medium tracking-wide"
          >
            SHOP NOW
          </a>
        </div>
      </section>
    </main>
  );
}
