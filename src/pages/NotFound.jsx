import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/images/notfound.png';
import Footer from '../shared/sharedcomponents/Footer';
import Navbar from '../shared/sharedcomponents/Navbar';

function NotFound() {
    const Navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="my-container">
                <div className="w-full -mt-10 mb-20 md:2/3 lg:w-1/2 mx-auto flex flex-col justify-center items-center">
                    <img src={notFound} alt="" />
                    <h2 className="text-center text-main-white text-xl md:text-3xl mb-6 md:mb-12">
                        Ops! Page not found !!!
                    </h2>
                    <button
                        onClick={() => Navigate('/')}
                        type="button"
                        className="primary-btn capitalize w-1/2 md:w-4/12 "
                    >
                        Back to Home
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
