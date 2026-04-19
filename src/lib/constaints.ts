export const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const navMenu = [
  {
    label: "Who It's For",
    topFeature: {
      image: "/images/restaurant.png",
      titles: "Now calculate your ROI instantly!",
      desc: "Check out our new tool which enables you to check your ROI with us instantly for you to decide better.",
      action: {
        text: "See our impact",
        href: "/calculate-savings",
        icon: "",
      },
    },
    items: [
      {
        icon: "solar:cloud-line-duotone",
        name: "Cloud Kitchens",
        description: "Optimize prep workflows and minimize waste in high-volume dark kitchens.",
        action: { text: "Learn more", href: "/cloud-kitchen", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:bolt-line-duotone",
        name: "QSR Chains",
        description: "Standardize operations across hundreds of franchise locations instantly.",
        action: { text: "Learn more", href: "/qsr-chains", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:cup-hot-line-duotone",
        name: "Cafes",
        description: "Manage peak demand spikes with precision automated ordering systems.",
        action: { text: "Learn more", href: "/cafes", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:star-shine-line-duotone",
        name: "Fine Dining",
        description: "Precision ingredient planning and labor allocation for elite service.",
        action: { text: "Learn more", href: "/fine-dining", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:map-point-wave-line-duotone",
        name: "Multi-location Brands",
        description: "Centralized intelligence dashboard for comprehensive corporate oversight.",
        action: { text: "Learn more", href: "/multi-location-brands", icon: "mdi:arrow-right" },
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        icon: "solar:chef-hat-minimalistic-line-duotone",
        name: "Food Prep Forecasting",
        description: "AI-driven quantity suggestions to eliminate over-prep and stockouts.",
        action: { text: "Learn more", href: "/food-prep-forecasting", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:book-2-line-duotone",
        name: "Menu Intelligence",
        description: "Identify high-margin items and optimize menu engineering for profit.",
        action: { text: "Learn more", href: "/menu-intelligence", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:archive-minimalistic-line-duotone",
        name: "Inventory Optimization",
        description: "Real-time tracking and automated purchase orders for supplies.",
        action: { text: "Learn more", href: "#", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:users-group-two-rounded-line-duotone",
        name: "Smart Labor Scheduling",
        description: "Match staffing levels to predicted foot traffic and sales volume.",
        action: { text: "Learn more", href: "/labor-scheduling", icon: "mdi:arrow-right" },
      },
    ],
  },
  {
    label: "Product",
    items: [
      {
        icon: "mdi:chart-line",
        name: "Food Prep Forecasting",
        description: "Predict daily demand with AI-driven accuracy.",
        action: { text: "Learn more", href: "#", icon: "mdi:arrow-right" },
      },
      {
        icon: "mdi:brain",
        name: "AI Decision Center",
        description: "Your central hub for automated operational choices.",
        action: { text: "Learn more", href: "#", icon: "mdi:arrow-right" },
      },
      {
        icon: "mdi:view-dashboard",
        name: "Live Dashboard",
        description: "Real-time performance metrics against predictive goals.",
        action: { text: "Learn more", href: "#", icon: "mdi:arrow-right" },
      },
      {
        icon: "mdi:file-chart",
        name: "Reports & Insights",
        description: "Deep-dive analytics for performance reviews.",
        action: { text: "Learn more", href: "#", icon: "mdi:arrow-right" },
      },
    ],
  },
  {
    label: "Partners",
    link: "/partners",
  },
  {
    label: "Resources",
    items: [
      {
        icon: "solar:calculator-line-duotone",
        name: "ROI Calculator",
        description: "Calculate your potential savings in 2 minutes.",
        action: { text: "Learn more", href: "/roi-calculator", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:shield-check-line-duotone",
        name: "Case Studies",
        description: "How top brands achieved 15% waste reduction.",
        action: { text: "Learn more", href: "/case-studies", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:document-text-line-duotone",
        name: "Blogs",
        description: "The latest in food-tech and kitchen operations.",
        action: { text: "Learn more", href: "/blogs", icon: "mdi:arrow-right" },
      },
      {
        icon: "solar:book-line-duotone",
        name: "Playbooks",
        description: "Comprehensive guides to digital transformation.",
        action: { text: "Learn more", href: "/playbooks", icon: "mdi:arrow-right" },
      },
    ],
  },
];

export type NavMenu = typeof navMenu;

export const testimonialData = [
  {
    id: "1",
    logo: "/brand-images/barbeque-nation.png",
    content:
      "We've been using Orkeneo to kick start every day and can't imagine running our restaurants without it.",
    image: "/avatar/Madhu_sudhan.png",
    name: "Madhu Sudhan",
    designation: "Regional Manager, Barbeque Nation",
  },
  {
    id: "2",
    logo: "/brand-images/chai-sutta-bar.png",
    content:
      "Orkeneo streamlined our delivery operations and made kitchen coordination a breeze.",
    image: "/avatar/Madhu_sudhan.png",
    name: "Riya Kapoor",
    designation: "Operations Head, Chai Sutta Bar",
  },
  {
    id: "3",
    logo: "/brand-images/faasos.png",
    content:
      "With Orkeneo, we improved team efficiency and cut down order delays by 30%.",
    image: "/avatar/Madhu_sudhan.png",
    name: "Rahul Verma",
    designation: "Franchise Owner, Faasos",
  },
  {
    id: "4",
    logo: "/brand-images/wow-momo.png",
    content:
      "Orkeneo has become our go-to platform for managing shifts, inventory, and team schedules smoothly.",
    image: "/avatar/Madhu_sudhan.png",
    name: "Sara Fernandes",
    designation: "Regional Manager, Wow Momo",
  },
];

export const features = [
  {
    icon: "/icons/fi-rr-checkbox.svg",
    title: "Accuracy",
    text: "Restaurants often face unpredictable demand from weather, events, or holidays. Orkeneo's PrepWise Forecasting provides proactive insights to help teams stay ahead and recover lost profits.",
  },
  {
    icon: "/icons/fi-rr-cube.svg",
    title: "Simple Forecasts",
    text: "Prep forecasting streamlines operations with no onboarding or manual input, adapting easily to any role—from big-picture planning to daily prep decisions.",
  },
  {
    icon: "/icons/fi-rr-confetti.svg",
    title: "Customizable",
    text: "Access and update reports from your dashboard, with insights tailored to your restaurant. Share them easily with your team to keep everyone in sync.",
  },
];

export const aboutStats = [
  { value: "4k+", label: "Restaurants onboarded" },
  { value: "600%", label: "Return on investment" },
  { value: "10k", label: "Total Outlets" },
  { value: "$10M+", label: "Saved for our clients" },
];

export const prepwiseStats = [
  { value: "50+%", label: "Waste Reduction" },
  { value: "40%", label: "Profitability Increase" },
];

export const laborForecastTestimonialData = [
  {
    id: "1",
    content:
      "Orkeneo's labor forecasting tool helped us perfectly align staff shifts with peak hours. No more under- or over-staffing.",
    designation: "Ankit Sinha, Operations Manager at Tandoori Junction, Delhi",
  },
  {
    id: "2",
    content:
      "We've reduced our labor cost by almost 15% since using Orkeneo. The shift planning insights are incredibly accurate.",
    designation: "Rashmi Patel, Owner at Patel's Pure Veg, Ahmedabad",
  },
  {
    id: "3",
    content:
      "Earlier, we relied on guesswork for staffing. Now, with Orkeneo, we plan ahead with confidence—especially for weekends and festivals.",
    designation: "Mohammed Irfan, General Manager at Biryani Bhavan, Hyderabad",
  },
  {
    id: "4",
    content:
      "Orkeneo's AI tells us exactly how many staff we need for each shift. It's helped us save money and reduce employee burnout.",
    designation: "Sneha Raut, HR Manager at Chai Stack Café, Pune",
  },
  {
    id: "5",
    content:
      "The labor forecasts from Orkeneo are almost spot-on. We no longer scramble at the last minute before lunch rush.",
    designation:
      "Karan Mehra, Franchise Partner at Bombay Sandwich Co., Mumbai",
  },
];

export const menuForecastingTestimonialData = [
  {
    id: "1",
    content:
      "With Orkeneo's menu forecasting, we know exactly which dishes will sell more each day. It's helped us avoid over-prep and reduce waste significantly.",
    designation: "Neha Kapoor, Head Chef at Urban Tadka, Mumbai",
  },
  {
    id: "2",
    content:
      "Earlier, we'd prepare based on instinct. Now, Orkeneo tells us what to stock and how much to prep—our food costs are down, and efficiency is up.",
    designation: "Ramesh Sharma, Owner at Sharma Dhaba, Jaipur",
  },
  {
    id: "3",
    content:
      "Orkeneo's forecasting lets us plan special offers on trending items. We sold out three signature dishes during a rainy weekend—all thanks to data.",
    designation: "Sanjana Iyer, Marketing Lead at Chaat Vibes, Bengaluru",
  },
  {
    id: "4",
    content:
      "The menu forecast helped us confidently plan for Ganesh Chaturthi rush. We prepped smarter and served more customers with less chaos.",
    designation: "Vikram Joshi, Co-founder at Mithaas Sweets, Nagpur",
  },
  {
    id: "5",
    content:
      "As a cloud kitchen operator, menu-level forecasting from Orkeneo has been a huge win. We've reduced our unsold inventory by 28% in two months.",
    designation:
      "Priya Arora, Operations Head at MasalaBox Cloud Kitchen, Gurugram",
  },
];

export const contactDetails = [
  {
    title: "Support",
    desc: "Our friendly team is here to help.",
    link: "mailto:support@orkeneo.com",
    label: "support@orkeneo.com",
  },
  {
    title: "Sales",
    desc: "Questions or queries? Get in touch!",
    link: "mailto:sales@orkeneo.com",
    label: "sales@orkeneo.com",
  },
  {
    title: "Phone",
    desc: "Mon–Fri from 8am to 5pm.",
    link: "tel:+918887688275",
    label: "+91 888-768-8275",
  },
];

export const teamsTestimonials = [
  {
    id: "1",
    content:
      "Working at Orkeneo has been transformative. The opportunity to solve real-world problems in the restaurant industry using cutting-edge AI is incredibly fulfilling.",
    designation: "Ankit Sinha, Senior Data Scientist",
    name: "Ankit Sinha",
    role: "Senior Data Scientist",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    content:
      "The collaborative culture here is amazing. Every voice is heard, and we're all working towards the same mission of reducing food waste through intelligent technology.",
    designation: "Priya Sharma, Product Manager",
    name: "Priya Sharma",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    content:
      "Orkeneo provides the perfect balance of technical challenges and meaningful impact. Building solutions that help restaurants operate more efficiently is incredibly rewarding.",
    designation: "Rahul Gupta, Full Stack Engineer",
    name: "Rahul Gupta",
    role: "Full Stack Engineer",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export const collaborationSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "30-minute consultation to understand your needs and explore synergies",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Technical Integration",
    description:
      "Our team handles the heavy lifting with comprehensive API documentation",
    duration: "Week 2-3",
  },
  {
    step: "03",
    title: "Go-to-Market",
    description:
      "Launch joint initiatives with dedicated support and co-marketing resources",
    duration: "Week 4+",
  },
];

export const partnerLogos = [
  {
    name: "Petpooja",
    inTalks: true,
    category: "POS Systems",
    logo: "/integrations/petpooja.png",
    logoStyle: "p-2",
  },
  {
    name: "UrbanPiper",
    inTalks: true,
    category: "Delivery Management",
    logo: "/brand-images/urban-piper.jpeg",
    logoStyle: "",
  },
  {
    name: "Speed Kitchen",
    inTalks: true,
    category: "Cloud Kitchen",
    logo: "/brand-images/speed-kitchen.png",
    logoStyle: "border",
  },
  {
    name: "CureFoods",
    inTalks: true,
    category: "Food Brands",
    logo: "/brand-images/curefoods.jpeg",
    logoStyle: "",
  },
];

export const partnershipBenefits = [
  {
    icon: "fi-rr-stats",
    title: "Shared Pipeline",
    desc: "Access our network of 500+ restaurant clients & expand your market reach through collaborative opportunities.",
    highlight: "500+ Clients",
  },
  {
    icon: "zap",
    title: "Seamless Integration",
    desc: "Deep API integrations with 99.9% uptime that create unified experiences for mutual customers.",
    highlight: "99.9% Uptime",
  },
  {
    icon: "fi-rr-megaphone",
    title: "Co-Marketing",
    desc: "Joint marketing initiatives reaching 50K+ decision makers in the restaurant industry monthly.",
    highlight: "50k+ Reach",
  },
  {
    icon: "fi-rr-chat-arrow-grow",
    title: "Mutual Growth",
    desc: "Revenue sharing models with an average 25% increase in partner revenue within 6 months.",
    highlight: "25% Growth",
  },
];
