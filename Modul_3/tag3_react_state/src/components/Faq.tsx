import { useState } from "react";
const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTwoOpen, setIsTwoOpen] = useState(false);
  const handleTwoClick = () => {
    setIsTwoOpen(!isTwoOpen);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    if (isTwoOpen) {
      return (
        <div className="flex flex-col gap-2 justify-center p-2 m-4 border border-white">
          <div className="flex justify-center gap-2">
            <p>Why ist React great?</p>
            <button
              className="bg-white text-black px-2"
              onClick={handleTwoClick}
            >
              -
            </button>
          </div>
          <hr />
          <div className="flex justify-center gap-2">
            <p>Fast Learning Curve</p>
            <button
              className="bg-white text-black px-2"
              onClick={handleTwoClick}
            >
              -
            </button>
          </div>
          <hr />
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel
            repudiandae eum officiis sed asperiores quos expedita ipsa quisquam
            eligendi explicabo, vero non quo maiores harum veritatis dolorum
            aperiam itaque!
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-2 justify-center p-2 m-4 border border-white">
          <div className="flex justify-center gap-2">
            <p className="">Why ist React great?</p>
            <button className="bg-white text-black px-2" onClick={handleClick}>
              -
            </button>
          </div>
          <hr />
          <div className="flex gap-2 justify-center">
            <p className="text-white text-center">Fast Learning Curve</p>
            <button
              className="bg-white text-black px-2"
              onClick={handleTwoClick}
            >
              +
            </button>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="flex gap-2 justify-center p-2 m-4 border border-white">
        <p className="">Why ist React great?</p>
        <button className="bg-white text-black px-2" onClick={handleClick}>
          +
        </button>
      </div>
    );
  }
};

export default Faq;
