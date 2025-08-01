import Image from "next/image";

import { BackButton } from "@/components/buttons";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-0 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center gap-9">
          <p className="text-center text-3xl mb-4 font-bold text-white font-inter">
            Sobre Mim
          </p>
          <div className="w-full max-w-md relative aspect-[3/4] mx-auto">
            <Image
              fill
              alt="Imagem de Acácia"
              className="rounded-lg object-cover"
              src="/images/Acacia.webp"
            />
          </div>

          <p className=" text-center md:text-lg text-medium text-white font-inter leading-none p-3 my-6">
            Sobre Acácia Brandão Oi! Eu sou a Acácia Brandão, tenho 27 anos e
            sou apaixonada por empreender desde novinha. Comecei minha jornada
            com 15 anos, quando tive minhas primeiras experiências abrindo duas
            lojinhas de roupas. Elas acabaram não dando certo, mas cada etapa
            foi um grande aprendizado que me ajudou a crescer muito como pessoa
            e profissional. Me formei em Técnico de Logística aos 21 anos e, ao
            longo do tempo, fui descobrindo minha verdadeira paixão: a
            confeitaria! Aos 26, concluí minha formação como Confeiteira e Cake
            Designer, e foi aí que tudo começou a fazer ainda mais sentido pra
            mim. No início deste mês, dei mais um passo importante e lancei meu
            delivery com muito carinho: o Ai que Coxinha. É um projeto que
            nasceu com amor e fé, trazendo receitas caseiras, massas artesanais
            e aquele toque especial que só quem ama o que faz consegue colocar.
            Sou cristã, estudante de Teologia, e acredito que tudo que vivi até
            aqui teve um propósito. Cada etapa – mesmo os desafios – me trouxe
            até esse momento. E sigo sonhando, aprendendo e colocando Deus à
            frente de tudo.
          </p>
          <BackButton />
        </div>
      </section>
    </DefaultLayout>
  );
}
