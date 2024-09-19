import { ResumeButton } from "./Button";
const Hero = () => {
  return (
    <section className="hero flex flex-col h-[500px] justify-center  items-center">
      <h1 className="text-center font-bold text-4xl py-8">
        Hi, I'am <span className="text-[#979ed5]"> John Smith.</span>
      </h1>

      <h2 className="text-center text-2xl pb-8">A Front End Developer</h2>
      <p className="text-center font-light text-lg pb-8 w-[50%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ullam
        maxime temporibus expedita incidunt, quidem quasi? Magni eum obcaecati
        eum obcaecati aliquid?
      </p>
      <ResumeButton />
    </section>
  );
};

export default Hero;
