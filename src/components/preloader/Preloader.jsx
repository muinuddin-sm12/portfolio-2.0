import { useEffect, useRef } from "react";
import "./Preloader.css";
import gsap from "gsap";
const Preloader = () => {
  const containRef = useRef(null)
  useEffect(() => {
    gsap.to(containRef.current, {
      y: "-100%",       
      duration: 1,     
      delay: 2,         
      ease: "power2.out",
    });
  },[])
  return (
      <svg ref={containRef} className="contain absolute">
        <text
          x="50%"
          y="50%"
          className="text"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Muin
        </text>
      </svg>
  );
};

export default Preloader;
