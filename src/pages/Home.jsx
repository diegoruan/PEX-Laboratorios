import useConfig from "../hooks/useConfig";
import Carousel from "../components/Carousel";
import InfoSection from "../components/InfoSection";

export default function Home() {
  const config = useConfig();

  if (!config)
    return <div className="loading">Carregando...</div>;

  const baseUrl = `${import.meta.env.AWS_ENDPOINT.replace(
    "https://",
    `https://${import.meta.env.AWS_BUCKET_ASSETS}.`
  )}`;

  return (
    <>
      <Carousel
        imagens={config.imagens || []}
        nome={config.nome}
        slogan={config.slogan}
        baseUrl={baseUrl}
      />
      <InfoSection homeConfig={config.home} />
    </>
  );
}
