import useConfig from "../hooks/useConfig";
import "./Politicas.css";

export default function Politica() {
  const config = useConfig();
  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container mt-5">
      <h3 className="titulo-custom">{config.politica.titulo}</h3>
      <div 
        className="politica-conteudo"
        dangerouslySetInnerHTML={{ __html: config.politica.conteudo }}
      />
    </div>
  );
}
