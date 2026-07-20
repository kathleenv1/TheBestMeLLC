"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
};

const STORAGE_KEY = "the-best-me-cart";

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      setCart(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <main className="min-h-screen bg-[#f7f2ec] px-6 py-16 text-[#3a2f2a]">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7b6b]">
              Checkout
            </p>
            <h1 className="text-3xl font-serif">Complete your order</h1>
          </div>
          <Link href="/" className="text-sm underline hover:opacity-70">
            Back to shop
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-sm text-gray-600">
            Your cart is empty. <Link href="/" className="font-semibold underline">Return to the shop</Link>.
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-8">
              <section className="rounded-xl border border-gray-200 p-6">
                <h2 className="mb-4 text-lg font-semibold">Contact information</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm">
                    <span className="mb-1 block">Email</span>
                    <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="you@example.com" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">Phone number</span>
                    <input type="tel" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="(555) 123-4567" />
                  </label>
                </div>
              </section>

              <section className="rounded-xl border border-gray-200 p-6">
                <h2 className="mb-4 text-lg font-semibold">Shipping address</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm">
                    <span className="mb-1 block">First name</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">Last name</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm md:col-span-2">
                    <span className="mb-1 block">Street address</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">City</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">State / Province</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">ZIP / Postal code</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">Country</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                </div>
              </section>

              <section className="rounded-xl border border-gray-200 p-6">
                <h2 className="mb-4 text-lg font-semibold">Shipping method</h2>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>Standard shipping</option>
                  <option>Express shipping</option>
                  <option>Overnight delivery</option>
                </select>
              </section>

              <section className="rounded-xl border border-gray-200 p-6">
                <h2 className="mb-4 text-lg font-semibold">Payment details</h2>
                <div className="grid gap-4">
                  <label className="text-sm">
                    <span className="mb-1 block">Name on card</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block">Card number</span>
                    <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="1234 5678 9012 3456" />
                  </label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="text-sm">
                      <span className="mb-1 block">Expiration date</span>
                      <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="MM/YY" />
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 block">CVV</span>
                      <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="123" />
                    </label>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-6 rounded-xl border border-gray-200 bg-[#f7f2ec] p-6">
              <div>
                <h2 className="mb-4 text-lg font-semibold">Order summary</h2>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/" className="rounded-md border border-black px-5 py-2 text-sm hover:bg-gray-100">
                  Continue shopping
                </Link>
                <button className="rounded-md bg-black px-5 py-2 text-sm text-white hover:bg-gray-800">
                  Submit order
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
