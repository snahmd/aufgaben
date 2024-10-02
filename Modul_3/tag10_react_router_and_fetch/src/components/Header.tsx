import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-yellow-400 flex items-center  p-4">
      <NavLink to="/" className="text-6xl ml-6 sm:ml-12">
        BeerQuest
      </NavLink>
    </div>
  );
};

export default Header;
