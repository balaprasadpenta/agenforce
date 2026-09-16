import Card1Component from "./Card1Component";
import { IconPlus } from "@tabler/icons-react";
import Card2Components from "./Card2Components";
import Card3Component from "./Card3Component";

const MiddleComponent = () => {
  return (
    <div className="my-32">
      <div className="flex items-baseline-last gap-10">
        <h1 className="lg:text-6xl font-semibold ">
          Built for Fast Moving Teams That Need Control.
        </h1>
        <p className="text-lg text-neutral-500">
          Agents work inside your existing tools, with built-in approvals, brand
          and policy guardrails, and full traceability. Every action is
          auditable, every outcome accountable.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-4 mt-24 ">
        <div className="bg-neutral-50 max-w-full flex flex-col gap-y-3 rounded-2xl py-6">
          <Card1Component />
          <div className="flex justify-center items-center px-6 gap-x-6">
            <p className="text-2xl font-bold">
              Prebuilt Agents, Tuned to Your Workflows
            </p>
            <IconPlus
              stroke={2}
              className="border-2 border-neutral-600 rounded-full size-10 shrink-0 p-1"
            />
          </div>
        </div>

        <div className="bg-neutral-50 py-6 rounded-2xl">
          <div className=" bg-neutral-50 max-w-96 flex flex-col gap-y-8 pl-12 overflow-hidden ">
            <Card2Components />
            <div className="flex justify-center items-center pl-0 pr-6 gap-x-6 ">
              <p className="text-2xl font-bold">
                Automate Handoffs, Reduce Ops Friction
              </p>
              <IconPlus
                stroke={2}
                className="border-2 border-neutral-600 rounded-full size-10 shrink-0 p-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-14 rounded-2xl py-6 bg-neutral-50">
          <Card3Component />
          <div className="flex justify-center items-center px-6 gap-x-6 ">
            <p className="text-2xl font-bold">
              Approvals, Guardrails, and Full Auditability
            </p>
            <IconPlus
              stroke={2}
              className="border-2 border-neutral-600 rounded-full size-10 shrink-0 p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponent;
