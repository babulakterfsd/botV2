/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Logo from '../assets/images/logo.png';
import Solicon from '../assets/images/solicon.PNG';
import UseAuth from '../Hooks/UseAuth';
import Footer from '../shared/sharedcomponents/Footer';
import Navbar from '../shared/sharedcomponents/Navbar';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [myUser, setMyuser] = useState({});
    const url = `http://54.75.119.70:8080/`;

    const history = useNavigate();
    const location = useLocation();
    const googleRedirect = location?.state?.from || '/dashboard';
    const emailRedirect = location?.state?.from || '/dashboard';
    const { signinGoogle, signInWithEmail, setUser, getEmail, getPassword, setIsLoading, user } =
        UseAuth();

    const getUername = (e) => {
        setUsername(e?.target?.value);
    };
    const getPass = (e) => {
        setPassword(e?.target?.value);
    };

    // const emaillogin = (e) => {
    //     e.preventDefault();
    //     signInWithEmail()
    //         .then((result) => {
    //             setUser(result.user);
    //             Swal.fire('Good job!', 'email Log In SuccessFull!', 'success');
    //             return history(emailRedirect);
    //         })
    //         .catch((error) => {
    //             Swal.fire('Something went wrong!', `${error.message}`, 'error');
    //         })
    //         .finally(() => setIsLoading(false));
    // };

    // const handlegoolesign = () => {
    //     signinGoogle()
    //         .then((result) => {
    //             Swal.fire('Good job!', 'Log In SuccessFull!', 'success');
    //             return history(googleRedirect);
    //         })
    //         .finally(() => setIsLoading(false))
    //         .catch((error) => {
    //             Swal.fire('Something went wrong!', `${error.message}`, 'error');
    //         })
    //         .finally(() => setIsLoading(false));
    // };
    // useEffect(() => {
    //     if (user?.email) {
    //         history('/');
    //     } else {
    //         <Navigate to="/login" />;
    //     }
    // }, [user?.email]);

    const HandleCustomLogin = (e) => {
        e.preventDefault();

        Swal.fire(`Username is ${username} and password is ${password}`);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                setMyuser(data);
                setTimeout(() => {
                    Swal.fire(myUser);
                }, 1500);
            })
            .catch((err) =>
                setTimeout(() => {
                    Swal.fire(err.message);
                }, 1500)
            );
    };

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
                            <p className="text-center text-semi-bold text-red-700">
                                <small>
                                    Currently,we dont support getting registered from here and login
                                    with google or solana too. Please login with username and
                                    password we provided you.If you still havent one, please contact
                                    us on{' '}
                                    <a
                                        href="https://discord.com/channels/917840365241913455/940569848805728307"
                                        className="text-indigo-600 text-bolder"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Discord
                                    </a>
                                </small>
                            </p>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Dont have any account?
                                <Link
                                    to="/register"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {' '}
                                    Register Here{' '}
                                </Link>
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
                        <div className="anothermethod flex items-center justify-center lg:justify-between my-4 px-6">
                            <span className="w-1/3 hidden lg:block h-0.5 bg-[#eee8e8] " />
                            <span className="lg:w-1/3 w-full  text-center">or signin using</span>
                            <span className="w-1/3 hidden lg:block h-0.5 bg-[#eee8e8] " />
                        </div>
                        <div className="signinbutton flex items-center justify-around flex-col lg:flex-row">
                            <button
                                type="button"
                                className="flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none mb-3 lg:mb-0"
                                // onClick={handlegoolesign}
                            >
                                <svg
                                    className="w-4 h-4 mr-2 -ml-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="google"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                    />
                                </svg>
                                Sign in with Google
                            </button>
                            <button
                                type="button"
                                className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                            >
                                <img
                                    src={Solicon}
                                    alt="solicon"
                                    className="h-5 mr-2 w-auto block items-center"
                                />
                                Sign in with Solana
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
