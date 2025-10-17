import { useState, useEffect } from "react";

export default function useConfig() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then(setConfig)
      .catch((err) => console.error("Erro ao carregar config:", err));
  }, []);

  return config;
}
