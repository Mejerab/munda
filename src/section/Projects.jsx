import AOS from "aos";
import { useEffect } from "react";
import { IoArrowDown } from "react-icons/io5";

const Projects = () => {
    useEffect(()=>{
        AOS.init({
            easing: 'ease-in-out',
            once: true
        })
    }, [])
    return (
        <div className="bg-[url(https://i.ibb.co.com/ZYfkLTv/Bg-1.png)] py-24 bg-cover bg-no-repeat">
            <div className="mx-auto max-w-[1280px] px-3">
                <h2 className="text-5xl text-white uppercase font-medium text-center leading-[1.2] mb-16">some of our <br />
                    awesome projects</h2>
                <div className="grid grid-cols-2 gap-y-12 gap-x-6 justify-between">
                    <div data-aos="fade-left">
                        <img src="https://i.ibb.co.com/PrCjRKy/Image-7.png" alt="" />
                        <div className="my-6">
                            <span className="mr-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] text-[#FFFFFF26] py-1 px-3">Finance</span>
                            <span className="ml-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] font-semibold text-[#FFFFFF26] py-1 px-3">UI/UX</span>
                            <h5 className="text-white font-medium my-6 text-lg">Payoobel - Financial Services website</h5>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="ml-auto">
                        <img src="https://i.ibb.co.com/tqqFhMJ/Image-8.png" alt="" />
                        <div className="my-6">
                            <span className="mr-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] text-[#FFFFFF26] py-1 px-3">Finance</span>
                            <span className="ml-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] font-semibold text-[#FFFFFF26] py-1 px-3">UI/UX</span>
                            <h5 className="text-white font-medium my-6 text-lg">Modish - Renewable Energy Website</h5>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <img src="https://i.ibb.co.com/WDjXKcp/Image-9.png" alt="" />
                        <div className="my-6">
                            <span className="mr-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] text-[#FFFFFF26] py-1 px-3">Finance</span>
                            <span className="ml-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] font-semibold text-[#FFFFFF26] py-1 px-3">UI/UX</span>
                            <h5 className="text-white font-medium my-6 text-lg">Krete - Webstore design [UX/UI]</h5>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="ml-auto">
                        <img src="https://i.ibb.co.com/zHdQKfT/Image-10.png" alt="" />
                        <div className="my-6">
                            <span className="mr-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] text-[#FFFFFF26] py-1 px-3">Finance</span>
                            <span className="ml-2 border-[#FFFFFF26] border rounded-full w-fit text-[17px] font-semibold text-[#FFFFFF26] py-1 px-3">UI/UX</span>
                            <h5 className="text-white font-medium my-6 text-lg">Solara - Solar Panel Landing Page</h5>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="uppercase butt border-none rounded-full text-white btn bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] !text-[17px]"><IoArrowDown className="px-1 ico -rotate-90 text-xl rounded-full bg-white text-black" />view all projects</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;