import React from 'react';
import LoginPortalBtn from "../Buttons/LoginPortalBtn";
import PortfolioBtn from "../Buttons/PortfolioBtn";

const Welcome = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">This is my React Assignment for Company Terinetic.</span>
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <LoginPortalBtn/>
                    </div>
                    <div className="ml-3 inline-flex">
                        <PortfolioBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
