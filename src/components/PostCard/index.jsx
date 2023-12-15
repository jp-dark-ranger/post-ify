import React, { useState } from "react";

import { useOnClickOutside } from "usehooks-ts";
import CloseIcon from "@mui/icons-material/Close";

import sampleImg from "../../assets/images/sample.jpg";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// delete ui material
// import Button from '@mui/material/Button';


import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ProfileCard = ({}) => {
  
  const [isDeleteModal, setisDeleteModal] = useState(false);
  const handleDeleteClose = () => {
    setisDeleteModal(false);
  };
  //   console.log(data);
  const handleLike = () => {
    console.log("like clicked works");
  };

  const handleClickOutside = () => {
    // Your custom logic here
    console.log("clicked outside");
  };

  

  window.addEventListener("scroll", () => {
    console.log("scroll");
    if (edit) setEdit(false);
  });
  // delete functions
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 760,
    height: 428,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius:6
  };

  const [edit, setEdit] = useState(false);

  return (
    <>
      <div
        className="flex gap-4 w-full border-b-2 
       border-inherit rounded-xl justify-center px-[20px] py-[40px] font-sans relative"
        onClick={() => {
          setEdit(false);
        }}
      >
        {/* contents */}
        <MoreVertIcon
          className="absolute top-[16px] right-[22px]  cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            console.log("jiii");
            setEdit(!edit);
          }}
        />
        {edit && edit ? (
          <div
            className=" absolute top[0px] right[22px] w-[200px] rounded-[4px]
          shadow-md bg-[#FFF] inline-flex flex-col gap-0.5 right-[31px] cursor-pointer"
          >
            <Button
              className="h-[56px] py-2 px-3 text-[#424242] text-[16px] font-normal
             border-[#424242]"
              style={{ color: "#424242", borderWidth: 1, border: "#424242" }}
              variant="outlined"
            >
              Edit
            </Button>
            <Button
              className="h-[56px] py-2 px-3 text-[#424242] text-[16px] font-normal
              border-[#424242]"
              style={{
                color: "#424242",
                borderWidth: 0.5,
                border: "#424242",
                fontSize: "16",
                fontWeight: "400",
              }}
              variant="outlined"
              onClick={() => {
                setEdit(false);
                setOpen(true);
                setisDeleteModal(true);
              }}
            >
              Delete
            </Button>

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
       

        <div>
          
          <Modal
            open={isDeleteModal}
            onClose={handleDeleteClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex w-full h-full flex-col items-center">
                <div className="flex w-full justify-end ">
                  <CloseIcon
                    onClick={handleDeleteClose}
                    style={{ margin: "11px 13px 0px 0px", cursor: "pointer" }}
                  />
                </div>
                <div className="flex w-[80%]  mt-[39px] items-center justify-center">
                  <div className="flex flex-col gap-6 justify-center">
                    <div className="flex flex-col gap-4 justify-center">

                    <h3 className="text-[#000] text-[24px] font-bold leading-6 text-center">Delete Story</h3>
                    <p className="text-[16px] text-[#000] leading-6 font-normal tracking-[0.5px] text-center">
                      Delete is not reversable and the story will be completely
                      deleted. If you dont want to delete, you can
                    </p>
                    </div>
                    <div className="flex gap-6 justify-center">

                    
                    <Button
                      style={{
                        color: "#DC4550",
                        borderColor: "#DC4550",
                        borderWidth: "1px",
                        padding: "20px 40px 20px 40px",
                        borderRadius: "16px",
                        fontWeight: 600,
                        fontSize: "16PX",
                        lineHeight: "20px",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      style={{
                        background: "#DC4550",
                        color: "#fff",
                        padding: "20px 40px 20px 40px",
                        borderRadius: "16px",
                        fontWeight: 600,
                        fontSize: "16PX",
                        lineHeight: "20px",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                      variant="contained"
                      onClick={handleClose}
                      autoFocus
                    >
                      Delete
                    </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

      {/* delete function */}
    </>
  );
};

export default ProfileCard;
