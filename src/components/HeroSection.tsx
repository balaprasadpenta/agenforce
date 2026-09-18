import heroimage from "../assets/heroimage.jpg";
import ReusableHeroSection from "./Reusablecomponents/ReusableHeroSection";

const HeroSection = () => {
  return (
    <ReusableHeroSection
      heading={
        <>
          Agents that do the work <br /> Approvals that keep you safe
        </>
      }
      subheading={
        <>
          Deploy AI agents that plan, act through your tools, and report <br />
          outcomes—without changing how your teams work.
        </>
      }
      primaryButtonText="start your free trial"
      secondaryButtonText="view role based demos"
      image={heroimage}
      imageAlt="AI agents Dashboard"
    />
  );
};

export default HeroSection;
