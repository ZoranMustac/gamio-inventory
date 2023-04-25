import React, { FC } from "react";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./footer";
import IProps from "@component/Interfaces/IProps";
import Tags from "./tags";

const Cards: FC<IProps> = ({
  title,
  code,
  image_url,
  claimed,
  used,
  shipped,
  shipping_date,
}) => {
  return (
    <div
      className={(() => {
        if (used === true) {
          return `bg-[#F7F7F7] shadow-2xl`;
        } else if (shipped === true) {
          return `border-color bg-[#F7F7F7] shadow-xl`;
        } else if (claimed === true) {
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
              image_url ??
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            }
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center mt-8">
          <Tags
            claimed={claimed}
            used={used}
            shipped={shipped}
            shipping_date={shipping_date}
            code={""}
          />
          <div className="font-extrabold text-[#143757] line-clamp">
            {title?.toLocaleUpperCase()}
          </div>
          <div className="child">
            <Footer
              claimed={claimed}
              used={used}
              shipped={shipped}
              code={code}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
