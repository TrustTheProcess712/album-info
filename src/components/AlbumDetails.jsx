import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AlbumDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [albumDetails, setAlbumDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/albums/` + id)
      .then((res) => res.json())
      .then((album) => setAlbumDetails(album));

    //
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/albums/` + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  console.log(albumDetails, "albumDetails....");

  return (
    <div className='album-details'>
      <h2>Album Details</h2>
      <h3>Artist: {albumDetails.artist}</h3>
      <h3>Year: {albumDetails.year}</h3>
      <h3>Title: {albumDetails.title}</h3>
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
      <div className='wiki-link'>
        <h3>
          <a href={albumDetails.link} target='_blank'>
            Artist Wiki Link...
          </a>
        </h3>
      </div>
      <button onClick={handleDelete}>Delete Album</button>
    </div>
  );
};

export default AlbumDetails;
