import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const RegisterForm = () => {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem("user"))

        if(user) {
            router.push("/user/profile")
        }
    }, []);

    const handleRegisterRequest = async () => {

        axios.post("http://localhost:8000/api/register-user", {
            username,
            email,
            password,
            rePassword
        }).then(response => {
            window.localStorage.setItem("user", JSON.stringify(response.data.user));
            window.localStorage.setItem("authToken", JSON.stringify(response.data.authToken));
            window.localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));

            router.push("/user/profile");
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className={'grid grid-cols-1 gap-3'}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="sameera@gmail.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Sameera"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            name="password"
                            id="password"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="more than 8 characters"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => {
                                setRePassword(e.target.value)
                            }}
                            type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="what you just typed"
                        />
                    </div>
                </div>

                <button
                    onClick={handleRegisterRequest}
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center py-4"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
