import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-8 m-8">
      <h1 className="text-4xl font-bold">SuperCarList</h1>
      <NavLink className="text-3xl" to="/">
        Home
      </NavLink>
    </div>
  );
};

export default Header;
