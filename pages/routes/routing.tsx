import React, { FC, useState } from "react";
import Overview from "../titles/overview";
import Inventory from "../cards/inventory";
import Settings from "../titles/settings";
import { useHeader } from "@component/useHeader/useHeader";

const Routing: FC = () => {
  const { views } = useHeader();

  const routeStyle = `
    border-solid
    border-[#FC6947]
    border-b-4
    md:text-white
    pb-2
    text-[#143757]
  `;

  const hoverStyle = `
    hover:border-solid
    hover:border-[#FC6947]
    hover:border-b-4
    hover:text-[#143757]
    md:hover:text-white
    pb-2
  `;

  const [selectedView, setSelectedView] = useState(views[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleViewClick = (view: any, index: number) => {
    setSelectedView(view);
    setActiveIndex(index);
  };

  let viewComponent;

  switch (selectedView.title) {
    case "INVENTORY":
      viewComponent = <Inventory />;
      break;
    case "SETTINGS":
      viewComponent = <Settings />;
      break;
    default:
      viewComponent = <Overview />;
      break;
  }

  const isActive = (index: number) => index === activeIndex;
  return (
    <div>
      <div className="flex flex-wrap pl-2 push-right aligning">
        {views.map((view, index) => {
          return (
            <div
              key={view.title}
              className="font-bold md:text-gray-400 text-xs forward"
            >
              <div className={isActive(index) ? routeStyle : hoverStyle}>
                <button
                  key={view.title}
                  onClick={() => handleViewClick(view, index)}
                >
                  {view.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="alignment">{viewComponent}</div>
    </div>
  );
};

export default Routing;
