import Image from "next/image";

import { IfoodButton } from "./buttons";

export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-start py-8 px-4">
      {/* Texto centralizado no topo */}
      <p className="text-white font-pattaya text-[clamp(1.6rem,5vw,3rem)] text-center leading-none mb-10">
        Conheça o <br />
        <span className="text-[#C79f30] text-[clamp(1.9rem,5vw,3.6rem)] leading-none">
          Ai que COXINHA!
        </span>
      </p>

      {/* Container dos cards */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 items-center">
        {/* Card 1 */}
        <div className="bg-white w-64 rounded-2xl text-center h-[28rem]">
          <Image
            alt="Imagem de um docinho"
            className="w-full rounded-tr-2xl rounded-tl-2xl"
            height={180}
            src="/images/coxinha1.webp"
            width={180}
          />
          <div className="m-5">
            <p className="font-inter text-[1rem] text-gray-800 m-2 text-center leading-none font-bold">
              Irresistível Coxinha{""}{" "}
              <span className="text-sm text-red-400">(140g)</span>
            </p>
            <p className="font-inter text-[0.9rem] text-gray-600 leading-none">
              Coxinha tradicional com massa leve de batata, frango desfiado
              temperado e farinha Panko para crocância.
            </p>
            <p className="font-inter text-[1.2rem] text-red-500 font-bold p-1">
              R$ 14,99
            </p>
            <IfoodButton />
          </div>
        </div>
        <div className="bg-white w-64 rounded-2xl text-center h-[28rem]">
          <Image
            alt="Imagem de um docinho"
            className="w-full rounded-tr-2xl rounded-tl-2xl"
            height={180}
            src="/images/coxinha2.webp"
            width={180}
          />
          <div className="m-5">
            <p className="font-inter text-[1rem] text-gray-800 m-2 text-center leading-none font-bold">
              Duas Metades
              <span className="text-sm text-red-400">(155g)</span>
            </p>
            <p className="font-inter text-[0.9rem] text-gray-600 leading-none">
              Massa de batata, recheio de frango, com uma cobertura generosa de
              requeijão catupiry, finalizado com o maçarico
            </p>
            <p className="font-inter text-[1.2rem] text-red-500 font-bold p-1">
              R$ 16,99
            </p>
            <IfoodButton />
          </div>
        </div>
        <div className="bg-white w-64 rounded-2xl text-center h-[28rem]">
          <Image
            alt="Imagem de um docinho"
            className="w-full rounded-tr-2xl rounded-tl-2xl"
            height={180}
            src="/images/strog-cam.webp"
            width={180}
          />
          <div className="m-5">
            <p className="font-inter text-[1rem] text-gray-800 m-2 text-center leading-none font-bold">
              Strogonoff de Frango
              <span className="text-sm text-red-400">(380g)</span>
            </p>
            <p className="font-inter text-[0.9rem] text-gray-600 leading-none">
              Estrogonofe de frango cremoso com arroz e bastante batata palha,
              sabor e praticidade.
            </p>
            <p className="font-inter text-[1.2rem] text-red-500 font-bold p-1">
              R$ 39,99
            </p>
            <IfoodButton />
          </div>
        </div>
        <div className="bg-white w-64 rounded-2xl text-center h-[28rem]">
          <Image
            alt="Imagem de um docinho"
            className="w-full rounded-tr-2xl rounded-tl-2xl"
            height={180}
            src="/images/croquete1.webp"
            width={180}
          />
          <div className="m-5">
            <p className="font-inter text-[1rem] text-gray-800 m-2 text-center leading-none font-bold">
              Croquete de camarão com cream cheese
              <span className="text-sm text-red-400">(165g)</span>
            </p>
            <p className="font-inter text-[0.9rem] text-gray-600 leading-none">
              croquetes feitos com massa de batata e recheados com e cream
              cheese cremoso.
            </p>
            <p className="font-inter text-[1.2rem] text-red-500 font-bold p-1">
              R$ 24,99
            </p>
            <IfoodButton />
          </div>
        </div>
      </div>
    </div>
  );
}
