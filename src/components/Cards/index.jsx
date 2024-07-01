import React from "react";

function Card({ image, title, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <br />
      <h2>{title}</h2>
      <br />
      <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
        Mejores momentos
      </a>
    </div>
  );
}

export default Card;