import Image from "next/image";

import { cardo, inter, pattaya } from "./_app";

import Carousel from "@/components/carousel";
import DefaultLayout from "@/layouts/default";
import FazerPedido, { Pedir } from "@/components/buttons";
import { VerCard } from "@/components/buttons";
import Cards from "@/components/cards";
import Cakes from "@/components/cakes";
import TestimonialList from "@/components/TestimonialList";
import InstagramButton, { WhatsAppButton } from "@/components/socialBtn";
import Carrossel from "@/components/pedir";
import Ebook from "@/components/ebook";

export default function IndexPage() {
  const images = [
    "/slide1.webp",
    "/slide2.webp",
    "/slide3.webp",
    "/slide4.webp",
    "/slide5.webp",
    "/slide6.webp",
    "/slide7.webp",
  ];

  const testimonials = [
    {
      comment:
        "Já sou cliente de carteirinha rsrs, você tem mão cheia no que faz parabéns!!",
      name: "Pedro Inácio",
    },
    {
      comment:
        "Simplesmente o melhor bolo que já comi na vida! Macio, delicioso e super bem decorado.",
      name: "Juliana Oliveira",
    },
    {
      comment:
        "As coxinhas e bolo ficaram ótimos no aniersário da minha filha, você arrassa!!",
      name: "Gabriela Aquino",
    },
    {
      comment: "Sabor incrível e nada enjoativo. Todo mundo elogiou!",
      name: "Larissa Carvalho",
    },
    {
      comment: "Quando vi o bolo, achei que era uma obra de arte.",
      name: "Vinicius Dantes",
    },
    {
      comment:
        "Chegou pontualmente e em perfeitas condições. Super profissional",
      name: "Karmen Leite",
    },
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20 py-6 md:py-12 px-4">
        {/* Texto e botão */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-col items-start text-left space-y-4 max-w-md">
            <span
              className={`${pattaya.className} text-[clamp(4rem,8vw,14rem)] text-white leading-tight -mb-12`}
            >
              Acácia&apos;S
            </span>
            <span
              className={`${pattaya.className} text-[clamp(4rem,8vw,14rem)] text-[#FFAC04] leading-tight`}
            >
              Bakery
            </span>
            <span
              className={`${cardo.className} text-[clamp(1rem,2.5vw,1.5rem)] text-white italic leading-tight`}
            >
              “Onde a arte da confeitaria <br /> encontra o requinte do sabor.”
            </span>
            <div className="pt-2">
              <FazerPedido />
            </div>
            <div className="flex flex-row gap-3">
              <InstagramButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            alt="Hero section, imagem principal"
            className="w-120 sm:w-72 md:w-[500px] h-auto"
            height={600}
            src="/bolo-central.webp"
            width={600}
          />
        </div>
      </section>

      {/* Carrossel + Texto */}
      <section className="w-full bg-[#1A1A2E] px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 max-w-7xl mx-auto">
          <div className="flex justify-center w-full md:w-1/2">
            <div className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              <Carousel images={images} />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-start md:text-left px-2">
            <p
              className={`${pattaya.className} text-[clamp(1.6rem,5vw,3rem)] text-[#C79f30] mb-4 leading-none`}
            >
              Procurando o bolo perfeito que impressione seus convidados?
            </p>
            <p
              className={`${inter.className} text-[clamp(1.2rem,2.5vw,1.6rem)] text-white leading-none`}
            >
              Obras de arte comestíveis que encantam o paladar e a alma.
            </p>
            <br />
            <p
              className={`${inter.className} text-[clamp(1.2rem,2.5vw,1.6rem)] text-white mb-8 leading-none`}
            >
              Todos feitos com ingredientes selecionados e de 1° qualidade.
            </p>
            <VerCard />
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-10">
        <div>
          <Cards />
        </div>
      </section>
      <section className="w-full px-4 py-10 m-auto">
        <Cakes />
      </section>
      <section className="w-full px-4 py-10 m-auto justify-center flex flex-row flex-wrap">
        <div>
          <p
            className={`${pattaya.className} text-[clamp(2.2rem,5vw,3rem)] text-center text-[#C79f30] mb-4 leading-none`}
          >
            Veja os nossos relatos!
          </p>
        </div>
        <div className="flex flex-row gap-8 flex-wrap justify-center">
          <TestimonialList testimonials={testimonials} />
        </div>
      </section>
      <section className="w-full px-4 py-3 gap-6 m-auto justify-center flex flex-col">
        <Carrossel />
        <p
          className={`${pattaya.className} text-[clamp(1.6rem,5vw,3rem)] text-center text-[#C79f30] leading-none`}
        >
          Fale Conosco Para Um Orçamento Personalizado!
        </p>
        <Pedir />
      </section>
      <section className="w-full px-4 py-10 m-auto">
        <Ebook />
      </section>
    </DefaultLayout>
  );
}
