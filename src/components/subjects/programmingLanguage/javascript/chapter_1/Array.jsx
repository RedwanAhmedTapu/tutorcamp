import { useEffect, useState } from "react";

const Array = () => {
  const [arrayList, setArrayList] = useState([
    "Apple",
    "Orange",
    "Mango",
    "Lichi",
    "Banana",
    "Guava",
    "Grape",
  ]);
  const [text, setText] = useState("result will appear here");
  const [changedItem, setChangedItem] = useState(null);
  //   useEffect(()=>{

  //   })
  const listOfFruits = [
    "Apple",
    "Orange",
    "Mango",
    "Lichi",
    "Banana",
    "Guava",
    "Grape",
  ];
  const ArrayMethodList = [
    "pop()",
    `push("olive")`,
    "shift()",
    `unshift("chilli")`,
    "slice(2,4)",
    "splice(2,4)",
    "slice(4)",
    "splice(4)",
    `arr[3]="Coconut"`,
    `indexOf("Mango")`,
    `indexOf("Rose")`,
  ];
  //   const negativeIndex = [-7, -6, -5, -4, -3, -2, -1];
  // update array
  const updatearray = () => {
    arrayList[3] = "Coconut";
    setChangedItem(arrayList[3]);
    setText(` replaces the index 3.i.e indexe 3 element is updated .`);
  };
  //   pop
  const popMethod = (prevArrayList) => {
    if (prevArrayList.length > 0) {
      let updatedItem;
      if (prevArrayList.length == 1) {
        updatedItem = prevArrayList.splice(-1);
      }
      updatedItem = prevArrayList.splice(0, prevArrayList.length - 1);
      //   const poppeditem = prevArrayList.pop();
      //   const updatedItem = prevArrayList.filter((elem) => elem != poppeditem);
      //   console.log(poppeditem, "nn");
      //   console.log(updatedItem, "pop");
      setArrayList(updatedItem);
      setChangedItem(`${prevArrayList.pop()}`);
      setText(
        ` is poped or deleted from the last index.so we can say that pop()  remove the last element`
      );
    } else {
      setText("no items are available to pop");
    }
  };

  //   push
  const pushMethod = () => {
    // listOfFruits.push("redwan");
    setArrayList((prev) => [...prev, "olive"]);
    setChangedItem(`redwan`);
    setText(
      ` is pushed at the last index.so we can say that push("redwan")  add the  element to the last index`
    );
  };
  //   shift
  //   let savedList;

  const shiftMethod = (prevArrayList) => {
    // savedList = prevArrayList.filter((elem) => elem != "");
    if (prevArrayList.length > 0) {
      let updatedItem;
      if (prevArrayList.length == 1) {
        updatedItem = prevArrayList.splice(-1);
      }
      updatedItem = prevArrayList.splice(1);

      //   const shifteditem = prevArrayList.shift();
      //   console.log(savedList.indexOf(shifteditem), "index");
      //   let updatedItem;
      //   for (let i = 0; i <= savedList.length; i++) {
      //     if (savedList[0] == savedList[i + 1]) {

      //   updatedItem = savedList.splice(0,1);
      //       console.log(updatedItem,"up")

      //       break;
      //     } else {
      //       updatedItem = savedList.filter((elem) => elem != shifteditem);
      //       break;
      //     }
      //   }

      //   console.log(shifteditem, "nn");
      //   console.log(updatedItem, "shift");
      setArrayList(updatedItem);
      setChangedItem(`${prevArrayList.shift()}`);
      setText(
        ` is shifted or deleted from the first index.so we can say that shift()  remove the first element`
      );
    } else {
      setText("no items are available to shift");
    }
  };
  //   unshift
  const unshiftMethod = () => {
    setArrayList((prev) => ["chilli", ...prev]);
    setChangedItem(`waffa`);
    setText(
      ` is unshifted at the first index.so we can say that unshift("waffa")  add the  element to the first index`
    );
  };

  //   slice method
  const sliceMethod = (prevArrayList) => {
    if (prevArrayList.length > 2) {
      const slicedList = prevArrayList.slice(2, 4);
      console.log(slicedList, "slice");
      setArrayList(prevArrayList);
      setChangedItem(slicedList);
      setText(
        ` is sliced from the original array .slice(2,4) slice the element starting from  index 2 to 3.`
      );
    } else {
      setChangedItem("");
      setText(` the array length is not enough for slicing.`);
    }
  };

  //   splice method
  const spliceMethod = (prevArrayList) => {
    if (prevArrayList.length >= 6) {
      //   console.log(prevArrayList.splice(2, 4), "slice");

      const splicedList = prevArrayList.splice(2, 4);

      setArrayList(prevArrayList);
      setChangedItem(splicedList);
      setText(
        ` is spliced from the original array .splice(2,4) here 2 is starting index and 4  is how much of elements to be removed`
      );
    } else {
      setChangedItem(``);

      setText(
        `can not perform this method now.cause you want to splice from index 2 and upto 4 elements.but you have not enough elments to be spliced from 2 index`
      );
    }
  };

  //   slice method 2
  const sliceMethod_2 = () => {
    listOfFruits.slice(4);
    console.log(listOfFruits.slice(4), "slice");

    setArrayList(listOfFruits);
  };
  //   splice method 2
  const spliceMethod_2 = (prevArrayList) => {
    if (prevArrayList.length > 4) {
      const splicedData = prevArrayList.splice(4);

      setArrayList(prevArrayList);
      setChangedItem(splicedData);
      setText(
        ` is spliced from the original array.splice(startIndex) slice the  element from startIndexed element to last element`
      );
    }
    setChangedItem("");

    setText(
      ` array length is not enough for splicing.cause splice(4) will  splice from index number 4 to last indexed element but here now the last index is 3.`
    );
  };
  // indexOf
  const indexOfMethod = () => {
    // listOfFruits.push("redwan");
    const index = arrayList.indexOf("Mango");
    setChangedItem(index);
    setText(`is the index of element Mango.`);
  };
  const indexOfMethod_2 = () => {
    // listOfFruits.push("redwan");
    const index = arrayList.indexOf("Rose");
    setChangedItem(index);
    setText(`is returned cause no named Rose element in the array.`);
  };
  return (
    <>
      <div className="flex flex-col   h-96">
        <div className="  flex h-1/3 flex-row items-center">
          <div className="text-cyan-600 text-xl md:text-3xl">Items:</div>&nbsp;
          {arrayList.map((curList, index) => {
            return (
              <>
                <div className="w-44 md:w-96 h-16 text-white  divide-slate-300 bg-violet-50 p-[0.2rem] md:p-1  ">
                  <div className="bg-teal-700 h-full text-[0.5rem] md:text-xl flex_center  ">
                    {curList}
                  </div>
                  <div className=" h-full text-[0.5rem] md:text-xl flex_center  ">
                    {index}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="h-1/3 cursor-pointer">
          <h3 className="text-teal-500 text-2xl">Result:</h3>
          <p className="text-red-500 text-2xl">
            {changedItem == "undefined" || changedItem == null
              ? ""
              : `${changedItem}`}
            <span className="text-white text-xl">{text}</span>
          </p>
        </div>
        <div className="h-1/3 cursor-pointer">
          <h3 className="text-teal-500 text-center">Perform Array Operation</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-4 mt-12">
            {ArrayMethodList.map((curMethod, index) => {
              return (
                <>
                  <div
                    className={` text-white bg-slate-500 rounded-sm flex_center   ${
                      index == 8 ||  index == 9 ||  index == 10 || index == 1 || index == 3
                        ? "w-auto text-xs  "
                        : " text-sm  w-20"
                    } md:w-24 h-12 `}
                    key={index}
                    onClick={() => {
                      switch (index) {
                        case 0:
                          popMethod(arrayList);
                          break;
                        case 1:
                          pushMethod();
                          break;
                        case 2:
                          shiftMethod(arrayList);
                          break;
                        case 3:
                          unshiftMethod();
                          break;
                        case 4:
                          sliceMethod(arrayList);
                          break;
                        case 5:
                          spliceMethod(arrayList);
                          break;
                        case 6:
                          sliceMethod_2();
                          break;
                        case 7:
                          spliceMethod_2(arrayList);
                          break;
                        case 8:
                          updatearray();

                          break;
                        case 9:
                          indexOfMethod();
                          break;

                        default:
                          indexOfMethod_2();
                          break;
                      }
                    }}
                  >
                    {curMethod}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="">
        <tbody>
          <tr>

          </tr>
        </tbody>

      </div> */}
    </>
  );
};

export default Array;
