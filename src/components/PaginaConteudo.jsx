import useConfig from "../hooks/useConfig";
import "./PaginaConteudo.css";

export default function PaginaConteudo({ tipo }) {
  const config = useConfig();
  if (!config) return <div className="loading">Carregando...</div>;

  const conteudoConfig = config[tipo];
  
  if (!conteudoConfig) {
    return <div className="text-center mt-5">Conteúdo não encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <h3 className="titulo-custom">{conteudoConfig.titulo}</h3>
      <div 
        className={`conteudo-custom ${tipo}-conteudo`}
        dangerouslySetInnerHTML={{ __html: conteudoConfig.conteudo }}
      />
    </div>
  );
}