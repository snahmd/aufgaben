import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-yellow-400 flex items-center justify-center">
      <NavLink to="/" className="text-6xl p-4 bg-white rounded-full">
        🍻
      </NavLink>
    </div>
  );
};

export default Footer;
