import useConfig from "../hooks/useConfig";

export default function About() {
  const config = useConfig();
  if (!config) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container mt-5">
      <h2>Quem Somos</h2>
      <p className="mt-3">{config.sobre}</p>
    </div>
  );
}
