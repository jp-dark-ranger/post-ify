import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { logout, setName } from "../../redux/slices/authSlice";
  
const ProfileCard = () => {
  const user = useSelector((state) => state.authReducer);
  const [edit, setEdit] = useState(false)
  const [username, setUserName] = useState(user?.name)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setName(user?.mame))
  },[user?.name])

  const saveUserName = () => {
    setEdit(false)
  }
  const editProfile = () => {
    setEdit(true)
  }

  const handleChange = (event) => {
    setUserName(event.target.value)
  }

    const handleLogout = async () => {
      dispatch(logout())
  
  };

  


  return (
    <div className="flex flex-col gap-3  items-center bg-[#F9F9F9] w-full h-full">

      <div className="bg-[#606060] mt-[69px] rounded-[80px] w-[120px] h-[120px] flex justify-center items-center">
        <h1 className="text-[#FFF] flex justify-center items-center my-auto text-5xl font-bold leading-5">
          {user?.name?.[0]?.toUpperCase()}
        </h1>
      </div>

      <div className="inline-flex gap-4 flex-col justify-center items-center  mt-[25px]">
        {edit ? <TextField  id="outlined-basic" label="Outlined" value={username} variant="outlined" onChange={handleChange} /> : <p className="text-[36px] leading-5 font-normal " >{username}</p>
        }

        <p className="text-black text-center text-base not-italic font-normal leading-5 tracking-[0.1px]">harishvishal@gmail.com</p>
        {edit ? <Button type={'button'} style={{ background: '#D44EF6' }} className=" w-[157px] rounded-[14px]" onClick={() => saveUserName()} variant="contained">Save</Button> : <p onClick={editProfile}>Edit Profile</p>}
        {!edit && <Button style={{ background: '#DC4550' }} className=" w-[157px] rounded-[14px]" onClick={handleLogout} variant="contained">Logout</Button>}

      </div>
    </div>
  );
};

export default ProfileCard;
