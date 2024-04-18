import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <section className="mx-auto p-[10%] lg:p-[5%] flex justify-center items-center text-[#111410]">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 font-medium">
                <h2 className="mb-3 text-3xl font-semibold text-center">Signup for an account</h2>
                <p className="text-center">Have an account? <Link to="/login" rel="noopener noreferrer" className="underline text-[#688165] font-semibold">Signin here</Link>
                </p>
                <form noValidate="" action="" className="space-y-8 mt-4" data-bitwarden-watching="1">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block font-semibold">Full Name</label>
                            <input type="text" name="username" id="username" placeholder="First and Last Name" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-semibold">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="url" className="block font-semibold">Photo URL</label>
                            <div className="flex border rounded-md">
                                <span className="flex items-center px-3 pointer-events-none sm: rounded-l-md">https://</span>
                                <input type="text" name="url" id="url" placeholder="www.photourl.com" className="w-full flex-1 border sm: rounded-r-md focus:ring-inset px-3 py-2" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                    </div>
                    <Link to="/login">
                        <Button variant="outlined" ripple={ true } className="border-[#020302] border-2 text-[#111410] w-full mt-8">Signup</Button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Signup;