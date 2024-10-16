import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Glasswiki</h1>
      <p className="text-lg text-gray-700 mb-8">
        Bienvenido a Glasswiki, la enciclopedia del sector del vidrio.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-2">¿Qué es el vidrio?</h2>
        <p className="text-gray-600">
          El vidrio es un material inorgánico, sólido y generalmente transparente,
          que se obtiene a partir de la fusión de arena, sosa y cal.
        </p>
        {/* Aquí puedes agregar más secciones o artículos relacionados */}
      </div>
    </div>
  );
}
