// "use client";
import { Barlow } from "next/font/google";
import React from "react";

const barlow = Barlow({
    weight: ["700"],
    subsets: ["latin"],
});

const page = () => {
    return (
        <div>
            <section className="bg-purple-main h-[551px]">
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
            <section className={"h-[843px]"}>
                <div className=" object-center mt-16 mr-auto mb-0 ml-auto">{/* h-[53px] w-[527px] */}
                    <h1 className="text-center font-bold text-5xl">WHY US?</h1>
                    <p className="mt-5 mr-60 ml-60 text-center text-base">No need to have a second thought because we specialize in the following niches</p>
                    <img src="https://www.infomin.solutions/static/images/1.jpg" alt="1" className="w-[547px] h-[526px] object-cover block mt-[50px] mr-[195px] mb-[50px] ml-[195px]"/>
                </div> 
            </section>
        </div>
    );
};

export default page;
