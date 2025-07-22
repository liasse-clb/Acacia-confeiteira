import Image from "next/image";
import { Button } from "@heroui/button";

import { VerCard2 } from "./buttons";

import { siteConfig } from "@/config/site";

export default function Cakes() {
  return (
    <div>
      <p className="font-pattaya text-[clamp(2.4rem,7vw,3.5rem)] text-[#C79f30] mb-8 leading-none text-center">
        Conheça Nossos Bolos
      </p>

      {/* Bolo 1 */}
      <div className="flex flex-col md:flex-row items-start gap-16 pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-[400px]">
          <Image
            alt="Imagem de um bolo"
            height={100}
            src="/images/cake1.webp"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-[30rem] flex flex-col gap-4 text-center md:text-left">
          <p className="font-pattaya text-[#C79f30] text-[clamp(2rem,7vw,3.5rem)]">
            Jardim Festivo
          </p>
          <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
            Delicadeza e sabor se unem em nosso{" "}
            <span className="font-pattaya text-[#4867FF] text-lg sm:text-xl md:text-2xl">
              Jardim Festivo.
            </span>{" "}
            <br />
            Este bolo de aniversário exibe uma textura convidativa de rosetas em
            branco, cuidadosamente decorado com um laço azul royal que contrasta
            harmoniosamente. Uma escolha versátil e deliciosa para aniversários
            e ocasiões que pedem um toque de leveza e sofisticação.
          </p>
          <Button
            className="font-pattaya border-[#e9cece] text-2xl text-[#C79f30] p-4 mt-4 w-52 mx-auto md:mx-0"
            variant="bordered"
            onClick={() =>
              window.open(
                siteConfig.links.whatsapp2,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Pedir Agora!
          </Button>
        </div>
      </div>

      {/* Bolo 2 */}
      <div className="flex flex-col md:flex-row items-start gap-16 pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-[400px]">
          <Image
            alt="Imagem de um bolo"
            height={100}
            src="/images/cake2.webp"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-[30rem] flex flex-col gap-4 text-center md:text-left">
          <p className="font-pattaya text-[#C79f30] text-[clamp(2rem,7vw,3.5rem)]">
            Céu Gradiente
          </p>
          <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
            Deixe-se encantar pela beleza artística do nosso{" "}
            <span className="font-pattaya text-[#62BEFF] text-lg sm:text-xl md:text-2xl">
              Aurora Azul.
            </span>{" "}
            <br />
            Com uma cobertura em chantilly que simula um magnífico céu em
            degradê, do branco puro ao azul profundo, este bolo é uma verdadeira
            obra de arte. Delicados toques de folhas de ouro comestíveis
            adicionam um brilho sutil e luxuoso, enquanto as gipsofilas no topo
            trazem um frescor campestre.
          </p>
          <Button
            className="font-pattaya border-[#e9cece] text-2xl text-[#C79f30] p-4 mt-4 w-52 mx-auto md:mx-0"
            variant="bordered"
            onClick={() =>
              window.open(
                siteConfig.links.whatsapp3,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Pedir Agora!
          </Button>
        </div>
      </div>

      {/* Bolo 3 */}
      <div className="flex flex-col md:flex-row items-start gap-16 pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-[400px]">
          <Image
            alt="Imagem de um bolo"
            height={100}
            src="/images/cake3.webp"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-[30rem] flex flex-col gap-4 text-center md:text-left">
          <p className="font-pattaya text-[#C79f30] text-[clamp(2rem,7vw,3.5rem)]">
            Sonho Rosa
          </p>
          <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
            Celebre com o charme e a alegria do{" "}
            <span className="font-pattaya text-[#F28686] text-lg sm:text-xl md:text-2xl">
              Sonho Rosa!
            </span>{" "}
            <br />
            Com seu vibrante acabamento em chantilly cor-de-rosa e uma textura
            única que adiciona movimento e elegância, este bolo é uma festa para
            os olhos. Delicadas flores que parecem desabrochar enfeitam as
            laterais e o topo, criando um cenário de pura beleza.
          </p>
          <Button
            className="font-pattaya border-[#e9cece] text-2xl text-[#C79f30] p-4 mt-4 w-52 mx-auto md:mx-0"
            variant="bordered"
            onClick={() =>
              window.open(
                siteConfig.links.whatsapp4,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Pedir Agora!
          </Button>
        </div>
      </div>

      {/* Rodapé */}
      <div className="justify-items-center">
        <p className="font-inter text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mt-12 mb-6">
          Quer mais opções? Ou algo personalizado ? <br /> Descubra a nossa
          coleção completa de bolos e doces no cardápio!
        </p>
        <VerCard2 />
      </div>
    </div>
  );
}
