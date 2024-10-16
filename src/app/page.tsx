import Image from "next/image";
import UnloggedNav from "./ui-components/navs/unlogged-nav";
import Searchbar from "./ui-components/searchbar";

export default function Home() {
  return (
    <>
    <UnloggedNav/>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  pt-36">
      <div className="mb-12 text-center">
      <h1 className="text-5xl text-gray-400  font-bold ">Glasswiki</h1>
      <p className="text-lg text-gray-700 mb-1">
        Bienvenido a Glasswiki, la enciclopedia del sector del vidrio.
      </p>
      <Searchbar/>
      </div>

      <div className="flex flex-row w-full text-gray-500 px-12 mt-12">
      <div className="bg-white shadow-md rounded-lg p-6  w-full mx-6">
         <p className="text-xl">Artículos destacados</p>
         <p className="text-sm">Check</p>

      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-full mx-6">
      <p className="text-xl">Artículos recientes</p>
      <p className="text-sm">Check</p>
      </div>
      </div>

    </div>
    </>
  );
}
