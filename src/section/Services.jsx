import { IoArrowDown } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
    useEffect(()=>{
        AOS.init({
            once: true
        })
    }, [])
    return (
        <div className="max-w-[1280px] mx-auto  px-3 min-h-screen flex flex-col justify-evenly">
            <div className="flex lg:flex-row flex-col justify-between">
                <h2 data-aos='fade-left' className="text-5xl black uppercase font-medium">our <br />
                    services</h2>
                <p data-aos='fade-right' className="text-[#383838] font-medium text-sm w-2/3 mt-3 lg:mt-0 lg:w-1/4 leading-relaxed">We work closely with our clients to understand their objectives, target audience, and unique needs. We use our creative skills to translate these requirements and practical design solutions.</p>
            </div>
            <div data-aos='fade-up' className="grid grid-cols-2 gap-y-4 lg:grid-cols-6 my-12">
                <div className="rounded-lg shadow-xl p-[0.06rem] bg-none hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] hover:-translate-y-1 delay-150 duration-300 transition">
                    <div className="h-full grid gap-y-7 items-center justify-center bg-white text-center rounded-lg">
                        <div className="bg-[#FAF4F8] mt-7 w-fit rounded-full p-5 mx-auto">
                            <img className="w-6" src="https://i.ibb.co.com/x1Ykmg4/bullseye-arrow-1.png" alt="" />
                        </div>
                        <p className="font-semibold uppercase text-sm">Digital marketing</p>
                        <div className="flex justify-center w-full">
                            <button className="btn w-fit p-2 mb-7 hover:text-white text-black bg-white hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] btn-sm rounded-full"><IoArrowDown className="font-bold -rotate-[130deg]" /></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl p-[0.06rem] bg-none hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] hover:-translate-y-1 delay-150 duration-300 transition">
                    <div className="h-full grid gap-y-7 items-center justify-center bg-white text-center rounded-lg">
                        <div className="bg-[#FAF4F8] mt-7 w-fit rounded-full p-5 mx-auto">
                            <img className="w-6" src="https://i.ibb.co.com/hDmsz6d/site-alt-1.png" alt="" />
                        </div>
                        <p className="font-semibold uppercase text-sm">Web development</p>
                        <div className="flex justify-center w-full">
                            <button className="btn w-fit p-2 mb-7 hover:text-white text-black bg-white hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] btn-sm rounded-full"><IoArrowDown className="font-bold -rotate-[130deg]" /></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl p-[0.06rem] bg-none hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] hover:-translate-y-1 delay-150 duration-300 transition">
                    <div className="h-full grid gap-y-7 items-center justify-center bg-white text-center rounded-lg">
                        <div className="bg-[#FAF4F8] mt-7 w-fit rounded-full p-5 mx-auto">
                            <img className="w-6" src="https://i.ibb.co.com/z4prxhj/branding-1.png" alt="" />
                        </div>
                        <p className="font-semibold uppercase text-sm">branding</p>
                        <div className="flex justify-center w-full">
                            <button className="btn w-fit p-2 mb-7 hover:text-white text-black bg-white hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] btn-sm rounded-full"><IoArrowDown className="font-bold -rotate-[130deg]" /></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl p-[0.06rem] bg-none hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] hover:-translate-y-1 delay-150 duration-300 transition">
                    <div className="h-full grid gap-y-7 items-center justify-center bg-white text-center rounded-lg">
                        <div className="bg-[#FAF4F8] mt-7 w-fit rounded-full p-5 mx-auto">
                            <img className="w-6" src="https://i.ibb.co.com/549RHK5/Vector.png" alt="" />
                        </div>
                        <p className="font-semibold uppercase text-sm">web design</p>
                        <div className="flex justify-center w-full">
                            <button className="btn w-fit p-2 mb-7 hover:text-white text-black bg-white hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] btn-sm rounded-full"><IoArrowDown className="font-bold -rotate-[130deg]" /></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl p-[0.06rem] bg-none hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] hover:-translate-y-1 delay-150 duration-300 transition">
                    <div className="h-full grid gap-y-7 items-center justify-center bg-white text-center rounded-lg">
                        <div className="bg-[#FAF4F8] mt-7 w-fit rounded-full p-5 mx-auto">
                            <img className="w-6" src="https://i.ibb.co.com/GVS0qQf/Vector-1.png" alt="" />
                        </div>
                        <p className="font-semibold uppercase text-sm">Compliance</p>
                        <div className="flex justify-center w-full">
                            <button className="btn w-fit p-2 mb-7 hover:text-white text-black bg-white hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] btn-sm rounded-full"><IoArrowDown className="font-bold -rotate-[130deg]" /></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl p-[0.06rem] bg-none hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] hover:-translate-y-1 delay-150 duration-300 transition">
                    <div className="h-full grid gap-y-7 items-center justify-center bg-white text-center rounded-lg">
                        <div className="bg-[#FAF4F8] mt-7 w-fit rounded-full p-5 mx-auto">
                        <img className="w-6" src="https://i.ibb.co.com/x1Ykmg4/bullseye-arrow-1.png" alt="" />
                        </div>
                        <p className="font-semibold uppercase text-sm">software development</p>
                        <div className="flex justify-center w-full">
                            <button className="btn w-fit p-2 mb-7 hover:text-white text-black bg-white hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] btn-sm rounded-full"><IoArrowDown className="font-bold -rotate-[130deg]" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;