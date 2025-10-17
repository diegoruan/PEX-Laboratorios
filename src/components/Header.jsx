import { Link } from "react-router-dom";
import useConfig from "../hooks/useConfig";
import "./Header.css";

export default function Header() {
  const config = useConfig();

  const logoUrl = config
    ? `${import.meta.env.AWS_ENDPOINT.replace(
        "https://",
        `https://${import.meta.env.AWS_BUCKET_ASSETS}.`
      )}${config.logo}`
    : "";
    
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {logoUrl && <img src={logoUrl} alt="Logo" height="100" />}
        </Link>

        <div className="menu-aparece">
          <h6>Menu</h6>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="fas fa-bars"></span>
          </button>
        </div>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/instrucoes">Instruções</Link></li>
            <li><Link className="nav-link" to="/sobre">Quem Somos</Link></li>
            <li><Link className="nav-link" to="/sobre">Unidades</Link></li>
            <li><Link className="nav-link" to="/sobre">Contato</Link></li>
            <li className="ultimo-item"><Link className="nav-link-highlight" to="/sobre">Resultados</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
