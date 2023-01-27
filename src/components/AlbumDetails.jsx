import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AlbumDetails = () => {
  const { id } = useParams();
  const [albumDetails, setAlbumDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/albums/` + id)
      .then((res) => res.json())
      .then((album) => setAlbumDetails(album));

    //
  }, []);

  console.log(albumDetails, "albumDetails....");

  return (
    <div className='album-details'>
      <h2>Album Details</h2>
      <h3>Artist: {albumDetails.artist}</h3>
      <h3>Title: {albumDetails.title}</h3>
      <h3>Year: {albumDetails.year}</h3>
      <img
        src={albumDetails.image}
        alt={albumDetails.title}
        width={400}
        height={400}
      />
      {/* <h3>Genre: </h3> */}
      {/* {albumDetails.genres.map((genre, index) => (
        <h3 key={index}>{genre}</h3>
      ))} */}
    </div>
  );
};

export default AlbumDetails;
