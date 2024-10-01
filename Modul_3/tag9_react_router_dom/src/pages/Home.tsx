import { Link } from "react-router-dom";
import hero_img from "../assets/hero_img.jpg";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-32">
        <img className="h-[30vh] object-cover" src={hero_img} alt="Hero" />
        <div className="flex flex-col gap-16 w-5/6 mx-auto">
          <h1 className="font-bold text-wrap w-96 text-5xl">
            Welcome to my Simple Blog
          </h1>
          <Link
            className="border border-red-500 rounded-md p-4 w-96 text-2xl font-semibold"
            to="/blog"
          >
            Go to Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
