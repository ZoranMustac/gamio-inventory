import IProps from "@component/Interfaces/IProps";
import React, { FC } from "react";

const Tags: FC<IProps> = ({ claimed, used, shipped, shipping_date }) => {
  return (
    <div
      className={(() => {
        if (used === true) {
          return `
          bg-[#E5E5E5]
          w-[51px]
          rounded-[4px]
          font-semibold
          text-[#6F819C]
          text-[12px]
        `;
        } else if (shipped === true) {
          return `
          font-semibold
          text-[#143757]
          text-[12px]
          `;
        } else if (claimed === true) {
          return `
          bg-lime-100
          w-[75px]
          rounded-[4px]
          font-semibold
          text-[#85EE00]
          text-[12px]
        `;
        } else {
          return `
          bg-[#4175FA]
          w-[65px]
          rounded-[4px]
          font-semibold
          text-white
          text-[12px]
        `;
        }
      })()}
    >
      {(() => {
        if (used === true) {
          return "USED";
        } else if (shipped === true) {
          return `SHIPPED ${
            shipping_date
              ? new Date(shipping_date)
                  .toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                  })
                  .toUpperCase()
              : ""
          }`;
        } else if (claimed === true) {
          return "CLAIMED";
        } else {
          return "OWNED";
        }
      })()}
    </div>
  );
};

export default Tags;
