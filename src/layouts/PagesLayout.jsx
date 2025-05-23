import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
        <main className="min-h-screen max-w-7xl mx-auto px-4 pt-24 md:pt-40 pb-8 bg-white">
        <Outlet />
        </main>
      <Footer />
    </>
  );
};

export default Layout;