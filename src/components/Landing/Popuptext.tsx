import React, { useEffect, useRef, ReactElement } from "react";
import { gsap, Power4 } from "gsap";

const Popuptext: React.FC = (): ReactElement => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 40, z: -20 },
        {
          opacity: 1,
          y: 0,
          z: 2,
          duration: 1,
          stagger: 0.1,
          ease: Power4.easeOut,
        },
      );
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-4xl">
        <span className="flex items-center" ref={textRef}>
          <span className="inline-block font-sans text-lg  md:text-2xl lg:text-2xl">
            Welcome to 603 The CoWorking Space
          </span>
        </span>
      </div>
    </div>
  );
};

export default Popuptext;
