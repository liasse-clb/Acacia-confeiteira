import Image from "next/image";
import { BackButton } from "@/components/buttons";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center gap-9">
          <p>Sobre Mim</p>
          <Image
            alt="Imagem de acacia"
            src="/images/Acacia.webp"
            width={200}
            height={400}
            className="m-auto rounded-lg max-w-96 object-cover"
          />
          <BackButton />
        </div>
      </section>
    </DefaultLayout>
  );
}
