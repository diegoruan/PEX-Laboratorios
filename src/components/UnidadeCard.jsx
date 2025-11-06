import "./UnidadeCard.css";

export default function UnidadeCard({ unidade, corPrimaria, baseUrl }) {
  const abrirWhatsApp = (telefone) => {
    const numeroLimpo = telefone.replace(/\D/g, '');
    window.open(`https://wa.me/55${numeroLimpo}`, '_blank');
  };

  return (
    <div className="unidade-card">
      <div className="unidade-imagem">
        <img src={`${baseUrl}${unidade.imagem}`} alt={`Unidade ${unidade.nome}`} />
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
          style={{ backgroundColor: corPrimaria }}
        >
          <i className="fa-brands fa-whatsapp"></i>
          {unidade.telefone}
        </button>
      </div>
    </div>
  );
}