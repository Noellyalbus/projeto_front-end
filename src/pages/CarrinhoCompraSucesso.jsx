import { NavLink, useNavigate } from 'react-router-dom';
import Party from '../../assets/party.png';
import Button from '../components/Button/Button';
import sapato from "../../assets/sapato-carrinho.png";


const CarrinhoCompraSucesso = () => {
    const navigate = useNavigate();
    return (

        <div className=' flex flex-col justify-center  pt-5 lg:pt-8 px-8 lg:px-24 '>
            <div className="flex flex-col p-8 bg-white">
                <div className='flex flex-col items-center p-8 lg:px-20 lg:py-10 gap-5'>
                    <img src={Party} alt="Compra realizada com sucesso" />
                    <h3 className="text-4xl font-bold text-center">Compra realizada com sucesso!</h3>
                </div>
                <hr className=" border-light-gray-2" />
                <div className='flex flex-col p-4  gap-0.5'>
                    <p className='text-md text-dark-gray-2 font-bold mb-2'>Informações Pessoas</p>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Nome:</span><span className='text-sm text-dark-gray'>Francisco Antonio Pereira</span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >CPF:</span><span className='text-sm text-dark-gray'>12345675-12</span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Email:</span><span className='text-sm text-dark-gray'>francisco@gmail.com</span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Celular:</span><span className='text-sm text-dark-gray'>(85) 5555-5555</span>
                    </div>

                </div>

                <hr className=" border-light-gray-2" />
                <div className='flex flex-col p-4  gap-0.5'>
                    <p className='text-md text-dark-gray-2 font-bold mb-2'>Informações de Entrega</p>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Endereço:</span><span className='text-sm text-dark-gray'>Rua joao Pessoa, 333</span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Bairro:</span><span className='text-sm text-dark-gray'>Centro</span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Cidade:</span><span className='text-sm text-dark-gray'>Fortaleza,Ceará </span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >CEP:</span><span className='text-sm text-dark-gray'>433-8800</span>
                    </div>

                </div>

                <hr className=" border-light-gray-2" />
                <div className='flex flex-col p-4  gap-0.5'>
                    <p className='text-md text-dark-gray-2 font-bold mb-2'>Informações de Pagamento</p>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Títular do Cartão:</span><span className='text-sm text-dark-gray uppercase'>Francisco a p</span>
                    </div>
                    <div>
                        <span className='text-sm text-light-gray mr-2 ' >Final:</span><span className='text-sm text-dark-gray'>**********2020</span>
                    </div>
                </div>
                <hr className=" border-light-gray-2" />
                <div className='p-4'>
                    <p className='text-md text-dark-gray-2 font-bold mb-2'>Resumo da compra</p>

                    <div className="flex items-center  space-x-5">
                        <div className="bg-soft-purple p-2 lg:p-5 h-max" >
                            <img className='w-16' src={sapato} alt="" />
                        </div>
                        <span className="text-sm text-dark-gray font-bold ">
                            Tênis Nike Revolution 6 Next Nature Masculino
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 pt-2">

                        <div className=" flex flex-col p-5 bg-amber-50  item-end text-end">
                            <div className="flex flex-row justify-between">
                                <span className="text-dark-gray text-2xl font-bold">Total:</span>
                                <span className="text-darkgray font-bold text-2xl">R$ 219,00</span>
                            </div>
                            <span className="text-light-gray  text-xs">ou 10x de R$ 21,00 sem juros</span>
                        </div>
                        <div className='flex items-center justify-center  text-dark-gray-2 '>
                            <NavLink className='underline hover:text-primary' to={'#'}>Imprimir Recibo</NavLink>
                        </div>




                    </div>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center p-8 mt-5'>

                <Button variant="tertiary" type='button ' onClick={() => navigate('/')}>Voltar para Home</Button>
            </div>
        </div>
    );
}

export default CarrinhoCompraSucesso;