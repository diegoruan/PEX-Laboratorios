import InfoCard from "./InfoCard";
import "./InfoSection.css";

export default function InfoSection({ homeConfig }) {
  return (
    <div className="info-section container-fluid">
      <div className="row justify-content-center">
        <InfoCard
          icon="fa-location-dot"
          title={homeConfig.unidade}
          description={homeConfig.descricaoUnidade}
          link="/unidades"
          linkText="Saiba Mais"
        />
        <InfoCard
          icon="fa-vial"
          title={homeConfig.instrucoes}
          description={homeConfig.descricaoInstrucoes}
          link="/instrucoes"
          linkText="Saiba Mais"
        />
        <InfoCard
          icon="fa-comments"
          title={homeConfig.faleConosco}
          description={homeConfig.descricaoFaleConosco}
          link="/contato"
          linkText="Iniciar Conversa"
        />
      </div>
    </div>
  );
}
