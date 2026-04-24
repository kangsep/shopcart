"use client";

import Link from "next/link";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";
import { departments, about, services, help } from "@/data/footer";

export default function Footer() {
    
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-5 gap-10">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-700">
            Shopcart
          </h2>

          <p className="text-gray-600 text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <div>
            <h4 className="font-semibold mb-3">
              Accepted Payments
            </h4>

            <div className="flex flex-wrap gap-3 text-3xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaApplePay />
              <FaGooglePay />
            </div>
          </div>
        </div>

        <FooterColumn title="Department" items={departments} />
        <FooterColumn title="About Us" items={about} />
        <FooterColumn title="Services" items={services} />
        <FooterColumn title="Help" items={help} />
      </div>

      <div className="border-t py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-600">
          
          <div className="flex gap-6">
            <span>Become Seller</span>
            <span>Gift Cards</span>
            <span>Help Center</span>
          </div>

          <div className="flex gap-6">
            <span>Terms of Service</span>
            <span>Privacy & Policy</span>
          </div>

          <div>
            All Rights reserved by Shopcart | 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

// menu menu footer
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href="#"
              className="text-gray-600 transition-all duration-200 hover:text-orange-600 hover:translate-x-3 inline-block"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}