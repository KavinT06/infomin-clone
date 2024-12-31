// "use client";
import { Barlow, Roboto } from "next/font/google";
import React from "react";
import Icon1 from "./assets/svgs/icon1";
import Icon2 from "./assets/svgs/icon2";
import Icon3 from "./assets/svgs/icon3";
import Icon4 from "./assets/svgs/icon4";
import CustomButton from "./custom_button";
import Link from "next/link";

const barlowf = Barlow({
    weight: ["700", "400"],
    subsets: ["latin"],
});

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});
const page = () => {
    return (
        <div>
            <section className="bg-purple-main">
                <div className={"flex justify-center"}>
                    <div className={"w-[513px] h-[550px]"}>
                        <h1
                            className={`text-blue-bluee text-start text-5xl mt-[62px] font-custom`}
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
                        {/* <CustomButton /> */}
                    </div>
                    <div className="w-[627px] h-[550px] text-center font-extrabold text-3xl">
                        <img
                            src="https://www.infomin.solutions/static/images/ffffff1.jpg"
                            className="h-[550px] pt-7 pb-7 pl-14"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white mx-auto max-w-7xl py-16 p-6 lg:px-8">
                <div>
                    <h1 className="text-5xl text-center">Why us?</h1>
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
                                <span className="text-2xl m-3 text-white">
                                    Development
                                </span>
                            </div>
                            <div className="aspect-square bg-[#8B72EE] flex flex-col justify-center items-center">
                                <div className="bg-[#29b7dd] aspect-square w-1/4 p-3 rounded-lg">
                                    <Icon2 />
                                </div>
                                <span className="text-2xl m-3 text-white">
                                    Automation
                                </span>
                            </div>
                            <div className="bg-[#5D3BE7] aspect-square flex flex-col justify-center items-center">
                                <div className="w-1/4 aspect-square bg-[#29b7dd] p-3 rounded-lg">
                                    <Icon3 />
                                </div>
                                <span className="text-2xl m-3 text-white">
                                    Optimization
                                </span>
                            </div>
                            <div className="bg-[#BD72EF] aspect-square flex flex-col items-center justify-center">
                                <div className="w-1/4 p-3 aspect-square bg-[#29b7dd] rounded-lg">
                                    <Icon4 />
                                </div>
                                <span className="text-2xl text-white m-3">
                                    Support
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#3b065e] text-white">
                <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                    <div className="flex">
                        <div className="w-8/12">
                            <h3
                                className={`font-bold text-6xl ${barlowf.className}`}
                            >
                                Web Software Developers
                            </h3>
                            <img
                                src="https://www.infomin.solutions/static/images/ssssss.jpg"
                                alt="Development"
                            />
                        </div>
                        <div className="w-4/12">
                            <div className="p-16">
                                <h1 className="font-bold text-xl">1.GOALS</h1>
                                <p>
                                    Anyone can create a masterpiece but we
                                    always focus on being user-friendly - Yes,
                                    our projects are user-friendly and our team
                                    is client-friendly.
                                </p>
                                <Link href={"/"}>
                                    <h3 className="underline underline-offset-4 m-3 font-bold">
                                        ABOUT US
                                    </h3>
                                </Link>
                            </div>
                            <div className="p-16">
                                <h1 className="font-bold text-xl">
                                    2.STRATEGY
                                </h1>
                                <p>
                                    Simplicity is our strategy, Perseverence is
                                    our path - We are interested in making
                                    things possible that appear impossible to
                                    others - And at a very affordable cost.
                                </p>
                                <Link href={"/"}>
                                    <h3 className="underline underline-offset-4 m-3 font-bold">
                                        HIRE US
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6">
                        <img
                            src="https://www.infomin.solutions/static/images/Untitled-1-min1.jpg"
                            alt="web solutions"
                        />
                        <div className="p-12">
                            <h2
                                className={`text-[#00ccff] ${roboto.className} text-5xl font-extrabold mb-5`}
                            >
                                All Web Solutions
                            </h2>
                            <p>
                                We are at your service for any web based
                                automation works, web app developments, static
                                and dynamic websites and customizations. We are
                                dedicated in creating new value through digital
                                transformation at a very affordable cost.
                            </p>
                            <button
                                type="button"
                                className="text-white bg-blue-bluee hover:bg-blue-b1dark focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-bluee dark:hover:bg-blue-b1dark dark:focus:ring-blue-bluee mt-[46px] mr-auto font-bold text-base uppercase tracking-widest"
                            >
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-12">
                            <h2
                                className={`text-[#00ccff] ${roboto.className} text-5xl font-extrabold mb-5`}
                            >
                                Order By Whatsapp System
                            </h2>
                            <p>
                                Whatsapp Based E-commerce Website for small and
                                medium businesses - Readymade but customizable
                                as per the needs of each and every individual
                                businesses.
                            </p>
                            <button
                                type="button"
                                className="text-white bg-blue-bluee hover:bg-blue-b1dark focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-bluee dark:hover:bg-blue-b1dark dark:focus:ring-blue-bluee mt-[46px] mr-auto font-bold text-base uppercase tracking-widest"
                            >
                                CLICK TO KNOW MORE
                            </button>
                        </div>
                        <img
                            src="https://www.infomin.solutions/static/images/wh.jpg"
                            alt="Order Whatsapp"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h1
                                className={`${barlowf.className} text-5xl p-10`}
                            >
                                We are directly involved in the process
                            </h1>
                            <div className="p-1 bg-[#00ccff] w-20 ml-10"></div>
                            <p className={`${barlowf.className} p-10 text-3xl`}>
                                We make beautiful websites, user-friendly web
                                apps and dynamic web based softwares.
                            </p>
                        </div>
                        <div className="text-base p-12">
                            <p className="mb-8">
                                We do not outsource, we are directly involved in
                                web app making. We are down to earth in hearing
                                the needs of each and every individual, explain
                                everything clearly before accepting the work.
                            </p>
                            <p>
                                We collaborate and co-operate with our clients
                                to complete works on time. Our team always fully
                                understands the needs of the clients and makes
                                things mutually clear about what is needed, how
                                to be done and duration of the work before
                                committing.
                            </p>
                            <button
                                type="button"
                                className="text-white bg-blue-bluee hover:bg-blue-b1dark focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-bluee dark:hover:bg-blue-b1dark dark:focus:ring-blue-bluee mt-[46px] mr-auto font-bold text-base uppercase tracking-widest"
                            >
                                VERY AFFORDABLE TOO
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#3b065e] text-white">
                <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                    <h2 className="text-5xl text-center">Get in Touch!</h2>
                    <p className="text-lg text-center m-6">
                        We are easily accessible and always client-friendly
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white text-black p-28">
                            <p className="text-[#999999] text-center text-2xl m-4">
                                Email Us:
                            </p>
                            <Link href={"/"}>
                                <h4 className="underline text-center">
                                    infomin.solutions@gmail.com
                                </h4>
                            </Link>
                            <Link href={"/"}>
                                <h4 className="underline text-center">
                                    lamin@infomin.solutions
                                </h4>
                            </Link>
                        </div>
                        <div className="bg-white text-black p-28">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </span>
                            {/* ------------ Whatsapp icon ---------- */}
                            <h3 className="text-[#999999] text-center text-2xl m-4">
                                Whatsapp Us:
                            </h3>
                            <p typeof="tel" className="text-center">
                                +91 94863 73838
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
