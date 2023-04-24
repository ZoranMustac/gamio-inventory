import React, { FC, useEffect, useState } from "react";
import Cards from "@component/pages/cards/cards";
import IInventory from "@component/Interfaces/IInventory";
import GamioService from "@component/services/gamioService";

const Inventory: FC = () => {
  const [gamio, setGamio] = useState<IInventory>();

  useEffect(() => {
    const gamioService = new GamioService();

    gamioService.fetchAll().then((games) => {
      setGamio(games);
      return games;
    });
  }, []);

  return (
    <div>
      <h1 className="font-extrabold text-gray-700 mt-32 mb-6 title">
        INVENOTRY
      </h1>
      <div className="flex flex-wrap gap-8 mb-16">
        {gamio?.list.map((item) => (
          <Cards
            key={item.Id}
            image_url={item.image_url}
            title={item.title}
            claimed={item.claimed}
            used={item.used}
            shipped={item.shipped}
            code={item.code}
            shipping_date={item.shipping_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
