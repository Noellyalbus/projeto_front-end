import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { useState } from "react";


const FormCarrinho = ({onSubmit}) => {
    
      const { register, handleSubmit, reset } = useForm();
        const [number, setNumber] = useState(1);
    
        const handleFinalSubmit = (data) => {
            onSubmit(data);
            reset();
        };
    return (<>


        <form onSubmit={handleSubmit(handleFinalSubmit)} >
            <div className="flex flex-col lg:flex-row justify-center max-w-[75rem] mx-auto p-3 h-full  pt-12 lg:pt-20">
                <div className="flex flex-col gap-4 lg:gap-0 px-8 lg:px-2 w-20rem lg:w-3/4">


                    <div className="flex flex-col lg:py-5 py-8 px-8 h-full bg-white shadow lg:shadow-none rounded-sm lg:rounded-none">
                        <div className="flex flex-row justify-between px-0 lg:px-2">
                            <span className="text-dark-gray font-bold uppercase">Meu Carrinho</span>

                            <div className="hidden flex-row justify-end  space-x-32  lg:block">
                                <span className="text-dark-gray  text-sm uppercase ">Quantidade</span>
                                <span className="text-dark-gray  text-sm uppercase">unitário</span>
                                <span className="text-dark-gray text-sm uppercase">total</span>
                            </div>
                        </div>

                        <br />
                        <div className=" border-y-1 border-light-gray-2 p-2 ">

                            <div className="flex flex-col lg:flex-row justify-between">
                                <div className="flex flex-row  py-2 gap-4">
                                    <div className="bg-soft-purple p-2 lg:p-5 h-max" >
                                        <img src="../../assets/sapato-carrinho.png" alt="" />
                                    </div>
                                    <div className="space-y-2 lg:space-y-0">
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

                                <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 lg:space-x-20 ">


                                    <div>
                                        <span className="block text-dark-gray uppercase text-sm lg:hidden">quantidade</span>
                                        <div className="flex flex-col items-center lg:w-20">
                                            <div className="flex flex-row items-center space-x-2">

                                            <button  type="button" className=" rounded-sm p-0.5 cursor-pointer hover:text-white hover:bg-gray-400" onClick={()=> number > 1 && setNumber(number - 1)} ><MinusIcon size={16} /></button>
                                            <input type="number" className="w-10 p-0.5 text-end" min={0} max={99} readOnly defaultValue={1} value={number}/>
                                            <button type="button" className=" rounded-sm p-0.5 cursor-pointer hover:text-white hover:bg-gray-400" onClick={()=> number < 99 && setNumber(number + 1)}><PlusIcon size={16} /></button>

                                            </div>
                                            <span className="text-dark-gray-2 underline text-xs">Remover item</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <span className="block text-dark-gray uppercase text-sm lg:hidden">Unitário</span>
                                        <div className="flex flex-row lg:flex-col items-center space-x-2 lg:w-20">
                                            <span className="text-light-gray-2 line-through text-xs">R$ 219,00</span>
                                            <span className="text-dark-gray-2 font-bold text-base">R$ 219,00</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <span className="block text-dark-gray uppercase lg:hidden">Total</span>
                                        <div className="flex flex-row lg:flex-col items-center space-x-2 lg:w-20">
                                            <span className="text-light-gray-2 line-through text-xs">R$ 219,00</span>
                                            <span className=" text-dark-gray-2 font-bold text-base">R$ 219,00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>

                    </div>



                    <div className="flex  flex-col lg:flex-row gap-4 lg:gap-0  lg:bg-white   ">
                        <div className="flex flex-col lg:flex-row   lg:py-5 p-8 gap-2.5 bg-white shadow lg:shadow-none rounded-sm lg:rounded-none">
                            <div className="flex flex-col">
                                <label htmlFor="codigo" className="text-xs text-dark-gray-2 font-bold cursor-text">Cupom de desconto</label>
                                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 lg:space-x-2">

                                    <Input id='codigo' className='h-14 ' type="text" placeholder="Insira seu código"{...register('codigo') }/>
                                    <Button variant="secondary" type='button' onClick={(e)=> console.log('Insira codigo')} className='h-14 lg:w-28'   > <span className="text-sm font-bold">OK</span></Button>
                                </div>
                            </div>
                        </div>



                        <div className="lg:py-5 p-8 gap-2.5 bg-white shadow lg:shadow-none rounded-sm lg:rounded-none">
                            <div className="flex flex-col">
                                <label htmlFor="codigo-cep" className="text-xs text-dark-gray-2 font-bold cursor-text">Calcular frete</label>
                                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 lg:space-x-2">
                                    <Input id='codigo-cep' className='h-14  ' type="text" placeholder="Insira seu CEP" {...register('cep') } />
                                    <Button variant="secondary" type='button' onClick={()=> console.log('Calcular Frete')
                                    } className='h-14 lg:w-28'   > <span className="text-sm font-bold">OK</span></Button>

                                </div>
                            </div>





                        </div>

                    </div>


                </div>



                <div className="flex  flex-col p-8 lg:p-0  gap-2.5   lg:w-1/4">
                    <div className="flex  flex-col p-8 gap-2.5  bg-white shadow  lg:shadow-none rounded-sm lg:rounded-none">

                        <span className="text-dark-gray-2 border-b-1 border-light-gray-2 pb-2 font-bold uppercase">Resumo</span>
                        <br />
                        <div className="flex flex-col gap-3  ">
                            <div className="flex flex-row justify-between">
                                <span className="text-light-gray  text-sm">Subtotal</span>
                                <span className="text-dark-gray-2 font-bold text-base">R$ 219,00</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <span className="text-light-gray   text-sm">Frete</span>
                                <span className="text-dark-gray-2 font-bold text-base">R$ 0,00</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <span className="text-light-gray   text-sm">Desconto</span>
                                <span className="text-dark-gray-2 font-bold text-base">R$ 30,00</span>
                            </div>
                            <div className="text-end">
                                <div className="flex flex-row justify-between">
                                    <span className="text-dark-gray text-lg font-bold">Total:</span>
                                    <span className="text-error font-bold text-lg">R$ 219,00</span>
                                </div>
                                <span className="text-light-gray  text-xs">ou 10x de R$ 21,00 sem juros</span>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <Button variant="tertiary" type='submit'>Continuar</Button>

                        </div>
                    </div>


                </div>







            </div>
            <div className="sticky bottom-0 left-0 w-full z-50 lg:hidden bg-white  p-4">
                <div className="text-end">
                    <div className="flex flex-row justify-between">
                        <span className="text-dark-gray text-lg font-bold">Total:</span>
                        <span className="text-error font-bold text-lg">R$ 219,00</span>
                    </div>
                    <span className="text-light-gray  text-xs">ou 10x de R$ 21,00 sem juros</span>
                </div>

                <Button variant="tertiary" type='submit'>Continuar</Button>

            </div>


        </form>




    </>);
}

export default FormCarrinho;