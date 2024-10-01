import { blogData } from "./data";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:id",
      element: <BlogDetail />,
    },
  ]);
  console.log(blogData);
  return <RouterProvider router={router} />;
}
