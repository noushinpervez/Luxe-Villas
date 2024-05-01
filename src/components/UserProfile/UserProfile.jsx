import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import Aos from 'aos';
import 'aos/dist/aos.css';

const UserProfile = () => {
    const { user } = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        Aos.refresh();
    }, []);

    return (
        <section className="flex justify-center w-full items-center my-[15%] lg:my-[5%] md:my-[7%] mx-auto max-w-[1320px] p-[3%] lg:p-0" data-aos="zoom-in">
            <div className="relative flex flex-col text-[#111410] bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative mx-4 mt-4 overflow-hidden text-[#111410] bg-white shadow-lg bg-clip-border rounded-xl h-80">
                    <img src={ user ? user.photoURL : "./logo.png" } alt="profile-picture" className="object-cover w-full h-full" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 text-2xl antialiased font-semibold leading-snug text-[#111410] cinzel tracking-widest">
                        { user ? user.displayName : "Guest" }
                    </h4>
                    <p
                        className="block text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 body-font">
                        { user ? user?.email : "guest@gmail.com" }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;