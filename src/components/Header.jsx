import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div>
        <div>
          <div>
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <i/>
            </button>
          </div>

          <div>
            <Logo location="header" />
          </div>

          <div>
            <input
              type="text"
              placeholder="Pesquisar produto..."
            />
            <i />
          </div>

          <div>
            <div>
              <button
                onClick={() => setIsSearchOpen(prev => !prev)}
              >
                <i/>
              </button>
            </div>

            <div>
              <a
                href="#"
              >
                Cadastre-se
              </a>
              <a
                href="#"
              >
                Entrar
              </a>
            </div>

            <div>
              <img
                src="/src/assets/mini-cart.svg"
                alt="Carrinho"
              />
              <div>
                2
              </div>
            </div>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Pesquisar produto..."
          />
        </div>

        <div>
          <div>
            <div>
              <h2>Páginas</h2>
              <nav>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/productlistingpage" onClick={() => setIsMenuOpen(false)}>
                  Produtos
                </NavLink>
                <NavLink to="/notfound" onClick={() => setIsMenuOpen(false)}>
                  Categorias
                </NavLink>
                <NavLink to="/notfound" onClick={() => setIsMenuOpen(false)}>
                  Meus Pedidos
                </NavLink>
              </nav>
            </div>

            <hr />

            <div>
              <a href="#">
                Entrar
              </a>
              <a href="#">
                Cadastre-se
              </a>
            </div>
          </div>
        </div>


        <nav>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/productlistingpage">Produtos</NavLink></li>
              <li><NavLink to="/notfound">Categorias</NavLink></li>
              <li><NavLink to="/notfound">Meus Pedidos</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;