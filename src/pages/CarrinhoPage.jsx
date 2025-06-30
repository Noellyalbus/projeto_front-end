import products from "../components/data/products";
import { useNavigate } from "react-router-dom";
import FormCarrinho from "../components/FormCarrinho/FormCarrinho";
import Section from "../components/Section";
import ProductListing from "../components/ProdutoListing";

const CarrinhoPage = () => {
  const navigate = useNavigate();
   async function Submit(dados){
        console.log(dados);
        navigate('/carrinho/confirme');
    }
  return (
  <>
  
  <FormCarrinho onSubmit={Submit} />

        <Section
        title={"Produtos relacionados"}
        sectionMb={3}
        link={{text:"Ver todos", href:"/produtos"}}
      >
        <ProductListing data={products.items} cols={[12,6,4,3]} numProducts={3} />
      </Section>
  </>
  );
}

export default CarrinhoPage;