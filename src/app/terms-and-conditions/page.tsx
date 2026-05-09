import { Card, CardContent } from "@/components/reusable/card";
import {
  BookOpen,
  User,
  CreditCard,
  Lock,
  Globe,
  Mail,
  FileText,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp } from "@/lib/animations/variants";

export const metadata = metaData.terms;

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

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-linear-to-b from-[#F0F3FF] via-white to-white min-h-screen pt-32 pb-16 font-sans">
      <MotionStagger className="container max-w-3xl mx-auto px-4">
        <MotionWrapper variants={fadeUp}>
          <div className="text-center mb-12">
            <SectionBadge icon={<BookOpen size={16} strokeWidth={2.5} />}>
              Legal & Policy
            </SectionBadge>
            <h1 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight mb-6 drop-shadow-sm">
              Terms & Conditions
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              Please read these Terms &amp; Conditions (&quot;Terms&quot;)
              carefully before using Orkeneo&apos;s platform and services. By
              accessing or using our services, you agree to be bound by these
              Terms.
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<FileText size={16} strokeWidth={2.5} />}>
                Introduction
              </SectionBadge>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                These Terms govern your use of Orkeneo&apos;s website, platform,
                and related services. If you do not agree with any part of these
                Terms, please do not use our services.
              </p>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<User size={16} strokeWidth={2.5} />}>
                User Responsibilities
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>
                  You agree to provide accurate and complete information when
                  creating an account.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials.
                </li>
                <li>
                  You agree not to misuse the platform or engage in prohibited
                  activities.
                </li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<CreditCard size={16} strokeWidth={2.5} />}>
                Payments & Subscriptions
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>
                  All fees are clearly stated and must be paid in accordance
                  with your selected plan.
                </li>
                <li>
                  Subscriptions renew automatically unless cancelled before the
                  renewal date.
                </li>
                <li>Refunds are subject to our refund policy.</li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<ShieldCheck size={16} strokeWidth={2.5} />}>
                Intellectual Property
              </SectionBadge>
              <ul className="list-disc list-inside text-[#4B5563] space-y-3 text-[15px] leading-relaxed">
                <li>
                  All content, trademarks, and software are the property of
                  Orkeneo or its licensors.
                </li>
                <li>
                  You may not copy, modify, or distribute any part of our
                  platform without permission.
                </li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<Lock size={16} strokeWidth={2.5} />}>
                Limitation of Liability
              </SectionBadge>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                Orkeneo is not liable for any indirect, incidental, or
                consequential damages arising from your use of the platform. Our
                total liability is limited to the amount paid by you for the
                services.
              </p>
            </CardContent>
          </Card>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Card className="mb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-8">
              <SectionBadge icon={<Globe size={16} strokeWidth={2.5} />}>
                Changes to Terms
              </SectionBadge>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                We may update these Terms from time to time. Continued use of
                the platform after changes constitutes acceptance of the new
                Terms.
              </p>
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
                If you have any questions about these Terms & Conditions, please
                contact us at:
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
