import useConfig from "../hooks/useConfig";
import AccordionItem from "../components/AccordionItem";
import "./Instrucoes.css";

export default function Instructions() {
  const config = useConfig();
  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container mt-5">
      <h3 className="titulo-custom">Instruções de Coleta</h3>
      <div className="accordion mt-3" id="accordionExample">
        {config.instrucoes.map((item, i) => (
          <AccordionItem 
            key={i} 
            id={i} 
            title={item.titulo} 
            content={item.descricao.replace(/\n/g, '<br/>')} 
          />
        ))}
      </div>
    </div>
  );
}
