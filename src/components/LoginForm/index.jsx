import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Logo from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router";

const LoginForm = ({ handleLogin, handleGoogleSignIn, handleRegister }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log("Button clicked!");
    handleLogin(user.email, user.password);
  };

  const handleSignUp = () => {
    handleRegister(user.email, user.password);
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
            style={{ width: "90%" }}
            className="bg-gray-50"
            onChange={handleChange}
            name="email"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            // fullWidth
            style={{ width: "90%" }}
            className="bg-gray-50"
            onChange={handleChange}
            name="password"
          />
          <div className="flex justify-between gap-3 items-center">
            <Button
              type="submit"
              variant="contained"
              onClick={handleButtonClick}
              style={{ borderRadius: "48px" }}
              className="bg-purple-600 text-white rounded shadow-lg hover:bg-purple-700"
            >
              Login
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={handleSignUp}
              style={{ borderRadius: "48px" }}
              className="bg-purple-600 text-white rounded shadow-lg hover:bg-purple-700"
            >
              Sign Up
            </Button>
          </div>
          <div className="flex justify-center ">
            <Button
              type="submit"
              variant="contained"
              onClick={handleGoogleSignIn}
              style={{ borderRadius: "48px" }}
              className="bg-purple-600 text-white rounded shadow-lg hover:bg-purple-700"
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
