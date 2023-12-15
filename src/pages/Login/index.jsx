import LoginForm from "../../components/LoginForm";
import BackgroundImage from "../../assets/images/Working Icon.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { login, logout } from "../../redux/slices/authSlice";
import { Snackbar } from "@mui/base";

const Login = () => {
  // const [state, setState] = useState({
  //   email: "inumaki@jj.in",
  //   password: "voiceCurse",
  // });
  const [showSnackbar, setShowSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const uid = useSelector((state) => state.authReducer.uid);
  const location = useLocation();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (user) {
        dispatch(login(user.uid));
        console.log("user sso", user);
        navigate("/");
      }
      // IdP data available using getAdditionalUserInfo(result)
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      dispatch(logout());
    }
  };

  const handleLogin = (email, password) => {
    console.log("handleLogin");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        if (user) {
          dispatch(login(user.uid));
          navigate("/");
        }
        setMessage("Registered successfully");
        setShowSnackBar(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        setShowSnackBar(true);
        dispatch(logout());
      });
  };

  const handleRegister = async (email, password) => {
    console.log("handleRegister");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setMessage("Registered successfully");
        setShowSnackBar(true);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        setShowSnackBar(true);
        dispatch(logout());
        // ..
      });
  };

  useEffect(() => {
    console.log(message, setShowSnackBar);
  }, [message, showSnackbar]);

  // useEffect(() => {
  //   if (uid) {
  //     navigate("/");
  //   }
  // }, [uid]);

  // if (uid) {
  //   navigate("/");
  // }

  return (
    <div className="flex h-screen">
      <div className="relative w-[67%] h-full overflow-hidden bg-[#F9E6FF]">
        <img
          src={BackgroundImage}
          alt="Background"
          className="bg-contain bg-center w-auto  h-full inset-0  object-cover"
          style={{ zIndex: -1 }}
        />
      </div>

      <div
        className=" absolute  right-60 mt-24 p-1  rounded-xl "
        style={{ zIndex: 5 }}
      >
        <LoginForm
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      </div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackBar(false)}
        message={message}
      />
    </div>
  );
};

export default Login;
