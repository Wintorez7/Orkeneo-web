"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type CarouselItemType = {
  text: string;
  name: string;
  role: string;
  avatar?: string;
  initials?: string;
};

type ReusableCarouselProps = {
  data: CarouselItemType[];
  bgColor?: string;
  textSize?: string;
};

export default function ReusableCarousel({
  data,
  bgColor = "#F5F6FA",
  textSize = "text-xl md:text-4xl",
}: ReusableCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="w-full py-24 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto">
        <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index}>
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="mb-6 flex justify-center">
                    <Image
                      src="/avatar/Icon.png"
                      alt="quote"
                      width={48}
                      height={48}
                    />
                  </div>

                  {/* Text */}
                  <p
                    className={`${textSize} font-extrabold text-gray-900 leading-relaxed px-2`}
                  >
                    "{item.text}"
                  </p>

                  {/* User */}
                  <div className="mt-10 flex items-center justify-center gap-4">
                    {item.avatar ? (
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        {item.initials}
                      </div>
                    )}

                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
