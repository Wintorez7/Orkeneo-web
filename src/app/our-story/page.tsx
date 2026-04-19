import { Card, CardContent } from "@/components/reusable/card";
import { PromoSection } from "@/components/ui/promo-section";
import {
  ChefHat,
  IndianRupee,
  Rocket,
  Search,
  TrendingDown,
  Users,
  Zap,
  ClipboardCheck,
  CheckCircle,
  BookOpen,
  MapPin,
  Eye,
  BarChart3,
  Brain,
  Utensils,
  Clock,
} from "lucide-react";
import React from "react";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.ourStory;

const SectionBadge = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-[#edf1ff] px-4 py-2 text-sm font-semibold text-[#4d77ff]">
    {icon}
    <span>{children}</span>
  </div>
);

export default function OurStoryPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionBadge icon={<BookOpen size={16} />}>Our Story</SectionBadge>
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
            Where Intelligence Meets{" "}
            <span className="text-[#4d77ff]">the Kitchen</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Transforming restaurants and cloud kitchens with AI-powered demand
            forecasting, eliminating food waste, and turning operational chaos
            into intelligent decisions.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <main className="container max-w-6xl mx-auto px-4 py-16">
        {/* The Problem Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">The Problem We&apos;re Solving</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <IndianRupee className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">₹92,000 Crores</span>
                  </div>
                  <p className="text-blue-700">
                    India&apos;s food industry loses this amount in food waste every year, and most of it happens not in
                    farms, but in kitchens.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the bustling world of restaurants and cloud kitchens, we saw a recurring problem no one was solving
                  right &mdash; food waste, inaccurate prep, and lost profits caused by guesswork.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Staff shortages</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Utensils className="h-5 w-5 text-blue-600" />
                    <span>Over-prepping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span>Inventory spoilage</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <TrendingDown className="h-5 w-5 text-blue-600" />
                    <span>Menu inefficiencies</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br bg-blue-100 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <ChefHat className="h-24 w-24 text-blue-600 mx-auto" />
                  <p className="text-lg font-medium text-muted-foreground">
                    Traditional POS systems were never designed to forecast tomorrow&apos;s needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Rocket className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">The Orkeneo Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Orkeneo, we&apos;re on a mission to transform how restaurants think, plan, and operate.
            </p>
          </div>

          <Card className="bg-blue-500 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <Brain className="h-12 w-12 mx-auto opacity-90" />
                  <h3 className="text-lg font-semibold">AI Forecasting</h3>
                  <p className="text-sm opacity-90">Menu-level demand prediction</p>
                </div>
                <div className="text-center space-y-3">
                  <Zap className="h-12 w-12 mx-auto opacity-90" />
                  <h3 className="text-lg font-semibold">Smart Triggers</h3>
                  <p className="text-sm opacity-90">Automated inventory alerts</p>
                </div>
                <div className="text-center space-y-3">
                  <ClipboardCheck className="h-12 w-12 mx-auto opacity-90" />
                  <h3 className="text-lg font-semibold">Prep Planning</h3>
                  <p className="text-sm opacity-90">Intelligent preparation schedules</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-lg font-medium">
                  No more spreadsheets, no more guesswork — just intelligent systems designed to reduce waste, boost
                  efficiency, and scale profits.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br bg-blue-100 p-8">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Exactly 47 plates of butter chicken to prep</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">Reorder tomatoes before tomorrow&apos;s rush</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="h-6 w-6 text-purple-500" />
                    <span className="font-medium">Auto-notify vendor for supply delivery</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">What Makes Us Different</h2>
              </div>
              <div className="space-y-4">
                <p className="text-xl font-semibold text-foreground">We don&apos;t just show dashboards.</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Orkeneo goes a step beyond analytics — we prescribe actions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Orkeneo turns complex restaurant data into smart, daily decisions that drive real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Built for India */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold">Built for India, Inspired by Kitchens</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We&apos;ve spent months interviewing restaurants in Mumbai, Pune, and Delhi — from local biryani shops to cloud
              kitchens to QSR chains — learning their pains firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-gray-200 shadow-none">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">30+</h3>
                <p className="text-muted-foreground">Kitchen interviews conducted</p>
              </CardContent>
            </Card>
            <Card className="text-center border-gray-200 shadow-none">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real</h3>
                <p className="text-muted-foreground">POS data analysis</p>
              </CardContent>
            </Card>
            <Card className="text-center border-gray-200 shadow-none">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI</h3>
                <p className="text-muted-foreground">Models for Indian cuisines</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                To be the AI brain behind every smart kitchen in India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re a single outlet or a multi-city cloud brand, Orkeneo will empower you with the foresight,
                automation, and insights needed to operate with confidence, agility, and profitability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <PromoSection />
    </main>
  );
}
