// "use client";
import { Barlow, Roboto } from "next/font/google";
import React from "react";
import Icon1 from "./assets/svgs/icon1";
import Icon2 from "./assets/svgs/icon2";
import Icon3 from "./assets/svgs/icon3";
import Icon4 from "./assets/svgs/icon4";
import IconWhatsapp from "./assets/svgs/icconwhatsapp";
import IconEmail from "./assets/svgs/IconEmail";
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
                        <div className="bg-white text-black p-10 flex flex-col items-center justify-center">
                            <div className="w-1/3 p-6">
                                <IconEmail />
                            </div>
                            <p className="text-[#999999] text-2xl">Email Us:</p>
                            <Link href={"/"}>
                                <h4 className="underline">
                                    infomin.solutions@gmail.com
                                </h4>
                            </Link>
                            <Link href={"/"}>
                                <h4 className="underline">
                                    lamin@infomin.solutions
                                </h4>
                            </Link>
                        </div>
                        <div className="bg-white text-black p-10 flex flex-col justify-center items-center">
                            <div className="w-1/3 p-6">
                                <IconWhatsapp />
                            </div>{" "}
                            {/* ------------ Whatsapp icon ---------- */}
                            <h3 className="text-[#999999] text-2xl">
                                Whatsapp Us:
                            </h3>
                            <p typeof="tel" className="">
                                +91 94863 73838
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-10">
                        <h2>Privacy Policy</h2>
                        <h2>Refund, Cancellation, Return, Shipping Policy</h2>
                        <h2>Terms & Conditions</h2>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col justify-center items-center bg-[#333333] text-white p-10">
                <h3>Developed By Infomin Solutions</h3>
                <h3>Copyright 2024. All Rights Reserved</h3>
            </footer>
        </div>
    );
};

export default page;
