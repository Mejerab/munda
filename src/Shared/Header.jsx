import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Header = () => {
    const handleClick = () =>{
        document.getElementById('item').scrollIntoView({behavior: 'smooth'})
    }
    const lists = <>
        <li className="border hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] transition-transform hover:text-white rounded-full mx-2"><a href="#">home</a></li>
        <li className="border hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] transition-transform hover:text-white rounded-full mx-2"><a href="#">About Us</a></li>
        <li className="border hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] transition-transform hover:text-white rounded-full mx-2"><a href="#">services</a></li>
        <li className="border hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] transition-transform hover:text-white rounded-full mx-2"><a href="#">work</a></li>
        <li className="border hover:bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] transition-transform hover:text-white rounded-full mx-2"><a href="#">contact us</a></li>
    </>
    return (
        <header>
            <div className="bg-[url(https://i.ibb.co.com/Z1Cj3w7/Bg-3.png)] bg-cover bg-no-repeat relative min-h-screen">
                <div className="navbar items-center max-w-[1280px] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm transition-colors dropdown-content flex gap-y-2 bg-base-100 uppercase rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {lists}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl"><img className="w-32" src="https://i.ibb.co.com/tJ1ntpZ/Logo.png" alt="" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu transition-colors menu-horizontal rounded-full uppercase text-xs px-1">
                            {lists}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="uppercase border-none rounded-full text-white btn bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] !text-xs duration-500 butt hover:bg-white"><FiPhoneCall className="px-1 ico text-xl rounded-full bg-white text-black" /> book a call</button>
                    </div>
                </div>
                <h2 className="xl:w-3/5 xl:mt-0 mt-24 lg:mt-36 w-full mx-auto text-center text-7xl leading-none py-20 text-[#11121C] font-medium uppercase">We build Brands, website, & Digital <span className="inline-block lg:hidden">Systems</span><span className="hidden lg:inline-block">Experiences</span></h2>
                <div className="flex justify-center mt-24 xl:mt-0 lg:mt-36 relative bottom-7">
                    <div className="bg-[#ffffff80] rounded-full">
                        <img className="w-32" src="https://i.ibb.co.com/CQzYzkC/Text.png" alt="" />
                    </div>
                    <button onClick={handleClick} className="btn absolute top-7 bg-white rounded-full w-[4.5rem] h-[4.5rem]">
                        <HiOutlineArrowNarrowDown className="text-2xl" />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden">
                <div id="item" className="flex justify-between lg:flex-row flex-col gap-y-2 lg:gap-y-0">
                    <button><img className="h-64 -ml-16 lg:ml-0" src="https://i.ibb.co.com/T1BpD1k/Image.png" alt="" /></button>
                    <button><img className="h-64" src="https://i.ibb.co.com/YdZLmM7/Image-1.png" alt="" /></button>
                    <button><img className="h-64 ml-16 lg:ml-0" src="https://i.ibb.co.com/r0jkqCg/Image-2.png" alt="" /></button>
                </div>
                <div className="flex justify-between mt-6 lg:flex-row flex-col gap-y-2 lg:gap-y-0">
                    <button><img className="h-64" src="https://i.ibb.co.com/ZYbDLF7/Image-3.png" alt="" /></button>
                    <button className=""><img className="h-64" src="https://i.ibb.co.com/SdSMYdc/Image-4.png" alt="" /></button>
                    <button className=""><img className="h-64" src="https://i.ibb.co.com/wSzr0Gc/Image-5.png" alt="" /></button>
                    <button><img className="h-64 lg:ml-0 ml-auto" src="https://i.ibb.co.com/FKL2z09/Image-6.png" alt="" /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;