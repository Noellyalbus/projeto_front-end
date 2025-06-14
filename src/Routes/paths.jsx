import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/PagesLayout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import PageTeste from "../pages/PageTeste";
import CarrinhoPage from "../pages/CarrinhoPage";
// import ProductListing from "../pages/ProductListingPage";
// import ProductView from "../pages/ProductViewPage";

function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/carrinho" element={<CarrinhoPage/>} />
          {/* <Route path="/products" element={<ProductListing />} /> */}
          {/* <Route path="/productview" element={<ProductView />} /> */}
          {/* <Route path="/Login" element={<LoginPage/>} /> */}
          <Route path="/teste" element={<PageTeste />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default Paths;
