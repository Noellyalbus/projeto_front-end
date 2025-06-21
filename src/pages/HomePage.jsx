import Section from "../components/Section";
import CarouselHome from "../components/Gallery";
import BestSellersSection from "../components/BestSellers";
import CategoryListing from "../components/CategoryListing";
import ProductListing from "../components/ProdutoListing";
import products from "../components/data/products";
import SpecialOfferCard from "../components/SpecialOffer";

const HomePage = () => {
  const ofertaDestaque ={
      image: "/oferta-air-jordan.png",
      title: "Oferta exclusiva",
      subtitle: "Air Jordan edição limitada",
      description: "Tênis Jordan amarelo com detalhes pretos com 35% de desconto só por hoje!",
      link: "/produto/9",
      label: "Ver oferta",
  };

  return (
    <main>
      <CarouselHome />

      {/*Seção de coleções em destaque */}
      <Section 
        title={"Coleções em destaque"} 
        titleAlign="left"
        sectionMb={4}
        sectionMt={4}
      >
        <BestSellersSection />
      </Section> 

      {/* Seção de Categorias em destaque */}
      <Section 
        title={"Categorias em destaque"} 
        titleAlign="center"
      >
        <CategoryListing />
      </Section>

      {/* Seção de produtos em alta */}
      <Section
        title={"Produtos em alta"}
        sectionMb={3}
        link={{text:"Ver todos", href:"/produtos"}}
      >
        <ProductListing data={products.items} cols={[12,6,4,3]} numProducts={8} />
      </Section>
       
      {/* Oferta em Destaque */}
      <Section sectionMt={6} sectionMb={6}>
        <SpecialOfferCard data={ofertaDestaque} />
      </Section>
    </main>
  );
};

export default HomePage;
