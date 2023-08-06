import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongkDetails() {
  const [song, setSong] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((c) => console.warn("catch", c));
  }, [id, API]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => navigate(`/songs`),
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

  return (
    <article>
      <div className="songDetail">
        <h2>
          {song.is_favorite ? <span>⭐️</span> : null}
          {song.name} - by {song.artist}
        </h2>
        <h4>{song.album}</h4>
        <p>Length: {song.time}</p>
      </div>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={deleteSong}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongkDetails;
