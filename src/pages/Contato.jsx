import { useState } from "react";
import useConfig from "../hooks/useConfig";
import "./Contato.css";

export default function Contato() {
  const config = useConfig();
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  if (!config) return <div className="loading">Carregando...</div>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({
      nome: "",
      celular: "",
      email: "",
      assunto: "",
      mensagem: ""
    });
  };

  return (
    <div className="contato-container">
      <div className="contato-header">
        <h1 className="contato-titulo">Fale conosco</h1>
      </div>

      <div className="contato-content">
        <div className="contato-form">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="tel"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="text"
            name="assunto"
            placeholder="Assunto"
            value={formData.assunto}
            onChange={handleChange}
            className="form-input"
          />

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className="form-textarea"
            rows="6"
          />

          <button
            onClick={handleSubmit}
            className="form-button"
            style={{ backgroundColor: config.cores.primaria }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}