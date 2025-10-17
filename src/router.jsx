import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Instructions from "./pages/Instrucoes";
import About from "./pages/Sobre";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instrucoes" element={<Instructions />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
}
