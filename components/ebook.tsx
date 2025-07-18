import Image from "next/image";

import { CakePage } from "./buttons";

export default function Ebook() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:text-center">
      <Image
        alt="Imagem ilustrativa de um ebook"
        className="w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px] object-cover"
        height={80}
        src="/images/ebook.webp"
        width={860}
      />

      <div className="flex flex-col gap-4 lg:text-start max-w-2xl text-center md:text-left">
        <p className="font-pattaya text-[clamp(1.6rem,5vw,3rem)] text-center text-[#C79f30] leading-none">
          Ei, psiu! <br /> Quer Aprender a Fazer Bolos Incríveis?
        </p>

        <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
          Ama confeitaria, mas se sente inseguro com receitas difíceis e
          resultados incertos? Quer fazer bolos incríveis e doces irresistíveis?
          Seu sonho está prestes a se realizar com o nosso Ebook
          <b className="text-yellow-300 font-semibold">
            {" "}
            &#34;Bolos Profissionais&#34;
          </b>
          , O guia essencial para transformar iniciantes em confeiteiros de
          verdade, mesmo sem nenhuma experiência!
        </p>
        <CakePage />
      </div>
    </div>
  );
}
