import Slider from "../components/Slider/Slider"
import RealEstates from "../components/RealEstates/RealEstates"
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const properties = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <RealEstates properties={ properties }></RealEstates>
        </div>
    );
};

export default Home;