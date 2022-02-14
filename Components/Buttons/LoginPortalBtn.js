import React from 'react';
import Link from 'next/link'


const LoginPortalBtn = () => {
    return (
        <Link href="/login">
            <a

                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
                Login Portal
            </a>
        </Link>

    );
};

export default LoginPortalBtn;
