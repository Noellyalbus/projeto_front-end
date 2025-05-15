import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="p-3 shadow-2">
      <div className="flex align-items-center justify-content-between flex-wrap">
        {/* Botão menu hambúrguer (mobile) */}
        <div className="lg:hidden">
          <Button
            icon="pi pi-bars"
            text
            severity="secondary"
            onClick={() => setIsMenuOpen(prev => !prev)}
          />
        </div>

        {/* Logo */}
        <div className="flex align-items-center mx-2 lg:py-3">
          <Logo location="header" />
        </div>

        {/* Campo de busca (desktop) */}
        <div className="hidden lg:flex align-items-center relative" style={{ width: '559px', height: '60px' }}>
          <InputText
            placeholder="Pesquisar produto..."
            className="w-full h-full pr-5 bg-light-gray-3"
            style={{
              borderRadius: '8px',
              paddingRight: '2.5rem', // espaço pro ícone
              height: '100%',
            }}
          />
          <i
            className="pi pi-search"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#888' // ou uma cor secundária
            }}
          />
        </div>


        {/* Ações à direita */}
        <div className="flex align-items-center gap-3 pr-2">
          {/* Botão busca (mobile) */}
          <div className="lg:hidden">
            <Button
              icon="pi pi-search"
              text
              severity={isSearchOpen ? "danger" : "secondary"}
              onClick={() => setIsSearchOpen(prev => !prev)}
            />
          </div>

          {/* Cadastre-se + Entrar (desktop) */}
          <div className="hidden lg:flex align-items-center gap-6">
            <NavLink
              to="/cadastro"
              className="text-dark-gray-3 font-normal underline hover:underline"
            >
              Cadastre-se
            </NavLink>
            <NavLink to="/login">
              <Button
                label="Entrar"
                className="font-bold text-white"
                style={{ background: "#c62f65", border: "none" }}
              />
            </NavLink>
          </div>


          {/* Carrinho */}
          <div className="relative cursor-pointer">
            <img
              src="../../assets/mini-cart.svg"
              alt="Carrinho"
              width={24}
              height={24}
            />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 border-circle">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Campo de busca (mobile) */}
      {isSearchOpen && (
        <div className="mt-2 lg:hidden">
          <InputText
            placeholder="Pesquisar produto..."
            className="w-full"
            style={{ padding: "10px", backgroundColor: "#f5f5f5", border: "none", borderRadius: "6px" }}
          />
        </div>
      )}

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="mt-3 lg:hidden">
          <h2 className="text-dark font-semibold mb-2">Páginas</h2>
          <div className="flex flex-column gap-2">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/productlistingpage" onClick={() => setIsMenuOpen(false)}>Produtos</NavLink>
            <NavLink to="/notfound" onClick={() => setIsMenuOpen(false)}>Categorias</NavLink>
            <NavLink to="/notfound" onClick={() => setIsMenuOpen(false)}>Meus Pedidos</NavLink>
          </div>
          <Divider className="my-2" />
        </div>
      )}

      {/* Menu desktop */}
      <nav className="hidden lg:flex mt-3">
        <ul className="flex gap-4 list-none">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/productlistingpage">Produtos</NavLink></li>
          <li><NavLink to="/notfound">Categorias</NavLink></li>
          <li><NavLink to="/notfound">Meus Pedidos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
