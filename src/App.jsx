import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./pages/Layout";
import ViewPost from "./pages/ViewPost";
import Form from "./pages/Form";

function App() {
  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <div className="w-full max-w-[1694px]">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/view-post/:id" element={<ViewPost />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
