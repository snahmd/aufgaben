import Card from "./Card";
const Projects = () => {
  return (
    <div>
      <h2 className="font-extrabold text-center text-3xl py-8">PROJECTS</h2>
      <div className="projects flex gap-8 px-16 py-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
