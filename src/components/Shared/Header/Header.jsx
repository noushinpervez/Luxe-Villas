import React from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Tooltip } from "@material-tailwind/react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
    const { logout, user } = useAuth();
    const location = useLocation();
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const activeLinkStyle = {
        opacity: "0.7",
        fontWeight: 600,
        transition: "all 0.3s ease-in-out",
        fontSize: "13px",
    };

    const getProfileImage = () => {
        return user?.photoURL || "./logo.png";
    };

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="flex items-center gap-x-2 p-1"
            >

                <NavLink to="/" style={ ({ isActive }) => {
                    return isActive ? activeLinkStyle : {};
                } } className="flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                </NavLink>

            </Typography>

            <Typography
                as="li"
                variant="small"
                color="white"
                className="flex items-center gap-x-2 p-1"
            >

                <NavLink to="/updateprofile" style={ ({ isActive }) => {
                    return isActive ? activeLinkStyle : {};
                } } className="flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Update Profile
                </NavLink>

            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="flex items-center gap-x-2 p-1"
            >

                <NavLink to="/userprofile" style={ ({ isActive }) => {
                    return isActive ? activeLinkStyle : {};
                } } className="flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    User Profile
                </NavLink>

            </Typography>
        </ul>
    );

    const navbarStyle = location.pathname === "/" ? "bg-transparent" : "bg-[#020302] sticky bg-opacity-100";

    return (
        <Navbar className={ `absolute top-0 left-0 right-0 z-10 ${navbarStyle} rounded-none border-none mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4 backdrop-blur-none shadow-none` }>
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/"
                    className="mr-4 cursor-pointer py-1.5 font-medium cinzel text-2xl flex items-center"
                >
                    <img src="./logo.png" className="w-10 h-10 rounded-full"></img>Luxe Villas
                </Link>
                <div className="hidden lg:block">{ navList }</div>

                <div className="lg:flex items-center gap-x-1 hidden">

                    { user?.email ? (
                        <>
                            <Tooltip content={ <div>{ user.displayName }</div> }>
                                <img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-1 ring-[#688165] mr-3" src={ getProfileImage() } />
                            </Tooltip>
                            <Button
                                variant="outlined"
                                size="sm"
                                className="hidden lg:inline-block text-[#ecefeb] border-2 border-white"
                                onClick={ logout }
                            >
                                Logout
                            </Button>
                        </>

                    ) : (

                        <>
                            <Link to="/login">
                                <Button
                                    variant="outlined"
                                    size="sm"
                                    className="hidden lg:inline-block text-[#ecefeb] border-2 border-white"
                                >
                                    Log In
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    variant="outlined"
                                    size="sm"
                                    className="hidden lg:inline-block border-2 border-[#688165] bg-[#688165]"
                                >
                                    Sign up
                                </Button>
                            </Link>
                        </>

                    ) }

                </div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={ false }
                    onClick={ () => setOpenNav(!openNav) }
                >
                    { openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={ 2 }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={ 2 }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) }
                </IconButton>
            </div>
            <MobileNav open={ openNav }>
                <div className="container mx-auto p-[1%] h-fit">
                    { navList }
                    <div className="flex items-center gap-x-1">
                        { user ? (
                            <>
                                <Tooltip content={ user.displayName }>
                                    <img
                                        alt=""
                                        className="w-12 h-12 max-w-fit max-h-fit rounded-full ring-2 ring-offset-1 ring-[#688165] mr-3 basis-1/2"
                                        src={ getProfileImage() }
                                    />
                                </Tooltip>
                                <Button
                                    variant="outlined"
                                    size="sm"
                                    className="text-[#ecefeb] border-2 border-white basis-1/2"
                                    onClick={ logout }
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="flex-1">
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#ecefeb] border-2 border-white"
                                    >
                                        Log In
                                    </Button>
                                </Link>
                                <Link to="/signup" className="flex-1">
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        size="sm"
                                        className="border-2 border-[#688165] bg-[#688165]"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </>
                        ) }
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default Header;