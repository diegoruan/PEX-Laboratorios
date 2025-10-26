import useConfig from "../hooks/useConfig";
import "./Unidades.css";

export default function Unidades() {
  const config = useConfig();
  
  if (!config) return <div className="loading">Carregando...</div>;

  const abrirWhatsApp = (telefone) => {
    const numeroLimpo = telefone.replace(/\D/g, '');
    window.open(`https://wa.me/55${numeroLimpo}`, '_blank');
  };

  return (
    <div className="unidades-container">
      <div className="unidades-header">
        <h1 className="unidades-titulo">Encontre nossas unidades</h1>
      </div>

      <div className="unidades-grid">
        {config.unidades && config.unidades.map((unidade) => (
          <div key={unidade.id} className="unidade-card">
            <div className="unidade-imagem">
              <img src={unidade.imagem} alt={`Unidade ${unidade.nome}`} />
            </div>
            
            <div className="unidade-info">
              <h2 className="unidade-nome">{unidade.nome}</h2>
              
              <div className="unidade-detalhes">
                <div className="detalhe-item">
                  <div>
                    <p className="detalhe-texto">{unidade.endereco}</p>
                    <p className="detalhe-texto-secundario">{unidade.cidade}</p>
                  </div>
                </div>

                <div className="detalhe-horarios">
                  <div className="horarios-lista">
                    {unidade.horarios.map((h, idx) => (
                      <div key={idx} className="horario-item">
                        <span className="horario-dias">{h.dias}</span>
                        <span className="horario-tempo">{h.horario}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                className="whatsapp-button"
                onClick={() => abrirWhatsApp(unidade.telefone)}
                style={{ backgroundColor: config.cores.primaria }}
              >
                <span className="whatsapp-icon">📞</span>
                {unidade.telefone}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}