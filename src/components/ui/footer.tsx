"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fc] pt-16 pb-6">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* LEFT SIDE */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold text-blue-600">Orkeneo</h2>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            The Predictive Architect for Restaurants. Empowering kitchens with
            AI-driven precision and operational excellence.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
              <Icon icon="mdi:earth" className="text-gray-600" width={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
              <Icon icon="mdi:share-variant" className="text-gray-600" width={18} />
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Company
          </h4>
          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Solutions
          </h4>
          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <Link href="#">QSR Chains</Link>
            <Link href="#">Cloud Kitchens</Link>
            <Link href="#">Fine Dining</Link>
          </div>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Resources
          </h4>
          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <Link href="#">ROI Calculator</Link>
            <Link href="#">Playbooks</Link>
            <Link href="#">Help Center</Link>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT */}
        <p className="text-sm text-gray-400">
          © 2024 Orkeneo AI. The Predictive Architect for Modern Restaurants.
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-xs tracking-wider uppercase text-gray-400 font-medium">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}