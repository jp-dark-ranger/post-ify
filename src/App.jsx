import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./pages/Layout";
import Login from "./pages/Login";


function App() {

  if(true){
    return  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  }

  return (
    <div  style={{
      display: 'flex', width: '100%', justifyContent: 'center ', alignItems:'center',  flexDirection: 'column' }} >
      <div className='max-w-[1694px]'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;