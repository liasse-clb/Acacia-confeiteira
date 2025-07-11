import { FaClock, FaMailBulk, FaPhone } from "react-icons/fa";
import Image from "next/image";

import { Head } from "./head";

import InstagramButton, { WhatsAppButton } from "@/components/socialBtn";
import { Navbar } from "@/components/navbar";
import { pattaya } from "@/pages/_app";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="w-full flex-grow pt-16 px-6 bg-[#1A1A2E]">
        {children}
      </main>
      <footer className="bg-[#0D1117] text-gray-300 px-6 py-10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="m-auto">
            <Image
              alt="Logo do site"
              height={70}
              src={"/logo-cake.webp"}
              width={150}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Redes</h3>
            <div className="flex flex-row gap-2">
              <InstagramButton />
              <WhatsAppButton />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <p className="text-sm flex gap-2">
              <FaMailBulk /> contato@seudominio.com
            </p>
            <p className="text-sm flex gap-2">
              <FaPhone /> (71) 99267-4314
            </p>
            <p className="text-sm flex gap-2">
              <FaClock /> Seg a Sex: 7h - 18h
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links úteis
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:text-white transition" href="/policies">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/terms">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Acácia Confeiteira. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
