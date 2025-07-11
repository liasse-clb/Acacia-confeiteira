import { Button } from "@heroui/button";

import { ArrowIcon } from "./icons";

import { siteConfig } from "@/config/site";
import { pattaya } from "@/pages/_app";

export default function FazerPedido() {
  return (
    <div>
      <Button
        className="bg-[#C79F30] flex items-center gap-2 text-xl m-auto px-4 py-2 text-white"
        onClick={() =>
          window.open(
            siteConfig.links.whatsapp,
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        Fazer pedido
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
        onClick={() => (window.location.href = "/bolos")}
      >
        Ver Cardápio Completo
      </Button>
    </div>
  );
}

export function VerCard2() {
  return (
    <div>
      <Button
        className={`${pattaya.className} bg-[#C79F30] flex items-center gap-2 text-xl p-6 text-white`}
        variant="shadow"
        onClick={() => (window.location.href = "/bolos")}
      >
        Veja o Cardápio Completo
      </Button>
    </div>
  );
}

export function Pedir() {
  return (
    <div>
      <Button
        className={`${pattaya.className} bg-[#C79F30] flex items-center m-auto text-xl p-4 text-white`}
        onClick={() =>
          window.open(
            siteConfig.links.whatsapp,
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        Pedir Orçamento
        <ArrowIcon />
      </Button>
    </div>
  );
}
