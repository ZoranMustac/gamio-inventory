import { FC, useState } from "react";
import Overview from "./titles/overview";
import Settings from "./titles/settings";
import Header from "@component/pages/header/header";
import Inventory from "./cards/inventory";
import useHeader from "./header/useHeader";

const Home: FC = () => {
  const { views } = useHeader();
  const [selectedView, setSelectedView] = useState(views[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleViewClick = (view: any, index: number) => {
    setSelectedView(view);
    setActiveIndex(index);
  };

  let viewComponent;

  switch (selectedView.title) {
    case "OVERVIEW":
      viewComponent = <Overview />;
      break;
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
      <Header />
      <div className="flex flex-wrap md:ml-36 lg:ml-48 pl-2 aligning">
        {views.map((view, index) => {
          return (
            <div
              key={view.title}
              className="md:ml-12 font-bold md:text-gray-400 text-xs forward"
            >
              <div
                className={
                  isActive(index)
                    ? `
                  border-solid
                  border-[#FC6947]
                  border-b-4
                  md:text-white
                  pb-2
                  activeButton
              `
                    : `
              hover:border-solid
              hover:border-[#FC6947]
              hover:border-b-4
              md:hover:text-white
              pb-2
          `
                }
              >
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

export default Home;
