import React, { FC, useEffect, useState } from "react";
import Cards from "@component/pages/cards/cards";
import IInventory from "@component/Interfaces/IInventory";
import useGamioService from "@component/services/gamioService";

const Inventory: FC = () => {
  const [gamio, setGamio] = useState<IInventory>();

  const { fetchAll } = useGamioService();
  useEffect(() => {
    fetchAll().then((games) => {
      setGamio(games);
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
            title={item.title}
            image_url={item.image_url}
            claimed={item.claimed}
            used={item.used}
            shipped={item.shipped}
            items={item.items}
            shipping_date={item.shipping_date}
            code={item.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
