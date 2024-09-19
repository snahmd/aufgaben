import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <section className="bg-[#23283E]">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
