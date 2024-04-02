import { useState } from 'react';
import Toggle from "react-toggle";
import 'react-toggle/style.css';
import cultivate1 from "../../assets/cultivate1.png";
import cultivate2 from "../../assets/cultivate2.png";
import cultivate3 from "../../assets/cultivate3.png";

const CultivateWealth = () => {
    const [tofuIsReady, setTofuIsReady] = useState(false); // Initial state is false

    const handleTofuChange = () => {
        setTofuIsReady(!tofuIsReady); // Toggle the state
    };

    return (
        <div className="container mx-auto">
            <div className="w-3/5 mx-auto text-center pt-20">
                <h1 className="text-[98px] tracking-wide leading-[130px] font-bold">Swift Payment Solutions</h1>
            </div>
            <div className='flex flex-col gap-10 pt-14'>
                <div className='flex gap-20'>
                    <div className='w-2/4' >
                        <img src={cultivate1} alt="" />
                    </div>
                    <div className='w-2/4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <path d="M25.9211 0.198135C11.715 0.198135 0.198166 11.7147 0.198166 25.9208C0.198166 40.1275 11.715 51.6431 25.9211 51.6431C40.1287 51.6431 51.6443 40.1275 51.6443 25.9208C51.6443 11.7156 40.1287 0.199364 25.9208 0.199364L25.9211 0.198135ZM37.7175 37.2976C37.2567 38.0532 36.2677 38.2928 35.512 37.8289C29.4725 34.1399 21.8696 33.3044 12.9157 35.3501C12.0529 35.5467 11.1928 35.0061 10.9963 34.143C10.7987 33.2798 11.3372 32.4198 12.2022 32.2232C22.0008 29.9836 30.4057 30.9484 37.1861 35.0921C37.9417 35.5559 38.1813 36.5419 37.7175 37.2976ZM40.8659 30.2926C40.2854 31.2372 39.0506 31.5351 38.1076 30.9546C31.1933 26.7037 20.6535 25.4729 12.4753 27.9554C11.4146 28.2758 10.2944 27.6781 9.97247 26.6193C9.65302 25.5586 10.2511 24.4405 11.3099 24.118C20.6517 21.2835 32.2653 22.6565 40.2055 27.5358C41.1485 28.1164 41.4465 29.3509 40.8659 30.2926ZM41.1362 22.9993C32.8458 18.0752 19.1678 17.6224 11.2524 20.0247C9.98138 20.4102 8.63722 19.6927 8.25204 18.4216C7.86685 17.15 8.58378 15.8067 9.85575 15.4203C18.942 12.662 34.0468 13.1949 43.5917 18.8612C44.7374 19.5397 45.1122 21.0163 44.4333 22.158C43.7576 23.3013 42.277 23.6782 41.1374 22.9993H41.1362Z" fill="black" />
                        </svg>
                        <h2 className='text-6xl pt-3 leading-[74px] w-4/6'>Collect payment faster</h2>
                        <p className='pt-6 font-roboto text-lg leading-[28px] text-[#505050]'>Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management. Invest wisely cultivate wealth  strategic financial </p>
                        <label className='pt-5 inline-block w-12'>
                            <Toggle
                                defaultChecked={tofuIsReady}
                                icons={false}
                                onChange={handleTofuChange}
                            />

                        </label>
                        <hr className='my-4' />
                    </div>
                </div>
                <div className='flex flex-row-reverse gap-20'>
                    <div className='w-2/4' >
                        <img src={cultivate2} alt="" />
                    </div>
                    <div className='w-2/4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <path d="M25.9211 0.198135C11.715 0.198135 0.198166 11.7147 0.198166 25.9208C0.198166 40.1275 11.715 51.6431 25.9211 51.6431C40.1287 51.6431 51.6443 40.1275 51.6443 25.9208C51.6443 11.7156 40.1287 0.199364 25.9208 0.199364L25.9211 0.198135ZM37.7175 37.2976C37.2567 38.0532 36.2677 38.2928 35.512 37.8289C29.4725 34.1399 21.8696 33.3044 12.9157 35.3501C12.0529 35.5467 11.1928 35.0061 10.9963 34.143C10.7987 33.2798 11.3372 32.4198 12.2022 32.2232C22.0008 29.9836 30.4057 30.9484 37.1861 35.0921C37.9417 35.5559 38.1813 36.5419 37.7175 37.2976ZM40.8659 30.2926C40.2854 31.2372 39.0506 31.5351 38.1076 30.9546C31.1933 26.7037 20.6535 25.4729 12.4753 27.9554C11.4146 28.2758 10.2944 27.6781 9.97247 26.6193C9.65302 25.5586 10.2511 24.4405 11.3099 24.118C20.6517 21.2835 32.2653 22.6565 40.2055 27.5358C41.1485 28.1164 41.4465 29.3509 40.8659 30.2926ZM41.1362 22.9993C32.8458 18.0752 19.1678 17.6224 11.2524 20.0247C9.98138 20.4102 8.63722 19.6927 8.25204 18.4216C7.86685 17.15 8.58378 15.8067 9.85575 15.4203C18.942 12.662 34.0468 13.1949 43.5917 18.8612C44.7374 19.5397 45.1122 21.0163 44.4333 22.158C43.7576 23.3013 42.277 23.6782 41.1374 22.9993H41.1362Z" fill="black" />
                        </svg>
                        <h2 className='text-6xl pt-3 leading-[74px] w-4/6'>Collect payment faster</h2>
                        <p className='pt-6 font-roboto text-lg leading-[28px] text-[#505050]'>Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management. Invest wisely cultivate wealth  strategic financial </p>
                        <label className='pt-5 inline-block w-12'>
                            <Toggle
                                defaultChecked={tofuIsReady}
                                icons={false}
                                onChange={handleTofuChange}
                            />

                        </label>
                        <hr className='my-4' />
                    </div>
                </div>
                <div className='flex gap-20'>
                    <div className='w-2/4' >
                        <img src={cultivate3} alt="" />
                    </div>
                    <div className='w-2/4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <path d="M25.9211 0.198135C11.715 0.198135 0.198166 11.7147 0.198166 25.9208C0.198166 40.1275 11.715 51.6431 25.9211 51.6431C40.1287 51.6431 51.6443 40.1275 51.6443 25.9208C51.6443 11.7156 40.1287 0.199364 25.9208 0.199364L25.9211 0.198135ZM37.7175 37.2976C37.2567 38.0532 36.2677 38.2928 35.512 37.8289C29.4725 34.1399 21.8696 33.3044 12.9157 35.3501C12.0529 35.5467 11.1928 35.0061 10.9963 34.143C10.7987 33.2798 11.3372 32.4198 12.2022 32.2232C22.0008 29.9836 30.4057 30.9484 37.1861 35.0921C37.9417 35.5559 38.1813 36.5419 37.7175 37.2976ZM40.8659 30.2926C40.2854 31.2372 39.0506 31.5351 38.1076 30.9546C31.1933 26.7037 20.6535 25.4729 12.4753 27.9554C11.4146 28.2758 10.2944 27.6781 9.97247 26.6193C9.65302 25.5586 10.2511 24.4405 11.3099 24.118C20.6517 21.2835 32.2653 22.6565 40.2055 27.5358C41.1485 28.1164 41.4465 29.3509 40.8659 30.2926ZM41.1362 22.9993C32.8458 18.0752 19.1678 17.6224 11.2524 20.0247C9.98138 20.4102 8.63722 19.6927 8.25204 18.4216C7.86685 17.15 8.58378 15.8067 9.85575 15.4203C18.942 12.662 34.0468 13.1949 43.5917 18.8612C44.7374 19.5397 45.1122 21.0163 44.4333 22.158C43.7576 23.3013 42.277 23.6782 41.1374 22.9993H41.1362Z" fill="black" />
                        </svg>
                        <h2 className='text-6xl pt-3 leading-[74px] w-4/6'>Collect payment faster</h2>
                        <p className='pt-6 font-roboto text-lg leading-[28px] text-[#505050]'>Invest wisely cultivate wealth through strategic financial decisions and diverse portfolio management. Invest wisely cultivate wealth  strategic financial </p>
                        <label className='pt-5 inline-block w-12'>
                            <Toggle
                                defaultChecked={tofuIsReady}
                                icons={false}
                                onChange={handleTofuChange}
                            />

                        </label>
                        <hr className='my-4' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultivateWealth;
