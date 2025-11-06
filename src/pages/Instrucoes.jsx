import useConfig from "../hooks/useConfig";
import AccordionItem from "../components/AccordionItem";
import "./Instrucoes.css";

export default function Instrucoes() {
  const config = useConfig();

  if (!config) return <div className="loading">Carregando...</div>;

  const instrucoes = config.instrucoes?.conteudo || [];

  return (
    <div className="container mt-5">
      <h3 className="titulo-custom">{config.instrucoes.titulo}</h3>
      <div className="accordion mt-3" id="accordionExample">
        {instrucoes.map((item, i) => (
          <AccordionItem
            key={i}
            id={i}
            title={item.titulo}
            content={item.descricao.replace(/\n/g, "<br/>")}
          />
        ))}
      </div>
    </div>
  );
}
