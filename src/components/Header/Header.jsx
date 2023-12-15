import React from "react";
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from "@mui/icons-material/Search";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Pagination from "@mui/material/Pagination";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/images/Logo.png"

const Header = () => {
  return (
    // <div className="">
      <div className="flex justify-between items-center h-24 py-0 px-[24px]  border-b border-[#eee] sticky top-0 bg-white z-50">
        
        <div>
<img src={logo} alt="Logo" />
        </div>
        <div>
        <div className="flex w-[240px] bg-[#F9F9F9] items-center rounded-[20px]">
            <div>
              <SearchIcon  />
            </div>
            <div className="m-auto">
              <input type="search" placeholder="Search" className="pt-[10px] pr-[20px] pb-[10px] bg-[#F9F9F9] outline-none " />
            </div>
          </div>
        </div>
        <div>
        <Button variant="contained" endIcon={<SearchIcon />}>
        Send
      </Button>
        </div>
      </div>
    // </div>
  );
};

export default Header;
