import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export default function InstagramButton() {
  return (
    <button
      className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
      onClick={() => window.open(siteConfig.links.instagram, "_blank")}
    >
      <FaInstagram className="text-white text-3xl" />
    </button>
  );
}

export function WhatsAppButton() {
  return (
    <button
      className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition"
      onClick={() =>
        window.open(siteConfig.links.whatsapp, "_blank", "noopener,noreferrer")
      }
    >
      <FaWhatsapp className="text-white text-3xl" />
    </button>
  );
}

export function IfoodLink() {
  return (
    <button
      className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff001b] to-red-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
      onClick={() => window.open(siteConfig.links.ifood, "_blank")}
    >
      <Image
        alt="Logo do iFood"
        className="object-cover"
        height={44}
        src="/images/ifood.webp"
        width={44}
      />
    </button>
  );
}
