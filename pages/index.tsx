import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";

import { pattaya } from "./_app";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="">
        <Image
          alt={"Imagem de uma linha dourada"}
          className="absolute left-0 -translate-y-1/2"
          height={60}
          src={"/linha-esquerda.webp"}
          width={60}
        />
        <section className="flex flex-col items-center justify-center gap-4 md:py-10 ">
          <div className="max-w-xl text-start justify-center flex flex-col">
            <span className={`${pattaya.className} text-8xl text-white`}>
              Acácia&apos;S
            </span>
            <span
              className={`${pattaya.className} text-8xl text-[#FFAC04]  leading-tight -mt-8`}
            >
              Bakery
            </span>
            <br />
            <span style={{}}>
              websites regardless of your design experience.
            </span>
            <div className={`${pattaya.className} text-5xl text-white`}>
              Beautiful, fast and modern React UI library.
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>

          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Get started by editing{" "}
                <Code color="primary">pages/index.tsx</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
