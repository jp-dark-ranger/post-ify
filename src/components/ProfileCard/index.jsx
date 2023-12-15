import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const ProfileCard = () => {
  const [edit, setEdit] = useState(false)
  const [username, setUserName] = useState('Harish')

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

  };

  return (
    <div className="flex flex-col gap-3  items-center bg-[#F9F9F9] w-full h-full">

      <div className="bg-[#606060] mt-[69px] rounded-[80px] w-[120px] h-[120px] flex justify-center items-center">
        <h1 className="text-[#FFF] flex justify-center items-center my-auto text-5xl font-bold leading-5">
          H
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
