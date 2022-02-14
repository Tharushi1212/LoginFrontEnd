import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const LoginForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem("user"))

        if(user) {
            router.push("/user/profile")
        }
    }, []);


    const loginUser = async () => {
        axios.get("http://localhost:8000/api/login-user", {
            params: {
                email: email,
                password: password
            }
        }).then(response => {
            window.localStorage.setItem("user", JSON.stringify(response.data.user));
            window.localStorage.setItem("authToken", JSON.stringify(response.data.authToken));
            window.localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));

            router.push('/user/profile');

        }).catch(error => {
            console.log(error);
        });
    }
    return (<div className={'grid grid-cols-1 gap-3'}>
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

        <button
            onClick={loginUser}
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center py-4"
        >
            Login
        </button>
    </div>);
};

export default LoginForm;
