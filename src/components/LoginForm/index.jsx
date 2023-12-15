import React from 'react';
import { TextField, Button } from '@mui/material';
import Logo from  '../../assets/images/Logo.svg'; 



const LoginForm = () => {
    const handleButtonClick = (event) => {
      event.preventDefault()
      console.log('Button clicked!');
    };
  
  return (
      <div className="flex flex-col items-center justify-center ">
        <div className=" bg-white p-8 rounded-2xl shadow-xl  w-[400px] h-[400px]">
          <div className="flex flex-col items-center mb-6">
             
            <h2 className="text-3xl font-bold text-center">Welcome to</h2>
            
          
            <img src={Logo} alt="POST-IFY Logo" className="h-16" />
           
           </div>
           <form className="flex items-center flex-col  rounded-lg space-y-4">
             <TextField
              label="Email"
              variant="outlined"
              // fullWidth
              style={{width:'90%'}}
              className="bg-gray-50"
              InputProps={{
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              // fullWidth
              style={{width:'90%'}}
              className="bg-gray-50"
              InputProps={{
              //   className: 'py-2',
              }}
            />
             <div className="flex justify-center ">
            <Button
              type="submit"
              variant="contained"
              onClick={handleButtonClick} 
              style={{  borderRadius:'48px'}}
           
              className="bg-purple-600 text-white rounded shadow-lg hover:bg-purple-700"
            >
              Submit
            </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginForm;
  
  