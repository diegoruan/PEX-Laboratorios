import useConfig from "../hooks/useConfig";

export default function Home() {
  const config = useConfig();
  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container text-center mt-5">
      <h1>{config.nome}</h1>
      <p className="lead">{config.slogan}</p>

      <div className="row mt-5">
        <div className="col-md-4">
          <h5>Unidade</h5>
          <p>{config.unidade.endereco}</p>
          <p>{config.unidade.telefone}</p>
        </div>
        <div className="col-md-4">
          <h5>Instruções de Coleta</h5>
          <p>Confira orientações específicas para seus exames.</p>
        </div>
        <div className="col-md-4">
          <h5>Resultados Online</h5>
          <p>Acesse seus resultados com praticidade.</p>
        </div>
      </div>
    </div>
  );
}
