import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const ProfileCard = () => {
  return (
 
    <div className="flex flex-col gap-3  items-center bg-[#F9F9F9] w-full h-full">
      <div className="bg-[#606060] mt-[69px] rounded-[80px] w-[120px] h-[120px] flex justify-center items-center">
        <h1 className="text-[#FFF] flex justify-center items-center my-auto text-5xl font-bold leading-5">
          H
        </h1>
      </div>

      <div className="inline-flex gap-4 flex-col justify-center items-center  mt-[25px]">
       <p className="text-[36px] leading-5 font-normal ">Harish</p>
       <p className="text-[16px] leading-5 font-normal">harishvishal@gmail.com</p>
       <p><a href="">Edit Profile</a></p>

      </div>
    </div>
  );
};

export default ProfileCard;
