import React from 'react';
 
const ProfileCard = () => {
    return (
      <div className="flex flex-col items-center p-4 bg-blue text-white rounded-lg h-64 shadow-md">
        <div className="flex items-center justify-center bg-blue-600 text-white border border-white  rounded-full h-12 w-12 mb-2">
          <span className="text-xl  bg-blue-600   text-white font-semibold">T</span>
        </div>
        <h2 className="text-lg  text-black font-semibold">Devineniteja</h2>
        <button className=" text-sm text-black  ">deXXXXX@gmail.com</button>
      </div>
    );
  };
 
  export default ProfileCard;