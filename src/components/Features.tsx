import Card4Component from "./Card4Component";
import { IconJumpRope } from "@tabler/icons-react";
import { IconAiGateway } from "@tabler/icons-react";
import { IconUserScreen } from "@tabler/icons-react";

interface Data {
  icon: React.ReactNode;
  heading: string;
  subheading: string;
}

const featuresdata: Data[] = [
  {
    icon: <IconJumpRope stroke={2} className="size-5" />,
    heading: "Workflow Automation",
    subheading:
      "Automate campaigns, tickets and crm updates without manual handoffs",
  },
  {
    icon: <IconAiGateway stroke={2} className="size-5" />,
    heading: "Integration Fabric",
    subheading:
      "Connect CRMs, service desks, data warehouses and cloud apps seamlessly",
  },
  {
    icon: <IconUserScreen stroke={2} className="size-5"/>,
    heading: "Human-in-the-Loop",
    subheading: "Add reviews, approvals and escalations without slowing work.",
  },
];

const Features = () => {
  return (
    <div>
      <div className="pt-12 border-t-2 border-t-neutral-100 max-w-xl">
        {/* left div  */}
        <div className="flex flex-col justify-start gap-y-3">
          <h2 className="text-lg font-bold">Agent Studio</h2>
          <p>
            Design, launch and customize AI agents for marketing, <br /> sales,
            support and ops, built around your workflows.
          </p>
          <div className="flex flex-col bg-neutral-100 border-2 mt-6 mx-auto max-w-fit rounded-lg px-1.5">
            <Card4Component />
            <Card4Component />
          </div>
        </div>

        {/* right div  */}
        <div></div>
      </div>

      {/* bottom div  */}
      <div className="">
        <div className="flex border-t-2 pt-18 gap-x-6 ">
          {featuresdata.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <div className="flex font-bold items-center">
                <span className="size-6">{item.icon}</span>
                <span>{item.heading}</span>
              </div>
              <p className="text-neutral-500">{item.subheading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
