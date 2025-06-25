import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import "primeicons/primeicons.css";
import Button from "./Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-dark-gray-3 bg-opacity-60 z-[50] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <header className="bg-white fixed w-full top-0 left-0 z-[60] shadow-sm">
        <div className=" mx-auto my-5 px-5 max-w-[75rem]">
          {/* Primeira linha (logo e ações) */}
          <div className="flex items-center sm:justify-between h-[60px]">
            {/* Botão menu mobile */}
            <div className="lg:hidden">
              <button
                className="text-gray-700 text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                <i className="pi pi-bars"></i>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center mx-auto lg:mx-0 lg:mr-8 scale-75 lg:scale-100">
              <Logo location="header" />
            </div>

            {/* Campo de busca desktop */}
            <div className="hidden lg:flex relative w-full h-[3rem] max-w-lg">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full bg-gray-100 p-3 border-none rounded-md outline-offset-2 focus:outline-primary focus:ring-primary transition-colors duration-250"
              />
              <i className="pi pi-search text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Ícones e botões à direita */}
            <div className="flex items-center gap-4">
              {/* Botão busca mobile */}
              <div className="lg:hidden">
                <button
                  className={`transition-colors duration-300 ${
                    isSearchOpen ? "text-pink-600" : "text-gray-400"
                    }`}
                  onClick={() => setIsSearchOpen(prev => !prev)}
                >
                  <i className="pi pi-search cursor-pointer"></i>
                </button>
              </div>

              {/* Botões login e cadastro desktop */}
              <div className="hidden lg:flex gap-4 px-8">
                <NavLink
                  to="/cadastro"
                  className="underline text-gray-700 font-normal px-3 py-2 hover:text-pink-600 transition-colors duration-300"
                >
                  Cadastre-se
                </NavLink>
                <button
                  to="/login"
                  className="btn-primary px-3 py-2 w-[114px]"
                >
                  Entrar
                </button>
              </div>

              {/* Carrinho */}
           
                <div className="relative  mr-5 " >
                  <div className="cursor-pointer" onClick={() => setIsCarrinhoOpen(!isCarrinhoOpen)}>
                    <i className="pi pi-shopping-cart text-xl text-gray-700 hover:text-pink-600 transition-colors duration-300"></i>
                    <div className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      2
                    </div>
                  </div>
                  {isCarrinhoOpen &&
                    <div className={`absolute right-4 bg-white shadown shadow-sm px-8 py-6 z-50 w-77 hidden=${true}`}>
                      <>
                      
                      <div className=" border-b-1 pb-2 border-light-gray-2">

                        <span className="text-md text-dark-gray-2 font-bold mb-2">Meu Carrinho</span>
                      </div>

                      <div className="flex flex-row  py-2 gap-4">
                        <div className="bg-soft-purple p-2 lg:p-5 h-max" >
                          <img src="../../assets/sapato-carrinho.png" alt="" />
                        </div>
                        <div className="space-y-2 lg:space-y-0">
                          <div>
                            <span className="font-bold text-sm">Tênis Nike Revolution 6 Next
                              Nature Masculino</span>
                          </div>

                          <div className="flex flex-row items-center space-x-2">
                            <span className="text-dark-gray-2 font-bold text-base">R$ 219,00</span>
                            <span className="text-light-gray-2 line-through text-xs">R$ 219,00</span>
                          </div>
                        </div>

                      </div>
                      <div className="flex flex-row  py-2 gap-4">
                        <div className="bg-soft-purple p-2 lg:p-5 h-max" >
                          <img src="../../assets/sapato-carrinho.png" alt="" />
                        </div>
                        <div className="space-y-2 lg:space-y-0">
                          <div>
                            <span className="font-bold text-sm">Tênis Nike Revolution 6 Next
                              Nature Masculino</span>
                          </div>

                          <div className="flex flex-row items-center space-x-2">
                            <span className="text-dark-gray-2 font-bold text-base">R$ 219,00</span>
                            <span className="text-light-gray-2 line-through text-xs">R$ 219,00</span>
                          </div>
                        </div>

                      </div>
                      <div className="border-b-1 mb-5 border-light-gray-2" />
                      <div className="space-y-4 ">
                        <div className="flex justify-between">
                          <span className="text-md font-bold text-dark-gray">Total: </span>
                          <span className="text-md text-error font-bold">R$ 199,90</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <a className="text-dark-gray-2 text-sm underline" >Esvaziar</a>

                          <Button className={' px-2 '} onClick={() => setIsCarrinhoOpen(false)} ><NavLink to={'/carrinho'}><span className="text-sm text-light-3 font-bold">Ver Carrinho</span></NavLink></Button>
                        </div>
                      </div>

                        </>
                    </div>


                  }


                </div>

          
            </div>
          </div>

          {/* Campo de busca mobile */}
          {isSearchOpen && (
            <div className="lg:hidden pb-3">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full p-3 bg-gray-100 rounded-md focus:outline-pink-600"
              />
            </div>
          )}

          {/* Menu mobile */}
          <div
            className={`fixed left-0 h-[calc(100vh-60px)] w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } lg:hidden`}
          >
            <div className="p-6 space-y-6 h-full flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-800">Páginas</h2>
                <nav>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-pink-600 transition-colors text-base"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/produtos"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-pink-600 transition-colors text-base"
                      >
                        Produtos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/categories"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-pink-600 transition-colors text-base"
                      >
                        Categorias
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/orders"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-pink-600 transition-colors text-base"
                      >
                        Meus Pedidos
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  to="/login"
                  className="btn-primary px-4 py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar
                </button>
                <NavLink
                  to="/register"
                  className="underline text-gray-700 hover:text-pink-600 font-normal text-center transition-colors duration-300 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cadastre-se
                </NavLink>
              </div>
            </div>
          </div>

          {/* Menu horizontal desktop*/}
          <nav className="hidden lg:flex z-10">
            <div className="container mx-auto">
              <ul className="flex overflow-x-auto whitespace-nowrap gap-8 py-3">
                <li>
                  <NavLink
                    to="/"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/produtos"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Produtos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Categorias
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/orders"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Meus Pedidos
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
