import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import moment from "moment/moment";
import EditDetailsFrom from "../../Components/Forms/EditDetailsFrom";


const Profile = () => {
    const router = useRouter();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [creationDate, setCreationDate] = useState();

    const [editBtnState, setEditBtnState] = useState(false);

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem("user"))

        if (!user) router.push("/")

        setUserName(user.username)
        setUserEmail(user.email)
        setCreationDate(moment(user.createdAt).format("YYYY-MM-DD"))

    }, []);

    const signOut = () => {
        window.localStorage.removeItem("user")
        window.localStorage.removeItem("authToken")
        window.localStorage.removeItem("refreshToken")
        router.push("/login")
    }

    return (
        <div className={'mx-10 mt-7'}>
            <div className="md:flex md:items-center md:justify-between md:space-x-5">
                <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <img
                                className="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                alt=""
                            />
                            <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="pt-1.5">
                        <h1 className="text-2xl font-bold text-gray-900">{userName}</h1>
                        <p className="text-sm font-medium text-gray-500">
                            With us {' '}
                            <a href="#" className="text-gray-900">
                                Since
                            </a>{' '}
                            <time dateTime="2020-08-25">{creationDate}</time>
                        </p>
                    </div>
                </div>
                <div
                    className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                    <button
                        onClick={(x) => {
                            setEditBtnState(!editBtnState)
                        }}
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        {editBtnState ? "Edit" : "Done"}
                    </button>
                    <button
                        onClick={signOut}
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            <div>
                {!editBtnState && <EditDetailsFrom userUserName={userName} userEmail={userEmail}/>}
            </div>
        </div>
    );
};

export default Profile;
