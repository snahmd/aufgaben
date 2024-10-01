import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between w-5/6 mx-auto gap-4 p-4">
      <h1>MyBlog</h1>
      <div className="flex gap-4">
        <NavLink
          className={(x) => (x.isActive ? "text-red-500 underline" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(x) => (x.isActive ? "text-red-500 underline" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
