import { useState, useEffect } from "react";
import AlbumList from "./AlbumList.js";

const Home = () => {
  const [albumData, setAlbumData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then((res) => res.json())
      .then((albumsFromAPI) => setAlbumData(albumsFromAPI));
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toString();

    const searchResult = albumData.filter((albums) => {
      return (
        albums.year.toString() === searchInput ||
        albums.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        albums.artist.toLowerCase().includes(searchInput.toLowerCase())
      );
    });

    setFilteredData(searchResult);
  };

  return (
    <div className='home'>
      <input
        onChange={handleSearch}
        type='text'
        placeholder='Search title, year, genre...'
      />
      {filteredData.length === 0 ? (
        <AlbumList albumData={albumData} title='Preview' />
      ) : (
        <AlbumList albumData={filteredData} title='Preview' />
      )}
    </div>
  );
};

export default Home;
