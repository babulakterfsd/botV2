/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainTab from '../components/dashboard/MainTab/MainTab';
import UseAuth from '../Hooks/UseAuth';
import styles from '../styles/Dashboard.module.css';

function Dashboard() {
    const { user, logOut } = UseAuth();

    console.log(UseAuth());

    const [dropdownshow, setDropdownshow] = useState(false);
    // const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
    };

    console.log(user);

    return (
        <div className={`${styles.dashboard} pb-8`}>
            <div className="main-container">
                {/* dropdown */}
                <div className="flex justify-end p-8">
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
                                <div className="font-medium truncate">{user?.email}</div>
                            </div>
                            <hr className="opacity-5" />
                            <ul className=" text-white">
                                <li
                                    className="block py-2 px-4 text-white text-center hover:text-slate-700"
                                    onClick={() => setDropdownshow(false)}
                                >
                                    <NavLink to="/" className="block w-full mx-auto">
                                        Back to Home
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
                </div>
                <MainTab />
                {/* <TabDash /> */}
            </div>
        </div>
    );
}

export default Dashboard;
