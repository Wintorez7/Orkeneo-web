import Image from "next/image";
import { TextSection } from "../reusable/text-section";
import { contactDetails } from "@/lib/constaints";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-center font-inter">
      <TextSection
        subtitle="Contact us"
        title="We’d love to hear from you"
        description="Come say a quick hi to our wonderful team!"
      />

      <div className="relative w-full max-w-5xl md:max-w-4xl mx-auto p-10 mb-16">
        <Image
          src="/product-images/map-contents.svg"
          alt="Map showing Mumbai location"
          width={1025}
          height={483}
          className="w-full h-auto rounded-lg mt-8"
        />
        <div className="absolute top-[38%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg arrow-bottom">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src="/icons/india.svg"
              alt="Location icon"
              width={24}
              height={24}
            />
            {/* // 4W66+MJ6, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076 */}
            <h4 className="font-semibold text-base">Mumbai, India</h4>
            <p className="text-sm text-gray-600">Hiranandani Gardens, Powai</p>
            <p className="text-sm text-gray-600">Mumbai 400 076</p>
          </div>
        </div>
        <div className="absolute top-[56%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4D77FF] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <div className="w-1.5 h-1.5 bg-[#4D77FF] rounded-sm"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
        {contactDetails.map(({ title, desc, link, label }) => (
          <div key={title} className="flex flex-col items-center gap-2.5">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
            <a
              href={link}
              className="text-[#4D77FF] text-sm font-medium hover:underline"
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
