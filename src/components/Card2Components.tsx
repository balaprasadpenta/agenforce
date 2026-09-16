import { cn } from "@/lib/utils";
import { IconCheckFilled, IconLoader2 } from "@tabler/icons-react";
import { IconRipple } from "@tabler/icons-react";
import { IconCircleDashedCheck } from "@tabler/icons-react";

import type React from "react";

const SkeletonCard22 = ({
  tick,
  title,
  icon,
  text,
  activeStepIndex,
  className,
}: {
  tick: React.ReactNode;
  title: string[];
  icon: React.ReactNode;
  text: string[];
  activeStepIndex: number;
  // line: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border-l-8 bg-white h-52 rounded-lg relative perspective-distant transform-3d ",
        className,
      )}
    >
      <div className="absolute flex gap-x-12 rounded-lg ">
        {/* left side div */}
        <div className="flex flex-col justify-center ">
          {title.map((title, index) => (
            <div
              key={index}
              className="flex items-center px-2 py-1 gap-x-2 text-sm"
            >
              {index < activeStepIndex ? (
                <IconCheckFilled className="size-3.5 text-white bg-green-500 rounded-full overflow-hidden border-none" />
              ) : (
                <IconLoader2
                  stroke={2}
                  className="bg-yellow-300 size-4 rounded-full p-0.5 animate-spin"
                />
              )}
               {tick}
              <span>{title}</span>
            </div>
          ))}
        </div>

        {/* right side div  */}
        <div className="flex flex-col justify-center">
          {text.map((text, index) => (
            <div key={index} className="flex items-center px-4 py-2">
              {icon}
              <span className="text-[10px] font-bold">{text} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card2Components = () => {
  const steps = [
    "Fetching data",
    "Processing data",
    "Performing action",
    "Waiting",
    "Generating report",
  ];

  const times = ["10s", "20s", "30s", "40s", "50s"];

  return (
    <div className="mt-2 border-2 relative min-h-72 text-neutral-600 min-w-10 rounded-lg px-4 py-1 gap-x-8 -rotate-x-25 -rotate-y-8 -rotate-z-20 mask-r-from-50% mask-l-from-90% ">
      <div className="flex justify-start items-center gap-x-4 mt-2 mb-2">
        <IconCircleDashedCheck stroke={1} size={16} />
        <span>Campaign Planner</span>
      </div>

      <SkeletonCard22
        className=""
        activeStepIndex={4}
        tick
        title={steps}
        icon={<IconRipple stroke={1} className="size-3" />}
        text={times}
      />
    </div>
  );
};

export default Card2Components;
