import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth"
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const from = "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, photoURL, fullName } = data;

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {
                        navigate(from);
                    });
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 700 });
        Aos.refresh();
    }, []);

    return (
        <section className="mx-auto my-[15%] lg:my-[5%] md:my-[7%] lg:p-0 px-[3%] flex justify-center items-center text-[#111410]" data-aos="fade-left">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 font-medium">
                <h2 className="mb-3 text-3xl font-semibold text-center">Signup for an account</h2>
                <p className="text-center">Have an account? <Link to="/login" rel="noopener noreferrer" className="underline text-[#688165] font-semibold">Signin here</Link>
                </p>

                <form onSubmit={ handleSubmit(onSubmit) } className="space-y-8 mt-4">
                    <div className="space-y-4">

                        <div className="space-y-2">
                            <label htmlFor="username" className="block font-semibold">Full Name</label>
                            <input type="text" name="username" placeholder="First and Last Name" className="w-full px-3 py-2 border rounded-md focus:outline-[#688165]"  { ...register("fullName", { required: true }) } />
                            { errors.fullName && <span className="text-[#B00020] text-sm italic font-semibold opacity-70">This field is required*</span> }
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-semibold">Email address</label>
                            <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md focus:outline-[#688165]" { ...register("email", { required: true }) } />
                            { errors.email && <span className="text-[#B00020] text-sm italic font-semibold opacity-70">This field is required*</span> }
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="text" className="block font-semibold">Photo URL</label>
                            <div className="flex border rounded-md">
                                <span className="flex items-center px-3 pointer-events-none sm: rounded-l-md bg-[#688165]/30">https://</span>
                                <input type="text" name="url" placeholder="www.photourl.com" className="w-full flex-1 border sm: rounded-r-md focus:ring-inset px-3 py-2 focus:outline-[#688165]" { ...register("photoURL", { required: true }) } />
                            </div>
                            { errors.photoURL && <span className="text-[#B00020] text-sm italic font-semibold opacity-70">This field is required*</span> }
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block font-semibold">Password</label>
                            <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md focus:outline-[#688165]" { ...register("password", { required: true, minLength: 6, pattern: /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/ }) } />
                            { errors.password && errors.password.type === "required" && <span className="text-[#B00020] text-sm italic font-semibold opacity-70">This field is required*</span> }
                            { errors.password && errors.password.type === "minLength" && <span className="text-[#B00020] text-sm italic font-semibold opacity-70">Password must be at least 6 characters*</span> }
                            { errors.password && errors.password.type === "pattern" && <span className="text-[#B00020] text-sm italic font-semibold opacity-70">Password must contain at least one uppercase letter and one lowercase letter</span> }
                        </div>

                    </div>

                    <button className="border-[#020302] border-2 text-[#111410] w-full mt-8 font-bold py-2 text-xl tracking-widest rounded-md bg-[#688165]">Signup</button>

                </form>
            </div>
        </section>
    );
};

export default Signup;