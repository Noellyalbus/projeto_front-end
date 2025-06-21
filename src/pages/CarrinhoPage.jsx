
import { useNavigate } from "react-router-dom";
import FormCarrinho from "../components/FormCarrinho/FormCarrinho";

const CarrinhoPage = () => {
  const navigate = useNavigate();
   async function Submit(dados){
        console.log(dados);
        navigate('/carrinho/confirme');
    }
  return (
  <>
  
  <FormCarrinho onSubmit={Submit} />
  </>
  );
}

export default CarrinhoPage;