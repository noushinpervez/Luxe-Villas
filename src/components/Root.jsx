import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;