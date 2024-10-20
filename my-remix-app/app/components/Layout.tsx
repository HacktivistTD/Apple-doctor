import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'remix';



const variants = {
  initial: {
    opacity: 0,
    y: 20, // Adjust the y-axis for a sliding effect
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20, // Adjust the y-axis for a sliding effect when exiting
  },
};

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }} // Adjust duration as needed
          className="absolute inset-0"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
