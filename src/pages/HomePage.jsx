import Section from "../components/Section";
import CarouselHome from "../components/Gallery";
import BestSellersSection from "../components/BestSellers";

const HomePage = () => {
  return (
    <main className="bg-light-gray-3">
      <Section>
        <CarouselHome />
      </Section>

      {/*Seções futuras */}
      
      <Section>
        <BestSellersSection />
      </Section> 
     
    </main>
  );
};

export default HomePage;
