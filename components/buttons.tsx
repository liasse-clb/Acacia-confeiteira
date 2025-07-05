/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";

import { ArrowIcon } from "./icons";

import { siteConfig } from "@/config/site";
import { pattaya } from "@/pages/_app";

export default function FazerPedido() {
  return (
    <div>
      <Button asChild className="bg-[#C79F30] flex flex-row text-1xl m-auto">
        <a
          href={siteConfig.links.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
        >
          Fazer um pedido
        </a>
        <ArrowIcon />
      </Button>
    </div>
  );
}

export function VerCard() {
  return (
    <div>
      <Button
        className={`${pattaya.className} border-[#e9cece] text-2xl text-[#C79f30] p-4`}
        variant="bordered"
      >
        <a href="/bolos">Ver Cardápio Completo</a>
      </Button>
    </div>
  );
}
