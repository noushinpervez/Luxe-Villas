import Slider from "../components/Slider/Slider"
import RealEstates from "../components/RealEstates/RealEstates"
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const properties = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Slider></Slider>
            <RealEstates properties={ properties }></RealEstates>
        </div>
    );
};

export default Home;