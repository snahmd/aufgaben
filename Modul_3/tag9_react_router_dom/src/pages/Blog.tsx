import React from "react";
import { blogData } from "../data";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Blog = () => {
  return (
    <div>
      <Header />
      {blogData.map((blog) => {
        return (
          <div key={blog.id} className="w-5/6  mx-auto mb-8">
            <img src={blog.img_url} alt="" />
            <h1 className="text-4xl my-6">{blog.title}</h1>
            <NavLink
              className="border border-red-500 rounded-md p-4 w-96 text-2xl font-semibold"
              to={`/blog/${blog.id}`}
            >
              Read more
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
