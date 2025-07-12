import React from "react";

const imagens = [
  "/images/cake1.webp",
  "/images/cake2.webp",
  "/images/cake3.webp",
  "/images/cake4.webp",
  "/images/cake5.webp",
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
