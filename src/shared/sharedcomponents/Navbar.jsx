/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logorobot from '../../assets/images/logo.png';
import UseAuth from '../../Hooks/UseAuth';
import styles from '../../styles/Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownshow, setDropdownshow] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { user, logOut, setUser, setIsLoading } = UseAuth();
    const { displayName, photoURL } = user;
    const history = useNavigate();
    const location = useLocation();
    const googleRedirect = location?.state?.from || '/';

    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({});
                Swal.fire('Good job!', 'Log Out SuccessFull!', 'success');
                return navigate('/');
            })
            .catch((error) => {
                Swal.fire('Something went wrong!', `${error.message}`, 'error');
            })
            .finally(() => {
                setIsLoading(false);
                setDropdownshow(false);
            });
    };

    return (
        <div className="main-container lg:mt-6 lg:px-3">
            <nav className={`${styles.mb_nav} bg-reddishYellow py-2 lg:bg-transparent`}>
                <div className="flex flex-wrap justify-between items-center">
                    <button type="button" onClick={() => navigate('/')} className="flex">
                        <img className="w-28 md:w-auto" src={logorobot} alt="" />
                    </button>
                    <div className="flex md:order-2">
                        {!user?.displayName ? (
                            <button
                                type="button"
                                className="primary-btn mr-2"
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={() => setDropdownshow((prevState) => !prevState)}
                                    onMouseLeave={() =>
                                        setTimeout(() => {
                                            setDropdownshow(false);
                                        }, 3000)
                                    }
                                    className="flex items-center px-2 py-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out "
                                >
                                    <img
                                        src="https://i.ibb.co/PDnnXFK/babulakter.jpg"
                                        alt="propic"
                                        className="h-12 w-12 rounded-full"
                                    />
                                </button>

                                {dropdownshow && (
                                    <div className=" bg-darkishBlack text-white mt-16 -ml-32 py-2 px-1 rounded-sm absolute z-[99]">
                                        <div className="py-3 px-4 text-sm text-white ">
                                            <div>{user?.displayName}</div>
                                            <div className="font-medium truncate">
                                                {user?.email}
                                            </div>
                                        </div>
                                        <hr className="opacity-5" />
                                        <ul className=" text-white">
                                            <li
                                                className="block py-2 px-4 text-white text-center hover:text-slate-700"
                                                onClick={() => setDropdownshow(false)}
                                            >
                                                <NavLink
                                                    to="/dashboard"
                                                    className="block w-full mx-auto"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <hr className="opacity-5" />
                                        <div className="block">
                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                                className="pt-1.5 pb-0 w-full hover:text-slate-700"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="NavBarId"
                            type="button"
                            className="inline-flex items-center p-2 text-base  text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full lg:block md:w-auto">
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 text-base md:text-xl  text-offWhite">
                            <li className="hover:text-reddishYellow">About</li>
                            <li className="hover:text-reddishYellow">Security</li>
                            <li className="hover:text-reddishYellow">Contact</li>
                        </ul>
                    </div>
                </div>
                {/* mobile */}
                <div className={`${styles.my_nav} w-full md:w-auto block lg:hidden absolute`}>
                    <ul
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } flex flex-col items-center mt-4 text-base sm:text-lg text-main-white`}
                    >
                        <li
                            className={`${styles.mobile_nav} mt-6`}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            About
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className={`${styles.mobile_nav}`}
                        >
                            Security
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className={`${styles.mobile_nav}`}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
