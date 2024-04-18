import RealEstate from "./RealEstate";
import PropTypes from 'prop-types';

const RealEstates = ({ properties }) => {
    console.log(properties);

    return (
        <section className="lg:my-32 my-20 text-[#111410] flex flex-col">
            <h3 className="text-4xl text-center font-semibold mb-10">Property Types</h3>
            <div className="flex flex-wrap mx-auto w-full max-w-[1320px] gap-8 justify-center">
                {
                    properties.map(property => <RealEstate key={ property.id } properties={ property }></RealEstate>)
                }
            </div>
        </section>
    );
};

RealEstates.propTypes = {
    properties: PropTypes.object
}

export default RealEstates;