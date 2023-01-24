import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
