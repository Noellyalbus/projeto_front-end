import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/PagesLayout";
import HomePage from "../pages/HomePage";
import CarrinhoPage from "../pages/CarrinhoPage";
import CarrinhoCompraConfirme from "../pages/CarrinhoCompra";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import NotFound from "../pages/NotFound";

export default function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  layout com header/footer  */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* carrinho */}
          <Route path="carrinho" element={<CarrinhoPage />} />
          <Route path="carrinho/confirme" element={<CarrinhoCompraConfirme />} />

          {/* listagem de produtos */}
          <Route path="produtos" element={<ProductListingPage />} />
          <Route path="produtos/:category" element={<ProductListingPage />} />

          {/* página de detalhe do produto */}
          <Route path="produto/:id" element={<ProductViewPage />} />
        </Route>

        {/* qualquer coisa que não casar cai aqui */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
