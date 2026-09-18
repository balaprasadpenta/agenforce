import ReusableHeroSection from "./Reusablecomponents/ReusableHeroSection";
import ctaimage from "../assets/ctaimage.webp";

const CtaSection = () => {
  return (
    <div>
      <ReusableHeroSection
        heading={<>Governed AI, <br /> Trusted Outcomes </>}
        subheading={
          <>
            Deploy Ai agents with built-in approvals, brand guardrails, and <br />
            audit trails. Every step is visible, reviewable, and compliant.{" "}
          </>
        }
        image={ctaimage}
      />
    </div>
  );
};

export default CtaSection;
