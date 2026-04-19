import { motion } from "framer-motion";

interface MobileMenuButtonProp {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProp> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <motion.button
      className="lg:hidden flex flex-col justify-center items-center p-2"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-0.5 bg-blue-600 mb-1.5"
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-6 h-0.5 bg-blue-600 mb-1.5"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-6 h-0.5 bg-blue-600"
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};
