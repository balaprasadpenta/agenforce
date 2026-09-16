// import { IconShield } from "@tabler/icons-react";
import { IconFingerprint } from "@tabler/icons-react";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

const Card3Component = () => {
  return (
    <div className="w-full relative h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute mx-auto rounded-full flex w-full max-w-7xl items-center justify-center" />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={2}
        colorLightVar="--color-neutral-600"
        glowColorLightVar="--color-stone-100"
        colorDarkVar="--color-neutral-800"
        glowColorDarkVar="--color-sky-900"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1.5}
      />

      <div className="relative z-10 flex size-46 items-center justify-center ">
        {/* <IconShield
          stroke={2}
          className="absolute size-48 text-white bg-gradient-to-top border-2 inline-flex justify-center items-center"
        /> */}
        <div className="flex justify-center items-center absolute ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="184"
            height="184"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-shield"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          </svg>
        </div>
        <IconFingerprint
          stroke={2}
          strokeOpacity={1}
          className="relative size-24 text-green-600 rounded-xl overflow-hidden "
        />
      </div>
    </div>
  );
};

export default Card3Component;
