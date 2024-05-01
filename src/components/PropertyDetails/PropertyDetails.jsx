import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const PropertyDetails = () => {
    const properties = useLoaderData();
    const { id } = useParams();

    const property = properties.find(property => property.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 300 });
        Aos.refresh();
    }, []);

    return (
        <section className="flex flex-col text-[#111410] font-medium text-base my-[15%] lg:my-[5%] md:my-[7%] mx-auto w-full max-w-[1320px] p-[3%]" data-aos="zoom-in">
            <h3 className="font-bold text-2xl lg:text-4xl mb-4">{ property.estate_title }</h3>
            <p className="text-xl lg:text-2xl font-medium">{ property.segment_name }</p>
            <div className="flex w-1/3 flex-col items-center justify-center border-t border-[#020302] mt-4 mb-4"></div>

            <div className="grid gap-x-10 gap-y-6 grid-cols-3 lg:grid-cols-5 md:grid-cols-5 w-fit my-12 font-semibold">
                <div className="flex flex-col gap-3">
                    <p className="text-lg lg:text-xl opacity-70">Price</p>
                    <h3 className="text-lg lg:text-xl">{ property.price }</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-lg lg:text-xl opacity-70">Status</p>
                    <h3 className="text-lg lg:text-xl capitalize">{ property.status }</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-lg lg:text-xl opacity-70">Area</p>
                    <h3 className="text-lg lg:text-xl">{ property.area }</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-lg lg:text-xl opacity-70">Bedrooms</p>
                    <h3 className="text-lg lg:text-xl">{ property.bedrooms }</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-lg lg:text-xl opacity-70">Bathrooms</p>
                    <h3 className="text-lg lg:text-xl">{ property.bathrooms }</h3>
                </div>
            </div>

            <img className="object-cover lg:h-[80vh] h-[50vh] w-full mb-12" src={ property.image } alt="" />

            <div className="flex items-center justify-center gap-6 lg:gap-12 lg:flex-row flex-col">
                <h3 className="flex-1 font-semibold text-4xl">More details about the property</h3>

                <div className="flex-1">
                    <p className="text-lg lg:text-xl mb-4 font-medium text-justify">{ property.description }</p>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <tbody>
                                <tr className="border-y border-[#111410]/15">
                                    <td className="pr-4 text-[#111410]/70 py-3 font-semibold align-top">Location</td>
                                    <td className="font-bold py-3 text-right">
                                        <div> { `${property.location.area}, ${property.location.city}, ${property.location.country}` } </div>
                                    </td>
                                </tr>
                                <tr className="border-y border-[#111410]/15">
                                    <td className="font-semibold text-[#111410]/70 align-top py-3">Facilities</td>
                                    <td className="py-3 font-bold text-right">
                                        <div>
                                            {
                                                property.facilities.map((facility, idx) => (<span key={ `facility-${property.id}-${idx}` }>{ facility }{ idx !== property.facilities.length - 1 && ', ' }</span>))
                                            }
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-y border-[#111410]/15">
                                    <td className="pr-4 text-[#111410]/70 py-3 font-semibold align-top">Parking Spaces</td>
                                    <td className="font-bold py-3 text-right">
                                        <div> { property.parking_spaces } </div>
                                    </td>
                                </tr>
                                <tr className="border-y border-[#111410]/15">
                                    <td className="pr-4 text-[#111410]/70 py-3 font-semibold align-top">Built Year</td>
                                    <td className="font-bold py-3 text-right">
                                        <div> { property.built_year } </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;