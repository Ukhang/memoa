"use client";

import AccordionInfo from "./_components/AccordionInfo";
import Footer from "./_components/Footer";
import Heading from "./_components/Heading";
import Hero from "./_components/Hero";
import { motion } from "motion/react";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

const MarketingPage = () => {
  return (
    <motion.main
      className="min-h-full flex flex-col"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 sm:pb-14 md:pb-16 dark:bg-[#1F1F1F]">
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <Heading />
        </motion.section>
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <Hero />
        </motion.section>
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="w-full"
        >
          <AccordionInfo />
        </motion.section>
      </div>
      <Footer />
    </motion.main>
  );
};

export default MarketingPage;
