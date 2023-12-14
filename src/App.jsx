import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./pages/Layout";


function App() {
  return (
    <div  style={{
      display: 'flex', width: '100%', justifyContent: 'center ', alignItems:'center',  flexDirection: 'column' }} >
      <div className='max-w-[1694px]'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;