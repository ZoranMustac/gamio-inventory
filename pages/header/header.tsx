import React, { FC, useEffect, useState } from "react";
import User from "../user/user";
import GamioService from "@component/services/gamioService";
import IUser from "@component/Interfaces/IUser";

const Header: FC = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const gamioService = new GamioService();

    gamioService.fetchUser().then((users) => {
      setUser(users);
      return users;
    });
  }, []);

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
