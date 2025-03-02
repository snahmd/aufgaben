import { ExampleButton } from "./Button";
const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-16">
      <h2 className="font-extrabold text-center text-3xl pt-16 pb-8">SKILLS</h2>
      <div className="flex gap-8 w-[370px] flex-wrap">
        <ExampleButton text="HTML" />
        <ExampleButton text="CSS" />
        <ExampleButton text="JavaScript" />
        <ExampleButton text="React" />
        <ExampleButton text="Sass" />
        <ExampleButton text="Tailwind CSS" />
        <ExampleButton text="Git" />
        <ExampleButton text="UX/UI" />
      </div>
    </div>
  );
};
export default Skills;
