import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center text-2xl lg:text-3xl font-bold flex-col justify-center text-center gap-8 text-[#111410] lg:p-0 p-[3%]">
            <div>
                <h3>OOPS! PAGE NOT FOUND</h3>
                <p className="font-medium text-xl lg:text-2xl mt-4">THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST.</p>
            </div>
            <Link to="/"><Button className="flex items-center bg-[#688165] text-[#111410] font-bold text-lg gap-2">GO TO HOMEPAGE<img src="./logo.png" className="w-10 h-10 border border-[#111410] rounded-full"></img></Button></Link>
        </div>
    );
};

export default ErrorPage;