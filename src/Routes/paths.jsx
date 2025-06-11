import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/PagesLayout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import ProductListing from "../pages/ProductListingPage";
// import ProductView from "../pages/ProductViewPage";

function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          {/* <Route path="/productview" element={<ProductView />} /> */}
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default Paths;
