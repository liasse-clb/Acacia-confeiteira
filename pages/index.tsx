import Image from "next/image";
import { FaMotorcycle } from "react-icons/fa";
import { motion } from "framer-motion";

import Carousel from "@/components/carousel";
import DefaultLayout from "@/layouts/default";
import FazerPedido, { Pedir } from "@/components/buttons";
import { VerCard } from "@/components/buttons";
import Cards from "@/components/cards";
import Cakes from "@/components/cakes";
import TestimonialList from "@/components/TestimonialList";
import InstagramButton, {
  IfoodLink,
  WhatsAppButton,
} from "@/components/socialBtn";
import Carrossel from "@/components/pedir";
import Ebook from "@/components/ebook";
import AcaciaSession from "@/components/acacia";

export default function IndexPage() {
  const images = [
    "/images/cake1.webp",
    "/images/cake2.webp",
    "/images/cake3.webp",
    "/images/cake4.webp",
    "/images/cake5.webp",
    "/images/cake6.webp",
    "/images/cake7.webp",
    "/images/cake8.webp",
    "/images/cake9.webp",
    "/images/cake10.webp",
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
        "As coxinhas e bolo ficaram ótimos no aniversário da minha filha, você arrassa!!",
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
      <section>
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20 py-3 md:py-6 px-4">
          {/* Texto e botão */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 flex justify-center md:text-left text-center"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col text-left space-y-4 max-w-md">
              <span className="font-pattaya text-[clamp(4rem,8vw,14rem)] text-center md:text-left text-white leading-tight -mb-12">
                Acácia&apos;S
              </span>
              <span className="font-pattaya text-[clamp(4rem,8vw,14rem)] text-center md:text-left text-[#FFAC04] leading-tight">
                Bakery{" "}
              </span>
              <span className="font-cardo text-[clamp(1rem,2.5vw,1.5rem)] text-center md:text-left text-white italic leading-tight">
                “Onde a arte da confeitaria
                <br />
                encontra o requinte do sabor.”
              </span>
              <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                <FaMotorcycle className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFAC04]" />
                <span className="text-sm md:text-base font-inter">
                  Entregas para Salvador e região
                </span>
              </div>
              <div className="pt-1 md:m-0 m-auto">
                <FazerPedido />
              </div>
              <div className="flex flex-row gap-3 md:m-0 m-auto">
                <InstagramButton />
                <WhatsAppButton />
                <IfoodLink />
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 flex justify-center mb-0 md:mb-6"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              alt="Hero section, imagem principal"
              className="w-120 sm:w-72 md:w-[550px] h-auto"
              height={600}
              src="/images/bolo-central.webp"
              width={820}
            />
          </motion.div>
        </section>

        <section className="w-full bg-[#1A1A2E] px-4 py- md:mt-40 mt-10">
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-10 md:gap-16 lg:gap-24 max-w-7xl mx-auto">
            <div className="flex justify-center w-full md:w-5/6">
              <div className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[450px] lg:max-w-[450px]">
                <Carousel images={images} />
              </div>
            </div>

            <div className="w-full md:w-3/4 text-center md:text-left px-2">
              <p className="font-pattaya text-[clamp(1.6rem,5vw,3.3rem)] text-[#C79f30] mb-4 leading-none">
                Procurando o bolo perfeito que impressione seus convidados?
              </p>
              <p className="font-inter text-[clamp(1.2rem,2.5vw,1.6rem)] text-white leading-none">
                Obras de arte comestíveis que encantam o paladar e a alma.
              </p>
              <br />
              <p className="font-inter text-[clamp(1.2rem,2.5vw,1.6rem)] text-white mb-8 leading-none">
                Todos feitos com ingredientes selecionados e de 1° qualidade.
              </p>
              <VerCard />
            </div>
          </div>
        </section>

        <section className="w-full m-auto md:mt-14 mt-8">
          <Cakes />
        </section>

        <section className="w-full px-4 py-3 gap-6 m-auto justify-center flex flex-col">
          <Carrossel />
          <p className="font-pattaya text-[clamp(1.6rem,5vw,3rem)] text-center text-[#C79f30] leading-none">
            Fale Conosco Para Um Orçamento Personalizado!
          </p>
          <Pedir />
        </section>

        <section className="w-full px-4 py-10 m-auto justify-center flex flex-col flex-wrap">
          <div>
            <p className="font-pattaya text-[clamp(2.2rem,5vw,3rem)] text-center text-[#C79f30] mb-4 leading-none">
              Veja os nossos relatos!
            </p>
          </div>
          <br />
          <div className="flex gap-8 flex-wrap justify-center">
            <TestimonialList testimonials={testimonials} />
          </div>
        </section>
        <section className="w-full px-4 py-10">
          <Cards />
        </section>
        <section className="w-full px-4 py-10 m-auto">
          <Ebook />
        </section>
        <section className="w-full px-4 py-10">
          <AcaciaSession />
        </section>
      </section>
    </DefaultLayout>
  );
}
