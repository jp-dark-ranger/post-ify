import React from 'react';
import LoginForm from '../../components/LoginForm';
import BackgroundImage from '../../assets/images/Working Icon.png'; 

const Login = () => {
  return (
    <div className="flex h-screen">
     <div className='relative w-[67%] h-full overflow-hidden bg-[#F9E6FF]'>
      <img 
        src={BackgroundImage} 
        alt="Background" 
        className="bg-contain bg-center w-auto  h-full inset-0  object-cover" 
        style={{ zIndex: -1 }}
      />
      </div>

      
      <div className=" absolute  right-60 mt-24 p-1  rounded-xl " style={{ zIndex: 5 }}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
