import ReusableCard from "./Reusablecomponents/ReusableCard";
import { IconMail } from "@tabler/icons-react";
import { IconUsers } from "@tabler/icons-react";
import { IconClock } from "@tabler/icons-react";
import { IconFileSignal } from "@tabler/icons-react";
import { IconUserCheck } from "@tabler/icons-react";
import { IconDevicesCheck } from "@tabler/icons-react";
import { IconListSearch } from "@tabler/icons-react";

interface dataProps {
  icon: React.ReactNode;
  text: string;
  smallCard: React.ReactNode;
  message: string;
  className?: string;
}

const data: dataProps[] = [
  {
    icon: <IconMail stroke={2} className="size-4" />,
    text: "Personalized Email",
    smallCard: (
      <div className="flex gap-x-1 rounded-lg p-0.5 items-center justify-center font-bold text-xs">
        <IconClock stroke={2} className="size-3" />
        <p className="text-[10px] font-semibold">15s</p>
      </div>
    ),
    message: "Personalized Email sent to ••••• @gmail.com",
  },
  {
    icon: <IconUsers stroke={2} className="size-4" />,
    text: "Peer Review",
    smallCard: <p>FAILED</p>,
    message: "Reviewed and approved 2 outputs from Content Drafting Agent",
  },
  {
    icon: <IconFileSignal stroke={2} className="size-4" />,
    text: "Content Drafting",
    smallCard: (
      <div>
        <p>PROCESSING</p>
      </div>
    ),
    message: "Generated draft campaign brief",
  },
  {
    icon: <IconUserCheck stroke={2} className="size-4" />,
    text: "Admin Approval",
    smallCard: (
      <div>
        <p>PROCESSING</p>
      </div>
    ),
    message: "Final approval of marketing copy b",
  },
  {
    icon: <IconMail stroke={2} className="size-4" />,
    text: "Weekly Campaign Report",
    smallCard: (
      <div className="flex gap-x-1 rounded-lg p-0.5 items-center justify-center font-bold text-xs">
        <IconClock stroke={2} className="size-3 " />
        <p className="text-[10px] font-semibold">2m</p>
      </div>
    ),
    message: "Generated campaign performance",
  },
  {
    icon: <IconDevicesCheck stroke={2} className="size-4" />,
    text: "SEO Audit",
    smallCard: (
      <div>
        <p>FAILED</p>
      </div>
    ),
    message: "Reviewed and approved 2 outputs f",
  },
  {
    icon: <IconListSearch stroke={2} className="size-4" />,
    text: "Price Monitoring Agent",
    smallCard: (
      <div>
        <p>PROCESSING</p>
      </div>
    ),
    message: "Generated draft campaign brief",
  },
];

const Features2 = () => {
  return (
    <div className="grid grid-cols-2 ">
      <ReusableCard
        heading={<>Audit Trail</>}
        subheading={
          <>
            Tracks every agent action with full <br /> input-output visibility
            and timestamps.
          </>
        }
        children={
          <div className="bg-neutral-200 pl-2 pt-2 rounded-tl-xl border-2 ">
            <div className="border-t-2 border-l-2 border-neutral-400 rounded-tl-xl bg-white pb-2">
              <div className="flex justify-start items-center w-full pl-4 gap-x-3 border-b-2 border-neutral-100 p-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M3.2002 2.40137V4.80137H6.4002"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.2002 4.80176V10.4018C3.2002 11.2858 3.9162 12.0018 4.8002 12.0018H6.4002"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.9998 2.40137H9.5998C9.15798 2.40137 8.7998 2.75954 8.7998 3.20137V5.60137C8.7998 6.0432 9.15798 6.40137 9.5998 6.40137H11.9998C12.4416 6.40137 12.7998 6.0432 12.7998 5.60137V3.20137C12.7998 2.75954 12.4416 2.40137 11.9998 2.40137Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.9998 9.6001H9.5998C9.15798 9.6001 8.7998 9.95827 8.7998 10.4001V12.8001C8.7998 13.2419 9.15798 13.6001 9.5998 13.6001H11.9998C12.4416 13.6001 12.7998 13.2419 12.7998 12.8001V10.4001C12.7998 9.95827 12.4416 9.6001 11.9998 9.6001Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <p>Recent Activity</p>
              </div>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="pl-4 grid justify-start items-center grid-cols-2 gap-x-8 my-3 text-sm "
                >
                  <div className="flex gap-x-2">
                    <span className=""> {item.icon} </span>
                    <span className="text-sm">{item.text}</span>
                    <span className="w-fit p-0.5 rounded-lg h-6 text-[11px] border-2">
                      {item.smallCard}
                    </span>
                  </div>
                  <p className="truncate text-sm">{item.message}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <div className="border-2">card2</div>
      <div className="border-2">card2</div>
      <div className="border-2">card2</div>
    </div>
  );
};

export default Features2;
