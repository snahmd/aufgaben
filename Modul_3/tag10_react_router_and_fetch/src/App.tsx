import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./components/LLayout";
// import Homepage from "./pages/HHomepage";
// import Detailpage from "./pages/DDetailpage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetail from "./pages/BeerDetail";
import RandomBeer from "./pages/RandomBeer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/beers",
        element: <AllBeers />,
      },
      {
        path: "/beers/:_id",
        element: <BeerDetail />,
      },
      {
        path: "/random-beer",
        element: <RandomBeer />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
