import Image from "next/image";

import { pattaya } from "@/pages/_app";

export default function Ebook() {
  return (
    <div className="m-auto justify-center flex flex-col">
      <Image
        alt="Imagem ilustrativa de um ebook"
        className="m-auto"
        height={80}
        src={"/ebook.webp"}
        width={600}
      />
      <p
        className={`${pattaya.className} text-[clamp(1.6rem,5vw,3rem)] text-center text-[#C79f30] leading-none`}
      >
        Ei, psiu! <br /> Quer Aprender a Fazer Bolos Incríveis?
      </p>
    </div>
  );
}
