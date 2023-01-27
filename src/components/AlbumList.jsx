import { Link } from "react-router-dom";

const AlbumList = ({ albumData, title, placeholder }) => {
  return (
    <div className='album-list'>
      <h2>{title}</h2>
      {albumData.map((album) => (
        <div className='album-preview' key={album.id}>
          {/* <h4>Artist: {album.artist}</h4> */}
          <h4>Title: {album.title}</h4>
          <img src={album.image} alt={album.title} width={250} height={250} />
          {/* <h4>Year: {album.year}</h4> */}
          {/* <h4>Genre:</h4>
          {album.genres.map((genre, index) => (
            <div className='genres' key={index}>
            <h4>{genre}</h4>
            </div>
          ))} */}

          {
            <div className='album-button'>
              <Link to={`/albums/${album.id}`}>Album Details</Link>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
