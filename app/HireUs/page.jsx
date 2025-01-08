import React from "react";
import Form from "next/form";
import Facebook from "../assets/svgs/Facebook";
import Instagram from "../assets/svgs/Instagram";
import { Barlow } from "next/font/google";
import Linkedin from "../assets/svgs/Linkedin";
import Youtube from "../assets/svgs/Youtube";

const barlowf = Barlow({
    weight: ["700", "400"],
    subsets: ["latin"],
});

const page = () => {
    return (
        <div>
            <section className="bg-[#3b065e] text-white">
                <div className="mx-auto max-w-7xl pb-16 p-6 pt-0 lg:px-8">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col items-start p-5 justify-center">
                            <h1
                                className={`text-[#00ccff] text-5xl font-custom`}
                            >
                                Infomin Solutions
                            </h1>
                            <p className="text-lg text-white text-justify mt-10">
                                We are a dedicated team who make dynamic
                                websites and web based software solutions that
                                are tailored to the needs of each and every
                                businesses at a very affordable cost.
                            </p>
                            <p className="text-lg mt-10">
                                Need Website or Web Based Softwares ???
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://www.infomin.solutions/static/images/ffffff1.jpg"
                                alt="home img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#3b065e] text-[#29b7dd]">
                <div className="mx-auto max-w-7xl pb-16 p-6 pt-0 lg:px-8">
                    <div className="grid grid-cols-2 ">
                        <div className="py-10 w-9/12">
                            <h2 className="text-xl">
                                Why To Hire <br />
                                <span
                                    className={`${barlowf.className} text-3xl font-bold`}
                                >
                                    INFOMIN SOLUTIONS?
                                </span>
                            </h2>
                            <div
                                className={`${barlowf.className} text-3xl font-bold my-5`}
                            >
                                <h2 className="my-5">Very Affordable</h2>
                                <h2 className="my-5">Highly Professional</h2>
                                <h2>Client Friendly</h2>
                            </div>
                            <p className="text-xl">
                                Contact Us with your whatsapp number to get
                                reply through whatsapp. Infomin Solutions team
                                will hear you patiently, understand your needs
                                perfectly and will work with you to your
                                satisfaction.
                            </p>
                            <h2
                                className={`${barlowf.className} text-3xl font-bold my-5`}
                            >
                                Follow us
                            </h2>
                            <div className="flex fill-[#29b7dd] pt-2">
                                <div className="w-7 mr-1">
                                    <Facebook />
                                </div>
                                <div className="w-7 mx-1">
                                    <Instagram />
                                </div>
                                <div className="w-7 mx-1">
                                    <Linkedin />
                                </div>
                                <div className="w-7 mx-0">
                                    <Youtube />
                                </div>
                            </div>
                            <p className="text-lg my-10">
                                ©2023 Privacy policy
                            </p>
                        </div>
                        <div className="bg-[#29b7dd] pb-20 rounded-xl">
                            <h1
                                className={`text-[#3c065e] text-center text-5xl p-5 ${barlowf.className}`}
                            >
                                Contact us For A <br />
                                <span>Quote</span>
                            </h1>
                            <Form className="p-10 w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    className="my-5 p-2 w-full rounded-xl"
                                />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Whatsapp Number (Optional)"
                                    className="my-5 p-2 w-full rounded-xl"
                                />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter a valid email address"
                                    className="my-5 p-2 w-full rounded-xl"
                                />
                                <br />
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Enter your message"
                                    className="my-5 p-3 w-full h-32 rounded-xl"
                                ></textarea>
                                <br />
                                <button className="bg-[#3c065e] py-4 w-full my-5 items-center text-lg font-bold font-osans">
                                    SUBMIT
                                </button>
                            </Form>
                        </div>
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
