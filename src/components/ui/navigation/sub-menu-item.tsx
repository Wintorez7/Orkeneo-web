import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface SubMenuItemProp {
  icon: string;
  header: string;
  desc: string;
  href: string;
  index: number;
}

export const SubMenuItem: React.FC<SubMenuItemProp> = ({
  desc,
  header,
  icon,
  index,
}) => {
  return (
    <motion.div
      className="p-2 mt-2 rounded-md"
      initial={{
        opacity: 0,
        x: -10,
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.05,
          duration: 0.2,
        },
      }}
      exit={{ opacity: 0, x: 10 }}
      whileHover={{
        backgroundColor: "rgba(243, 244, 246, 1)",
        x: 2,
        transition: { duration: 0.2 },
      }}
      transition={{
        backgroundColor: { duration: 0.2 },
        type: "tween",
      }}
    >
      {/* <Link href={href} className="w-full"></Link> */}
      <div className="w-full">
        <div className="flex gap-x-2">
          <div className=" hidden">
            <Icon
              icon={icon}
              width={22}
              height={22}
              color="#517aff"
              className="mt-0.5"
            />
          </div>
          <div className="flex justify-center mb-4">
            <div className="inline-flex justify-center items-center size-[26px] p-1.5 rounded-full bg-[#E5EBFF]">
              <Image
                src={`/icons/check.svg`}
                alt={"check"}
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="w-56">
            <p className="text-lg text-gray-900">{header}</p>
            <p className="text-sm text-gray-700">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
