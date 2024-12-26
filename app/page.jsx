// "use client";
import { Barlow } from "next/font/google";
import React from "react";
import Icon1 from "./assets/svgs/icon1";
import Icon2 from "./assets/svgs/icon2";
import Icon3 from "./assets/svgs/icon3";
import Icon4 from "./assets/svgs/icon4";

const barlow = Barlow({
    weight: ["700"],
    subsets: ["latin"],
});

const page = () => {
    return (
        <div>
            <section className="bg-purple-main">
                <div className={"flex justify-center"}>
                    <div className={"w-[513px] h-[550px]"}>
                        <h1
                            className={`${barlow.className} text-blue-bluee text-start text-5xl mt-[62px]`}
                        >
                            Infomin Solutions
                        </h1>
                        <p className="mt-[62px] text-lg text-white">
                            We are a dedicated team who make dynamic websites
                            and web based software solutions that are tailored
                            to the needs of each and every businesses at a very
                            affordable cost.
                        </p>
                        <p className="mt-[51px] mr-[95px] text-lg text-white">
                            Need Website or Web Based Softwares ???
                        </p>
                        <button
                            type="button"
                            className="text-white bg-blue-bluee hover:bg-blue-b1dark focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-bluee dark:hover:bg-blue-b1dark dark:focus:ring-blue-bluee mt-[46px] mr-auto font-bold text-base uppercase tracking-widest"
                        >
                            Request a quote
                        </button>
                    </div>
                    <div className="w-[627px] h-[550px] text-center font-extrabold text-3xl">
                        <img
                            src="https://www.infomin.solutions/static/images/ffffff1.jpg"
                            className="h-[550px] pt-7 pb-7 pl-14"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white mx-auto max-w-7xl py-4 p-6 lg:px-8">
                <div>
                    <h1 className="text-5xl text-center mt-16">Why us?</h1>
                    <p className="text-center mt-5">
                        No need to have a second thought because we specialize
                        in the following niches
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <img
                            src="https://www.infomin.solutions/static/images/1.jpg"
                            alt="1"
                            className="w-full aspect-square object-cover"
                        />
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#1C82B1] aspect-square flex flex-col justify-center items-center">
                                <div className="w-1/4  p-3 aspect-square bg-[#29B7DD] rounded-lg">
                                    <Icon1 />
                                </div>
                                <span className="text-2xl m-3 text-white">Development</span>
                            </div>
                            <div className="aspect-square bg-[#8B72EE] flex flex-col justify-center items-center">
                                <div className="bg-[#29b7dd] aspect-square w-1/4 p-3 rounded-lg">
                                    <Icon2 />
                                </div>
                                <span className="text-2xl m-3 text-white">Automation</span>
                            </div>
                            <div className="bg-[#5D3BE7] aspect-square flex flex-col justify-center items-center">
                                <div className="w-1/4 aspect-square bg-[#29b7dd] p-3 rounded-lg">
                                    <Icon3 />
                                </div>
                                <span className="text-2xl m-3 text-white">Optimization</span>
                            </div>
                            <div className="bg-[#BD72EF] aspect-square flex flex-col items-center justify-center">
                                <div className="w-1/4 p-3 aspect-square bg-[#29b7dd] rounded-lg">
                                    <Icon4 />
                                </div>
                                <span className="text-2xl text-white m-3">Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-screen">hello</section>
        </div>
    );
};

export default page;
