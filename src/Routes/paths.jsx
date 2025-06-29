import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/PagesLayout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import PageTeste from "../pages/PageTeste";
import CarrinhoPage from "../pages/CarrinhoPage";
import CarrinhoCompraConfirme from "../pages/CarrinhoCompra";
import LoginPage from "../pages/LoginPage";
import CreateAccPage from "../pages/CreateAccPage";
import LayoutLogin from "../layouts/LayoutLogin";
// import ProductListing from "../pages/ProductListingPage";
// import ProductView from "../pages/ProductViewPage";

// Removi import de LoginLayout, pois o arquivo não existe
// import LoginLayout from "../layouts/LoginLayout";

function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/carrinho/confirme" element={<CarrinhoCompraConfirme />} />
          {/* <Route path="/products" element={<ProductListing />} /> */}
          {/* <Route path="/productview" element={<ProductView />} /> */}
          <Route path="/teste" element={<PageTeste />} />
        </Route>

     <Route element={<LayoutLogin />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CreateAccPage />} />
     </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default Paths;
