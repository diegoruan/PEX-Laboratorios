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

    if (config?.logo) {
      const logoUrl = `${import.meta.env.AWS_ENDPOINT.replace(
        "https://",
        `https://${import.meta.env.AWS_BUCKET_ASSETS}.`
      )}${config.logo}`;

      let favicon = document.querySelector("link[rel='icon']");
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        document.head.appendChild(favicon);
      }
      favicon.href = logoUrl;
    }
  }, [config]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-fill">
        <Router />
      </div>
      <Footer />
    </div>
  );
}
