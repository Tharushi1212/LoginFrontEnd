import React from 'react';
import {LockClosedIcon} from "@heroicons/react/outline";
import Link from 'next/link'
import RegisterForm from "../Components/Forms/RegisterForm";


const Register = () => {
    return (
        <div>
            <>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an
                                Account</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <Link href={'/login'}>
                                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Login
                                    </a>
                                </Link>
                            </p>
                        </div>
                        <RegisterForm/>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Register;
