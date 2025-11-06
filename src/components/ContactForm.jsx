import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nome: "",
      celular: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="tel"
        name="celular"
        placeholder="Celular"
        value={formData.celular}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="text"
        name="assunto"
        placeholder="Assunto"
        value={formData.assunto}
        onChange={handleChange}
        required
        className="form-input"
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        required
        className="form-textarea"
        rows="6"
      />

      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
}
