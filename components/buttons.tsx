import { Button } from "@heroui/button";
import Image from "next/image";

import { ArrowIcon } from "./icons";

import { siteConfig } from "@/config/site";

export default function FazerPedido() {
  return (
    <div>
      <Button
        className="bg-[#C79F30] flex items-center gap-2 text-xl font-inter m-auto md:m-0 px-4 py-2 text-white"
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
        className="font-pattaya border-[#e9cece] text-2xl text-[#C79f30] p-6 max-w-64"
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
        className="font-pattaya bg-[#C79F30] flex items-center gap-2 text-xl p-6 text-white"
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
        className="font-pattaya bg-[#C79F30] flex items-center m-auto text-xl p-4 text-white"
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

export function CakePage() {
  return (
    <div className="m-auto">
      <Button
        className="font-pattaya text-white w-52 p-6 text-2xl"
        color="primary"
        variant="shadow"
        onClick={() =>
          window.open(
            siteConfig.links.whatsapp,
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        Saiba Mais
      </Button>
    </div>
  );
}

export function IfoodButton() {
  return (
    <Button
      className="bg-[#ff001b] m-auto justify-center font-semibold px-4 py-2 rounded-lg flex items-center gap-3"
      variant="solid"
      onClick={() =>
        window.open(siteConfig.links.ifood, "_blank", "noopener,noreferrer")
      }
    >
      <Image
        alt="Logo do iFood"
        className="object-cover"
        height={44}
        src="/images/ifood.webp"
        width={54}
      />
    </Button>
  );
}
