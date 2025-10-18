import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Instrucoes from "./pages/Instrucoes";
import Sobre from "./pages/Sobre";
import Politicas from "./pages/Politicas";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instrucoes" element={<Instrucoes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/politica-de-privacidade" element={<Politicas />} />
    </Routes>
  );
}
