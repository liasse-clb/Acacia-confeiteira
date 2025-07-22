import Image from "next/image";

import InstagramButton, { IfoodLink, WhatsAppButton } from "./socialBtn";

export default function AcaciaSession() {
  return (
    <div className="m-auto flex flex-row flex-wrap justify-center max-[380px] gap-12">
      <div className="w-full max-w-[500px] px-1">
        <Image
          alt="Imagem de Acacia confeiteira"
          className="w-full rounded-2xl"
          height={200}
          src="/images/Acacia.webp"
          width={500}
        />
      </div>
      <div className="flex flex-col">
        <p className="font-pattaya text-[#C79f30] text-[clamp(2rem,7vw,3.5rem)] leading-none md:text-start text-center">
          Conheça Acácia:{" "}
        </p>
        <p className="font-pattaya text-[#ff6b6b] text-[clamp(1rem,7vw,2.5rem)] leading-1 md:text-start text-center">
          A mestra da culinária
        </p>
        <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-[38ch] md:text-start text-center">
          Formada em Confeitaria & Cake Design possuo talento e capricho para a
          cozinha. Faço obras de arte em forma de bolo, transformo simples em
          experiências saborosas marcantes. Aqui existe compromentimento pela
          perfeição, pela estética e pelos sabores únicos, mas principalmente,
          prezo pela sua satisfação, quero que você se sinta satisfeito com a
          melhor coxinha ou com o melhor bolo de Salvador, seja o que for!
        </p>
        <p className="font-inter text-large mt-2 font-black text-[#ff6b6b] md:text-start text-center">
          Entre em contato Já !
        </p>
        <div className="flex flex-row gap-4 mt-4 md:mx-0 m-auto">
          <WhatsAppButton />
          <InstagramButton />
          <IfoodLink />
        </div>
      </div>
    </div>
  );
}
