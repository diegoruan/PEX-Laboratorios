import useConfig from "../hooks/useConfig";
import "./Home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const config = useConfig();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!config?.imagens || config.imagens.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === config.imagens.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [config?.imagens]);

  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  const baseUrl = `${import.meta.env.AWS_ENDPOINT.replace(
    "https://",
    `https://${import.meta.env.AWS_BUCKET_ASSETS}.`
  )}`;

  return (
    <>
      {/* Carrosel */}
      <div className="carousel slide mb-3">
        <div className="carousel-inner">
          {config.imagens?.map((img, index) => (
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
                <h1 className="fw-bold p-3 rounded">{config.nome}</h1>
                {config.slogan && (
                  <p className="lead px-3 py-2 rounded">{config.slogan}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informações */}
     <div className="info-section container-fluid">
      <div className="row justify-content-center">
        
        <div className="col-md-3 mb-4 mb-md-0 border-md-end card-custom">
          <div className="p-4">
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-location-dot icon-home"></i>
              <h5 className="fw-semibold title-custom">Unidades</h5>
            </div>     
            <p className="small text-custom">
              Informações sobre nossas unidades de atendimento e horário de funcionamento.
            </p>
            <a href="/unidades" className="small text-decoration-custom">
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="col-md-3 mb-4 mb-md-0 border-md-end card-custom">
          <div className="p-4">
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-vial icon-home"></i>
              <h5 className="fw-semibold title-custom">Instruções de coleta</h5>
            </div>
            <p className="small text-custom">
              Alguns exames exigem preparo especial: confira antes de realizar a coleta.
            </p>
            <a href="/instrucoes" className="small text-decoration-custom">
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="col-md-3 card-custom">
          <div className="p-4">
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-comments icon-home"></i>
              <h5 className="fw-semibold title-custom">Fale conosco</h5>
            </div>
            <p className="small text-custom">
              Entre em contato e marque seus exames de forma simples e rápida.
            </p>
            <a href="/contato" className="small text-decoration-custom">
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
