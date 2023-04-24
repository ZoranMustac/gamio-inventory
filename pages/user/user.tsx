import React, { FC } from "react";
import IUser from "@component/Interfaces/IUser";

const User: FC<IUser> = ({ Username, Name, level, AvatarUrl }) => {
  return (
    <div className="grid-container">
      <div className="absolute md:top-10 lg:top-32 bg-blue-500 md:w-32 lg:w-48 md:h-48 lg:h-64 pt-6 clip-rectangle" />
      <div className="absolute grid-items top-12 md:top-16 lg:top-36 md:ml-12 lg:ml-24 md:flex lg:flex">
        <img
          src={AvatarUrl}
          className="rounded-full w-24 h-24 md:h-32 md:w-32"
        />
        <div className="profile grid grid-rows-2 grid-flow-col ml-6">
          <div className="text-[#143757] md:text-white xl:text-white font-bold text-lg">
            <p>{Name?.toLocaleUpperCase()}</p>
          </div>
          <div className="user-handle text-[#6F819C] text-xs">
            <p>@{Username?.toLocaleUpperCase()}</p>
          </div>
          <div className="text-[#4175FA] font-extrabold text-xs pl-2 pt-1">
            <p>{level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
