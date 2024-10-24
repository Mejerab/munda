import AOS from "aos";
import { useEffect } from "react";
import { IoArrowDown } from "react-icons/io5";

const Newsletter = () => {
    useEffect(()=>{
        AOS.init({
            offset: 200,
            easing: "ease-in-out"
        })
    }, [])
    return (
        <div className="overflow-hidden">
            <div data-aos="fade-up" className="bg-[url(https://i.ibb.co.com/S04WYWQ/Bg-2.png)] bg-cover bg-no-repeat max-w-[1280px] rounded-3xl my-12 -mx-8 lg:-mx-4 xl:mx-auto">
                <div className="py-24">
                    <p data-aos='fade-right' className="text-white font-bold uppercase text-center">Have any project in your mind?</p>
                    <h2 data-aos='fade-left' className="text-5xl text-white uppercase font-medium py-6 text-center">let’s work together!</h2>
                    <div data-aos='fade-right' className="text-center mt-8">
                        <button className="uppercase butt border-none rounded-full text-white btn bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] !text-[17px]"><IoArrowDown className="px-1 ico -rotate-90 text-xl rounded-full bg-white text-black" />schedule a call</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;