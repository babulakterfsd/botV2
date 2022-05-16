import React from 'react';
import bot from '../assets/images/home.gif';
import Footer from '../shared/sharedcomponents/Footer';
import Navbar from '../shared/sharedcomponents/Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <div className="main-container ">
                <div className="flex justify-center items-center min-h-screen text-center  relative">
                    <div>
                        <h1 className="text-2xl md:text-5xl">Your Online Bot Here</h1>
                        <p className="text-center md:w-2/3 mx-auto px-4 md:px-16 lg:px-24 mt-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem
                            molestiae numquam velit natus.
                        </p>

                        <div className="text-center md:mt-8">
                            <img className="h-64 mx-auto" src={bot} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
