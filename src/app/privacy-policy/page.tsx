import { Card, CardContent } from "@/components/reusable/card";
import { BookOpen, User, Eye, Mail, Lock, Globe } from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp } from "@/lib/animations/variants";

export const metadata = metaData.privacy;

const SectionBadge = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[13px] font-bold text-[#2F5BFF] mb-6 tracking-wide border border-blue-100">
    {icon}
    <span className="uppercase tracking-widest text-[11px]">{children}</span>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-linear-to-b from-[#F0F3FF] via-white to-white min-h-screen pt-32 pb-16 font-sans">
      <MotionStagger className="container max-w-3xl mx-auto px-4">
        <MotionWrapper variants={fadeUp}>
          <div className="text-center mb-12">
            <SectionBadge icon={<BookOpen size={16} strokeWidth={2.5} />}>
              Legal & Policy
            </SectionBadge>
            <h1 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight mb-6 drop-shadow-sm">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how
              Orkeneo collects, uses, and protects your information when you use
              our platform and services.
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<User size={16} strokeWidth={2.5} />}>
                Information We Collect
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>Personal information (name, email, phone, etc.)</li>
                <li>Business information (restaurant name, address, etc.)</li>
                <li>Usage data (how you use our platform)</li>
                <li>Technical data (IP address, browser type, device info)</li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<Eye size={16} strokeWidth={2.5} />}>
                How We Use Your Information
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>To provide and improve our services</li>
                <li>To personalize your experience</li>
                <li>
                  To communicate with you about updates, offers, and support
                </li>
                <li>To analyze usage and trends to improve our platform</li>
                <li>To comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<Lock size={16} strokeWidth={2.5} />}>
                How We Protect Your Data
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>
                  We use industry-standard security measures to protect your
                  data
                </li>
                <li>
                  Access to your data is restricted to authorized personnel only
                </li>
                <li>
                  We never sell your personal information to third parties
                </li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<Globe size={16} strokeWidth={2.5} />}>
                Your Rights & Choices
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>
                  You can access, update, or delete your personal information at
                  any time
                </li>
                <li>You can opt out of marketing communications</li>
                <li>You can request a copy of your data</li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<Mail size={16} strokeWidth={2.5} />}>
                Contact Us
              </SectionBadge>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                If you have any questions or concerns about this Privacy Policy
                or your data, please contact us at:
              </p>
              <p className="mt-3 font-bold text-[#2F5BFF] hover:underline cursor-pointer inline-block">
                support@orkeneo.com
              </p>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <p className="text-sm font-medium text-[#6B7280] text-center mt-8">
            Last updated: June 2025
          </p>
        </MotionWrapper>
      </MotionStagger>
    </main>
  );
}
