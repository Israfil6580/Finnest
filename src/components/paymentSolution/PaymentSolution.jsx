import paymentsolution from '../../assets/payment_solution.png'
import { TfiArrowTopRight } from "react-icons/tfi";
import social from "../../assets/Social.svg"
import paymentfaster from "../../assets/Rectangle 14.png"

const PaymentSolution = () => {
    return (
        <div className="mt-32 container mx-auto">
            <div className="w-3/5 mx-auto text-center">
                <h1 className="text-[98px] pb-20 tracking-wide leading-[130px] font-bold">Swift Payment Solutions</h1>
            </div>

            <div>
                <div className="grid grid-cols-12 grid-rows-2 gap-6 pb-32">
                    <div className="col-span-4 row-span-2 bg-white rounded-[40px] pb-4">

                        <div className="w-full p-6 relative">
                            <img src={paymentsolution} alt="" className="object-cover object-center w-full h-full" />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] text-center'>
                                <h1 className='text-white text-[40px] leading-[52px]'>Gain financial security</h1>
                            </div>
                        </div>
                        <div className='px-8'>
                            <div className='flex cursor-pointer hover:text-[#505050] duration-200  justify-between items-center'>
                                <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>EarnSwift Finance</h2>
                                <TfiArrowTopRight className='text-[24px]' />
                            </div>
                            <hr className='my-3' />
                            <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>QuickPay Finance</h2>
                                <TfiArrowTopRight className='text-[24px]' />
                            </div>
                            <hr className='my-3' />
                            <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>CashSwift Solutions</h2>
                                <TfiArrowTopRight className='text-[24px]' />
                            </div>
                            <hr className='my-3' />
                            <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>InstaPay Ventures</h2>
                                <TfiArrowTopRight className='text-[24px]' />
                            </div>
                            <hr className='my-3' />
                            <div className='flex cursor-pointer hover:text-[#505050] duration-200 justify-between items-center'>
                                <h2 className='font-roboto font-bold leading-[39px] text-[26px]'>EarnSwift Finance</h2>
                                <TfiArrowTopRight className='text-[24px]' />
                            </div>
                        </div>


                    </div>
                    <div className="col-start-5 col-span-3 row-span-1 ">

                        <div className='bg-white rounded-[40px] p-8 flex flex-col h-full'>
                            <p className='text-[#505050] pb-3 font-roboto'>New Implore</p>
                            <h2 className='text-5xl leading-[78px]'>521+</h2>
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
                                <h1 className='text-6xl leading-[74px] pb-8'>Collect payment faster</h1>
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
    );
};

export default PaymentSolution;