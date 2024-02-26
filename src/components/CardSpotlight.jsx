import { useRef, useEffect } from "react";
import imgsrc from "../assets/Brain.svg";


class Spotlight {
  constructor(containerElement) {
    this.container = containerElement;
    this.cards = Array.from(this.container.children);
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.containerSize = {
      w: 0,
      h: 0,
    };
    this.initContainer = this.initContainer.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init();
  }

  initContainer() {
    this.containerSize.w = this.container.offsetWidth;
    this.containerSize.h = this.container.offsetHeight;
  }

  onMouseMove(event) {
    const { clientX, clientY } = event;
    const rect = this.container.getBoundingClientRect();
    const { w, h } = this.containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;

    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;

      this.cards.forEach((card) => {
        const cardX =
          -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
        const cardY =
          -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
        card.style.setProperty("--mouse-x", `${cardX}px`);
        card.style.setProperty("--mouse-y", `${cardY}px`);
      });
    }
  }

  init() {
    this.initContainer();
    window.addEventListener("resize", this.initContainer);
    window.addEventListener("mousemove", this.onMouseMove);
  }
}

const CardSpotlight = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const spotlight = new Spotlight(containerRef.current);
    return () => {
      // Clean up event listeners when component unmounts
      window.removeEventListener("resize", spotlight.initContainer);
      window.removeEventListener("mousemove", spotlight.onMouseMove);
    };
  }, []);

  const cardsData = [
    {
      imageSrc: imgsrc,
      title: "Amazing Integration",
      description:
        "Quickly apply filters to refine your issues lists and create custom views.",
    },
    {
      imageSrc: imgsrc,
      title: "Amazing Integration",
      description:
        "Quickly apply filters to refine your issues lists and create custom views.",
    },
    {
      imageSrc:imgsrc,
      title: "Amazing Integration",
      description:
        "Quickly apply filters to refine your issues lists and create custom views.",
    },
    // Add more data for additional cards if needed
  ];

  return (
    <div
      className="cardspotlight flex_center space-x-1 w-full h-screen bg-slate-950 px-8 max-[999px]:flex-wrap max-[999px]:h-full"
      ref={containerRef}
      style={
        {
          // Add styles for the container if necessary
        }
      }
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="relative h-96 bg-slate-800 rounded-xl p-px before:absolute before:w-32 before:h-32 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-44 after:h-44 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden "
        >
          <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              <div className="relative inline-flex">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                  aria-hidden="true"
                ></div>
                <img
                  className="inline-flex"
                  src={card.imageSrc}
                  width="200"
                  height="200"
                  alt={`Card ${index + 1}`}
                />
              </div>
              <div className="grow mb-5 ">
                <h2 className="text-xl text-slate-200 font-bold mb-1  hover:mix-blend-lighten transition-all duration-200">
                  {card.title}
                </h2>
                <p className="text-sm text-slate-500  hover:mix-blend-normal transition-all duration-200">
                  {card.description}
                </p>
              </div>
              <a
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                <svg
                  className="fill-slate-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                >
                  <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                </svg>
                <span>Connect</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSpotlight;
