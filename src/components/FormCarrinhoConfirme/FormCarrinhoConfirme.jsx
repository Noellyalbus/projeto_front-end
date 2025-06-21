
import sapato from "../../../assets/sapato-carrinho.png";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import Button from "../Button/Button";


const FormCarrinhoConfirme = ({ onSubmit}) => {
    const { register, handleSubmit, reset } = useForm();
  

    const handleFinalSubmit = (data) => {
        onSubmit(data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(handleFinalSubmit)}>
            <div className="flex flex-col justify-center pt-5 lg:pt-8 px-8 lg:px-24 space-y-7 ">
                <div className="">
                    <h3 className="text-md font-bold">Finalizar Compra</h3>
                </div>

                <div className="flex flex-col lg:flex-row flex-1 gap-2">
                    <div className="flex flex-col gap-2 lg:w-3/4">
                        <div className="flex flex-col p-8 bg-white rounded-sm shadow lg:shadow-none">
                            <div className="flex flex-col space-y-5 pb-5">
                                <p className="text-sm text-dark-gray-2 font-bold">Informações Pessoais</p>
                                <hr className=" border-light-gray-2" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Nome Completo *</label>
                                    <Input type="text" placeholder="Insira seu nome" required {...register('nomeCompleto', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">CPF *</label>
                                    <Input type="text" placeholder="Insira seu CPF" required {...register('CPF', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">E-mail *</label>
                                    <Input type="email" placeholder="Insira seu email" required {...register('email', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Celular *</label>
                                    <Input type="text" placeholder="Insira seu celular" required {...register('celular', { required: true })} />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col p-8 bg-white rounded-sm shadow lg:shadow-none">
                            <div className="flex flex-col space-y-5 pb-5">
                                <p className="text-sm text-dark-gray-2 font-bold">Informações de Entrega</p>
                                <hr className=" border-light-gray-2" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Endereço *</label>
                                    <Input type="text" placeholder="Insira seu endereço" required  {...register('endereco', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Bairro *</label>
                                    <Input type="text" placeholder="Insira seu bairro" required {...register('bairro', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Cidade *</label>
                                    <Input type="text" placeholder="Insira sua cidade" required {...register('cidade', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">CEP *</label>
                                    <Input type="text" placeholder="Insira seu CEP" required {...register('cep', { required: true })} />
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Complemento</label>
                                    <Input type="text" placeholder="Insira complemento" required {...register('complemento', { required: true })} />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col p-8 bg-white rounded-sm shadow lg:shadow-none">
                            <div className="flex flex-col space-y-5 pb-5">
                                <p className="text-sm text-dark-gray-2 font-bold">Informações de Pagamento</p>
                                <hr className=" border-light-gray-2" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <h6 className="text-xs text-dark-gray-2 font-bold mb-4">Forma de Pagamento</h6>
                                    <div className="flex flex-col lg:flex-row gap-2">
                                        <Radio label="Cartão de Crédito" name='forma-de-pagamento' value='credito' defaultChecked={true} {...register('credito')}></Radio>
                                        <Radio label="Boleto Bancário" name='forma-de-pagamento' value='boleto'{...register('boleto')}></Radio>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-dark-gray-2 font-bold">Nome do Cartão *</label>
                                    <Input type="text" placeholder="Insira o nome do Cartão" required {...register('cartao', { required: true })} />
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2">
                                    <div className="flex-1" >
                                        <label className="text-xs text-dark-gray-2 font-bold">Data o Número do Cartão *</label>
                                        <Input type="date" placeholder="Insira a data do cartão" required {...register('cartaoData', { required: true })} />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-xs text-dark-gray-2 font-bold">Data de validade do Cartão *</label>
                                        <Input type="date" placeholder="Insira a validade do Cartão" required {...register('cartaoVencimento', { required: true })} />
                                    </div>
                                </div>
                                <div className="lg:w-2/4 ">
                                    <label className="text-xs text-dark-gray-2 font-bold">CVV *</label>
                                    <Input type="number" placeholder="CVV" required {...register('CVV', { required: true })} />
                                </div>
                            </div>

                        </div>
                        <div className=" hidden lg:block flex-col p-8 bg-white rounded-sm shadow lg:shadow-none">
                            <div className="flex flex-col space-y-5 pb-5">
                                <p className="text-sm text-dark-gray-2 font-bold">Finalizar Compra </p>
                                <hr className=" border-light-gray-2" />
                            </div>

                            <div className="flex flex-col gap-4 ">

                                <div className="text-end">
                                    <div className="flex flex-row justify-between">
                                        <span className="text-dark-gray text-lg font-bold">Total:</span>
                                        <span className="text-error font-bold text-lg">R$ 219,00</span>
                                    </div>
                                    <span className="text-light-gray  text-xs">ou 10x de R$ 21,00 sem juros</span>
                                </div>

                                <Button variant="tertiary" type='submit'>Realizar Pagamento</Button>


                            </div>

                        </div>
                    </div>

                    <div className=" flex-col p-8  h-max  bg-white rounded-sm shadow lg:shadow-none">
                        <div className="flex flex-col space-y-5 pb-5">
                            <p className="text-lg text-dark-gray-2 font-bold">Resumo</p>
                            <hr className=" border-light-gray-2" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center  space-x-5">
                                <div className="bg-soft-purple p-2 lg:p-5 h-max" >
                                    <img src={sapato} alt="" />
                                </div>
                                <span className="text-sm text-dark-gray font-bold ">
                                    Tênis Nike Revolution 6 Next Nature Masculino
                                </span>
                            </div>
                            <hr className=" border-light-gray-2" />
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-light-gray ">Subtotal:</span>
                                <span className="text-sm text-dark-gray ">R$ 219,00</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-light-gray ">Frete:</span>
                                <span className="text-sm text-dark-gray ">R$ 0,00</span>

                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-light-gray ">Desconto:</span>
                                <span className="text-sm text-dark-gray ">R$ 30,00</span>
                            </div>
                            <div className="flex flex-col gap-4">

                                <div className="text-end">
                                    <div className="flex flex-row justify-between">
                                        <span className="text-dark-gray text-lg font-bold">Total:</span>
                                        <span className="text-darkgray font-bold text-lg">R$ 219,00</span>
                                    </div>
                                    <span className="text-light-gray  text-xs">ou 10x de R$ 21,00 sem juros</span>
                                </div>

                                <Button variant="tertiary" type='submit'>Realizar Pagamento</Button>


                            </div>

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

                <Button variant="tertiary" type='submit'>Realizar Pagamento</Button>

            </div>

        </form>
    );
}

export default FormCarrinhoConfirme;