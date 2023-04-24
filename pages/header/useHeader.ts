import { useState } from "react";

const useHeader = () => {
  const [title, setTitle] = useState("");

  const views = [
    {
      title: "OVERVIEW",
      link: "/overview",
    },
    {
      title: "INVENTORY",
      link: "/inventory",
    },
    {
      title: "SETTINGS",
      link: "/settings",
    },
  ];

  return {
    title,
    views,
  };
};

export default useHeader;
