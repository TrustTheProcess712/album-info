import { useState, useEffect } from "react";
import AlbumList from "./AlbumList.js";

const Home = () => {
  const [albumData, setAlbumData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    const searchResult = albumData.filter((search) => {
      return search.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log(searchInput);
    setFilteredData(searchResult);
  };

  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then((res) => res.json())
      .then((albumsFromAPI) => setAlbumData(albumsFromAPI));
  }, []);

  return (
    <div className='home'>
      <input onChange={handleSearch} type='text' placeholder='Search' />
      {filteredData.length === 0 ? (
        <AlbumList albumData={albumData} title='Preview' />
      ) : (
        <AlbumList albumData={filteredData} title='Preview' />
      )}
    </div>
  );
};

export default Home;
