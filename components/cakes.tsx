import Image from "next/image";
import { Button } from "@heroui/button";

import { siteConfig } from "@/config/site";
import { pattaya } from "@/pages/_app";

export default function Cakes() {
  return (
    <div>
      <p
        className={`${pattaya.className} text-[clamp(2.4rem,7vw,3.5rem)] text-[#C79f30] mb-8 leading-none text-center`}
      >
        Conheça Nossos Bolos
      </p>

      <div className="flex flex-col md:flex-row items-start gap-16 pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-[400px]">
          <Image
            alt="Imagem de um bolo"
            height={100}
            src="/cake1.webp"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-[30rem] flex flex-col gap-4">
          <p
            className={`${pattaya.className} text-[#C79f30] text-[clamp(2rem,7vw,3.5rem)]`}
          >
            Jardim Festivo
          </p>
          <p className="text-[clamp(1rem,7vw,3.5rem) text-white">
            Delicadeza e sabor se unem em nosso{" "}
            <span
              className={`${pattaya.className} text-[#4867FF] text-[clamp(8rem,7vw,3.5rem)`}
            >
              Jardim Festivo.
            </span>{" "}
            <br />
            Este bolo de aniversário exibe uma textura convidativa de rosetas em
            branco, cuidadosamente decorado com um laço azul royal que contrasta
            harmoniosamente. Uma escolha versátil e deliciosa para aniversários
            e ocasiões que pedem um toque de leveza e sofisticação.
          </p>
          <Button
            className={`${pattaya.className} border-[#e9cece] text-2xl text-[#C79f30] p-4 mt-4 w-52`}
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
      <div className="flex flex-col md:flex-row items-start gap-16 pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-[400px]">
          <Image
            alt="Imagem de um bolo"
            height={100}
            src="/cake2.webp"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-[30rem] flex flex-col gap-4">
          <p className={`${pattaya.className} text-[#C79f30] text-4xl`}>
            Jardim Festivo
          </p>
          <p className="text-2xl">
            Delicadeza e sabor se unem em nosso{" "}
            <span className={`${pattaya.className} text-[#4867FF] text-2xl`}>
              Jardim Festivo.
            </span>{" "}
            <br />
            Este bolo de aniversário exibe uma textura convidativa de rosetas em
            branco, cuidadosamente decorado com um laço azul royal que contrasta
            harmoniosamente. Uma escolha versátil e deliciosa para aniversários
            e ocasiões que pedem um toque de leveza e sofisticação.
          </p>
          <Button
            className={`${pattaya.className} border-[#e9cece] text-2xl text-[#C79f30] p-4 mt-4 w-52`}
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
      <div className="flex flex-col md:flex-row items-start gap-16 pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-[400px]">
          <Image
            alt="Imagem de um bolo"
            height={100}
            src="/cake3.webp"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 max-w-[30rem] flex flex-col gap-4">
          <p className={`${pattaya.className} text-[#C79f30] text-4xl`}>
            Jardim Festivo
          </p>
          <p className="text-2xl">
            Delicadeza e sabor se unem em nosso{" "}
            <span className={`${pattaya.className} text-[#4867FF] text-2xl`}>
              Jardim Festivo.
            </span>{" "}
            <br />
            Este bolo de aniversário exibe uma textura convidativa de rosetas em
            branco, cuidadosamente decorado com um laço azul royal que contrasta
            harmoniosamente. Uma escolha versátil e deliciosa para aniversários
            e ocasiões que pedem um toque de leveza e sofisticação.
          </p>
          <Button
            className={`${pattaya.className} border-[#e9cece] text-2xl text-[#C79f30] p-4 mt-4 w-52`}
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
    </div>
  );
}
