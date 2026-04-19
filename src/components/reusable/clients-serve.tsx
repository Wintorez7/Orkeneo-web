import React from "react";
import Image from "next/image";
import ShadowCircle from "../reusable/shadow-circle";
import type { ServeContent } from "@/lib/clientserve";

interface ClientsServeProp {
  image: string;
  placeImageLeft?: boolean;
  content: ServeContent;
}

export const ClientsServe: React.FC<ClientsServeProp> = ({
  placeImageLeft,
  content,
  image,
}) => {
  return (
    <div
      className={`my-12 flex flex-col md:flex-row ${
        placeImageLeft ? "md:flex-row p-0" : "md:flex-row-reverse p-0"
      } justify-between`}
    >
      {/* Image Section - Full width on mobile */}
      <div className="w-full md:w-[45%] h-full mb-6 md:mb-0">
        <Image
          src={image}
          height={768}
          width={512}
          alt="Food wrap"
          className={`w-full h-full object-cover rounded-xl md:rounded-none ${
            placeImageLeft ? "md:rounded-e-xl" : "md:rounded-s-xl"
          }`}
        />
      </div>

      {/* Content Section */}
      <div
        className={`w-full md:w-[45%] py-3 px-4 md:px-0 ${
          placeImageLeft ? "md:pr-16" : "md:px-16"
        } flex flex-col justify-center gap-6`}
      >
        <div className="flex flex-col gap-3">
          <ShadowCircle>
            <Image
              src={content.icon}
              alt={content.alt}
              width={20}
              height={20}
            />
          </ShadowCircle>

          <h2 className="text-2xl font-bold">{content.title}</h2>
          <p className="text-gray-600">{content.subtitle}</p>
        </div>

        {/* List Items */}
        <div className="space-y-6">
          {content.serviceList.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Image
                src="/icons/Check_Circle.svg"
                alt="CheckCircle"
                width={24}
                height={24}
              />
              <div>
                <p className="font-semibold text-gray-700 pb-1.5">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
