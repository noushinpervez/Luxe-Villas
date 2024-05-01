import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer"
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Root = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = `Luxe Villas - HOME`;
        }
        else {
            document.title = `Luxe Villas ${location.pathname.replace("/", "- ").toUpperCase()}`;
        }

        if (location.state) {
            document.title = location.state;
        }
    }, [location.pathname, location.state]);

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;