import Image from "next/image";
import { FaMailBulk, FaPhone, FaClock } from "react-icons/fa";

import InstagramButton, {
  IfoodLink,
  WhatsAppButton,
} from "@/components/socialBtn";
import DefaultLayout from "@/layouts/default";

export default function contactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-10 text-center">
        <div>
          <p className="text-white font-inter font-bold md:text-5xl text-3xl mt-4 md:mt-4">
            Entre em contato !
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            alt="Imagem de Acacia"
            className="rounded-full m-auto"
            height={200}
            src="/perfil.webp"
            width={200}
          />
        </div>
        <div className="text-center m-auto flex flex-row gap-3 ">
          <WhatsAppButton />
          <InstagramButton />
          <IfoodLink />
        </div>
        <div className="flex flex-col m-auto text-center">
          <p className="text-sm flex gap-2 m-auto">
            <FaMailBulk /> acaciacakedesigner@gmail.com
          </p>
          <p className="text-sm flex gap-2 m-auto">
            <FaPhone /> (71) 99267-4314
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
