import Marquee from "react-fast-marquee";


const Banner = () => {
    return (
        <div className=" relative overflow-hidden h-60">
            <div className="bg-[#6C5AFF] absolute top-24 -rotate-6 -ml-6 lg:-ml-12 w-[110%] text-[#FFFFFF] uppercase py-4">
                <Marquee delay={0} speed={100}>
                    <div className=" flex justify-between space-x-24 lg:space-x-32 whitespace-nowrap">
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">ui ux design</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span>digital marketing</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">web development</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span>web design</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">digital marketing</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span>compliance</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">web design</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="pr-32">branding</span>
                    </div>
                </Marquee>
            </div>
            <div className="bg-[#FE634C] absolute top-24 flex text-[#FFFFFF] uppercase py-4 -ml-2 rotate-6 justify-between w-[120%]">
                <Marquee delay={0} direction="right" speed={100}>
                    <div className=" flex justify-between space-x-24 lg:space-x-32 whitespace-nowrap">
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">branding</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span>digital marketing</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">web development</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span>web design</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">ui ux design</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span>digital marketing</span>
                        <img className="w-7" src="https://i.ibb.co.com/ByGh4MG/Star-2.png" alt="" />
                        <span className="text-[#FFFFFF66]">compliance</span>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;