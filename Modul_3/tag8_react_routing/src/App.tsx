import "./App.css";
import CarDetail from "./components/CarDetail";
import Home from "./components/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cards/:id",
      element: <CarDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
