import { useState } from "react";
function Counter() {
  //   let count = 999;
  //   const handleClick = () => {
  //      count++;
  //      console.log(count);
  // };
  const [count, setCount] = useState(0);
  const handleIncClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleDecClick = () => {
    setCount(count - 1);
    console.log(count);
  };

  const handleReset = () => {
    setCount(0);
    console.log(count);
  };

  return (
    <div className="m-4 flex flex-col border border-white justify-center items-center">
      <div>
        <button
          className="p-2 m-4 border border-white"
          onClick={handleIncClick}
        >
          +
        </button>
        <button>Counter: {count}</button>
        <button
          className="p-2 m-4 border border-white"
          onClick={handleDecClick}
        >
          -
        </button>
      </div>
      <button className="p-2 m-4 border border-white" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
