"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "../reusable/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BookDemoModal } from "./book-demo-modal";

const DashboardHero = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
  <section className="w-full flex flex-col md:flex-row items-center justify-center pt-28 pb-14 bg-white">
    {/* Left: Text and Features */}
    <div className="flex-1 flex flex-col items-start justify-center px-6 md:px-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Join 4,000+ businesses
        <br />
        growing with Orkeneo
      </h1>
      <ul className="mb-8 space-y-3">
        <li className="flex items-center text-lg text-gray-700">
          <CheckCircle className="text-blue-500 w-5 h-5 mr-2" />
          15-day free trial
        </li>
        <li className="flex items-center text-lg text-gray-700">
          <CheckCircle className="text-blue-500 w-5 h-5 mr-2" />
          Personalized onboarding
        </li>
        <li className="flex items-center text-lg text-gray-700">
          <CheckCircle className="text-blue-500 w-5 h-5 mr-2" />
          Access to all features
        </li>
      </ul>
      <div className="flex gap-3">
        <Button variant="outline" size="md" onClick={() => router.push("/about-us")}>Learn more</Button>
        <Button variant="default" size="md" onClick={() => setIsModalOpen(true)}>Get Early Access</Button>
      </div>
    </div>
    {/* Right: Dashboard Image */}
    <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
      <div className="rounded-2xl overflow-hidden w-full">
        <Image
          src="/images/dashboard-screenshot.png"
          alt="Dashboard"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
    <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </section>
)
};

export default DashboardHero;
