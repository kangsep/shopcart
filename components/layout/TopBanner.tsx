"use client";

import { FaPhoneAlt, FaChevronCircleDown } from "react-icons/fa";
import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="bg-green-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-2 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <FaPhoneAlt/>
          <span>+081 234 5678</span>
        </div>

        <Link href="/" className="hidden md:block">
          Get 50% Off on Selected Items | Shop Now
        </Link>

        <div className="flex gap-4">
          <span>Eng </span>
          <span>Location </span>
        </div>
      </div>
    </div>
  );
}