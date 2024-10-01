import { blogData } from "../data";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const id = useParams<{ id: string }>().id;
  let index = undefined;
  for (let i = 0; i < blogData.length; i++) {
    if (blogData[i].id.toString() === id) {
      index = blogData[i];
    }
  }
  if (index === undefined) {
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <Header />
      <div className=" flex flex-col justify-center items-center mx-auto gap-8 w-5/6">
        <img className="w-full" src={index.img_url} alt={index.title} />
        <div className="flex flex-row items-center gap-8">
          <div className=" flex flex-col  gap-4 m-4 w-5/6">
            <h1>{index?.title}</h1>
            <p>{index?.description}</p>
            <h2>{index?.author}</h2>
          </div>
          <p>{index?.published_date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
