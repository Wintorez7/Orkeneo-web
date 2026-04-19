import { Card, CardContent } from "@/components/reusable/card";
import { BookOpen, User, Eye, Mail, Lock, Globe } from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.privacy;

const SectionBadge = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-[#edf1ff] px-4 py-2 text-sm font-semibold text-[#4d77ff] mb-6">
    {icon}
    <span>{children}</span>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <SectionBadge icon={<BookOpen size={16} />}>Privacy Policy</SectionBadge>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Your privacy is important to us. This Privacy Policy explains how Orkeneo collects, uses, and protects your information when you use our platform and services.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<User size={16} />}>Information We Collect</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Personal information (name, email, phone, etc.)</li>
              <li>Business information (restaurant name, address, etc.)</li>
              <li>Usage data (how you use our platform)</li>
              <li>Technical data (IP address, browser type, device info)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Eye size={16} />}>How We Use Your Information</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To provide and improve our services</li>
              <li>To personalize your experience</li>
              <li>To communicate with you about updates, offers, and support</li>
              <li>To analyze usage and trends to improve our platform</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Lock size={16} />}>How We Protect Your Data</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We use industry-standard security measures to protect your data</li>
              <li>Access to your data is restricted to authorized personnel only</li>
              <li>We never sell your personal information to third parties</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Globe size={16} />}>Your Rights & Choices</SectionBadge>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You can access, update, or delete your personal information at any time</li>
              <li>You can opt out of marketing communications</li>
              <li>You can request a copy of your data</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <SectionBadge icon={<Mail size={16} />}>Contact Us</SectionBadge>
            <p className="text-muted-foreground">
              If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
            </p>
            <p className="mt-2 font-medium text-blue-700">support@orkeneo.com</p>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground mt-8">Last updated: June 2025</p>
      </div>
    </main>
  );
}
