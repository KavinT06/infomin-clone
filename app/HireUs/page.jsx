import React from "react";

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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
