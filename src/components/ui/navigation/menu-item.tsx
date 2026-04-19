import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuItemProp {
  icon: string;
  name: string;
  label: string;
  description: string;
  custom?: number;
  action?: { text: string; href: string; icon: string };
  isNew?: boolean;
  notAvailable?: boolean;
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export const MenuItem: React.FC<MenuItemProp> = ({
  icon,
  description,
  name,
  label,
  custom,
  action,
  isNew,
  notAvailable,
}) => {
  const badge = isNew ? (
    <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold align-middle">New</span>
  ) : notAvailable ? (
    <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold align-middle">Coming soon</span>
  ) : null;

  const content = (
    <motion.div
      className={`flex items-stretch gap-x-2 mt-2 p-2 rounded-md ${notAvailable ? 'opacity-60 cursor-not-allowed' : ''}`}
      whileHover={notAvailable ? {} : {
        backgroundColor: "rgba(243, 244, 246, 1)",
        x: 2,
        transition: { duration: 0.2 },
      }}
      initial={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      transition={{
        backgroundColor: { duration: 0.2 },
        type: "tween",
      }}
    >
      <div>
        <Icon
          icon={icon}
          width={22}
          height={22}
          color="#517aff"
          className="mt-0.5"
        />
      </div>
      <div className={`${(label === "Who we serve" || label === "About") ? "w-52" : "w-64"}`}>
        <div className="flex items-center">
          <p className="text-lg text-gray-900 font-semibold">{name}</p>
          {badge}
        </div>
        <p className="text-sm text-gray-700">{description}</p>
        {action && !notAvailable && (
          <span
            className="text-blue-500 font-semibold flex items-center mt-2"
          >
            {action.text}
            {action.icon && (
              <Icon icon={action.icon} width={18} height={18} color="#517aff" className="ml-2" />
            )}
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="flex items-center gap-x-10"
      variants={itemVariants}
      custom={custom}
    >
      {action && !notAvailable ? (
        <Link href={action.href}>
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.section>
  );
};
