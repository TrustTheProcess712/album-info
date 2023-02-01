import { useState, useEffect } from "react";
import AlbumList from "./AlbumList.jsx";

const Home = () => {
  const [albumData, setAlbumData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/albums")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resource...");
          }
          return res.json();
        })

        .then((albumsFromAPI) => {
          setAlbumData(albumsFromAPI);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 250);
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toString();
    const searchResult = albumData.filter((albums) => {
      const genreArray = [];
      albums.genres.forEach((genre) => {
        genreArray.push(genre.toLowerCase());
      });
      return (
        genreArray.includes(searchInput.toLowerCase()) ||
        albums.year.toString() === searchInput ||
        albums.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        albums.artist.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilteredData(searchResult);
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <input
        onChange={handleSearch}
        type='text'
        placeholder='Search title, year, genre...'
      />
      {filteredData.length > 0 ? (
        <AlbumList albumData={filteredData} title='Preview' />
      ) : (
        <AlbumList albumData={albumData} title='Preview' />
      )}
    </div>
  );
};

export default Home;
