import { Galleria } from "primereact/galleria";
import CarouselHome from "../components/Gallery";
import { BestSellersSection } from "../components/BestSellers";
const HomePage = () => {
    return ( 
        <>
            <CarouselHome />
            <BestSellersSection />
        </>
     );
}
 
export default HomePage;