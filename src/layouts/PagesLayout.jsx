import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
        <main className="min-h-screen w-full pt-24 md:pt-36 pb-0 lg:pb-8 bg-(--white-background)">
        <Outlet />
        </main>
      <Footer />
    </>
  );
};

export default Layout;