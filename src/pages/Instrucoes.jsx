import useConfig from "../hooks/useConfig";
import AccordionItem from "../components/AccordionItem";

export default function Instructions() {
  const config = useConfig();
  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container mt-5">
      <h2>Instruções de Coleta</h2>
      <div className="accordion mt-3" id="accordionExample">
        {config.instrucoes.map((item, i) => (
          <AccordionItem key={i} id={i} title={`Instrução ${i + 1}`} content={item} />
        ))}
      </div>
    </div>
  );
}
