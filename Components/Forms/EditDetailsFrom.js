import React, {useState} from 'react';
import {MailIcon, PhoneIcon} from '@heroicons/react/outline'
import axios from "axios";
import {useRouter} from "next/router";

const EditDetailsFrom = ({userEmail, userUserName}) => {
    const router = useRouter();

    const [changedUserName, setChangedUserName] = useState();
    const [changedUserEmail, setChangedUserEmail] = useState();
    const [confirmationPassword, setConfirmationPassword] = useState();

    const changeDetailsHandler = () => {
        console.log(changedUserName, changedUserEmail, confirmationPassword);

        axios.all([
            axios.put(`http://localhost:8000/api/change-details`, {
                username: changedUserName,
                email: changedUserEmail,
                password: confirmationPassword
            }, {
                headers: {Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("authToken"))}`},
            }),
        ]).then(axios.spread((...res) => {
            window.localStorage.removeItem("user")
            window.localStorage.removeItem("authToken")
            window.localStorage.removeItem("refreshToken")

            window.localStorage.setItem("user", JSON.stringify(res[0].data.user));
            window.localStorage.setItem("authToken", JSON.stringify(res[0].data.authToken));
            window.localStorage.setItem("refreshToken", JSON.stringify(res[0].data.refreshToken));

            router.push('/user/profile');
            router.reload(window.location.pathname)

        })).catch(err => {
            console.log(err);
        });
    }

    return (<div>
        <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
                            <h3 className="text-lg font-medium text-white">User Details</h3>
                            <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                                Change User Details from this form.
                            </p>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base text-indigo-50">
                                    <MailIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true"/>
                                    <span className="ml-3">{userEmail}</span>
                                </dd>
                            </dl>
                        </div>

                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">change Details</h3>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={(e) => setChangedUserName(e.target.value)}
                                            placeholder={userUserName}
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={(e) => setConfirmationPassword(e.target.value)}
                                            placeholder={"⁕⁕⁕⁕⁕⁕⁕⁕"}
                                            type="password"
                                            name="subject"
                                            id="subject"
                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={(e) => setChangedUserEmail(e.target.value)}
                                            placeholder={userEmail}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button
                                        onClick={changeDetailsHandler}
                                        type="submit"
                                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default EditDetailsFrom;
