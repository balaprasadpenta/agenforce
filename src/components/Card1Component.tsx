import { cn } from "@/lib/utils";
import { IconPrison } from "@tabler/icons-react";
import { Badge } from "./ui/badge";
import { IconClock } from "@tabler/icons-react";
import { IconRipple } from "@tabler/icons-react";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { IconExclamationMark } from "@tabler/icons-react";
import { motion } from "motion/react";


const SkeletonCard = ({
  icon,
  title,
  badge,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  badge: React.ReactNode;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-h-full bg-gray-50 rounded-lg relative perspective-distant transform-3d -rotate-x-22 rotate-y-25 rotate-z-15",
        className,
      )}
    >
      <div className="bg-white rounded-lg max-w-full p-2 absolute ">
        <div className="flex items-center justify-start gap-x-4 py-3">
          <div>{icon}</div>
          <p>{title}</p>
          <div>{badge}</div>
        </div>
        <div>
          <p className="">{description}</p>
          <div className="flex gap-x-3">
            <div className="flex bg-neutral-200 rounded-sm px-2 py-1">
              Google Ads
            </div>
            <div className="flex bg-neutral-200 rounded-sm px-2 py-1">SAAS</div>
            <div className="flex bg-neutral-200 rounded-sm px-2 py-1">
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card1Component = () => {
  return (
    <div className="p-2 max-w-xl overflow-hidden max-h-full min-h-80 mask-r-from-10% ">
      <motion.div className="pt-5">
        {/* card1 */}
        <SkeletonCard
          className="z-10 mb-2 "
          icon={<IconPrison stroke={2} className="size-4" />}
          title="Risk Analysis"
          badge={
            <Badge className="bg-yellow-50 text-yellow-700 border-2 border-yellow-300">
              {" "}
              <IconClock stroke={1} /> <IconRipple stroke={1} /> 40s
            </Badge>
          }
          description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        />
      </motion.div>

      <motion.div className="pt-15 -ml-2 ">
        {/* card2 */}
        <SkeletonCard
          className="z-20 "
          icon={<IconExclamationMark stroke={2} />}
          title="Issue Tracker"
          badge={
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-2 border-green-300">
              {" "}
              <IconClock stroke={1} /> <IconRipple stroke={1} /> 10s
            </Badge>
          }
          description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        />
      </motion.div>

      {/* card3 */}
      <motion.div className="pt-5 -ml-2">
        <SkeletonCard
          className="z-30 mt-8 "
          icon={<IconCircleDashedCheck stroke={2} />}
          title="Campaign Planner"
          badge={
            <Badge variant="destructive" className="border-2 border-red-300">
              {" "}
              <IconClock stroke={1} /> <IconRipple stroke={1} /> 120s
            </Badge>
          }
          description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        />
      </motion.div>
    </div>
  );
};

export default Card1Component;
