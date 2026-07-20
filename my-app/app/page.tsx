"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

const TAX_RATE = 0.07; // 7% tax
const STORAGE_KEY = "the-best-me-cart";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  const products: Product[] = [
    {
      id: "day",
      name: "The G.O.A.T. Facial Cream — Day",
      price: 23,
      size: "2 oz",
      image: "/label-better-face.png",
    },
    {
      id: "night",
      name: "The G.O.A.T. Facial Cream — Night",
      price: 23,
      size: "2 oz",
      image: "/label-better-renew.jpg",
    },
    {
      id: "The Better-Wipe",
      name: "The Better Wipe — Analgesic Cleansing Balm",
      price: 26,
      size: "2 oz",
      image: "/label-better-renew.jpg",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as CartItem[];
      setCart(parsed);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(productId: string) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    router.push("/checkout");
  }

  function scrollToProducts() {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function removeFromCart(productId: string) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  const { subtotal, tax, total, itemCount } = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, tax, total, itemCount };
  }, [cart]);

  return (
    <main className="bg-[#f7f2ec] text-[#3a2f2a] min-h-screen relative">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 text-sm font-medium">
        <a href="/about" className="flex items-center gap-3 font-semibold tracking-wide hover:opacity-70">
          <img src="/BestMelogo.jpeg" alt="The Best Me logo" className="h-28 w-28 object-contain rounded-none" />
          <span>THE BEST ME LLC</span>
        </a>

        <div className="flex gap-8 items-center uppercase font-sans tracking-[0.1em] text-sm font-medium">
          <a href="/goat-day" className="hover:opacity-70">
            The G.O.A.T Day
          </a>
          <a href="/goat-night" className="hover:opacity-70">
            The G.O.A.T Night
          </a>
          <a href="#" className="hover:opacity-70">
            The Better Wipe
          </a>
          <a href="/our-story" className="hover:opacity-70">
            Our Story
          </a>
        </div>

        {/* CART ICON + BUTTON */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToProducts}
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
          >
            SHOP NOW
          </button>

          <Link
            href="/checkout"
            className="relative w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-gray-100"
            aria-label="Cart"
          >
            <span className="text-lg">🛒</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center max-w-2xl mx-auto mt-20 px-6">
        <p className="tracking-widest text-xs mb-4">
          HANDCRAFTED · ALL NATURAL · SMALL BATCH
        </p>

        <h1 className="text-5xl font-serif mb-6">The Best Me</h1>

        <p className="text-lg leading-relaxed mb-8">
          Luxuriously effective skincare and personal care — crafted by hand,
          from nature. Every product made in small batches using only the finest
          all‑natural, purposefully chosen ingredients.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={scrollToProducts}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            SHOP ALL PRODUCTS
          </button>
          <a
            href="/our-story"
            className="border border-black px-6 py-3 rounded-md hover:bg-gray-200 inline-flex items-center justify-center"
          >
            OUR STORY
          </a>
        </div>
      </section>

      {/* SPACER */}
      <div className="h-24" />

      {/* PRODUCT CARDS */}
      <section
        id="products"
        className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6 pb-24"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative p-10 rounded-xl shadow-sm ${
              product.id === "night"
                ? "bg-[#2d1f3a] text-white"
                : product.id === "The Better-Wipe"
                ? "bg-[#f3f7f2] text-[#2e3a2f]"
                : "bg-white"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-3xl font-sans uppercase tracking-[0.05em] mb-2">{product.name}</h2>
              <p className="text-sm mb-2">
                {product.id === "day" && "Day Cream · 2 oz"}
                {product.id === "night" && "Night Cream · 2 oz"}
                {product.id === "The Better-Wipe" &&
                  "Analgesic Cleansing Balm · 2 oz"}
              </p>
              <p className="text-lg font-medium mb-1">
                ${product.price}.00 / jar
              </p>
              <p
                className={`text-xs italic mb-4 ${
                  product.id === "night"
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                {product.id === "The Better-Wipe"
                  ? "Also available in a tube for $25 · *Shipping not included"
                  : "*Shipping not included"}
              </p>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => addToCart(product.id)}
                className={`px-5 py-2 rounded-md ${
                  product.id === "night"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                ADD TO CART
              </button>
              <a
                href={
                  product.id === "day"
                    ? "/goat-day"
                    : product.id === "night"
                    ? "/goat-night"
                    : "/better-wipe"
                }
                className={`px-5 py-2 rounded-md border text-center ${
                  product.id === "night"
                    ? "border-white"
                    : "border-black"
                }`}
              >
                LEARN MORE
              </a>
            </div>

            <h3 className="font-semibold mb-2">Key Ingredients</h3>
            <ul className="space-y-1 text-sm">
              {product.id === "day" && (
                <>
                  <li>• Goat’s Milk</li>
                  <li>• Peptides</li>
                  <li>• Cucumber Extract</li>
                  <li>• Tamarind Seed Extract</li>
                </>
              )}
              {product.id === "night" && (
                <>
                  <li>• Goat’s Milk</li>
                  <li>• Peptides</li>
                  <li>• Evening Primrose Oil</li>
                  <li>• Lavender</li>
                </>
              )}
              {product.id === "The Better-Wipe" && (
                <>
                  <li>• Arnica</li>
                  <li>• Evening Primrose Oil</li>
                  <li>• Rosemary</li>
                  <li>• Lavender</li>
                  <li>• Witch Hazel</li>
                </>
              )}
            </ul>
          </div>
        ))}
      </section>

    </main>
  );
}
