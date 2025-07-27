import React from "react";
import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <section className="bg-[#3b065e] text-white min-h-screen">
                <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-[#29b7dd] mb-6">
                            Infomin Solutions
                        </h1>
                        <p className="text-xl mb-8">
                            Professional Web Development Services
                        </p>
                        <p className="text-lg mb-8">
                            We are a dedicated team who make dynamic websites and web based software solutions that are tailored to the needs of each and every business at a very affordable cost.
                        </p>
                        <button
                            type="button"
                            className="text-white bg-[#00ccff] hover:bg-[#1C82B1] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-10 py-2.5 text-center font-bold text-base uppercase tracking-widest transition-colors duration-300"
                        >
                            Request a quote
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl p-6 lg:px-8">
                    <h2 className="text-5xl text-center text-gray-900 mb-8">Why Choose Us?</h2>
                    <p className="text-center text-gray-600 mb-12">
                        No need to have a second thought because we specialize in the following niches
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#1C82B1] aspect-square flex flex-col justify-center items-center text-white">
                            <div className="w-16 h-16 bg-[#29B7DD] rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-2xl">💻</span>
                            </div>
                            <span className="text-2xl font-semibold">Development</span>
                        </div>
                        
                        <div className="bg-[#8B72EE] aspect-square flex flex-col justify-center items-center text-white">
                            <div className="w-16 h-16 bg-[#29b7dd] rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-2xl">🔧</span>
                            </div>
                            <span className="text-2xl font-semibold">Automation</span>
                        </div>
                        
                        <div className="bg-[#5D3BE7] aspect-square flex flex-col justify-center items-center text-white">
                            <div className="w-16 h-16 bg-[#29b7dd] rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <span className="text-2xl font-semibold">Optimization</span>
                        </div>
                        
                        <div className="bg-[#BD72EF] aspect-square flex flex-col justify-center items-center text-white">
                            <div className="w-16 h-16 bg-[#29b7dd] rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-2xl">🛠️</span>
                            </div>
                            <span className="text-2xl font-semibold">Support</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#333333] text-white p-10 text-center">
                <h3 className="mb-2">Developed By Infomin Solutions</h3>
                <h3>Copyright 2024. All Rights Reserved</h3>
            </footer>
        </div>
    );
};

export default HomePage;
