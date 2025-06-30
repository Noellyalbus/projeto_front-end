import { useNavigate } from "react-router-dom";
import FormCarrinhoConfirme from "../components/FormCarrinhoConfirme/FormCarrinhoConfirme"


const CarrinhoCompraConfirme = () => {

const navigate = useNavigate();
   async function Submit(dados){
        console.log(dados);
         navigate('/carrinho/confirme/sucesso');
    }
    return (
      
       <FormCarrinhoConfirme onSubmit={Submit} />
    )

}
export default CarrinhoCompraConfirme;