import Section from "../components/Section";
import CarouselHome from "../components/Gallery";
import BestSellersSection from "../components/BestSellers";

const HomePage = () => {
  return (
    <main>
        <CarouselHome />
      {/*Seções futuras */}
      
      <Section>
        <BestSellersSection />
      </Section> 
     
    </main>
  );
};

export default HomePage;
