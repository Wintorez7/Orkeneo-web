"use client";
import { Button } from "@/components/reusable/button";
import { NavMenu } from "@/lib/constaints";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenuButton } from "./mobile-menu-button";
import { SelectedItem } from ".";

interface MobileMenuProp {
  isOpen: boolean;
  navMenu: NavMenu;
  active: string | null;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  onBookDemoClick?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProp> = ({
  isOpen,
  navMenu,
  toggleMenu,
  onBookDemoClick,
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );

  // Reset expanded items when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems({});
    }
  }, [isOpen]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 lg:hidden pt-4 pb-6 px-6 overflow-y-auto"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="flex items-center justify-between pb-5">
            <div className="flex items-center">
              <motion.div
                className="text-blue-500 w-fit text-xl font-bold flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/">
                  <Image
                    src="/logos/orkeneo-blue-logo.svg"
                    alt="Orkeneo Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-9 w-auto lg:h-10"
                  />
                </Link>
              </motion.div>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <MobileMenuButton
                isOpen={isOpen}
                toggleMenu={() => toggleMenu(false)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {navMenu.map(({ label, items, link, topFeature }) => (
              <div key={label} className="border-b border-gray-100 pb-2">
                {link ? (
                  <Link
                    href={link}
                    className="block w-full py-3 px-2 text-lg text-gray-800 hover:text-blue-500"
                    onClick={() => toggleMenu(false)}
                  >
                    {label}
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex justify-between items-center py-3 px-2"
                      onClick={() => toggleExpand(label)}
                    >
                      <span className="text-lg text-gray-800">{label}</span>
                      {items && items.length > 0 && (
                          <motion.div
                            animate={{ rotate: expandedItems[label] ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon
                              icon="mdi:chevron-down"
                              width={24}
                              height={24}
                              color="#000000"
                            />
                          </motion.div>
                        )}
                    </div>

                    <AnimatePresence>
                      {expandedItems[label] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2">
                            <p className="text-xs uppercase text-gray-500 mb-2">
                              {label}
                            </p>
                            {items?.map((item, i) => (
                              <div key={i} className="py-2">
                                <Link
                                  href={item.action?.href || "#"}
                                  className="flex items-center gap-2"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMenu(false); // Close menu on navigation
                                  }}
                                >
                                  <Icon
                                    icon={item.icon}
                                    width={16}
                                    height={16}
                                    color="#517aff"
                                  />
                                  <span className="text-gray-800">
                                    {item.name}
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>

                          {topFeature && (
                            <div className="block sm:flex justify-between gap-4 flex-row-reverse mt-4 mx-4 bg-gray-50 rounded-lg">
                              <div className="block sm:flex justify-center w-full  h-full sm:h-70">
                                <Image
                                  src={topFeature.image || "/globe.svg"}
                                  width={`${topFeature.image ? 100 : 40}`}
                                  height={topFeature.image ? 100 : 40}
                                  alt="top-feature"
                                  className="object-center w-full rounded-t-lg sm:rounded-e-lg sm:rounded-s-none"
                                />
                              </div>
                              <div className="p-6 space-y-2 flex flex-col justify-center">
                                <p className="font-medium text-lg text-gray-800 mb-1">
                                  {topFeature.titles}
                                </p>
                                <p className="text-base text-gray-600 mb-2">
                                  {topFeature.desc}
                                </p>
                                <Link
                                  className="text-blue-500 font-medium hover:underline"
                                  href={topFeature.action.href}
                                  onClick={() => toggleMenu(false)}
                                >
                                  {topFeature.action.text}
                                </Link>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 pt-4">
              <Button
                variant="default"
                size="md"
                className="w-full h-12 text-md"
                onClick={() => {
                  toggleMenu(false);
                  onBookDemoClick?.();
                }}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
