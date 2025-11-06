import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ imagens = [], nome, slogan, baseUrl }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (imagens.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === imagens.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [imagens]);

  return (
    <div className="carousel slide mb-3">
      <div className="carousel-inner">
        {imagens.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={`${baseUrl}${img}`}
              className="d-block w-100"
              alt={`Imagem ${index + 1}`}
            />
            <div className="carousel-caption">
              <h1 className="fw-bold p-3 rounded">{nome}</h1>
              {slogan && (
                <p className="lead px-3 py-2 rounded">{slogan}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
