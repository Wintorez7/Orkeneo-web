"use client";
import Image from "next/image";
import { TextSection } from "../reusable/text-section";
import { contactDetails } from "@/lib/constaints";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center font-sans">
      <TextSection
        subtitle="Contact us"
        title="We’d love to hear from you"
        description="Come say a quick hi to our wonderful team!"
      />

      <div className="relative w-full max-w-5xl md:max-w-4xl mx-auto p-4 md:p-10 mb-20">
        <div className="relative rounded-[32px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <Image
            src="/product-images/map-contents.svg"
            alt="Map showing Mumbai location"
            width={1025}
            height={483}
            className="w-full h-auto opacity-90"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-[38%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 arrow-bottom"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <Image
                src="/icons/india.svg"
                alt="Location icon"
                width={28}
                height={28}
                className="drop-shadow-sm mb-1"
              />
              <h4 className="font-bold text-[#111827] text-base">
                Mumbai, India
              </h4>
              <p className="text-[13px] text-[#4B5563] font-medium leading-tight">
                Hiranandani Gardens, Powai
              </p>
              <p className="text-[13px] text-[#4B5563] font-medium leading-tight">
                Mumbai 400 076
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-[56%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#2F5BFF] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left">
        {contactDetails.map(({ title, desc, link, label }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center md:items-start gap-3 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
          >
            <h3 className="font-bold text-xl text-[#111827]">{title}</h3>
            <p className="text-[#4B5563] text-[15px] leading-relaxed">{desc}</p>
            <a
              href={link}
              className="text-[#2F5BFF] text-[15px] font-bold hover:underline mt-1"
            >
              {label}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
