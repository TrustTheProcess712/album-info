import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import AlbumDetails from "./components/AlbumDetails.jsx";
import CreateAlbum from "./components/CreateAlbum.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<CreateAlbum />}></Route>
            <Route path='/albums/:id' element={<AlbumDetails />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
