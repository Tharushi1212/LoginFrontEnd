import React, {useEffect} from 'react';
import {LockClosedIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import LoginForm from "../Components/Forms/LoginForm";

const Login = () => {

    useEffect(async () => {

    }, [])

    return (<div>
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your
                            account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link href={'/register'}>
                                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Register
                                </a>
                            </Link>
                        </p>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </>

    </div>);
};

export default Login;
