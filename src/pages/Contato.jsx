import useConfig from "../hooks/useConfig";
import ContactForm from "../components/ContactForm";
import "./Contato.css";

export default function Contato() {
  const config = useConfig();

  if (!config) return <div className="loading">Carregando...</div>;

  const handleFormSubmit = (dados) => {
    alert(`Mensagem enviada com sucesso!\n\nNome: ${dados.nome}`);
    // Aqui usar para enviar para uma API futuramente
  };

  return (
    <div className="contato-container">
      <h1 className="contato-titulo mb-4">{config.contato.titulo}</h1>
      <div className="contato-content">
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}
