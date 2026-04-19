import React from "react";
import Faq from "@/components/ui/faq";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.faqs;

export default function FaqPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center">
      {/* <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-500 mb-8">
          Everything you need to know about our product, billing, and more.
        </p>
      </section> */}
      <div className="w-full flex justify-center">
        <Faq all={true} />
      </div>
    </main>
  );
}
