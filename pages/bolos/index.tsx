import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import FazerPedido from "@/components/buttons";

const bolos = [
  {
    titulo: "Jardim Festivo",
    imagem: "/images/cake1.webp",
  },
  {
    titulo: "Céu Gradiente",
    imagem: "/images/cake2.webp",
  },
  {
    titulo: "Sonho Rosa!",
    imagem: "/images/cake3.webp",
  },
  {
    titulo: "Ondas do Mar Azul",
    imagem: "/images/cake4.webp",
  },
  {
    titulo: "União de Amor",
    imagem: "/images/cake5.webp",
  },
  {
    titulo: "Metamorfose",
    imagem: "/images/cake6.webp",
  },
  {
    titulo: "Festa de Granulados",
    imagem: "/images/cake7.webp",
  },
  {
    titulo: "Creme e Caramelo",
    imagem: "/images/cake8.webp",
  },
  {
    titulo: "Esmeralda",
    imagem: "/images/cake9.webp",
  },
  {
    titulo: "Café com Leite",
    imagem: "/images/cake10.webp",
  },
];

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center w-full gap-10 px-4 py-3 md:py-12">
        <div className="text-center max-w-3xl">
          <h1 className="font-pattaya text-4xl md:text-7xl">Nossos Bolos</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          {bolos.map((bolo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  fill
                  alt={bolo.titulo}
                  className="object-cover"
                  src={bolo.imagem}
                />
              </div>
              <h2 className="font-pattaya text-[#C79f30] text-center mt-4 text-[clamp(1.5rem,5vw,2.5rem)]">
                {bolo.titulo}
              </h2>
              <FazerPedido />
            </div>
          ))}
        </div>
        <section className="flex justify-center flex-wrap p-2 gap-3">
          <p className="font-inter text-white text-2xl">
            Não achou o seu bolo? Que tal pedir um personalizado ?
          </p>
          <div className="m-auto flex justify-center w-full">
            <FazerPedido />
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
