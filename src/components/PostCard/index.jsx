import React, { useState } from "react";
// import { useRef } from 'react'
// import { useOnClickOutside } from 'usehooks-ts'

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import sampleImg from "../../assets/images/sample.jpg";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProfileCard = ({}) => {
  //   console.log(data);
  const handleLike = () => {
    console.log("like clicked works");
  };
  const handleComments = () => {
    console.log("comments clicked works");
  };

  const fullCardHandle = () => {
    console.log("The Whole Div  ");
  };

  // window.addEventListener('click',()=>{
  //   if(edit) setEdit(false)
  // })
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="flex relative gap-4 w-full border-b-2 
       border-inherit rounded-xl justify-center px-[20px] py-[40px] font-sans relative" onClick={()=>{
        setEdit(false)
       }}>
        {/* contents */}
        <MoreVertIcon
          className="absolute top-[16px] right-[22px] "
          onClick={(e) => {
            e.stopPropagation();
            console.log("jiii");
            setEdit(true);
          }}
        />
        {edit && edit ? (
          <div className=" absolute top[0px] right[22px] w-[200px] rounded-[4px]
          shadow-md bg-[#FFF] inline-flex flex-col gap-0.5 right-[31px]">
            <p className="h-[56px] py-2 px-3 text-[#424242] text-[16px] font-normal border-[#424242]">Edit</p>
            <p className="h-[56px] py-2 px-3 text-[#424242] text-[16px] font-normal">Delete</p>
          </div>
        ) : (
          ""
        )}

        <div className=" flex gap-[48px] ">
          <div className="flex flex-col gap-[24px] w-[70%]">
            <div className="flex flex-col gap-4">
              <div className="flex gap-[11px] items-center">
                {/* <div className="flex gap-2"> */}
                <div>
                  {/* <AccountCircleIcon />
                   */}
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold font-sans text-[#424242]">
                    Surendran
                  </h2>
                </div>
                {/* </div> */}

                <div>
                  <p className="text-[#616161]">dates</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-[24px] font-bold leading-[24px] text-[#000]">
                    Advice From a Software Engineer With 8 Years of Experience
                  </h1>
                </div>
                <div>
                  <p className="line-clamp-2 font-normal text-[16px] leading-[22px] tracking-[0.4px] text-[#000]">
                    My name is Benoit. I have been a software engineer for the
                    past eight and a half years. I stayed at my previous (and
                    first) company for seven and a half years, then I joined a
                    new
                    {/* one in early 2022. This article comes from a recent */}
                    self-reflection on the things I wish I had started doing
                    earlier in my career and the things I wish I had done
                    differently. What I am sharing here may be useful to any
                    junior to mid-level developer who wishes to improve and
                    progress toward the title of senior and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col gap-[24px]">
              {/* <div className="bg-[#EEE] py-0 px-[20px] rounded-lg  max-w-max ">
                <h2 className="font-semibold text-[16px] text-[#212121]">UX/UI Design</h2>
              </div> */}
              <Chip className="w-[18%]" label="UX/UI Design" />
              <div className="flex gap-[6px] ">
                <div onClick={handleLike} className="">
                  <FavoriteBorderIcon style={{ color: 757575 }} />
                </div>
                <div>
                  <p className="text-[#757575] text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                    12.k
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* images */}
          <div className="flex justify-center items-center w-[30%]">
            <div>
              <img
                src={sampleImg}
                alt="sample"
                className="w-[154px] h-[148px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
