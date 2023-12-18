import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-14 mb-4 bg-black px-40">
      <div className="w-full h-full flex items-center justify-between">
        <h2 className="text-3xl">
          <Link to="/" className="no-underline">
            Chat App
          </Link>
        </h2>
        <span className="text-yellow-500">Logged in as YDKs</span>
        <nav className="w-40">
          <ul className="flex text-base justify-between">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
