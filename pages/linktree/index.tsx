import Image from "next/image";
import {
  FaHamburger,
  FaInstagram,
  FaInternetExplorer,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "@heroui/button";

import { pattaya } from "../_app";

import { siteConfig } from "@/config/site";
import Particles from "@/components/particles";

export default function Linktree() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-zinc-950 z-0 overflow-x-hidden" />
      <div className="absolute inset-0 z-0">
        <Particles
          alphaParticles={false}
          disableRotation={false}
          moveParticlesOnHover={true}
          particleBaseSize={100}
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-md w-full text-center px-4 py-10 text-white">
        {/* Foto de perfil */}
        <div className="flex justify-center mb-4">
          <Image
            alt="Perfil"
            className="rounded-full border-4 border-[#F54C7A]"
            height={200}
            src="/perfil.webp"
            width={200}
          />
        </div>

        {/* Nome e email */}
        <h1 className={`${pattaya.className} text-3xl mb-2 text-white`}>
          Acácia Brandão
        </h1>
        <p className="text-gray-300 mb-6 font-inter">
          acaciacakedesigner@gmail.com
        </p>

        {/* Botões */}
        <div className="space-y-4 flex flex-col items-center">
          <Button
            className="font-inter w-64 flex items-center justify-center gap-2 text-md p-6 text-white bg-neutral-600/20 backdrop-blur-sm"
            onClick={() =>
              window.open(
                siteConfig.links.whatsapp,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <FaWhatsapp className="text-xl" />
            <span className={`${pattaya.className}`}>WhatsApp</span>
          </Button>
          <Button
            className="font-inter w-64 flex items-center justify-center gap-2 text-md p-6 text-white bg-neutral-600/20 backdrop-blur-sm"
            onClick={() =>
              window.open(
                siteConfig.links.ifood,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <FaHamburger className="text-xl" />{" "}
            <span className={`${pattaya.className}`}>Ifood</span>{" "}
            <span className={`${pattaya.className} text-yellow-500`}>
              AI QUE COXINHA !
            </span>
          </Button>
          <Button
            className="font-inter w-64 flex items-center bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 justify-center gap-2 text-md p-6 text-white bg-neutral-600/20 backdrop-blur-sm"
            onClick={() =>
              window.open(
                siteConfig.links.instagramcox,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <FaInstagram className="text-xl" />
            <span className={`${pattaya.className}`}>AI QUE COXINHA !</span>
          </Button>
          <Button
            className="font-inter w-64 flex items-center bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 justify-center gap-2 text-md p-6 text-white bg-neutral-600/20 backdrop-blur-sm"
            onClick={() =>
              window.open(
                siteConfig.links.instagram,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <FaInstagram className="text-xl" />
            <span className={`${pattaya.className}`}>Cake Designer</span>
          </Button>
          <Button
            className="font-inter w-64 flex items-center bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 justify-center gap-2 text-md p-6 text-white bg-neutral-600/20 backdrop-blur-sm"
            onClick={() =>
              window.open(
                siteConfig.links.instagrampessoal,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <FaInstagram className="text-xl" />
            <span className={`${pattaya.className}`}>Meu Insta &lt;3</span>
          </Button>
          <Button
            className="font-inter w-64 flex items-center justify-center gap-2 text-md p-6 text-white bg-neutral-600/20 backdrop-blur-sm"
            onClick={() => window.open("/")}
          >
            <FaInternetExplorer className="text-xl" />
            <span className={`${pattaya.className}`}>Website</span>
          </Button>
        </div>

        {/* Rodapé */}
        <footer className="mt-10 text-sm font-inter text-gray-400">
          Com ❤️ Acácia Confeiteira
        </footer>
      </div>
    </div>
  );
}
