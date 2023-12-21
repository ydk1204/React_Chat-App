import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="w-full h-14 mb-4 bg-black px-40">
      <div className="w-full h-full flex items-center justify-between">
        <h2 className="text-3xl">
          <Link to="/" className="no-underline">
            Chat App
          </Link>
        </h2>
        {user && (
          <span className="text-yellow-500">Logged in as {user?.name}</span>
        )}
        <nav className="w-40">
          <ul className="flex text-base justify-between">
            {user && (
              <li>
                <Link onClick={() => logoutUser()} to="/login">
                  Logout
                </Link>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
