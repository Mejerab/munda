import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Stategy = () => {
    useEffect(()=>{
        AOS.init({
            easing: 'ease-in-cubic',
            once: true
        })
    }, [])
    return (
        <div className="pt-0 pb-24 lg:py-24 bg-[url(https://i.ibb.co.com/B4KrRyK/Bg.png)] bg-cover">
            <div className="flex justify-between max-w-[1280px] mx-auto lg:flex-row flex-col gap-y-3 px-3">
                <div data-aos='fade-left'>
                    <h2 className="text-5xl black uppercase font-semibold leading-[1.2]">Our <br /> strategy <br /> approach</h2>
                    <p className="text-[#383838] font-semibold text-sm w-72 leading-[1.8] mt-8">When you have the right foundation, your business will grow. Our agency combines website design and branding with the right online tools to accelerate your business success.</p>
                </div>
                <div data-aos='fade-right'>
                    <div className="flex border-b parent hover:-translate-x-1 delay-150 duration-300 transition py-5 border-gray-300">
                        <div className="bg-white p-5 child rounded-full w-fit h-fit"><img className="w-5" src="https://i.ibb.co.com/68GFrGs/telescope-1.png" alt="" /></div>
                        <div className="ml-7">
                            <h4 className="text-xl font-semibold">Discovery</h4>
                            <p className="no-black text-sm font-semibold leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="flex border-b parent hover:-translate-x-1 delay-150 duration-300 transition py-5 border-gray-300">
                        <div className="bg-white p-5 child rounded-full w-fit h-fit"><img className="w-5" src="https://i.ibb.co.com/z4prxhj/branding-1.png" alt="" /></div>
                        <div className="ml-7">
                            <h4 className="text-xl font-semibold">Branding</h4>
                            <p className="no-black text-sm font-semibold leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="flex border-b parent hover:-translate-x-1 delay-150 duration-300 transition py-5 border-gray-300">
                        <div className="bg-white p-5 child rounded-full w-fit h-fit"><img className="w-5" src="https://i.ibb.co.com/4pSxH22/customize-computer-1.png" alt="" /></div>
                        <div className="ml-7">
                            <h4 className="text-xl font-semibold">Design</h4>
                            <p className="no-black text-sm font-semibold leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="flex border-b parent hover:-translate-x-1 delay-150 duration-300 transition py-5 border-gray-300">
                        <div className="bg-white p-5 child rounded-full w-fit h-fit"><img className="w-5" src="https://i.ibb.co.com/NYdtKJH/calendar-lines-pen-1.png" alt="" /></div>
                        <div className="ml-7">
                            <h4 className="text-xl font-semibold">Content</h4>
                            <p className="no-black text-sm font-semibold leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="flex border-b parent hover:-translate-x-1 delay-150 duration-300 transition py-5 border-gray-300">
                        <div className="bg-white p-5 child rounded-full w-fit h-fit"><img className="w-5" src="https://i.ibb.co.com/k9NNdP4/laptop-mobile-1.png" alt="" /></div>
                        <div className="ml-7">
                            <h4 className="text-xl font-semibold">Build</h4>
                            <p className="no-black text-sm font-semibold leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="flex border-b parent hover:-translate-x-1 delay-150 duration-300 transition py-5 border-gray-300">
                        <div className="bg-white p-5 child rounded-full w-fit h-fit"><img className="w-5" src="https://i.ibb.co.com/NnKqc0k/internet-speed-wifi-1.png" alt="" /></div>
                        <div className="ml-7">
                            <h4 className="text-xl font-semibold">Testing</h4>
                            <p className="no-black text-sm font-semibold leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stategy;