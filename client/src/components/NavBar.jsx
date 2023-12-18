import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-14 mb-4 bg-black text-3xl">
      <div className="w-full h-full flex items-center justify-between">
        <h2>
          <Link to="/">Chat App</Link>
        </h2>
      </div>
    </div>
  );
};

export default NavBar;
