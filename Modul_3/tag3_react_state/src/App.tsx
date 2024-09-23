import Counter from "./components/Counter";
import DayUndNight from "./components/DayUndNight";
import Faq from "./components/Faq";
import Forms from "./components/Forms";
function App() {
  return (
    <div className="flex flex-col mt-32 mx-64">
      <Faq />
      <DayUndNight />
      <Counter />
      <Forms />
    </div>
  );
}

export default App;
