import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Instrucoes from "./pages/Instrucoes";
import Sobre from "./pages/Sobre";
import Politicas from "./pages/Politicas";
import Unidades from "./pages/Unidades";
import Contato from "./pages/Contato";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instrucoes" element={<Instrucoes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/politica-de-privacidade" element={<Politicas />} />
      <Route path="/unidades" element={<Unidades />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
