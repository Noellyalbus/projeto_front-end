import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    return (

        <>

            <main
                className="
                min-h-screen 
                w-full 
                flex  
                justify-center 
                items-center 
                px-4 
                overflow-x-hidden 
                bg-gradient-to-b 
                from-[#b5b6f2] 
                via-[#b5b6f2] 
                to-[#E2E3FF]
                "
            >

                <div className="
                max-w-[75rem] 
                w-full 
                grid 
                grid-cols-1 
                lg:grid-cols-2
                gap-6 
                itens-start">


                    <div className="
                    flex 
                    justify-center
                    items-center
                    lg:justify-start
                    lg:items-start
                    md:mt-24">


                        <form className=" 
                        w-full
                        md:min-w-[580px]
                        max-w-[720px] 
                        h-auto  
                        p-6 flex 
                        flex-col 
                        justify-start 
                        space-y-8
                      bg-white
                        rounded shadow-lg
                       "
                        >

                            <div className="space-y-3">

                                {/* Formulário */}
                                <div className="
                                text-2xl
                                lg:text-3xl 
                                font-bold 
                                tracking-[1px] 
                                flex
                                justify-center
                                lg:justify-start">
                                    Acesse sua conta
                                </div>


                                <div className="
                                text-md
                                lg:text-base 
                                text-dark-gray-2 
                                tracking-[0.75px] 
                                font-normal
                                flex
                                justify-center
                                lg:justify-start
                                space-x-1
                                items-center">
                                    <span>
                                        Novo cliente? Então registre-se{' '}
                                    </span>

                                    <Link
                                        to="/register"
                                        className="
                                    underline 
                                    text-3xl !important                                  
                                    text-dark-gray-2 
                                    tracking-[0.75px] 
                                    font-normal
                                    ">
                                        aqui.
                                    </Link>
                                </div>
                            </div>


                            <div className="flex flex-col gap-1.5 space-y-3">

                                <div className="flex flex-col ">
                                    <label
                                        htmlFor="email"
                                        className="
                                        text-xs 
                                        text-dark-gray-2 
                                        font-bold 
                                        cursor-text">
                                        Login *
                                    </label>
                                </div>


                                <Input
                                    label="Email*"
                                    id="email"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Insira seu login ou email"
                                    type="email"


                                />
                                <label
                                    htmlFor="password"
                                    className="
                                    text-xs 
                                    text-dark-gray-2 
                                    font-bold 
                                    cursor-text">
                                    Senha *
                                </label>

                                <Input
                                    label="password*"
                                    id="password"
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Insira sua senha"
                                    type="password"

                                />


                            </div>


                            <div className="
                            text-sm 
                            text-dark-gray-2
                            tracking-[0.25px] 
                            font-medium 
                            underline 
                            hover:text-pink-600 
                            transition-colors 
                            duration-300">

                                <Link
                                    to={'/404'}>
                                    Esqueci minha senha
                                </Link>
                            </div>


                            <Button
                                className={"px-[55px] py-2 flex"}
                                variant="primary"
                                type="submit">
                                Acessar Conta
                            </Button>



                            <div className="
                            self-center 
                            text-sm 
                            text-dark-gray-2 
                            tracking-[0.75px] 
                            flex 
                            flex-col
                            lg:flex-row
                            gap-5 
                            items-center">

                                <span>
                                    Ou faça login com
                                </span>

                                <div className="
                                flex
                                space-x-5">
                                    {/* Icones de login */}
                                    <Link to={'/404'}>
                                        <img
                                            src="./gmail.png"
                                            alt="Gmail"
                                            className="w-5 h-5 hover:scale-130 transition-transform" />
                                    </Link>


                                    <Link to={'/404'}>
                                        <img
                                            src="./facebook.png"
                                            alt="Facebook"
                                            className="w-5 h-5 hover:scale-130 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>


                    {/* Imagens */}
                    <div className="
                    relative 
                    hidden 
                    lg:flex 
                    justify-center 
                    items-start 
                    col-span-1 
                    ">


                        <div className="
                        relative 
                        w-full 
                        max-w-[700px] 
                        h-auto 
                        flex 
                        items-start 
                        overflow-visible">


                            <div className="relative mt-10 min-w-[300px] max-w-[50%]">
                                <img
                                    src="./shoesE.png"
                                    alt="ShoesE"
                                    className="min-w-[360px] max-w-full h-auto object-contain" />
                            </div>


                            <div className="relative -ml-2 mt-66">
                                <img
                                    src="./shoesD.png"
                                    alt="ShoesD"
                                    className="min-w-[400px] max-w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}

export default LoginPage;