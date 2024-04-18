import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer"
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