import Image from "next/image";

export const Images = () => {
  return (
    <div className="-mt-4 mb-1">
      <Image
        alt={"Imagem de uma linha dourada"}
        className="absolute left-0 -translate-y-1/2"
        height={80}
        src={"/linha-esquerda.webp"}
        width={80}
      />
      <Image
        alt={"Imagem de uma linha dourada"}
        className="absolute left-1/4 -translate-y-1/2"
        height={80}
        src={"/adereço-esquerdo.webp"}
        width={80}
      />
      <Image
        alt={"Imagem de uma linha dourada"}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        height={200}
        src={"/componente-central.png"}
        width={240}
      />
      <Image
        alt={"Imagem de uma linha dourada"}
        className="absolute right-1/4 -translate-x-1/2 -translate-y-1/2"
        height={80}
        src={"/adereço-direito.webp"}
        width={80}
      />
      <Image
        alt={"Imagem de uma linha dourada"}
        className="absolute right-0 -translate-y-1/2"
        height={80}
        src={"/linha-direita.webp"}
        width={80}
      />
    </div>
  );
}
