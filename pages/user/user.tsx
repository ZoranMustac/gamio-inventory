import React, { FC } from "react";
import IUser from "@component/Interfaces/IUser";

const User: FC<IUser> = ({ Username, Name, level, AvatarUrl }) => {
  return (
    <div className="grid-container">
      <div className="absolute md:top-10 lg:top-32 bg-blue-500 md:w-32 lg:w-48 md:h-48 lg:h-64 pt-6 clip-rectangle" />
      <div className="absolute grid-items top-12 lg:top-36 doggo-alignment lg:ml-24 md:flex lg:flex">
        <img
          data-testid="avatarUrl"
          src={AvatarUrl}
          className="rounded-full avatar h-32 w-32"
          alt="Image"
        />
        <div className="profile grid grid-rows-2 grid-flow-col ml-6">
          <div
            data-testid="name"
            className="name-color text-white font-bold text-lg"
          >
            {Name?.toLocaleUpperCase()}
          </div>
          <div
            data-testid="username"
            className="user-handle text-[#6F819C] text-xs"
          >
            @{Username?.toLocaleUpperCase()}
          </div>
          <div
            data-testid="level"
            className="text-[#4175FA] font-extrabold text-xs pl-2 pt-1"
          >
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
