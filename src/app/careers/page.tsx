import Link from "next/link";
import { Button } from "@/components/reusable/button";
import { TestimonialInfo } from "@/components/ui/testominial-info";
import { teamsTestimonials } from "@/lib/constaints";
import ContactUs from "@/components/ui/contact-us";
import { Heart, Monitor, GraduationCap, Plane, DollarSign, Trophy, Users, Handshake, Lightbulb, Target, Code2, Palette, Mic, TrendingUp as ArrowUpRight } from "lucide-react";
import { JobList } from "@/components/ui/JobList";

const cultureValues = [
  {
    icon: Users,
    title: "Ownership",
    description: "Take initiative, be accountable, and drive results with passion and commitment.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    description: "Every decision we make is guided by what's best for our restaurant partners.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embrace creativity, experiment boldly, and push the boundaries of what's possible.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Work together, share knowledge, and achieve more as a unified team.",
  },
];

const missionStats = [
  {
    icon: Target,
    value: "₹92,000 Cr",
    label: "Annual kitchen waste in India",
  },
  {
    icon: ArrowUpRight,
    value: "40% Reduction",
    label: "In food waste for our clients",
  },
  {
    icon: Users,
    value: "500+",
    label: "Restaurants optimized",
  },
];

const teams = [
  {
    icon: Code2,
    title: "Engineering & Data Science",
    desc: "Build scalable AI systems, develop machine learning models, and create the technology infrastructure that powers intelligent restaurant operations.",
  },
  {
    icon: Palette,
    title: "Product & Design",
    desc: "Shape user experiences, define product strategy, and design intuitive interfaces that make complex AI insights accessible to restaurant operators.",
  },
  {
    icon: ArrowUpRight,
    title: "Sales & Success",
    desc: "Drive growth, build relationships with restaurant partners, and ensure customer success through strategic partnerships and support.",
  },
  {
    icon: Mic,
    title: "AI Voice & Automation",
    desc: "Develop voice interfaces, conversational AI, and automation systems that streamline restaurant operations and enhance customer experiences.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs."
  },
  {
    icon: Monitor,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO policy."
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Learning stipend, conference attendance, and mentorship programs."
  },
  {
    icon: Plane,
    title: "Travel & Events",
    description: "Team retreats, industry conferences, and travel opportunities."
  },
  {
    icon: DollarSign,
    title: "Financial Security",
    description: "Competitive salary, equity options, and retirement planning support."
  },
  {
    icon: Trophy,
    title: "Recognition",
    description: "Performance bonuses, peer recognition programs, and career advancement opportunities."
  },
];

type Job = {
  title: string;
  location: string;
  type: string;
  summary: string;
  description: string;
  link: string;
};

const jobs: Job[] = [
  {
    title: "Senior AI/ML Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    summary: "Lead the development of our demand forecasting algorithms and machine learning models.",
    description:
      "We're looking for an experienced AI/ML Engineer to join our core team and help build the next generation of demand planning solutions for restaurants. You'll work on cutting-edge forecasting models, optimization algorithms, and real-time data processing systems.",
    link: "mailto:careers@orkeneo.com?subject=Application%20for%20Senior%20AI%2FML%20Engineer",
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    summary: "Design intuitive interfaces for restaurant operators and managers.",
    description:
      "Join our design team to create beautiful, functional interfaces that make complex AI insights accessible to restaurant operators. You'll work closely with our product and engineering teams to deliver exceptional user experiences.",
    link: "mailto:careers@orkeneo.com?subject=Application%20for%20Product%20Designer",
  },
  {
    title: "Sales Development Representative",
    location: "Mumbai, India",
    type: "Full-time",
    summary: "Drive growth by connecting with restaurant chains and operators.",
    description:
      "Help us expand our reach in the restaurant industry by identifying and qualifying potential customers. You'll be at the forefront of our growth, building relationships with restaurant operators across India.",
    link: "mailto:careers@orkeneo.com?subject=Application%20for%20Sales%20Development%20Representative",
  },
  {
    title: "DevOps Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    summary: "Scale our infrastructure to handle millions of restaurant transactions.",
    description:
      "Build and maintain the infrastructure that powers our AI platform. You'll work on cloud architecture, deployment pipelines, monitoring systems, and ensure our platform can scale to serve thousands of restaurants.",
    link: "mailto:careers@orkeneo.com?subject=Application%20for%20DevOps%20Engineer",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#4d77ff] text-white py-20 px-4 flex flex-col items-center relative overflow-hidden">
        <div className="max-w-3xl text-center z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Join Orkeneo – Powering Smarter Restaurant Ops with AI
          </h1>
          {/* <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
            Powering Smarter Restaurant Ops with AI
          </h2> */}
          <p className="text-lg md:text-xl font-medium mb-8">
            Be part of the team revolutionizing how restaurants operate, reduce waste, and maximize efficiency through cutting-edge artificial intelligence.
          </p>
          <Link href="#open-roles">
            <Button size="lg" className="bg-white text-[#4d77ff] hover:bg-gray-100 font-bold px-8 py-3 rounded-lg shadow-lg transition-colors">
              View Open Roles
            </Button>
          </Link>
        </div>
        {/* Background image overlay (placeholder) */}
        <div className="absolute inset-0 opacity-20 z-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/careers-hero-bg.jpg)'}} />
      </section>

      {/* Mission & Impact Section */}
      <section className="w-full bg-[#f8fafd] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Our Mission & Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re on a mission to eliminate the ₹92,000 Crore annual kitchen waste in India through intelligent demand planning and AI-powered restaurant operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {missionStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
                <span className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4d77ff] to-[#6a5cff]">
                  <Icon size={40} className="text-white" />
                </span>
                <div className="text-2xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-base text-center">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3 text-center">Our Culture & Values</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {cultureValues.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="flex flex-col items-center">
                <span className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4d77ff] to-[#6a5cff]">
                  <Icon size={36} className="text-white" />
                </span>
                <span className="font-extrabold text-lg text-gray-900 mb-2">{v.title}</span>
                <p className="text-gray-600 text-base text-center leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Teams Section */}
      <section className="w-full bg-[#f8fafd] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Our Teams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diverse expertise working towards a common goal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teams.map((team) => {
            const Icon = team.icon;
            return (
              <div key={team.title} className="bg-white rounded-2xl shadow p-8 flex items-center gap-5">
                
                <div className="text-left">
                  <div className="text-lg font-extrabold text-gray-900 mb-5 flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#4d77ff] flex-shrink-0">
                      <Icon size={28} className="text-white" />
                    </span>
                    {team.title}
                  </div>
                  <div className="text-gray-600 text-base leading-relaxed">{team.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-[#f8fafd] py-16 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">Benefits & Perks</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          We take care of our team so they can do their best work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b) => {
            const IconComponent = b.icon;
            return (
              <div key={b.title} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
                <IconComponent size={36} className="mb-4 text-[#4d77ff]" />
                <span className="font-extrabold text-lg text-gray-900 mb-2">{b.title}</span>
                <p className="text-gray-600 text-base leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials & Stats Section */}
      <TestimonialInfo
        title="Why do you need Labor Forecasting?"
        subTitle="Staffing a restaurant is a constant balancing act. Too many employees? You're overspending. Too few? Service suffers."
        description="With AI-powered labor forecasting, Orkeneo helps you predict demand with precision, so you can build smarter schedules. No more guesswork—just data-driven scheduling that keeps your restaurant running efficiently."
        testimonial={teamsTestimonials}
        stats={[]}
      />

      {/* Job Listings Section */}
      <section className="w-full bg-white py-16 px-4" id="open-roles">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Open Positions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your next opportunity with us
          </p>
        </div>
        <JobList jobs={jobs} />
      </section>

      {/* Final CTA & Contact Section */}
      <section className="w-full max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to join Orkeneo?</h2>
        <p className="text-gray-700 mb-6">Don&apos;t see a role that fits? Submit your resume or reach out—we&apos;re always looking for passionate people!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="#open-roles">
            <Button size="lg" className="bg-[#4d77ff] hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors">
              Explore roles
            </Button>
          </Link>
          <a href="mailto:careers@orkeneo.com">
            <Button size="lg" variant="outline" className="border-[#4d77ff] text-[#4d77ff] font-bold px-8 py-3 rounded-lg shadow-lg transition-colors">
              Submit resume
            </Button>
          </a>
        </div>
      </section>
      <div className="w-full">
        <ContactUs />
      </div>
    </main>
  );
} 