import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";

import { cardo, pattaya } from "./_app";

import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import FazerPedido from "@/components/buttons";
export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Inverter a ordem no mobile/tablet com flex-col-reverse */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 py-6 md:py-12 px-4">
        {/* Texto e botão */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="max-w-xl w-full flex flex-col items-start justify-center text-left">
            <span
              className={`${pattaya.className} text-5xl sm:text-6xl md:text-8xl text-white`}
            >
              Acácia&apos;S
            </span>
            <span
              className={`${pattaya.className} text-5xl sm:text-6xl md:text-8xl text-[#FFAC04] leading-tight -mt-4 sm:-mt-6 md:-mt-4`}
            >
              Bakery
            </span>
            <br />
            <span
              className={`${cardo.className} text-lg sm:text-xl md:text-2xl text-white italic leading-tight -mt-4 sm:-mt-6 md:-mt-8`}
            >
              “Onde a arte da confeitaria <br /> encontra o requinte do sabor.”
            </span>
            <div className="mt-4 sm:mt-6 md:mt-8">
              <FazerPedido />
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 -mt-20">
          <Image
            alt="Logo do site"
            className="w-48 sm:w-64 md:w-[500px] h-auto max-w-full"
            height={500}
            src="/bolo-central.png"
            width={500}
          />
        </div>
      </section>


    </DefaultLayout>
  );
}
