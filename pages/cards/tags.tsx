import IPropsInfo from "@component/Interfaces/IProps";
import React, { FC } from "react";

const Tags: FC<IPropsInfo> = ({ items }) => {
  const usedStyle = `
    bg-[#E5E5E5]
    w-[51px]
    rounded-[4px]
    font-semibold
    text-[#6F819C]
    text-[12px]
  `;

  const shippedStyle = `
    font-semibold
    text-[#143757]
    text-[12px]
  `;

  const claimedStyle = `
    bg-lime-100
    w-[75px]
    rounded-[4px]
    font-semibold
    text-[#85EE00]
    text-[12px]
  `;

  const ownedStyle = `
    bg-[#4175FA]
    w-[65px]
    rounded-[4px]
    font-semibold
    text-white
    text-[12px]
  `;

  return (
    <div
      className={(() => {
        if (items?.used) {
          return usedStyle;
        } else if (items?.shipped) {
          return shippedStyle;
        } else if (items?.claimed) {
          return claimedStyle;
        } else {
          return ownedStyle;
        }
      })()}
    >
      {(() => {
        if (items?.used) {
          return "USED";
        } else if (items?.shipped) {
          return `SHIPPED ${
            items?.shipping_date
              ? new Date(items?.shipping_date)
                  .toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                  })
                  .toUpperCase()
              : ""
          }`;
        } else if (items?.claimed) {
          return "CLAIMED";
        } else {
          return "OWNED";
        }
      })()}
    </div>
  );
};

export default Tags;
