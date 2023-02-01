import { useState } from "react";

const CreateAlbum = () => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [genres, setGenres] = useState([]);

  const handleGenres = (e) => {
    const genresArray = [];
    genresArray.push(e.target.value);
    setGenres(genresArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const album = { year, artist, title, image, link, genres };

    fetch("http://localhost:5000/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(album),
    }).then(() => {
      console.log("new album added");
    });
  };

  return (
    <div className='create-album'>
      <h2>Share Your Favourite Album</h2>
      <form onSubmit={handleSubmit}></form>
      <label>Artist Name: </label>
      <input
        type='text'
        required
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <label>Album title: </label>
      <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Genres: </label>
      <input
        type='text'
        required
        value={genres}
        placeholder='eg. Rock, Indie, Pop'
        onChange={handleGenres}
      />
      <label>Year released: </label>
      <input
        type='text'
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label>Album image URL: </label>
      <input
        type='text'
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Wiki link to artist info: </label>
      <input
        type='url'
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Album</button>
    </div>
  );
};

export default CreateAlbum;
