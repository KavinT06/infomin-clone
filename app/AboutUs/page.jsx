import React from "react";

const page = () => {
    return (
        <div className="bg-[#3b065e] h-screen text-white">
            <div className="mx-auto max-w-7xl py-16 p-6 lg:px-8">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                        {/* <h1>Hello!</h1> */}
                        <h1 className={`text-[#00ccff] text-5xl font-custom`}>
                            Infomin Solutions
                        </h1>
                        <p className="text-lg">
                            Need Website or Web Based Softwares ???
                        </p>
                        <button
                            type="button"
                            className="text-white bg-blue-bluee hover:bg-blue-b1dark focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-bluee dark:hover:bg-blue-b1dark dark:focus:ring-blue-bluee mt-[46px] font-bold text-base uppercase tracking-widest"
                        >
                            REQUEST A QUOTE
                        </button>
                    </div>
                    <div>
                        <h1>img</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
