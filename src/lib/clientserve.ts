export interface ServiceList {
  title: string;
  description: string;
}

export interface ServeContent {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
  serviceList: Array<ServiceList>;
}

export interface ServeData {
  image: string;
  placeImageLeft: boolean;
  content: ServeContent;
}

export const serveData: Array<ServeData> = [
  {
    image: "/images/Chicken_Role.png",
    placeImageLeft: false,
    content: {
      icon: "/icons/enterprise.svg",
      alt: "Enterprise",
      title: "Enterprise",
      subtitle: "Smart automation for multi-location brands",
      serviceList: [
        {
          title: "Quick Service Restaurants",
          description: "Run busy kitchens with real-time prep & labor forecast",
        },
        {
          title: "Fast Casual",
          description:
            "Deliver consistent experiences with better control over staffing and stock.",
        },
        {
          title: "Full Service Dining",
          description:
            "Handle complexity with ease – AI helps you prep smart and serve better.",
        },
      ],
    },
  },
  {
    image: "/images/snacks-starter.png",
    placeImageLeft: true,
    content: {
      icon: "/icons/franchise.svg",
      alt: "Franchise",
      title: "Franchise",
      subtitle:
        "Boost margins with our Tailored AI Support. Empower franchise locations with plug-and-play insights and voice ordering.",
      serviceList: [
        {
          title: "Pizza Chains",
          description:
            "Predict dough, cheese and topping needs daily - minimize waste, maximize sales.",
        },
        {
          title: "Healthy Cafes",
          description:
            "Serve fresh with AI-backed forecasting for greens, fruitsand proteins.",
        },
      ],
    },
  },

  {
    image: "/images/indian_cuisine.png",
    placeImageLeft: false,
    content: {
      icon: "/icons/fi-rr-fish.svg",
      alt: "fi-rr-fish",
      title: "Independent",
      subtitle:
        "Custom tools for local kitchens, no matter your size, our tech helps you cook smarter and profit faster.",
      serviceList: [
        {
          title: "Bakeries",
          description:
            "Stay ahead of the demand with daily batch forecasting -no more over-baking and loss.",
        },
        {
          title: "Barbecue Outlets",
          description:
            "Grill with confidence - get data backed meat prep andsmoking plans.",
        },
        {
          title: "Regional Cuisines",
          description:
            "From South Indian to street food - forecast key ingredientsby weather and footfall.",
        },
      ],
    },
  },
];
