import {
  HTMLButton,
  CSSButton,
  JavaScriptButton,
  ReactButton,
  SassButton,
  TailwindButton,
  GitButton,
  UXUIButton,
} from "./Button";
const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-16">
      <h2 className="font-extrabold text-center text-3xl pt-16 pb-8">SKILLS</h2>
      <div className="flex gap-8 w-[370px] flex-wrap">
        <HTMLButton />
        <CSSButton />
        <JavaScriptButton />
        <ReactButton />
        <SassButton />
        <TailwindButton />
        <GitButton />
        <UXUIButton />
      </div>
    </div>
  );
};
export default Skills;
