import React, { FC, useEffect, useState } from "react";
import User from "../user/user";
import useHeader from "./useHeader";
import Styles from "../../styles";
import Link from "next/link";
import { useRouter } from "next/router";
import GamioService from "@component/services/gamioService";
import IUser from "@component/Interfaces/IUser";

const Header: FC = () => {
  const { views } = useHeader();
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useState<IUser>();
  const gamioService = new GamioService();

  const styles = new Styles();

  useEffect(() => {
    gamioService.fetchUser().then((users) => {
      setUser(users);
      return users;
    });
  }, []);

  const isActive = (index: number) => index === activeIndex;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="w-full h-24  md:h-48 lg:h-80 bg-black relative">
        <img
          src="https://eloncdn.blob.core.windows.net/eu3/sites/74/2019/09/students-1.jpg"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <User
        Name={user?.Name}
        Username={user?.Username}
        level={user?.level}
        AvatarUrl={user?.AvatarUrl}
      />
      <div className="line" />
    </div>
  );
};

export default Header;
