const SliderBelowCard = () => {
  return (
    <>
      <div className="flex  flex-row  justify-center items-center ">
        <div className="w-[80%] bg-slate-600">
          <div className="flex_center w-full  item-center  px-3 py-4 ">
            <div className="flex justify-center pb-4  mr-4">
              <img
                className="img-fluid"
                src="../assets/robotics-image.svg"
                alt="forrester"
              />
            </div>
            <div>
              <a
                className="flex flex-row   align-center text-center sm:text-left"
                href="https://reprints2.forrester.com/#/assets/2/2565/RES178480/report"
                target="blank"
              >
                <span className="sm:mr-4  text-yellow-50 pb-4 pb-sm-0">
                  Hack The Box is a Leader in The Forrester Wave™:{" "}
                  <br className="" />
                  Cybersecurity Skills and Training Platforms, Q4 2023
                </span>
                <div className="flex flex-col ">
                  <span className="text-white leading-4">
                    <svg
                      className="arrow-icon arrow-icon-reversed"
                      width="16"
                      height="16"
                      viewBox="-3 -3 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="arrow-icon-right"
                        fill="#8799b5"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className="arrow-icon-stem arrow-icon-reversed-stem"
                        stroke="#8799b5"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderBelowCard;
