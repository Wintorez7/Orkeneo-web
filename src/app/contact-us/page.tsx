import ContactUs from "@/components/ui/contact-us";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp } from "@/lib/animations/variants";

export const metadata = metaData.contact;

const ContactInfoCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="bg-blue-50 text-[#2F5BFF] rounded-xl p-4 mb-5">{icon}</div>
    <h3 className="text-xl font-bold text-[#111827] mb-2 tracking-tight">
      {title}
    </h3>
    <div className="text-[#4B5563] text-[15px] leading-relaxed">{children}</div>
  </div>
);

export default function ContactUsPage() {
  return (
    <main className="bg-linear-to-b from-[#F0F3FF] via-white to-white pt-32 pb-8 font-sans overflow-hidden min-h-screen">
      <MotionStagger className="max-w-7xl mx-auto space-y-8">
        <MotionWrapper variants={fadeUp}>
          <section className="text-center px-4">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase text-[#2F5BFF] bg-blue-50 border border-blue-100">
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-[#111827] drop-shadow-sm">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto px-4 leading-relaxed text-[#4B5563]">
              We&apos;d love to hear from you. Whether you have a question about
              features, trials, pricing, or anything else, our team is ready to
              answer all your questions.
            </p>
          </section>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <section className="pt-12 pb-8">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <ContactInfoCard
                  icon={<Mail size={26} strokeWidth={1.5} />}
                  title="Email us"
                >
                  <p>Our friendly team is here to help.</p>
                  <a
                    href="mailto:support@orkeneo.com"
                    className="text-[#2F5BFF] font-bold mt-2 inline-block hover:underline"
                  >
                    support@orkeneo.com
                  </a>
                </ContactInfoCard>
                <ContactInfoCard
                  icon={<Phone size={26} strokeWidth={1.5} />}
                  title="Call us"
                >
                  <p>Mon-Fri from 8am to 5pm.</p>
                  <a
                    href="tel:+918887688275"
                    className="text-[#2F5BFF] font-bold mt-2 inline-block hover:underline"
                  >
                    +91 888-768-8275
                  </a>
                </ContactInfoCard>
                <ContactInfoCard
                  icon={<MapPin size={26} strokeWidth={1.5} />}
                  title="Visit us"
                >
                  <p>Come say hello at our office HQ.</p>
                  <p className="font-bold text-[#111827] mt-2">
                    Hiranandani Gardens, Powai, Mumbai, 400076
                  </p>
                </ContactInfoCard>
              </div>
            </div>
          </section>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <ContactUs />
        </MotionWrapper>
      </MotionStagger>
    </main>
  );
}
