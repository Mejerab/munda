import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import { useEffect } from 'react';
import { IoArrowDown } from 'react-icons/io5';
const Testimonials = () => {
    useEffect(()=>{
        AOS.init({
            easing: 'ease-in-cubic',
            once: true
        })
    }, [])
    const handleClick = (id) => {
        const div1 = document.getElementById('div1');
        const div2 = document.getElementById('div2');
        const div3 = document.getElementById('div3');
        const div4 = document.getElementById('div4');
        const div5 = document.getElementById('div5');
        const div6 = document.getElementById('div6');
        const div7 = document.getElementById('div7');
        const div8 = document.getElementById('div8');
        const div9 = document.getElementById('div9');
        const divv1 = document.getElementById('divv1');
        const divv2 = document.getElementById('divv2');
        const divv3 = document.getElementById('divv3');
        const divv4 = document.getElementById('divv4');
        const divv5 = document.getElementById('divv5');
        const divv6 = document.getElementById('divv6');
        const divv7 = document.getElementById('divv7');
        const divv8 = document.getElementById('divv8');
        const divv9 = document.getElementById('divv9');
        if (id === 'btn1') {
            div1.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv1.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn2') {
            div2.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv2.classList.add('bg-[#FF6249]');
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn3') {
            div3.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv3.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn4') {
            div4.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv4.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn5') {
            div5.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv5.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn6') {
            div6.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv6.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn7') {
            div7.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv7.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn8') {
            div8.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv8.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
            div9.classList.remove('border');
            divv9.classList.remove('bg-[#FF6249]')
        }
        else if (id === 'btn9') {
            div9.classList = `bg-[#FAF4F8] p-1 rounded-full border border-[#FF6249]`
            divv9.classList.add('bg-[#FF6249]');
            div2.classList.remove('border');
            divv2.classList.remove('bg-[#FF6249]')
            div3.classList.remove('border');
            divv3.classList.remove('bg-[#FF6249]')
            div4.classList.remove('border');
            divv4.classList.remove('bg-[#FF6249]')
            div5.classList.remove('border');
            divv5.classList.remove('bg-[#FF6249]')
            div6.classList.remove('border');
            divv6.classList.remove('bg-[#FF6249]')
            div7.classList.remove('border');
            divv7.classList.remove('bg-[#FF6249]')
            div8.classList.remove('border');
            divv8.classList.remove('bg-[#FF6249]')
            div1.classList.remove('border');
            divv1.classList.remove('bg-[#FF6249]')
        }

    }
    return (
        <div className="max-w-[1280px] mx-auto my-32 px-3">
            <h2 className="text-5xl black uppercase leading-[1.2] mx-auto text-center font-medium lg:w-2/3">We have earned over <span className="text-[#6C5AFF]">6,000</span> reviews on <span className="text-[#FF6249]">Google</span> from our customers!</h2>
            <div className='grid grod-cols-1 lg:grid-cols-3 gap-9 mt-24 mb-16'>
                <div data-aos='fade-left' className='bg-[#FAF4F8] rounded-xl flex justify-center flex-col items-center'>
                    <div className='flex items-center gap-x-5 justify-start w-full pl-12 pt-8 '>
                        <img src="https://i.ibb.co.com/cT4Zppx/Image-11.png" alt="" />
                        <div>
                            <h4 className='text-lg font-semibold black mb-2'>Christine hanna</h4>
                            <Rating style={{ maxWidth: 80 }} value={5} readOnly />
                        </div>
                    </div>
                    <p className='text-sm font-medium w-[90%] p-8 pb-12 leading-[1.9]'>I recently had the pleasure of working with Nova Luna to revamp my website, and I couldn’t be more impressed with the results. From start to finish, their team demonstrated professionalism, creativity, and genuine commitment to bringing my vision to life. What truly sets... <button className='text-[#6C5AFF] hover:text-[#6C5AFF99] duration-100 transition'>Read More</button></p>
                </div>
                <div data-aos='fade-up' className='bg-[#FAF4F8] rounded-xl flex justify-center flex-col items-center'>
                    <div className='flex items-center gap-x-5 justify-start w-full pl-12 pt-8'>
                        <img src="https://i.ibb.co.com/Mp5v7cj/Image-12.png" alt="" />
                        <div>
                            <h4 className='text-lg font-semibold black mb-2'>Nicole Stange</h4>
                            <Rating style={{ maxWidth: 80 }} value={5} readOnly />
                        </div>
                    </div>
                    <p className='text-sm font-medium w-[90%] p-8 pb-12 leading-[1.9]'>Since the first phone call, I had the most assurance and confidence to move forward with my business. Nova Luna helped me shape my ideas by their organization and approach to creating my website. They were very focused on listing to my vision and guided it with technological... <button className='text-[#6C5AFF] hover:text-[#6C5AFF99] duration-100 transition'>Read More</button></p>
                </div>
                <div data-aos='fade-right' className='bg-[#FAF4F8] rounded-xl  flex justify-center flex-col items-center'>
                    <div className='flex items-center gap-x-5 justify-start w-full pl-12 pt-8'>
                        <img src="https://i.ibb.co.com/SnTrS1B/Image-13.png" alt="" />
                        <div>
                            <h4 className='text-lg font-semibold black mb-2'>Dr. Joseph Vetere</h4>
                            <Rating style={{ maxWidth: 80 }} value={5} readOnly />
                        </div>
                    </div>
                    <p className='text-sm font-medium w-[90%] p-8 pb-12 leading-[1.9]'>I can’t say enough great things about my experience with Jarred, Maitreya, and the entire Lunar Nova staff. At first I tried to do it on my own but I shortly realized I needed a pro. Right from our initial phone call I realized Jared was the best choice fro my <br /> projects... <button className='text-[#6C5AFF] hover:text-[#6C5AFF99] duration-100 transition'>Read More</button></p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col-reverse gap-y-3 justify-between'>
                <button className="uppercase w-fit butt border-none rounded-full text-white btn bg-gradient-to-r from-[#FF6249] to-[#6C5AFF] !text-sm"><IoArrowDown className="px-1 ico -rotate-90 text-xl rounded-full bg-white text-black" />view all reviews</button>
                <div className='bg-[#FAF4F8] rounded-full flex gap-x-1 px-5 py-3 items-center w-fit'>
                    <button onClick={() => handleClick('btn1')} className='test'>
                        <div id='div1' className='bg-[#FAF4F8] p-2 rounded-full border border-[#FF6249]'>
                            <div id='divv1' className='rounded-full w-2 h-2 bg-[#FF6249]'></div>
                        </div>
                    </button>
                    <button onClick={() => handleClick('btn2')} className='test'>
                        <div id='div2' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv2' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn3')} className='test'>
                        <div id='div3' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv3' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn4')} className='test'>
                        <div id='div4' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv4' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn5')} className='test'>
                        <div id='div5' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv5' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn6')} className='test'>
                        <div id='div6' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv6' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn7')} className='test'>
                        <div id='div7' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv7' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn8')} className='test'>
                        <div id='div8' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv8' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>

                    <button onClick={() => handleClick('btn9')} className='test'>
                        <div id='div9' className='bg-[#FAF4F8] p-1 rounded-full'>
                            <div id='divv9' className='bg-[#E2D4DE] rounded-full w-2 h-2'></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;