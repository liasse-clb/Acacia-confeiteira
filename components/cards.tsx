import Image from "next/image";

export default function Cards() {
  return (
    <div className="justify-center flex flex-row flex-wrap py-6 gap-14">
      <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
        <Image
          alt={"Imagem de  um docinho"}
          className="m-auto mt-4"
          height={180}
          src={"/images/card1.webp"}
          width={180}
        />
        <Image
          alt={"linha"}
          className="m-auto pt-6"
          height={1}
          src={"/images/linha.webp"}
          width={120}
        />
        <p className="font-inter text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]">
          Receitas Exclusivas e Sabores Irresistíveis
        </p>
      </div>
      <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
        <Image
          alt={"Imagem de  um docinho"}
          className="m-auto mt-4 rounded-full"
          height={180}
          src={"/images/card2.webp"}
          width={180}
        />
        <Image
          alt={"linha"}
          className="m-auto pt-6"
          height={1}
          src={"/images/linha.webp"}
          width={120}
        />
        <p className="font-inter text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]">
          Decoração Personalizada e Detalhes Sofisticados
        </p>
      </div>
      <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
        <Image
          alt={"Imagem de um velho sendo atendido"}
          className="m-auto mt-4"
          height={180}
          src={"/images/card3.webp"}
          width={180}
        />
        <Image
          alt={"linha"}
          className="m-auto pt-6"
          height={1}
          src={"/images/linha.webp"}
          width={120}
        />
        <p className="font-inter text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]">
          Atendimento Personalizado e Entrega Conveniente
        </p>
      </div>
      <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
        <Image
          alt={"Imagem de uma mulher"}
          className="m-auto mt-4"
          height={180}
          src={"/images/card4.webp"}
          width={180}
        />
        <Image
          alt={"linha"}
          className="m-auto pt-6"
          height={1}
          src={"/images/linha.webp"}
          width={120}
        />
        <p className="font-inter text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]">
          Ampla Variedade para Todos os Gostos
        </p>
      </div>
    </div>
  );
}
