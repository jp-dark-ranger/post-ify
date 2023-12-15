import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ViewPost from "./pages/ViewPost";
import Form from "./pages/Form";
import { useSelector } from "react-redux";
import { app } from "./firebase/config";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile/profile";



function App() {
  const uid = useSelector((state) => state.authReducer.uid);
  const { pathname } = window.location;

  if (!uid && pathname !== "/login") {
    window.location.replace("/login");
    return <Login />;
  }

  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <div className="w-full max-w-[1694px]">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/view-post/:id" element={<ViewPost />} />
            <Route path="/form" element={<Form />} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
