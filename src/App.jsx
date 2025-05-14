import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import "./App.css";
import Layout from './layouts/PagesLayout';
import HomePage from './pages/HomePage';
// import ProductListing from './pages/ProductListingPage';
// import ProductView from './pages/ProductViewPage'; 

function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<HomePage/>} />
                        {/* <Route path={'/productlist'} element={<ProductListing/>} />;
                        <Route path={'/productview'} element={<ProductView/>} />; */}
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;