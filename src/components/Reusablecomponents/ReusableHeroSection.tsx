import { Button } from "../ui/button";
import { motion } from "motion/react";

interface ReusableSectionProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  image: string;
  imageAlt?: string;
  className?: string;
}

const ReusableHeroSection = ({
  heading,
  subheading,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
  image,
  imageAlt = "section image",
  className = "",
}: ReusableSectionProps) => {
  return (
    <div className="flex flex-col pt-24 h-275 gap-y-96 my-8 relative">
      <div className="relative flex flex-col gap-y-8 max-h-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
          {heading}
        </h1>
        <p className="text-base lg:text-xl">{subheading}</p>

        {/* Buttons  */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex items-center gap-4 pb-8">
            {primaryButtonText && (
              <Button
                variant="ghost"
                onClick={primaryButtonAction}
                className="bg-black text-white shadow-[-12px_8px_20px_rgba(0,0,0,0.8)]"
              >
                {primaryButtonText}
              </Button>
            )}

            {secondaryButtonText && (
              <Button variant="ghost" onClick={secondaryButtonAction}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* images  */}
      <motion.div className="absolute rounded-lg md:h-100 pl-10 mt-88 z-0 perspective-distant transform-3d rotate-x-15 rotate-y-10 -rotate-z-20 mask-r-from-50% mask-b-from-50%">
        <img src={image} alt={imageAlt} className="w-6xl" />
      </motion.div>
      <motion.div className="absolute scale-90 pr-20 rounded-lg pl-20 z-10 md:h-160 mt-48 perspective-distant transform-3d rotate-x-15 rotate-y-10 -rotate-z-20 mask-r-from-50% mask-b-from-50%">
        <img src={image} alt={imageAlt} className="w-6xl" />
      </motion.div>
    </div>
  );
};

export default ReusableHeroSection;
