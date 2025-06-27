import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";



const LoginLayout = () => {
    return (
        <>
            <HeaderLogin />
            <main className="min-h-screen w-full bg-(--white-background)">
                <Outlet />
            </main>
            <Footer />
        </>

    );
}

export default LoginLayout;