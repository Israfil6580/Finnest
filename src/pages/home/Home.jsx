import { useState } from 'react';
import Hamburger from 'hamburger-react'
import logo from '../../assets/logo.svg'
import banner from '../../assets/Banner/banner_img.png'
import bannerCircle from '../../assets/Banner/Circle_for_banner.png'
import circleBottom from '../../assets/Banner/circle_bottom.png'
import smallBanner from '../../assets/Banner/small_img_banner.png'
import { RxArrowTopRight } from "react-icons/rx";
import paymentsolution from "../../assets/Payment_Solution/security_img.png"
import paymentfaster from "../../assets/Payment_Solution/payment_faster_img.png"
import social from "../../assets/Social.svg"
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='text-base'>
            <nav>
                <div className="container flex flex-wrap items-center justify-between mx-auto py-6">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-full w-full" />
                    </a>

                    <div className='flex items-center'>
                        <a href="#_" className="lg:inline-flex hidden items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:shadow-outline focus:outline-none text-base">
                            Login
                        </a>
                        <div className='border-title rounded-full border'>
                            <Hamburger size={'24'} toggled={isOpen} toggle={setIsOpen} />
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} w-full duration-300`} id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
                            <li className='text-left'>
                                <a href="#" className="block py-2 px-3 text-white bg-[#EF7F83] rounded" aria-current="page">Home</a>
                            </li>
                            <li className='text-left'>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                            </li>
                            <li className='text-left'>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                            </li>
                            <li className='text-left'>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* navbar end */}
            {/* home huge text */}
            <div className='container mx-auto'>
                <h1 className='lg:text-[274px] text-[100px] font-title leading-[87%]'>Fast funds</h1>
            </div>
            {/* banner */}
            <div className='lg:flex container mx-auto gap-14 pt-28'>
                <div className='w-2/4 relative -top-20'>
                    <div className='relative'>
                        <img src={banner} alt="" className='w-full h-auto absolute z-20 bottom-0 object-cover' />
                        <div>
                            <img src={bannerCircle} alt="" className='w-full h-auto relative top-20' />
                            <img src={circleBottom} alt="" className='w-full h-auto' />
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/4 w-full'>
                    <div>
                        <h1 className='font-title text-[60px] lg:text-[120px] leading-[115%] text-title'>Instant settlement</h1>
                        <p className='text-default leading-[150%] pt-5 pb-8'>Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management. Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management.</p>
                        <button className='border-b-2 flex items-center gap-2 pb-2 text-[#EF7F83] font-bold'>Get Started <RxArrowTopRight /></button>
                    </div>
                    <div className='lg:flex gap-4 mt-8'>
                        <div className='basis-full lg:basis-2/4 bg-white lg:rounded-default px-8 py-4'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-5xl font-title'>41K</h2>
                                <div className='border border-[#EF7F83] h-12 w-12 rounded-full flex justify-center items-center text-[#EF7F83]'>
                                    <RxArrowTopRight className='text-3xl' />
                                </div>
                            </div>
                            <p className='text-sm py-4 leading-[150%] text-default'>seems like your request is a bit unclear. It appears you're looking for information or assistance </p>
                        </div>
                        <div className='basis-full lg:basis-2/4 bg-white lg:rounded-default px-8 py-8'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <div className='h-3 w-3 rounded-full bg-title'></div>
                                    <div className='h-3 w-3 rounded-full bg-[#04040426]'></div>
                                </div>
                                <div className='relative -top-5'>
                                    <img src={smallBanner} alt="" />
                                </div>
                            </div>
                            <div className='lg:w-[60%] mx-auto text-center'>
                                <h2 className='leading-[130%] text-default text-base font-bold'>Instant Payment Solutions</h2>
                            </div>
                            <div className='flex justify-between items-center pt-6'>
                                <button className='border border-default rounded-full py-1 px-4'>Get paid</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <circle cx="22" cy="22" r="22" fill="#F7F7F5" />
                                    <path d="M22.0004 11.7856L23.9505 20.0498L32.2147 21.9999L23.9505 23.95L22.0004 32.2142L20.0503 23.95L11.7861 21.9999L20.0503 20.0498L22.0004 11.7856Z" fill="#040404" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* swipt payment solution */}
            <div>

                <div className="container mx-auto">
                    <div className='text-center mx-auto w-3/5 pb-8'>
                        <h1 className='text-[100px] font-title leading-[110%] text-title'>Swift Payment Solutions</h1>
                    </div>

                    <div>
                        <div className="grid grid-cols-12 grid-rows-2 gap-6 pb-32">
                            <div className="col-span-4 row-span-2 bg-white rounded-[40px] pb-4">

                                <div className="w-full p-6 relative">
                                    <img src={paymentsolution} alt="" className="object-cover object-center w-full h-full" />
                                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] text-center'>
                                        <h1 className='text-white text-[40px] font-title leading-[52px]'>Gain financial security</h1>
                                    </div>
                                </div>
                                <div className='px-8'>
                                    <div className='flex cursor-pointer hover:text-[#505050] duration-200  justify-between items-center'>
                                        <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>EarnSwift Finance</h2>
                                        <RxArrowTopRight className='text-[24px]' />
                                    </div>
                                    <hr className='my-3' />
                                    <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                        <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>QuickPay Finance</h2>
                                        <RxArrowTopRight className='text-[24px]' />
                                    </div>
                                    <hr className='my-3' />
                                    <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                        <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>CashSwift Solutions</h2>
                                        <RxArrowTopRight className='text-[24px]' />
                                    </div>
                                    <hr className='my-3' />
                                    <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                        <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>InstaPay Ventures</h2>
                                        <RxArrowTopRight className='text-[24px]' />
                                    </div>
                                    <hr className='my-3' />
                                    <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                        <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>EarnSwift Finance</h2>
                                        <RxArrowTopRight className='text-[24px]' />
                                    </div>
                                </div>


                            </div>
                            <div className="col-start-5 col-span-3 row-span-1 ">

                                <div className='bg-white rounded-[40px] p-8 flex flex-col h-full'>
                                    <p className='text-[#505050] pb-3 font-roboto'>New Implore</p>
                                    <h2 className='text-5xl font-title leading-[78px]'>521+</h2>
                                    <p className='text-lg pt-4 text-[#505050] font-roboto flex-grow'>seem to be a widely recognized term</p>

                                    <div className='font-roboto flex justify-between items-center'>
                                        <p className='text-xl text-[#505050]'>Care With</p>
                                        <button className='border border-[#EF7F83] hover:border-black hover:text-black duration-200 rounded-full font-roboto px-8 py-2 text-lg'>Service</button>
                                    </div>
                                </div>

                            </div>

                            <div className="col-start-5 col-span-3 row-span-1">
                                <div className='bg-white rounded-[40px] p-8 flex flex-col h-full'>
                                    <div className='flex gap-2'>
                                        <img src={social} alt="" />
                                        <p className='font-roboto text-[#505050] leading-[24px] text-[16px] w-[60%]'>Invest wisely cultivate wealth through </p>
                                    </div>
                                    <h1 className='text-[40px] leading-[52px] font-semibold font-roboto pt-10 flex-grow'>Collect payment faster</h1>
                                    <p className='font-roboto text-[#505050] leading-[30px] text-lg'>Invest wisely cultivate wealth through</p>
                                </div>
                            </div>
                            <div className="col-start-8 col-span-5 row-start-1 row-span-2">

                                <div className=' bg-white h-full rounded-[40px] pt-10 px-10'>
                                    <div className='flex justify-between'>
                                        <h1 className='text-6xl font-title leading-[74px] pb-8'>Collect payment faster</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 69 69" fill="none">
                                            <circle cx="34.5" cy="34.5" r="34.5" fill="#F7F7F5" />
                                            <path d="M34.4999 18.4823L37.558 31.442L50.5177 34.5002L37.558 37.5583L34.4999 50.518L31.4417 37.5583L18.482 34.5002L31.4417 31.442L34.4999 18.4823Z" fill="#040404" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='font-roboto text-[#505050] w-5/6 text-lg flex-grow'>It seems like your request is a bit unclear. It appears you're looking for information or assistance</p>
                                        <img src={paymentfaster} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;
