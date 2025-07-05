/* eslint-disable prettier/prettier */
import Image from "next/image";

import { inter } from "@/pages/_app";

export default function Cards() {
    return (
        <div className="justify-center flex flex-row flex-wrap py-6 gap-14">
            <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
                <Image
                    alt={"Imagem de  um docinho"}
                    className="m-auto mt-4"
                    height={180}
                    src={"/card1.png"}
                    width={180}
                />
                <Image
                    alt={"linha"}
                    className="m-auto pt-6"
                    height={1}
                    src={"/linha.png"}
                    width={120} />
                <p
                    className={`${inter.className} text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]`}
                >
                    Receitas Exclusivas e Sabores Irresistíveis
                </p>
            </div>
            <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
                <Image
                    alt={"Imagem de  um docinho"}
                    className="m-auto mt-4"
                    height={180}
                    src={"/card2.png"}
                    width={180}
                />
                <Image
                    alt={"linha"}
                    className="m-auto pt-6"
                    height={1}
                    src={"/linha.png"}
                    width={120} />
                <p
                    className={`${inter.className} text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]`}
                >
                    Decoração Personalizada e Detalhes Sofisticados
                </p>
            </div>
            <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
                <Image
                    alt={"Imagem de um velho sendo atendido"}
                    className="m-auto mt-4"
                    height={180}
                    src={"/card3.png"}
                    width={180}
                />
                <Image
                    alt={"linha"}
                    className="m-auto pt-6"
                    height={1}
                    src={"/linha.png"}
                    width={120} />
                <p
                    className={`${inter.className} text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]`}
                >
                    Atendimento Personalizado e Entrega Conveniente
                </p>
            </div>
            <div className="bg-[#EAE7E2] max-w-64 rounded-2xl text-center p-4">
                <Image
                    alt={"Imagem de uma mulher"}
                    className="m-auto mt-4"
                    height={180}
                    src={"/card4.png"}
                    width={180}
                />
                <Image
                    alt={"linha"}
                    className="m-auto pt-6"
                    height={1}
                    src={"/linha.png"}
                    width={120} />
                <p
                    className={`${inter.className} text-[clamp(1.3rem,2.5vw,1.6rem)] mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r mt-6 font-bold from-[#C79f30] to-[#FFAC04]`}
                >
                    Ampla Variedade para Todos os Gostos
                </p>
            </div>
        </div>
    );
}
