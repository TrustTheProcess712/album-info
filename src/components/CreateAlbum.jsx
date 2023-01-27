import { useState } from "react";

const CreateAlbum = () => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const album = { year, artist, title, image, link };
  };

  console.log(year);
  return (
    <div className='create-album'>
      <h2>Share a Favourite Album</h2>
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
      <label>Year released: </label>
      <input
        type='text'
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label>ALbum image URL: </label>
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
    </div>
  );
};

export default CreateAlbum;
