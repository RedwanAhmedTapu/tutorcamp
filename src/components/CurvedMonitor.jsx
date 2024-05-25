import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import imgsrc from "../assets/crystal-mashroom.jpg";
import GlobeInnerRay from "./GlobeInnerRay";

class Spotlight {
  constructor(containerElement) {
    this.container = containerElement;
    this.cards = Array.from(this.container.children);
    this.initContainer = this.initContainer.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init();
  }

  initContainer() {
    this.containerSize = {
      w: this.container.offsetWidth,
      h: this.container.offsetHeight,
    };
  }

  onMouseMove(event) {
    const { clientX, clientY } = event;
    const rect = this.container.getBoundingClientRect();

    this.cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();

      if (
        clientX >= cardRect.left &&
        clientX <= cardRect.right &&
        clientY >= cardRect.top &&
        clientY <= cardRect.bottom
      ) {
        const cardMouseX = clientX - rect.left - cardRect.left;
        const cardMouseY = clientY - rect.top - cardRect.top;
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const deltaX = Math.max(
          -cardRect.width / 2,
          Math.min(cardRect.width / 2, clientX - cardCenterX)
        );
        const deltaY = Math.max(
          -cardRect.height / 2,
          Math.min(cardRect.height / 2, clientY - cardCenterY)
        );

        card.style.setProperty("--mouse-x", `${cardMouseX}px`);
        card.style.setProperty("--mouse-y", `${cardMouseY}px`);

        const rotateX = (deltaY / (cardRect.height / 2)) * 10;
        const rotateY = (deltaX / (cardRect.width / 2)) * 10;
        const translateX = (deltaX / cardRect.width) * 10;
        const translateY = (deltaY / cardRect.height) * 10;

        card.style.transition =
          "transform 0.1s ease-out, box-shadow 0.1s ease-out";
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`;
        card.style.boxShadow = `${translateX / 2}px ${
          translateY / 2
        }px 20px rgba(0, 0, 0, 0.3)`;
      } else {
        card.style.transition = "transform 0.3s ease";
        card.style.transform = "";
        card.style.boxShadow = "";
      }
    });
  }

  init() {
    this.initContainer();
    window.addEventListener("resize", this.initContainer);
    window.addEventListener("mousemove", this.onMouseMove);
  }
}

const CurvedMonitor = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const spotlight = new Spotlight(containerRef.current);
    return () => {
      window.removeEventListener("resize", spotlight.initContainer);
      window.removeEventListener("mousemove", spotlight.onMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75 && bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 90 });
    }
  }, [isVisible, controls]);

  const cardsData = [
    {
      imageSrc: imgsrc,
      title:
        "The beautiful thing about learning is that no one can take it away from you.",
      description: "- B.B. King",
    },
    // Add more data for additional cards if needed
  ];

  return (
    <div
      className="flex flex-row items-center justify-center w-full h-screen bg-slate-950 max-[750px]:px-2 px-8 flex-wrap max-[999px]:h-full"
      ref={containerRef}
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="relative w-[91%] h-[70%] max-[750px]:w-screen bg-red-800 rounded-xl  before:absolute before:w-32 before:h-32 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-44 after:h-44 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden space-x-2"
        >
          <div className="relative bg-slate-900 w-full h-full   rounded-[inherit] z-20 overflow-hidden">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-slate-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex_center justify-center items-center max-[750px]:w-full max-[750px]:flex-col w-full h-full gap-x-6  rounded-md">

           <div className="w-[50%] max-[750px]:w-full h-[70%] max-[750px]:h-full  flex_center"> <GlobeInnerRay/></div>
              <div className="w-[45%] max-[750px]:w-full  h-[70%] flex_col_center text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 90 }}
                  animate={controls}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-xl text-slate-200 font-bold mb-1 hover:mix-blend-lighten transition-all duration-200"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 90 }}
                  animate={controls}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-sm text-slate-500 hover:mix-blend-normal transition-all duration-200"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedMonitor;
