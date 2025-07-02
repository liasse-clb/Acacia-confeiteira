import { Button } from "@heroui/button";

import { ArrowIcon } from "./icons";

import { siteConfig } from "@/config/site";

export default function FazerPedido() {
  return (
    <div>
      <Button className="bg-[#C79F30] flex flex-row text-1xl">
        <a href={siteConfig.links.whatsapp}>Fazer um pedido</a>
        <ArrowIcon />
      </Button>
    </div>
  );
}