import Link from "next/link";

export default function BetterWipePage() {
  return (
    <main className="min-h-screen bg-[#f7f2ec] px-6 py-16 text-[#3a2f2a]">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8 flex justify-center">
          <img src="/BestMelogo.jpeg" alt="The Best Me logo" className="h-40 w-40 object-contain" />
        </div>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif">The Better Wipe</h1>
          </div>
          <Link href="/" className="text-sm underline hover:opacity-70">
            Back to shop
          </Link>
        </div>

        <div className="space-y-6 text-base leading-8">
          <p>
            Are you tired of discomfort and irritation down there? Meet <strong>The Better Wipe</strong>,
            the revolutionary all-natural hemorrhoid cream designed to restore your comfort
            and enhance your colon health like never before!
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Key Benefits</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Natural Ingredients</strong>: Crafted from nature’s finest,
                The Better Wipe is free from harsh chemicals. Our soothing formula promotes healing
                while being kind to your skin. (add Witch Hazel?, 100% THC-free Hemp)
              </li>
              <li>
                <strong>Effortless Cleanup</strong>: Experience a surprising level
                of cleanliness after every wipe! The Better Wipe helps remove remnants post-bowel
                movement, ensuring you feel fresh and confident.
              </li>
              <li>
                <strong>Hemorrhoid Relief</strong>: Say goodbye to discomfort!
                The Better Wipe soothes and reduces swelling, providing instant relief from the
                irritation caused by hemorrhoids.
              </li>
              <li>
                <strong>Promotes Colon Health</strong>: Our unique blend not only
                treats hemorrhoids but also supports overall colon health, helping you
                maintain a healthy digestive system.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Why Choose the Better Wipe</h2>
            <p>
              With the Better Wipe, you&apos;re not just treating symptoms; you&apos;re investing in your
              comfort and well-being. Reclaim your confidence and enjoy life without the
              discomfort of hemorrhoids.
            </p>
            <p className="mt-4">
              The Better Wipe — the comfort you deserve! Grab your tube today and experience nature&apos;s
              solution for a healthier, happier you!
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
