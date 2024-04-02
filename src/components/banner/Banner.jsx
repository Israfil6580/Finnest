
import bannerImg from '../../assets/Rectangle 2.png'
import circle from '../../assets/circle.png'
import hrLine from '../../assets/horizontal_line.png'
import { TfiArrowTopRight } from "react-icons/tfi";
import paymentSolution from '../../assets/Group 6.png'
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-center text-[274px] leading-[283px]">Fast funds</h1>
            </div>
            <div>
                <div className="pt-24 gap-12 flex justify-end flex-col lg:flex-row">
                    <div className='w-[50%]'>
                        <div className='relative '>
                            <img src={circle} alt="" />
                            <img src={hrLine} className='absolute bottom-0' alt="" />
                            <div className='absolute bottom-0'>
                                <img src={bannerImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h1 className="text-[120px] tracking-wide leading-[130px] font-bold">Instant settlement</h1>
                        <p className="py-6 font-roboto text-xl text-[#505050] leading-[33px]">Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management. Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management.</p>
                        <button className="flex gap-3 items-center border-b-2 pb-1 border-[#EF7F83] text-[#EF7F83] text-xl font-bold font-roboto hover:border-black hover:text-black duration-200">Get Started <TfiArrowTopRight /></button>

                        <div className='flex gap-5 mt-12'>
                            <div className='w-2/4 rounded-[40px] bg-white p-8'>

                                <div className='flex justify-between'>
                                    <span className='text-5xl'>41k</span>
                                    <button className="border p-1 border-[#EF7F83] text-[#EF7F83] text-xl w-12 rounded-full h-12 flex items-center justify-center hover:text-black hover:border-black duration-200 "><TfiArrowTopRight /></button>
                                </div>
                                <p className='font-roboto text-lg text-[#505050] pt-9 pl-7 leading-[27px]'>seems like your request is a bit unclear. It appears you're looking for information or assistance </p>

                            </div>
                            <div className='w-2/4 rounded-[40px] bg-white p-8 flex flex-col justify-between'>
                                <div className='flex justify-between items-start'>
                                    <div className='flex gap-[6px]'>
                                        <div className='w-3 h-3 bg-[#040404] rounded-full'></div>
                                        <div className='w-3 h-3 bg-[#04040426] rounded-full'></div>
                                    </div>
                                    <div className='relative -top-6'>
                                        <img className='h-14 w-auto object-cover' src={paymentSolution} alt="" />
                                    </div>
                                </div>
                                <div className='text-center mx-auto lg:w-[60%] relative -top-4'>
                                    <h2 className='text-xl font-semibold font-roboto leading-[26px]'>Instant Payment Solutions</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <button className='border border-[#EF7F83] text-[#040404] hover:border-black hover:text-black duration-200 rounded-full font-roboto px-4 py-2 text-lg'>Get paid</button>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <circle cx="22" cy="22" r="22" fill="#F7F7F5" />
                                        <path d="M22.0004 11.7856L23.9505 20.0498L32.2147 21.9999L23.9505 23.95L22.0004 32.2142L20.0503 23.95L11.7861 21.9999L20.0503 20.0498L22.0004 11.7856Z" fill="#040404" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;