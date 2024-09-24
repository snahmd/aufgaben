function Spoiler({ children }: { children: string }) {
  return (
    <span className="text-black inline-block bg-black hover:text-slate-700 hover:rotate-0 hover:bg-slate-100 transform-gpu  -rotate-6 last:rotate-6">
      {children}
    </span>
  );
}

function App() {
  return (
    <div className="bg-slate-100 text-slate-700 w-[100vw] h-[100vh] flex items-center">
      <p className="w-[680px] mx-auto">
        Star Wars (englisch für <Spoiler>Sternkriege</Spoiler>) ist ein
        Film-Franchise, dessen Geschichte mit dem <Spoiler>1977</Spoiler>{" "}
        erschienenen Kinofilm Krieg der Sterne (Originaltitel: Star Wars)
        begann. Schöpfer von Star Wars ist der Drehbuchautor, Produzent und
        Regisseur George Lucas. Im Jahr 2012 verkaufte Lucas seine Firma{" "}
        <Spoiler>Lucasfilm</Spoiler>, mitsamt den Rechten an Star Wars, an die
        Walt Disney Company.{" "}
      </p>
    </div>
  );
}

export default App;
