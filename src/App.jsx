import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router";
import useConfig from "./hooks/useConfig";
import { useEffect } from "react";

export default function App() {
  const config = useConfig();

  useEffect(() => {
    if (config?.cores) {
      if (config.cores.primaria) {
        document.documentElement.style.setProperty(
          "--cor-primaria",
          config.cores.primaria
        );
      }
      if (config.cores.secundaria) {
        document.documentElement.style.setProperty(
          "--cor-secundaria",
          config.cores.secundaria
        );
      }
      if (config.cores.textoPrimaria) {
        document.documentElement.style.setProperty(
          "--texto-primaria",
          config.cores.textoPrimaria
        );
      }
      if (config.cores.textoSecundaria) {
        document.documentElement.style.setProperty(
          "--texto-secundaria",
          config.cores.textoSecundaria
        );
      }
    }
  }, [config]);

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
