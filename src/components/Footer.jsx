import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-custom py-3 mt-5 border-top">
      <Link to="/politica-de-privacidade" className="text-decoration-custom small">
        Política de Privacidade
      </Link>
      <span className="text-decoration-custom small">2025 © | Todos os direitos reservados</span>
    </footer>
  );
}
