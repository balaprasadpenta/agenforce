import { IconUserScreen } from "@tabler/icons-react";
import sheets from "../assets/sheets.png";
import salesforceicon from "../assets/saledforceison.svg";
import hubspoticon from "../assets/hubspot.png";

interface Strip {
  image: string;
  title: string;
}
const strips: Strip[] = [
  { image: salesforceicon, title: "Salesforce" },
  { image: hubspoticon, title: "Hubspot" },
  { image: sheets, title: "Sheets" },
];

const Card4Component = () => {
  return (
    <div className="max-w-sm max-h-84 bg-white rounded-lg my-1">
      {/* inner card  */}
      <div className="flex gap-x-4 border-2 p-4 rounded-lg ">
        <IconUserScreen
          stroke={2}
          className="size-8 bg-green-400 rounded-full p-0.5"
        />
        <div className="flex flex-col gap-y-1">
          <h3 className="font-bold text-xl">Human-in-the-Loop</h3>
          <p>Add reviews, approvals and escalations without slowing work.</p>
          <div className="flex gap-x-3 ">
            {strips.map((item, index) => (
              <div
                key={index}
                className="flex border-2 justify-center items-center rounded-lg p-1"
              >
                <img src={item.image} alt="image" className="size-5" />
                <p className="text-xs font-light">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4Component;
