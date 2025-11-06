import useConfig from "../hooks/useConfig";
import UnidadeCard from "../components/UnidadeCard";
import "./Unidades.css";

export default function Unidades() {
  const config = useConfig();
  
  if (!config) return <div className="loading">Carregando...</div>;

  const baseUrl = `${import.meta.env.AWS_ENDPOINT.replace(
    "https://",
    `https://${import.meta.env.AWS_BUCKET_ASSETS}.`
  )}`;

  return (
    <div className="unidades-container">
      <div className="unidades-header">
        <h1 className="unidades-titulo">{config.unidades.titulo}</h1>
      </div>

      <div className="unidades-grid">
        {config.unidades.cards && config.unidades.cards.map((unidade) => (
          <UnidadeCard 
            key={unidade.id}
            unidade={unidade}
            corPrimaria={config.cores.primaria}
            baseUrl={baseUrl}
          />
        ))}
      </div>
    </div>
  );
}