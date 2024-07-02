import React from "react";
import { useInView } from "react-intersection-observer";
import "./css/LazyCard.css";

const LazyCard = ({ card }) => {
  const { title, description, price, tags, img_urls } = card;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`card ${inView ? "in-view" : ""}`}>
      {inView && (
        <>
          <img src={img_urls[0]} alt={title} className="card-image" />
          <div className="card-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: Rs.{price.toFixed(2)}</p>
            <p>Tags: {tags.join(", ")}</p>
            <p><button>Contact Seller</button></p>
          </div>
        </>
      )}
    </div>
  );
};

export default LazyCard;
