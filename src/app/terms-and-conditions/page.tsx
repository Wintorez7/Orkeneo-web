import { Card, CardContent } from "@/components/reusable/card";
import { BookOpen, User, CreditCard, Lock, Globe, Mail, FileText, ShieldCheck } from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.terms;

const SectionBadge = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-[#edf1ff] px-4 py-2 text-sm font-semibold text-[#4d77ff] mb-6">
    {icon}
    <span>{children}</span>
  </div>
);

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <SectionBadge icon={<BookOpen size={16} />}>Terms & Conditions</SectionBadge>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms & Conditions</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Please read these Terms &amp; Conditions (&quot;Terms&quot;) carefully before using Orkeneo&apos;s platform and services. By accessing or using our services, you agree to be bound by these Terms.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<FileText size={16} />}>Introduction</SectionBadge>
            <p className="text-muted-foreground">
              These Terms govern your use of Orkeneo&apos;s website, platform, and related services. If you do not agree with any part of these Terms, please do not use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<User size={16} />}>User Responsibilities</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You agree to provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree not to misuse the platform or engage in prohibited activities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<CreditCard size={16} />}>Payments & Subscriptions</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All fees are clearly stated and must be paid in accordance with your selected plan.</li>
              <li>Subscriptions renew automatically unless cancelled before the renewal date.</li>
              <li>Refunds are subject to our refund policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<ShieldCheck size={16} />}>Intellectual Property</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All content, trademarks, and software are the property of Orkeneo or its licensors.</li>
              <li>You may not copy, modify, or distribute any part of our platform without permission.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Lock size={16} />}>Limitation of Liability</SectionBadge>
            <p className="text-muted-foreground">
              Orkeneo is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount paid by you for the services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Globe size={16} />}>Changes to Terms</SectionBadge>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Continued use of the platform after changes constitutes acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Mail size={16} />}>Contact Us</SectionBadge>
            <p className="text-muted-foreground">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mt-2 font-medium text-blue-700">support@orkeneo.com</p>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground mt-8">Last updated: June 2025</p>
      </div>
    </main>
  );
}
