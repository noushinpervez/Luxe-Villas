import { Spinner } from "@material-tailwind/react";

const Loading = () => {
    return (
        <div className="flex h-[80vh] justify-center items-center w-full">
            <Spinner className="h-16 w-16 text-[#688165]/50" />
        </div>
    );
};

export default Loading;