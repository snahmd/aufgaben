import { useState } from "react";

function DayUndNight() {
  const [isDay, setIsDay] = useState(true);

  const handleClick = () => {
    setIsDay(!isDay);
  };
  if (isDay) {
    return (
      <div className="flex flex-col justify-center items-center gap-2 border border-white m-4 p-4 bg-white">
        <h1 className="text-black">Day</h1>
        <button
          className="bg-black text-white p-2 rounded-lg"
          onClick={handleClick}
        >
          Change to night
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center gap-2 border border-white m-4 p-4">
        <h1>Night</h1>
        <button
          className="bg-white text-black p-2 rounded-lg"
          onClick={handleClick}
        >
          Change to day
        </button>
      </div>
    );
  }
}

export default DayUndNight;
