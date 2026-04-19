"use client";
import React, { useState } from "react";
import { Button } from "../reusable/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { BookDemoModal } from "./book-demo-modal";

interface PromoSectionProps {
  title?: string;
  subTitle?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonHref?: string;
  className?: string;
}

export const PromoSection: React.FC<PromoSectionProps> = ({
  title = "Join Us on Our Mission",
  subTitle = "Orkeneo is currently onboarding early adopters. If you're tired of over-ordering, under-staffing, or making blind decisions — let's talk. Because the future of kitchen intelligence starts here.",
  buttonText = "Get Early Access",
  buttonIcon,
  buttonHref = "/get-started",
  className = "",
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleButtonClick = () => {
    if (buttonText === "Get Early Access" || buttonHref === "/get-started") {
      setIsModalOpen(true);
    } else {
      router.push(buttonHref);
    }
  };

  return (
    <>
    <section className={"bg-[#4D77FF] text-white py-22 px-6 " + className}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-4/6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80">
            {subTitle}
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Button
            variant="outline"
            size="md"
            className="text-gray-700 min-w-48"
            onClick={handleButtonClick}
          >
            {buttonIcon ? buttonIcon : <Calendar className="h-5 w-5 mr-2" />}
            {buttonText}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
    <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
