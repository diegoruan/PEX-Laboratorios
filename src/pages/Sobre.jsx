import useConfig from "../hooks/useConfig";
import "./Sobre.css";

export default function Sobre() {
  const config = useConfig();
  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container mt-5">
      <h3 className="titulo-custom">{config.sobre.titulo}</h3>
      <div 
        className="sobre-conteudo"
        dangerouslySetInnerHTML={{ __html: config.sobre.conteudo }}
      />
    </div>
  );
}