import FormCarrinhoConfirme from "../components/FormCarrinhoConfirme/FormCarrinhoConfirme"


const CarrinhoCompraConfirme = () => {


   async function Submit(dados){
        console.log(dados);
    }
    return (
       <FormCarrinhoConfirme onSubmit={Submit} />
    )

}
export default CarrinhoCompraConfirme;