import { Card, CardHeader, CardBody, CardFooter, Typography, Button, IconButton } from "@material-tailwind/react";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineAreaChart } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const RealEstate = ({ properties }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, bedrooms, image } = properties;

    useEffect(() => {
        Aos.init({ duration: 700 });
        Aos.refresh();
    }, []);

    return (
        <Card className="w-full max-w-[26rem] shadow-none text-[#111410] bg-transparent rounded-none lg:p-0 p-[3%]" data-aos="fade-up">
            <CardHeader floated={ false } color="blue-gray" className="shadow-none rounded-none m-0">
                <div className="flex justify-center items-center h-80">
                    <img
                        src={ image }
                        alt={ estate_title }
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                <IconButton
                    size="sm"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#688165"
                        className="h-6 w-6"
                    >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </IconButton>
            </CardHeader>
            <CardBody className="p-0 mt-4">

                <div className="flex justify-between items-center">
                    <Typography variant="h6" className="font-extrabold cinzel">
                        { segment_name }
                    </Typography>
                    <Typography variant="h6" className="font-extrabold cinzel text-xs">
                        ID #{ id }
                    </Typography>
                </div>

                <Typography variant="h4" className="font-semibold cinzel">
                    { estate_title }
                </Typography>
                <div className="flex w-1/3 flex-col items-center justify-center border-t border-[#020302] mt-4 mb-4"></div>
                <Typography color="gray" className="body-font">
                    { description }
                </Typography>

                <div className="mt-4 flex flex-wrap gap-4 items-center">
                    {
                        facilities.slice(0, 2).map((facility, idx) => (<li key={ `${id}-${idx}` } className="list-none flex items-center gap-2"><MdOutlineRealEstateAgent />{ facility }</li>))
                    }
                </div>

                <div className="group mt-4 inline-flex flex-wrap items-center gap-3">
                    <div className="flex gap-2 items-center justify-center">
                        <MdOutlineBedroomChild />
                        { bedrooms }
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <MdOutlineAreaChart />
                        { area }
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <MdOutlineLocationOn />
                        { `${location.area}, ${location.city}, ${location.country}` }
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <Typography variant="h6" className="mt-8 font-bold text-2xl cinzel text-[#688165] tracking-widest" style={ { WebkitTextStroke: '1px #020302' } }>
                        { price }
                    </Typography>
                    <Typography variant="h6" className="mt-8 font-extrabold text-xl cinzel text-[#688165]">
                        { `For ${status}` }
                    </Typography>
                </div>

            </CardBody>

            <CardFooter className="p-0 mt-3">
                <Link to={ `/${id}` } state={ estate_title }>
                    <Button size="lg" fullWidth={ true } className="bg-[#688165] text-[#020302] tracking-widest">
                        View Property
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

RealEstate.propTypes = {
    properties: PropTypes.object
}

export default RealEstate;