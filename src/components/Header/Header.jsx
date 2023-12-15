import React, { useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';
import EditIcon from "@mui/icons-material/Edit";
import CompanyLogo from "../../assets/images/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Pagination from "@mui/material/Pagination";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BorderAll } from "@mui/icons-material";
import sample from "../../assets/images/sample.jpg";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog, saveDepartments } from "../../redux/slices/blogsSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "426px",
  width: "946px",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
};
const departmentsOptions = [
  { value: "UX/UI Design", label: "UX/UI Design" },
  { value: "Front End Development", label: "Front End Development" },
  { value: "Back End Development", label: "Back End Development" },
  { value: "QA", label: "QA" },
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
  { value: "Mobile Development", label: "Mobile Development" },
  { value: "Unity Development", label: "Unity Development" },
  // Add more options as needed
];

const Header = () => {
  const [postData, setPostData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [isPublishModal, setIsPublishModal] = useState(false);
  const blockData = useSelector((state) => state.blogsReducer.postData);
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.authReducer?.name) || "H";

  const handleSelect = (data, name) => {
    setPostData((prev) => ({ ...prev, [name]: data }));
    dispatch(saveDepartments(data));
  };
  const onClickNavigate = () => {
    if (location.pathname !== "/form") {
      navigate("/form");
    } else {
      setIsPublishModal(true);
    }
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };

  const handleClose = () => {
    setIsPublishModal(false);
  };
  const Publish = () => {
    dispatch(addNewBlog(blockData));
    setIsPublishModal(false);
  };
  // u

  return (
    <div
      className={`${
        location.pathname == "/login" ? "hidden" : "flex "
      } justify-between items-center h-24 py-0 px-[24px]  border-b border-[#eee] sticky top-0 bg-white z-50`}
    >
      <img
        className="cursor-pointer"
        onClick={() => navigate("/")}
        src={CompanyLogo}
      />
      <div className="flex justify-center  items-center gap-12">
        <div
          onClick={() => onClickNavigate()}
          className="flex justify-center items-center gap-3 pl-4 pr-5 py-4 bg-[#D44EF6] rounded-full cursor-pointer"
        >
          <EditIcon style={{ color: "white" }} />{" "}
          <p className="text-white text-center text-base not-italic font-semibold leading-5 tracking-[0.1px]">
            {location.pathname == "/form" ? "Publish" : "Write"}
          </p>
        </div>

        <NotificationsNoneIcon sx={{ height: 36, width: 36 }} />
        <div
          className=" pl-[15px] pr-3.5 py-1.5 rounded-full border-2 border-black bg-[#54006D] justify-center items-center cursor-pointer"
          onClick={() => navigateToProfile()}
        >
          <div className="text-white text-2xl not-italic font-bold leading-[150%] cursor-pointer aspect-square">
            {name[0].toUpperCase()}
          </div>
        </div>
      </div>
      <Modal
        open={isPublishModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex w-full h-full flex-col items-center">
            <div className="flex w-full justify-end ">
              <CloseIcon
                onClick={handleClose}
                style={{ margin: "11px 13px 0px 0px", cursor: "pointer" }}
              />
            </div>
            <div className="flex w-full justify-center">
              <h2 className=" text-[#212121] text-2xl not-italic font-normal leading-[150%] tracking-[0.48px]">
                {" "}
                You are at the last step
              </h2>
            </div>
            <div className="flex w-[80%]  mt-[39px]">
              <div className=" flex w-[50%] border-r-2 border-[#ffff]">
                <div className=" flex w-[260px] h-[180px] justify-center">
                  <img src={sample}></img>
                </div>
              </div>
              <div className=" flex w-[50%]">
                <div className=" flex  h-[180px] justify-center flex-col">
                  <p className=" text-black text-base not-italic font-bold leading-6 tracking-[0.5px]">
                    Select your department
                  </p>
                  <p className="text-black text-base not-italic font-normal leading-6 tracking-[0.5px] mt-4">
                    Add your department so readers know what is your story is
                    about
                  </p>
                  <Select
                    name="departmentS"
                    placeholder="Select Departments"
                    isMulti
                    options={departmentsOptions}
                    value={postData?.departments}
                    onChange={(data) => handleSelect(data, "departments")}
                    className="basic-multi-select w-full rounded-full mt-4"
                    classNamePrefix="Select Departments"
                  />
                  <div
                    onClick={() => Publish()}
                    className="flex justify-center items-center gap-3 pl-4 pr-5 py-4 bg-[#D44EF6] w-[169px] rounded-[20px] cursor-pointer mt-[14px]"
                  >
                    <p className="text-white text-center text-base not-italic font-semibold leading-5 tracking-[0.1px]">
                      Publish Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
