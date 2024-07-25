import { useEffect, useState } from "react";

const Slider = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   setTimer(timer + 1);
    // }, 1500);
    // return () => {
    //   clearInterval(() => {
    //     setTimer(0);
    //   },20000);
    // };
  }, [timer]);
  console.log(timer);

  return (
    <>
      <div className="   flex justify-center items-center bg-yellow-400 py-2">
            <div className="logos-slider relative  w-[60rem] mx-44  bg-red-500  overflow-x-auto   flex  item-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16].map((curElem, index) => (
                <div
                  className={`w-[20rem] h-24  relative   bg-indigo-500`}
                  style={{translate:`-${timer+100}px`}}
                  key={index}
                >
                  {curElem}
                </div>
              ))}
          </div>
      </div>
    </>
  );
};

export default Slider;
