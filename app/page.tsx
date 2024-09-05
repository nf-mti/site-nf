// import Image from "next/image";
import SlideCard from "@/components/SlideCard";
import Pastores from "@/components/Pastores";
import Footer from "@/components/footer";
import Header from "@components/Header";
import Banner from "@components/Banner";

export default function Home() {
  const campus = [
    {
      name: "Núcleo da Fé - Bandeirantes",
      description: "SIBS QD 2 AE 02, Núcleo Bandeirantes - DF",
      image: "https://unsplash.it/300/200",
      link: "https://maps.app.goo.gl/34HvhyHPFqWwTXSR9",
    },
    {
      name: "Núcleo da Fé - Noroeste",
      description: "EQNW 706/707 LOTE A, Noroeste - DF",
      image: "https://unsplash.it/300/200",
      link: "https://maps.app.goo.gl/qCDNFaaeCYsxPfa78",
    },
    {
      name: "Núcleo da Fé - Planaltina",
      description: "Setor de Oficinas, Conjunto D, Lote 1, Planaltina - DF",
      image: "https://unsplash.it/300/200",
      link: "https://maps.app.goo.gl/57RP6ZtK7MgwukK97",
    },
    {
      name: "Núcleo da Fé - Gama",
      description: "St. Sul Q 5 CL 5 - Gama - DF",
      image: "https://unsplash.it/300/200",
      link: "https://maps.app.goo.gl/Qw9H5JEQG7GCNQfJ6",
    },
    {
      name: "Núcleo da Fé - Samambaia",
      description: "QN 412, Conj. D, Lt. 2, Loja 2, Samambaia Norte - DF",
      image: "https://unsplash.it/300/200",
      link: "https://maps.app.goo.gl/JFXVpayBzvy2Loc47",
    },
    {
      name: "Núcleo da Fé - Jardim Ingá",
      description: "Acampamento Núcleo da Fé, Jardim Ingá - GO",
      image: "https://unsplash.it/300/200",
      link: "https://maps.app.goo.gl/dV1p6UPdFhR6va9Y6",
    },
  ];

  const novidades = [
    {
      name: "Festa Country",
      description: "Venha participar da nossa festa country",
      image: "https://unsplash.it/300/300",
      link: "https://www.instagram.com",
    },
    {
      name: "A Pedra de Ajuda",
      description: "Assista a nossa live",
      image: "https://unsplash.it/300/300",
      link: "https://www.instagram.com",
    },
    {
      name: "Culto das Águas Batismo",
      description: "Saiba mais",
      image: "https://unsplash.it/300/300",
      link: "https://www.instagram.com",
    },
    {
      name: "Exemplos dos Pais Bíblicos",
      description: "Assista a nossa live",
      image: "https://unsplash.it/300/300",
      link: "https://www.instagram.com",
    },
    {
      name: "Algum outro evento",
      description: "Descrição do evento",
      image: "https://unsplash.it/300/300",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between font-body bg-write">
      <section className="bg-nf1-fundo w-full ">
        <Header />
      </section>
      <section className="w-full px-4 bg-nf1-fundo text-nf1-branco">
        <Banner />
      </section>


      <section id="visita" className="w-full px-4 py-2  bg-nf1-fundo text-nf1-branco">
        <h1 className="font-bold font-title text-3xl sm:pl-16 pl-5">Nos faça uma visita</h1>
        <p className="italic font-title uppercase sm:pl-16 pl-5">
          Encontre a nossa igreja perto de você
        </p>
        <SlideCard dados={campus} />
      </section>

      <section id="novidade" className="w-full px-4 py-2 bg-nf1-fundo text-nf1-branco mt-1 ">
        <h1 className="text-3xl sm:pl-16 font-title">
          As últimas novidades <br />{" "}
          <span className="font-bold">no Núcleo da Fé</span>
        </h1>
        <SlideCard dados={novidades} />
      </section>
      <section id="Pastores" className="w-full px-4 py-2  bg-nf1-fundo  text-nf1-branco mt-1 mb-1 ">
        <Pastores />
      </section>
      <section className="w-full px-4 py-2  bg-nf1-fundo text-nf1-branco ">
        <Footer/>
      </section>
    </main>
  );
}
