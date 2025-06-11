import { Button } from "../components/Button";

function ProductListing() {
  return (
    <>
      <div className="flex flex-col gap-4 px-10 py-2  md:py-30  md:px-22">


        <div>
          <span className="text-dark-gray font-bold uppercase">Meu Carrinho</span>

          <br />
          <div className=" border-y-1 border-light-gray-2 ">
            <div className="flex flex-row justify-between py-2 gap-4">


              <div className="bg-soft-purple p-2 md:p-5 h-max" ><img src="../../assets/sapato-carrinho.png" alt="" /></div>
              <div className="space-y-2 md:space-y-0">
                <div>
                  <span className="font-bold text-sm">Tênis Nike Revolution 6 Next
                    Nature Masculino</span>
                </div>

                <div className="flex flex-col gap-1 ">
                  <div>
                    <span className="text-light-gray">Cor:</span> <span>Vermelho / Branco</span>
                  </div>
                  <div>
                    <span className="text-light-gray">Tamanho:</span> <span> 42 </span>

                  </div>

                </div>
              </div>
            </div>
            <div>
              <span className="text-dark-gray uppercase text-sm">quantidade</span>
              <div className="flex flex-col items-center">
                <button>1</button>
                <span className="text-dark-gray-2 underline text-xs">Remover item</span>
              </div>

            </div>

            <div className="flex flex-row justify-between">
              <span className="text-dark-gray uppercase text-sm">Unitário</span>
              <div className="space-x-2">
                <span className="text-light-gray-2 line-through text-xs">R$ 219,00</span>
                <span className="text-dark-gray-2 font-bold text-base">R$ 219,00</span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-dark-gray uppercase">Total</span>
              <div className="space-x-2">
                <span className="text-light-gray-2 line-through text-xs">R$ 219,00</span>
                <span className="text-dark-gray-2 font-bold text-base">R$ 219,00</span>
              </div>
            </div>
          </div>

        </div>
        <div>

          <div>
            <span className="text-xs font-bold text-dark-gray-2">Cupom de desconto</span>
            <div className="flex flex-col gap-2">

              <input placeholder="Insira seu código" />

              <div>

                <button className="btn-secondary">OK</button>
              </div>
            </div>

          </div>
          <div>
            <span className="text-xs font-bold text-dark-gray-2">Calcular frete</span>
            <div className="flex flex-col gap-2">

              <input placeholder="Insira seu CEP" />

              <div>

                <button className="btn-secondary">OK</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListing;
