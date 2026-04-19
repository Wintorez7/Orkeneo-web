import ContactUs from "@/components/ui/contact-us";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";

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
  <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
    <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
);

export default function ContactUsPage() {
  return (
    <main className="bg-white">
      <section className="py-16 text-center bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question about
            features, trials, pricing, or anything else, our team is ready to
            answer all your questions.
          </p>
        </div>
      </section>

      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ContactInfoCard icon={<Mail size={24} />} title="Email us">
              <p>Our friendly team is here to help.</p>
              <a
                href="mailto:hello@orkeneo.com"
                className="text-blue-600 font-semibold mt-2 inline-block"
              >
                support@orkeneo.com
              </a>
            </ContactInfoCard>
            <ContactInfoCard icon={<Phone size={24} />} title="Call us">
              <p>Mon-Fri from 8am to 5pm.</p>
              <a
                href="tel:+1-555-000-000"
                className="text-blue-600 font-semibold mt-2 inline-block"
              >
                +91 888-768-8275
              </a>
            </ContactInfoCard>
            <ContactInfoCard icon={<MapPin size={24} />} title="Visit us">
              <p>Come say hello at our office HQ.</p>
              <p className="font-semibold mt-2">
              Hiranandani Gardens, Powai, Mumbai, 400076
              </p>
            </ContactInfoCard>
          </div>
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
