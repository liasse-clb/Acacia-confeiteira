import React from "react";
import "./carrossel.css";

const imagens = [
  "/cake1.webp",
  "/cake2.webp",
  "/cake3.webp",
  "/cake4.webp",
  "/cake5.webp",
];

export default function Carrossel() {
  return (
    <div className="carrossel-container">
      <div className="carrossel-slide">
        {imagens.map((src, i) => (
          <img key={i} alt={`img-${i}`} className="carrossel-img" src={src} />
        ))}
        {imagens.map((src, i) => (
          <img
            key={`dup-${i}`}
            alt={`img-${i}`}
            className="carrossel-img"
            src={src}
          />
        ))}
      </div>
    </div>
  );
}
