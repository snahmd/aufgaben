import AnimalList from "./components/AnimalList";
export default function App() {
  return (
    <div>
      <h1 className="font-extrabold text-6xl text-center py-8">ZooPartyDB</h1>
      <h2 className="font-semibold text-slate-400 text-3xl text-center pb-8">
        Explore the fascinating world of zoo animals!
      </h2>
      <AnimalList />
    </div>
  );
}
