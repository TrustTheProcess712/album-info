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

  console.log(albumData);

  const handleSearch = (e) => {
    setTimeout(() => {
      const searchInput = e.target.value.toString();
      // const genresStr = [];

      // albumData.forEach((album) => {
      //   genresStr.push(album.genres);
      // });

      const searchResult = albumData.filter((albums) => {
        const genreArray = [];

        albums.genres.forEach((genre) => {
          genreArray.push(genre.toLowerCase());
        });

        //   for (let i = 0; i < albums.genres.length; i++) {

        //     genre.push(albums.genres[i].toLowerCase());
        //   }

        return (
          genreArray.includes(searchInput.toLowerCase()) ||
          albums.year.toString() === searchInput ||
          albums.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          albums.artist.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

      setFilteredData(searchResult);
    }, 1000);
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
