import { TrendingUp, TrendingDown, Clock } from "lucide-react";

/* =========================
   HERO SECTION
========================= */
export const STAFFING_HERO = {
  tag: "₹18,000/month = ₹600 wasted every day",
  title: "You're losing ₹18,000/month on inefficient staffing",
  highlight: "₹18,000/month",
  subtitle:
    "From overstaffing during slow hours and understaffing during peak time. Orkeneo schedules your team — today.",
  primaryText: "Get My Staffing Plan",
  secondaryText: "Fix My Schedule Today",
  users: ["AS", "MK", "RJ"],
  usersText: "Used by 240+ restaurant owners",
  image: "/avatar/credibility-graph.png",
};

/* =========================
   COST CARDS
========================= */
export const STAFFING_CARDS = [
  {
    icon: TrendingUp,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    title: "Overstaffing",
    description: "Idle staff during slow hours eating away your margins.",
    cost: "₹10,000",
    costLabel: "wasted wages/month",
    costColor: "text-red-600",
  },
  {
    icon: TrendingDown,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Understaffing",
    description: "Slow service during peaks resulting in customer churn.",
    cost: "₹5,000",
    costLabel: "lost revenue/month",
    costColor: "text-blue-600",
  },
  {
    icon: Clock,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Manual Work",
    description:
      "Hours spent staring at spreadsheets and WhatsApp groups.",
    cost: "2-3 hrs",
    costLabel: "wasted weekly",
    costColor: "text-purple-600",
  },
];

/* =========================
   AI STEPS
========================= */
export const STAFFING_STEPS = [
  {
    id: 1,
    title: "Predict hourly demand",
    desc: "We analyze your past 12 months of POS data to forecast customer flow hour-by-hour.",
  },
  {
    id: 2,
    title: "Match staff to demand",
    desc: "AI calculates the perfect employee-to-guest ratio based on your service style.",
  },
  {
    id: 3,
    title: "Adjust automatically",
    desc: "Live sales data dynamically updates staffing recommendations in real-time.",
  },
];

/* =========================
   STATS STRIP
========================= */
export const STAFFING_STATS = [
  {
    value: "20%",
    label: "Labor cost reduction",
  },
  {
    value: "15%",
    label: "Better service quality",
  },
  {
    value: "100%",
    label: "Data-driven scheduling",
  },
];

/* =========================
   COMPARISON SECTION
========================= */
export const STAFFING_COMPARISON = {
  withoutTitle: "Without Orkeneo",
  withTitle: "With Orkeneo",
  recommended: true,

  withoutFeatures: [
    {
      title: "Overstaffing / Understaffing chaos",
      description: "Every shift becomes unpredictable",
    },
    {
      title: "Manual guesswork",
      description: "Leads to constant stress",
    },
    {
      title: "₹18,000/month loss",
      description: "Inefficient labor cost",
    },
  ],

  withFeatures: [
    {
      title: "Perfect staff allocation",
      description: "Optimized for every hour",
    },
    {
      title: "AI-driven scheduling",
      description: "Automated and accurate decisions",
    },
    {
      title: "+₹18,000/month recovered",
      description: "Reduced labor waste instantly",
    },
  ],

  rightImage: "/avatar/spaceship.png",
};

/* =========================
   TESTIMONIAL
========================= */
export const STAFFING_TESTIMONIAL = {
  initials: "JD",
  quote:
    "We reduced our labor cost by 18% in just 1 month. Now my team knows exactly how to schedule every shift.",
  highlight: "18% in just 1 month",
  author: "Restaurant Owner, Delhi",
};


export const CASE_STUDY_CTA = {
  title: "Get similar results for your restaurant.",
  subtitle:
    "Stop guessing and start optimizing. Join the ranks of elite operators using predictive intelligence to grow their bottom line.",
  primaryText: "Calculate Savings",
  secondaryText: "Book Demo",
  helperText: "No credit card required. Free 14-day performance audit.",
  bgColor:
    "bg-[radial-gradient(circle_at_0%_100%,rgba(25,79,215,0.4),transparent_40%),radial-gradient(circle_at_100%_0%,rgba(107,56,212,0.4),transparent_40%),linear-gradient(90deg,#194FD7,#3B6AF6)]",
};

export const PRECISION_CTA = {
  title: "Your precision plan for tonight's service",
  subtitle: "Recoverable this service: ₹30,000+",
  description: "Based on live demand patterns, historical kitchen performance, and current inventory levels.",
  primaryText: "Apply Precision Plan",
};