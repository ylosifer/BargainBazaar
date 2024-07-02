import React from "react";
import { useInView } from "react-intersection-observer";
import "./css/LazyLoad.css";

const LazyLoad = ({ children, threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div ref={ref} className={inView ? "in-view" : "not-in-view"}>
      {inView ? children : null}
    </div>
  );
};

export default LazyLoad;
