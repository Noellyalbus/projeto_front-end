```markdown
# 🛒 Digital Store – E‑commerce de Tênis & Streetwear  

Este repositório contém o **projeto final da disciplina “Desenvolvedor Web Full Stack – Online 2.0” da Geração Tech**.  
A aplicação simula uma loja moderna de sneakers e vestuário (Nike, Adidas, etc.), desenvolvida em **React + Tailwind CSS** com deploy contínuo no GitHub Pages.  
O layout foi reproduzido fielmente a partir do Figma oficial do curso.

> 📄 **Documentação oficial**: <https://github.com/digitalcollegebr/projeto-digital-store>  
> 🎨 **Figma**: <https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30&p=f&t=Ps4STd4bfhcwNwXw-0>

---

## 🚀 Tecnologias & Bibliotecas

| Categoria | Pacote / Ferramenta | Função principal |
|-----------|--------------------|------------------|
| **Core**  | `react`, `vite` | SPA rápida com HMR |
| **Estilo**| `tailwindcss`, `postcss`, `autoprefixer` | CSS utilitário 100 % responsivo |
| **Ícones**| `@phosphor-icons/react`, **`primeicons`** | Conjuntos de ícones modernos (PrimeIcons é importado via `import "primeicons/primeicons.css"`) :contentReference[oaicite:0]{index=0} |
| **Roteamento** | `react-router-dom` | Navegação e rotas aninhadas |
| **Forms** | `react-hook-form` | Validação e gerenciamento de formulários |
| **Qualidade** | `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | Linting e Fast Refresh |
| **Build** | `vite`, `@vitejs/plugin-react` | Bundling e preview de produção |
| **Outros** | `classnames`, `clsx`, `class-variance-authority` | Helpers de CSS & composição de classes |

> Todas as dependências estão listadas no [`package.json`](package.json). :contentReference[oaicite:1]{index=1}

---

## 👥 Colaboradores

| Nome | GitHub |
|------|--------|
| **Noelly Galeno de Albuquerque Dias** | <https://github.com/Noellyalbus> |
| João Rubens Tabosa Braga | <https://github.com/rubenstabosaa> |
| Ednilson Oliveira Silva | <https://github.com/Ednilson-Oli> |

---

## 📂 Estrutura completa do projeto

```

src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── styled.css
    ├── data/
│   └── products.js
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── ProductCard.jsx
│   ├── ProductSlider.jsx
│   ├── ProductFilter.jsx
│   └── (outros componentes reutilizáveis)
├── forms/
│   ├── FormCarrinho.jsx
│   └── FormCarrinhoConfirme.jsx
├── layouts/
│   ├── PagesLayout.jsx
│   └── LayoutLogin.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProductListingPage.jsx
│   ├── ProductViewPage.jsx
│   ├── CarrinhoPage.jsx
│   ├── CarrinhoCompra.jsx
│   ├── CarrinhoCompraSucesso.jsx
│   ├── LoginPage.jsx
│   ├── CreateAccPage.jsx
│   └── NotFound.jsx
├── Routes/
│   └── paths.jsx
├── App.jsx
├── main.jsx

````
*(Árvore gerada a partir do repositório `main`)* :contentReference[oaicite:2]{index=2}

---

## ✅ Funcionalidades

- **Homepage** com carrossel de destaques & banners promocionais  
- **Filtro lateral** (marca • categoria • gênero • condição) + ordenação “Mais relevantes / Menor preço / Maior preço”  
- **Product View** com galeria, seleção de tamanho & cor, box de compra e produtos relacionados  
- **Carrinho** com resumo, aplicação de cupom, cálculo de frete, finalização e página de sucesso  
- **Autenticação simulada** (login / cadastro)  
- **Responsividade total** (mobile‑first)  
- **Deploy automático** via GitHub Pages

---

## 🧑‍💻 Como rodar localmente

```bash
# 1. Clone seu fork ou o repositório oficial
git clone https://github.com/Noellyalbus/projeto_front-end.git

# 2. Entre na pasta
cd projeto_front-end

# 3. Instale as dependências
npm install        # ou pnpm install / yarn

# 4. Execute em modo desenvolvimento
npm run dev

# 5. Acesse http://localhost:5173 no navegador
````

### 🎯 Scripts úteis

```bash
npm run build     # gera versão de produção em dist/
npm run preview   # serve a pasta dist/ para testes finais
npm run lint      # executa ESLint
```

---

## 🚀 Deploy

O deploy está configurado no branch `gh-pages`. Basta executar:

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

➡️ **Visualização**: [Drip Store]()

---

## 📚 Referências & Créditos

* **Curso**: Desenvolvedor Web Full Stack – Online 2.0 (Geração Tech)
* **Layout**: Figma DRIP STORE (Digital College)
* **Icones**: Phosphor Icons & PrimeIcons
* **Stack**: React 19 + Vite 6 + Tailwind 4

---

### Licença

Distribuído sob a licença **MIT** – veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

*Happy coding & keep it street!* 🙌
