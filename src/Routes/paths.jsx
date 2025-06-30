import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/PagesLayout";
import HomePage from "../pages/HomePage";
import CarrinhoPage from "../pages/CarrinhoPage";
import CarrinhoCompraConfirme from "../pages/CarrinhoCompra";
import LoginPage from "../pages/LoginPage";
import CreateAccPage from "../pages/CreateAccPage";
import LayoutLogin from "../layouts/LayoutLogin";
import CarrinhoCompraSucesso from "../pages/CarrinhoCompraSucesso";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

// Removi import de LoginLayout, pois o arquivo não existe
// import LoginLayout from "../layouts/LoginLayout";
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
          <Route path="/carrinho/confirme/sucesso" element={<CarrinhoCompraSucesso/>} />

          {/* listagem de produtos */}
          <Route path="produtos" element={<ProductListingPage />} />
          <Route path="produtos/:category" element={<ProductListingPage />} />

          {/* página de detalhe do produto */}
          <Route path="produto/:id" element={<ProductViewPage />} />
          
          {/* <Route path="/products" element={<ProductListing />} /> */}
          {/* <Route path="/productview" element={<ProductView />} /> */}
        </Route>

     <Route element={<LayoutLogin />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CreateAccPage />} />
     </Route>


        {/* qualquer coisa que não casar cai aqui */}
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </BrowserRouter>

  );
}
