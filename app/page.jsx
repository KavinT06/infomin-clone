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
                            <div className="bg-[#1C82B1] aspect-square">
                                <span className="text-2xl">Development</span>
                                <div className="h-20 w-24">
                                    <Icon1 />
                                </div>
                            </div>
                            <div className="aspect-square bg-[#8B72EE]">
                                <span>Automation</span>
                                <div className="h-20 w-24">
                                    <Icon2 />
                                </div>
                            </div>
                            <div className="bg-[#5D3BE7] aspect-square">
                                <span className="">Optimization</span>
                                <div className="h-20 w-24">
                                    <Icon3 />
                                </div>
                            </div>
                            <div className="bg-[#BD72EF] aspect-square">
                                <span>Support</span>
                                <div className="h-20 w-24">
                                    <Icon4 />
                                </div>
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
