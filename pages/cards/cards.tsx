import React, { FC } from "react";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./footer";
import IPropsInfo from "@component/Interfaces/IProps";
import Tags from "./tags";

const Cards: FC<IPropsInfo> = (list) => {
  return (
    <div
      key={list?.Id}
      className={(() => {
        if (list?.used) {
          return `bg-[#F7F7F7] shadow-2xl`;
        } else if (list?.shipped) {
          return `border-color bg-[#F7F7F7] shadow-xl`;
        } else if (list?.claimed) {
          return `bg-white shadow-2xl`;
        } else {
          return `bg-white shadow-2xl`;
        }
      })()}
    >
      <Card
        sx={{
          width: 300,
          height: 450,
        }}
        square={true}
        style={{ backgroundColor: "transparent" }}
      >
        <div className="object-cover object-center mt-8 flex justify-center items-center">
          <CardMedia
            sx={{ height: 250, width: 250 }}
            image={
              list?.image_url ??
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            }
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center mt-8">
          <Tags items={list} code={""} />
          <div className="font-extrabold text-[#143757] line-clamp">
            {list?.title?.toLocaleUpperCase()}
          </div>
          <div className="child pt-2">
            <Footer items={list} code={""} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
