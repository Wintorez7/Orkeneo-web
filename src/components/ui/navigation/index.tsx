"use client";
import { navMenu } from "@/lib/constaints";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./mobile-menu";
import { MobileMenuButton } from "./mobile-menu-button";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { BookDemoModal } from "../book-demo-modal";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
export interface SelectedItem {
  icon: string;
  header: string;
  desc: string;
  href: string;
}

interface NavMenuItem {
  label: string;
  link?: string;
  items?: NavMenuItemChild[];
}

interface NavMenuItemChild {
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  label?: string;
  description?: string;
  href?: string;
  segments?: SelectedItem[];
  // right-panel preview data
  previewBadge?: string;
  previewTitle?: string;
  previewInsight?: string;
  previewCta?: string;
  previewCtaHref?: string;
}

interface LeftItem {
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
  label: string;
  description: string;
  href?: string;
  color?: string;
}

interface RightPanel {
  badge: string;
  badgeColor: string;
  title: string;
  insightLabel: string;
  insightDate: string;
  insightText: string;
  ctaText: string;
  ctaHref: string;
}

interface DropdownData {
  leftItems: LeftItem[];
  rightPanel: RightPanel;
}

// ── SOLUTIONS ──────────────────────────────────────────────
const solutionsDropdown: DropdownData = {
  leftItems: [
    {
      icon: "solar:chef-hat-minimalistic-line-duotone",
      label: "Food Prep Forecasting",
      description:
        "AI-driven quantity suggestions to eliminate over-prep and stockouts.",
      href: "/food-prep-forecasting",
    },
    {
      icon: "solar:book-2-line-duotone",
      label: "Menu Intelligence",
      description:
        "Identify high-margin items and optimize menu engineering for profit.",
      href: "/menu-intelligence",
    },
    {
      icon: "solar:archive-minimalistic-line-duotone",
      label: "Inventory Optimization",
      description:
        "Real-time tracking and automated purchase orders for supplies.",
    },
    {
      icon: "solar:users-group-two-rounded-line-duotone",
      label: "Smart Labor Scheduling",
      description:
        "Match staffing levels to predicted foot traffic and sales volume.",
      href: "/labor-scheduling",
    },
  ],
  rightPanel: {
    badge: "AI INSIGHT LIVE",
    badgeColor: "text-blue-600",
    title: "AI-Powered Kitchen Intelligence",
    insightLabel: "PROFIT RECOVERY",
    insightDate: "Today",
    insightText:
      '"Reduce Salmon prep by 15% today based on localized weather patterns and event data."',
    ctaText: "See Live Demo →",
    ctaHref: "#",
  },
};

//  Prodcuts
const productDropdown: DropdownData = {
  leftItems: [
    {
      icon: "mdi:chart-line",
      label: "Food Prep Forecasting",
      description: "Predict daily demand with AI-driven accuracy.",
      color: "#3E6AF1",
    },
    {
      icon: "mdi:brain",
      label: "AI Decision Center",
      description: "Your central hub for automated operational choices.",
      color: "#8455EF",
    },
    {
      icon: "mdi:view-dashboard",
      label: "Live Dashboard",
      description: "Real-time performance metrics against predictive goals.",
      color: "#00855B",
    },
    {
      icon: "mdi:file-chart",
      label: "Reports & Insights",
      description: "Deep-dive analytics for performance reviews.",
      color: "#DEE2EE",
    },
  ],
  rightPanel: {
    badge: "PRODUCT SUITE",
    badgeColor: "text-purple-600",
    title: "AI-Powered Operations Platform",
    insightLabel: "AUTOMATION",
    insightDate: "Live",
    insightText:
      '"AI is continuously optimizing prep, inventory, and staffing decisions."',
    ctaText: "Explore Product →",
    ctaHref: "#",
  },
};

// ── WHO IT'S FOR ───────────────────────────────────────────
const whoDropdown: DropdownData = {
  leftItems: [
    {
      icon: "/images/cloud-icon.png",
      label: "Cloud Kitchens",
      iconWidth: 17,
      iconHeight: 16,
      description:
        "Optimize prep workflows and minimize waste in high-volume dark kitchens.",
      href: "/cloud-kitchen",
    },
    {
      icon: "/images/qsr-chains.png",
      label: "QSR Chains",
      iconWidth: 17,
      iconHeight: 16,
      description:
        "Standardize operations across hundreds of franchise locations instantly.",
      href: "/qsr-chains",
    },
    {
      icon: "/images/cafe-icon.png",
      label: "Cafes",
      iconWidth: 17,
      iconHeight: 16,
      description:
        "Manage peak demand spikes with precision automated ordering systems.",
      href: "/cafes",
    },
    {
      icon: "/images/fine-dining.png",
      label: "Fine Dining",
      iconWidth: 17,
      iconHeight: 16,
      description:
        "Precision ingredient planning and labor allocation for elite service.",
      href: "/fine-dining",
    },
    {
      icon: "/images/multi-location-icon.png",
      label: "Multi-location Brands",
      description:
        "Centralized intelligence dashboard for comprehensive corporate oversight.",
      href: "/multi-location-brands",
    },
  ],
  rightPanel: {
    badge: "WHO WE SERVE",
    badgeColor: "text-violet-600",
    title: "Built for Every Kitchen Format",
    insightLabel: "GLOBAL REACH",
    insightDate: "2024",
    insightText:
      '"From single-unit cafes to 500-location QSR chains — Orkeneo adapts to your operational complexity."',
    ctaText: "See All Use Cases →",
    ctaHref: "#",
  },
};

// ── RESOURCES ─────────────────────────────────────────────
const resourcesDropdown: DropdownData = {
  leftItems: [
    {
      icon: "solar:calculator-line-duotone",
      label: "ROI Calculator",
      description: "Calculate your potential savings in 2 minutes.",
      href: "/roi-calculator",
    },
    {
      icon: "solar:shield-check-line-duotone",
      label: "Case Studies",
      description: "How top brands achieved 15% waste reduction.",
      href: "/case-studies",
    },
    {
      icon: "solar:document-text-line-duotone",
      label: "Blogs",
      description: "The latest in food-tech and kitchen operations.",
      href: "/blogs",
    },
    {
      icon: "solar:book-line-duotone",
      label: "Playbooks",
      description: "Comprehensive guides to digital transformation.",
      href: "/playbooks",
    },
  ],
  rightPanel: {
    badge: "AI INTELLIGENCE PULSE",
    badgeColor: "text-emerald-600",
    title: "Systems Active & Optimizing",
    insightLabel: "LIVE STATUS",
    insightDate: "Now",
    insightText:
      '"All modules running. AI is actively optimizing prep lists, inventory, and staffing across all locations."',
    ctaText: "View Live Dashboard →",
    ctaHref: "#",
  },
};

const dropdownMap: Record<string, DropdownData> = {
  "Who It's For": whoDropdown,
  Solutions: solutionsDropdown,
  Product: productDropdown,
  Resources: resourcesDropdown,
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.12, ease: "easeIn" as const },
  },
};

function DropdownPanel({ data, label }: { data: DropdownData; label: string }) {
  const { leftItems, rightPanel } = data;

  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50 "
      style={{ filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.12))" }}
    >
      {/* Arrow */}
      <div className="flex justify-center -mb-px">
        <div className="w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100" />
      </div>

      {/*  WHO IT'S FOR */}
      {label === "Who It's For" ? (
        <div className="bg-white rounded-2xl p-6 w-130 shadow-xl border border-gray-100">
          <div className="grid grid-cols-2 gap-6">
            {leftItems.map((item) => (
              <Link key={item.label} href={item.href || "#"}>
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  <div className="w-28 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                    {item.icon.startsWith("/") ? (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={item.iconWidth || 24}
                        height={item.iconHeight || 24}
                        className="object-contain"
                      />
                    ) : (
                      <Icon
                        icon={item.icon}
                        className="text-blue-600"
                        width={item.iconWidth || 44}
                        height={item.iconHeight || 20}
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      ) : /*  SOLUTIONS (already done before) */
      label === "Solutions" ? (
        <div className="bg-white rounded-3xl overflow-hidden flex w-230 border border-gray-100 shadow-2xl">
          {/* LEFT GRID */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 px-8 py-8 flex-1">
            {leftItems.map((item) => (
              <Link key={item.label} href={item.href || "#"}>
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-5 cursor-pointer"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    {item.icon.startsWith("/") ? (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={item.iconWidth || 24}
                        height={item.iconHeight || 24}
                        className="object-contain"
                      />
                    ) : (
                      <Icon
                        icon={item.icon}
                        className="text-blue-600"
                        width={item.iconWidth || 44}
                        height={item.iconHeight || 24}
                      />
                    )}
                  </div>

                  {/* TEXT */}
                  <div className="max-w-65">
                    <p className="text-[15px] font-semibold text-gray-900 leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="w-[320px] bg-linear-to-br from-blue-600 to-indigo-600 text-white px-8 py-8 flex flex-col justify-between rounded-r-3xl">
            <div>
              <h3 className="text-[22px] font-bold leading-snug">
                AI-Powered Kitchen Intelligence
              </h3>

              <p className="text-[14px] text-blue-100 mt-3 leading-relaxed">
                Unlock hidden margins with our predictive engine. Trusted by
                5,000+ kitchens.
              </p>
            </div>

            <button className="mt-8 bg-white text-blue-600 font-semibold py-3 px-6 rounded-full text-sm hover:bg-gray-100 transition">
              View Demo →
            </button>
          </div>
        </div>
      ) : /*  PRODUCT (NEW DESIGN) */
      label === "Product" ? (
        <div className="bg-white rounded-2xl p-6 w-130 shadow-xl border border-gray-100 flex flex-col gap-4">
          {leftItems.map((item) => (
            <Link key={item.label} href={item.href || "#"}>
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon.startsWith("/") ? (
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={item.iconWidth || 24}
                      height={item.iconHeight || 24}
                      className="object-contain"
                    />
                  ) : (
                    <Icon
                      icon={item.icon}
                      className="text-white"
                      width={item.iconWidth || 42}
                      height={item.iconHeight || 22}
                    />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : /* RESOURCES (NEW DESIGN) */
      label === "Resources" ? (
        <div className="bg-white rounded-2xl p-6 w-140 shadow-xl border border-gray-100">
          <div className="grid grid-cols-2 gap-5">
            {leftItems.map((item) => (
              <Link key={item.label} href={item.href || "#"}>
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl border border-gray-100 hover:shadow-md cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    {item.icon.startsWith("/") ? (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={item.iconWidth || 20}
                        height={item.iconHeight || 20}
                        className="object-contain"
                      />
                    ) : (
                      <Icon
                        icon={item.icon}
                        className="text-blue-600"
                        width={item.iconWidth || 20}
                        height={item.iconHeight || 20}
                      />
                    )}
                  </div>

                  <p className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-5 bg-green-50 text-green-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            AI Intelligence Pulse: Systems active and optimizing across all
            modules.
          </div>
        </div>
      ) : (
        /*  DEFAULT (fallback) */
        <div className="bg-white rounded-2xl overflow-hidden flex min-w-145 max-w-175 border border-gray-100">
          <div className="p-6">Default Menu</div>
        </div>
      )}
    </motion.div>
  );
}

export function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  // Delay timer ref so moving mouse between button → dropdown doesn't flicker
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* resize */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on resize to desktop */
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [isMobile, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setActive(null);
  };

  /* ── hover helpers ── */
  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (dropdownMap[label]) setActive(label);
    setHovered(label);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    // Small delay so cursor can travel into the dropdown panel without it closing
    closeTimer.current = setTimeout(() => {
      setActive(null);
    }, 120);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleDropdownMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActive(null);
      setHovered(null);
    }, 80);
  };

  /* click for plain links without dropdown */
  const handleNavClick = (label: string, link?: string) => {
    if (!dropdownMap[label]) {
      setActive(null);
      if (link) router.push(link);
    }
  };

  return (
    <>
      <motion.section
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        } ${isMobileMenuOpen ? "hidden" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6  ">
          {/* ── pill wrapper ── */}
          <div
            ref={navRef}
            className="relative flex  items-center justify-between bg-white rounded-full px-6 py-3 shadow-md"
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-lg flex font-semibold text-gray-900 items-center"
            >
              <Image
                src="/logos/orkeneo-blue-logo.svg"
                alt="Orkeneo Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-7 w-auto lg:h-8"
              />
            </Link>

            {/* Nav items */}
            <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-600">
              {navMenu.map(({ label, link }: NavMenuItem) => {
                const hasDropdown = Boolean(dropdownMap[label]);
                const isActive = active === label;
                const isHovered = hovered === label;
                // Show underline on hover OR when dropdown is open
                const showUnderline = isHovered || isActive;

                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.button
                      onClick={() => handleNavClick(label, link)}
                      whileHover={{ y: -1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className={`relative flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer border-none bg-transparent transition-colors duration-150 text-sm font-medium group ${
                        isActive || isHovered
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {link && !hasDropdown ? (
                        <Link
                          href={link}
                          className="transition-colors no-underline text-inherit"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {label}
                        </Link>
                      ) : (
                        <span>{label}</span>
                      )}

                      {hasDropdown && (
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon
                            icon="solar:alt-arrow-down-line-duotone"
                            style={{ width: 14, height: 14 }}
                            className={
                              isActive || isHovered
                                ? "text-blue-600"
                                : "text-gray-400"
                            }
                          />
                        </motion.span>
                      )}

                      {/* Blue underline — shows on hover AND when dropdown is open */}
                      <span
                        className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-blue-600 rounded-full origin-left transition-transform duration-200 ${
                          showUnderline ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </motion.button>

                    {/* Dropdown panel — extends hover area */}
                    <AnimatePresence>
                      {isActive && hasDropdown && (
                        <div
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <DropdownPanel
                            data={dropdownMap[label]}
                            label={label}
                          />
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-sm text-gray-700 hover:text-black transition-colors duration-150">
                Login
              </button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-linear-to-r bg-blue-600"
              >
                Get Savings
              </motion.button>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden">
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                toggleMenu={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navMenu={navMenu}
        active={active}
        setActive={setActive}
        toggleMenu={toggleMobileMenu}
        onBookDemoClick={() => setIsModalOpen(true)}
      />

      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
