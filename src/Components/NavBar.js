import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Tuner</Link>
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
