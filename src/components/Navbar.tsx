import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const buttons = ["Features", "Product", "FAQs", "Pricing", "Login", "Signup"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const firstFour = buttons.slice(0, 4);
  const remainingTwo = buttons.slice(4);
  return (
    <div className="flex flex-row justify-between items-center gap-2 px-6 md:px-6 py-5 h-16 md:gap-4 w-full border-b-2 border-b-neutral-200 text-neutral-600 left-0 right-0 top-0 box-border overflow-hidden">
      <div className="flex gap-1 items-center px-0 max-w-sm ">
        <svg className=" h-4 w-5">
          <path
            d="M4.92285 14.8848H0V9.96191H4.92285V14.8848ZM19.6924 14.8848H9.84668V9.96191H4.92383V5.03809H9.84668V0.115234H19.6924V14.8848ZM9.84668 9.96191H14.7695V5.03906H9.84668V9.96191ZM4.92285 5.03809H0V0.115234H4.92285V5.03809Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="text-sm">Agenforce</span>
      </div>

      {/* first four buttons */}
      <div className="hidden sm:hidden md:flex items-center justify-center gap-4 max-w-xl">
        {firstFour.map((item, index) => (
          <Button
            variant="ghost"
            className="text-sm hover:bg-transparent"
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* remaining 2 buttons */}
      <div className="hidden sm:hidden md:flex items-center gap-4">
        {remainingTwo.map((item, index) => (
          <Button
            variant="ghost"
            key={index}
            className={`text-sm transition-all duration-200 ease-in-out ${
              index === 1
                ? "bg-black text-white hover:bg-black hover:text-white hover:shadow-[-8px_8px_25px_rgba(0,0,0,0.8)] active:scale-95"
                : "hover:bg-transparent"
            }`}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* for mobile screens - sm and below md */}
      <div className="flex md:hidden max-w-full items-center gap-2 relative h-16">
        <div className="flex items-center w-full inset-0 left-0 right-0">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open Menu"
                  className={`transition-all duration-200 ${open ? "hidden" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
                    <path d="M9 4l0 16" />
                  </svg>
                </Button>
              }
            />
            <SheetContent className="bg-transparent w-full h-48 pt-16 mr-4 mt-2 ">
              {/* buttons to display */}
              <div className="md:hidden flex flex-col items-start relative ">
                {buttons.map((items, index) => (
                  <Button key={index} variant="ghost">
                    {items}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
