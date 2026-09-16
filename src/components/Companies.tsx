import { motion } from "motion/react";

import characterai from "../assets/characterai.png";
import granola from "../assets/granola.webp";
import hellopatient from "../assets/hello-patient.webp";
import openai from "../assets/openai.webp";
import oracle from "../assets/oracle.webp";
import portola from "../assets/portola.webp";

const images = [openai, hellopatient, granola, characterai, oracle, portola];

//  Parent Variant for the entire section (animates text first, then triggers grid)
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

//  Text/Paragraph Variant (Smooth drop + blur removal)
const textVariants = {
  hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
} as const;

//  Grid Container Variant (Controls stagger sequence for all child images)
const gridvariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

// individual image variant ( how each image animates in )
const imageVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

const Companies = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
      className="flex flex-col justify-center items-center my-8 "
    >
      <motion.p
        variants={textVariants}
        className="font-medium text-neutral-600 max-w-xl pb-2"
      >
        Trusted by modern operators across industries
      </motion.p>

      <motion.p
        variants={textVariants}
        className="max-w-xl text-neutral-400 font-medium pb-14"
      >
        From pilot to scale without chaos
      </motion.p>

      <motion.div
        variants={gridvariant}
        className="grid grid-cols-3 gap-x-40 max-w-4xl w-full"
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            variants={imageVariants}
            src={image}
            alt="image"
            className="size-20 mx-auto object-contain"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Companies;
