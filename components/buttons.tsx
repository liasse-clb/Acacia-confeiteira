import { Button } from "@heroui/button";

import { ArrowIcon } from "./icons";

import { siteConfig } from "@/config/site";
import { pattaya } from "@/pages/_app";

export default function FazerPedido() {
  return (
    <div>
      <Button className="bg-[#C79F30] flex items-center gap-2 text-xl m-auto px-4 py-2 text-white">
        <a
          href={siteConfig.links.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
        >
          Fazer um pedido <ArrowIcon />
        </a>
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
