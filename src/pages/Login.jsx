/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import CustomAuth from '../Hooks/CustomAuth';
import Footer from '../shared/sharedcomponents/Footer';
import Navbar from '../shared/sharedcomponents/Navbar';

function Login() {
    const navigate = useNavigate();

    const {
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
        getUername,
        getPass,
        HandleCustomLogin,
    } = CustomAuth();

    useEffect(() => {
        if (user?.user_id) {
            console.log('got user');
            navigate('/dashboard');
        }
    }, [user]);

    return (
        <div>
            <Navbar />
            <div className="main-container px-4">
                <div className="min-h-full flex items-center justify-center py-12 lg:my-10 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] w-full lg:w-1/2 mx-auto rounded-lg text-gray-900 my-6">
                    <div className="max-w-md w-full ">
                        <div>
                            <img alt="baal" className="mx-auto -mt-8 h-20 w-auto" src={Logo} />
                            <h2 className="mt-4 lg:mt-6 text-center text-2xl lg:text-3xl font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Dont have any bot?
                                <a
                                    href="https://discord.com/channels/917840365241913455/940569848805728307"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-indigo-700 hover:text-indigo-500 ml-1 focus:outline-none transition duration-150 ease-in-out"
                                >
                                    contact us
                                </a>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={HandleCustomLogin}>
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="username" className="sr-only">
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        onInput={(e) => getUername(e)}
                                        type="text"
                                        // autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                                        placeholder="Username"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        onInput={(e) => getPass(e)}
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between flex-col lg:flex-row">
                                <div className="flex items-center mb-3 lg:mb-0">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        {' '}
                                        Remember me{' '}
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a
                                        href="https://discord.com/channels/917840365241913455/940569848805728307"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {' '}
                                        Forgot your password?{' '}
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none "
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
