import React from "react";
import Form from "next/form";
import { Barlow } from "next/font/google";

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
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <h2>
                                Why To Hire <span>INFOMIN SOLUTIONS?</span>
                            </h2>
                            <h2>Very Affordable</h2>
                            <h2>Highly Professional</h2>
                            <h2>Client Friendly</h2>
                            <p>
                                Contact Us with your whatsapp number to get
                                reply through whatsapp. Infomin Solutions team
                                will hear you patiently, understand your needs
                                perfectly and will work with you to your
                                satisfaction.
                            </p>
                            <h2>Follow us</h2>
                        </div>
                        <div className="bg-[#29b7dd] h-screen rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <h1
                                    className={`text-[#3c065e] text-center text-5xl p-5 ${barlowf.className}`}
                                >
                                    Contact us For A <br /><span>Quote</span>
                                </h1>
                                <Form>
                                <input type="text" placeholder="Enter your Name" className="m-5 py-2 px-36 rounded-xl"/><br />
                                <input type="text" placeholder="Whatsapp Number (Optional)" className="m-5 py-2 px-36 rounded-xl"/><br />
                                <input type="text" placeholder="Enter a valid email address" className="m-5 py-2 px-36 rounded-xl"/><br /> 
                                <textarea name="" id="" placeholder="Enter your message" className="m-5 py-6 px-[153px] rounded-xl"></textarea><br />
                                <button className="bg-[#3c065e] py-4 px-52 m-5 items-center">SUBMIT</button>
                                </Form>
                            </div>
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
