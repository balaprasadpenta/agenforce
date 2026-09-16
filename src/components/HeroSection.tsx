import { Button } from "./ui/button";
import heroimage from "../assets/heroimage.jpg";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="flex flex-col pt-24 h-275 gap-y-96 my-8 relative">
      <div className="relative flex flex-col gap-y-8 max-h-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
          Agents that do the work <br /> Approvals that keep you safe.
        </h1>
        <p className="text-base lg:text-xl">
          Deploy AI agents that plan, act through your tools, and report <br />
          outcomes—without changing how your teams work.
        </p>
        <div className="flex items-center gap-4 pb-8">
          <Button
            variant="ghost"
            className="bg-black text-white shadow-[-12px_8px_20px_rgba(0,0,0,0.8)]"
          >
            start your free trial
          </Button>
          <Button variant="ghost">view role based demos</Button>
        </div>
      </div>

      <motion.div className="absolute rounded-lg md:h-100 pl-10 mt-88 z-0 perspective-distant transform-3d rotate-x-15 rotate-y-10 -rotate-z-20 mask-r-from-50% mask-b-from-50%">
        <img src={heroimage} alt="heroimage" className="w-6xl" />
      </motion.div>
      <motion.div className="absolute scale-90 pr-20 rounded-lg pl-20 z-10 md:h-160 mt-48 perspective-distant transform-3d rotate-x-15 rotate-y-10 -rotate-z-20 mask-r-from-50% mask-b-from-50%">
        <img src={heroimage} alt="heroimage" className="w-6xl" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
