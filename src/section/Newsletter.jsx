import { IoArrowDown } from "react-icons/io5";

const Newsletter = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-[url(https://i.ibb.co.com/S04WYWQ/Bg-2.png)] bg-cover bg-no-repeat max-w-[1280px] rounded-3xl my-36 -mx-8 lg:-mx-4 xl:mx-auto">
                <div className="py-24">
                    <p className="text-white font-bold uppercase text-center">Have any project in your mind?</p>
                    <h2 className="text-5xl text-white uppercase font-medium py-6 text-center">let’s work together!</h2>
                    <div className="text-center mt-8">
                        <button className="uppercase butt border-none rounded-full text-white btn bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] !text-xs"><IoArrowDown className="px-1 ico -rotate-90 text-xl rounded-full bg-white text-black" />schedule a call</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;