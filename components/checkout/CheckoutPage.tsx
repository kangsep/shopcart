"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCcAmazonPay, FaCcMastercard, FaCcVisa, FaCreditCard } from "react-icons/fa";
import { Product } from "@/data/products";

interface CheckoutPageProps {
  product: Product;
}

export default function CheckoutPage({ product }: CheckoutPageProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [coupon, setCoupon] = useState("");

  const subtotal = product.price;
  const tax = subtotal * 0.1;
  const couponDiscount =subtotal * 0.1;
  const shippingCost = 0;
  const total = subtotal + tax + couponDiscount + shippingCost;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* bag. kiri */}
        <div className="flex flex-col gap-6">

          {/* item => data dari props product */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Review Item And Shipping</h2>
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 rounded-xl w-24 h-24 flex items-center justify-center shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">{product.name}</p>
                {product.colors && (
                  <p className="text-sm text-gray-500">
                    Color: {product.colors[0]}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                <p className="text-semibold text-gray-900">Quantity: 01</p>
              </div>
            </div>
          </div>

          {/* Returning Customer (Belum ada fungsi simpan) */}
          <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 cursor-pointer" />
            <span>Returning Customer?</span>
          </div>

          {/* Delivery Information */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Delivery Information</h2>
              <button className="text-sm font-bold border border-gray-100 bg-gray-100 rounded-full px-4 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors">
                Save Information
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-medium">First Name*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">Last Name*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-700 font-medium">Address*</label>
                <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-medium">City/ Town*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">Zip Code*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-medium">Mobile*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">Email*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bag. kanan */}
        <div className="flex flex-col gap-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summery</h2>

            {/* Coupon */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400"
              />
              <button className="bg-green-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors whitespace-nowrap">
                Apply coupon
              </button>
            </div>

            {/* Payment Method */}
            <p className="font-bold text-gray-900 mb-3">Payment Details</p>
            <div className="flex flex-col gap-2 mb-4">
              {[
                { value: "cod", label: "Cash on Delivery" },
                { value: "shopcart", label: "Shopcart Card" },
                { value: "paypal", label: "Paypal" },
                { value: "credit", label: "Credit or Debit card" },
              ].map((method) => (
                <label key={method.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value={method.value}
                    checked={paymentMethod === method.value}
                    onChange={() => setPaymentMethod(method.value)}
                    className="accent-green-700 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">{method.label}</span>
                </label>
              ))}
            </div>

            {paymentMethod === "credit" && (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-100 rounded px-3 py-1">
                    <FaCcAmazonPay/>
                  </div>
                  <div className="bg-gray-100 rounded px-3 py-1">
                    <FaCcMastercard/>
                  </div>
                  <div className="bg-gray-100 rounded px-3 py-1">
                    <FaCcVisa/>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="text-sm text-gray-700 font-medium">Email*</label>
                  <input type="email" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
                <div className="mb-3">
                  <label className="text-sm text-gray-700 font-medium">Card Holder Name*</label>
                  <input type="text" placeholder="Type here..." className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                </div>
                <div className="mb-3">
                  <label className="text-sm text-gray-700 font-medium">Card Number*</label>
                  <div className="mt-1 flex items-center border border-gray-200 rounded-lg px-4 py-2.5 gap-2">
                    <FaCreditCard className="text-gray-400 shrink-0" />
                    <input type="text" placeholder="0000****1245" className="flex-1 text-sm outline-none text-gray-700" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm text-gray-700 font-medium">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 font-medium">CVC</label>
                    <input type="text" placeholder="000" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400" />
                  </div>
                </div>
              </>
            )}

            {/* Harga Total */}
            <div className="flex flex-col gap-2 border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax(10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Coupon Discount</span>
                <span>-${Math.abs(couponDiscount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping Cost</span>
                <span>-${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-200 pt-2 mt-1">
                <span>Total</span>
                <span>=${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-green-900 text-white rounded-full py-3.5 font-semibold text-base hover:bg-green-800 transition-colors">
              Pay ${total.toFixed(2)}
            </button>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex items-center gap-4">
            <div className="bg-green-900 rounded-xl w-16 h-12 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">Shopcart</span>
            </div>
            <div>
              <p className="text-sm text-gray-800">
                <span className="font-bold">Earn 5% cash back</span> on Shopcart
              </p>
              <a href="#" className="text-sm text-gray-500 underline hover:text-gray-700">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}