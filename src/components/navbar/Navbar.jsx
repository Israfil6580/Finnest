import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../assets/Frame 6.svg'
const AnimatedDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const openSidebarButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !openSidebarButtonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleSidebar = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="flex overflow-hidden">
                {/* Sidebar */}
                <div
                    ref={sidebarRef}
                    className={`h-screen z-20 absolute bg-gray-800 text-white w-60 lg:w-80 overflow-y-auto transition-transform ${isOpen ? '' : '-translate-x-full'
                        } ease-in-out duration-300 font-roboto text-lg tracking-wide`}
                >
                    {/* Your Sidebar Content */}
                    <div className="p-4 relative z-20">
                        <h1 className="text-2xl font-semibold">FINNEST</h1>
                        <ul className="mt-4">
                            <li className="mb-2">
                                <a href="#" className="block hover:text-indigo-400">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="block hover:text-indigo-400">
                                    About
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="block hover:text-indigo-400">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="block hover:text-indigo-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col overflow-hidden pt-6">
                    {/* Navbar */}
                    <div>
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center py-2 px-2">
                                <img src={logo} alt="" className='cursor-pointer' />
                                <div className='flex items-center'>
                                    <button className="lg:inline-flex items-center justify-center py-4 px-12 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:shadow-outline focus:outline-none hidden font-roboto text-xl cursor-pointer">
                                        Login
                                    </button>
                                    <button
                                        ref={openSidebarButtonRef}
                                        onClick={toggleSidebar}
                                        className="border-2 border-[#040404] rounded-full p-1"
                                    >
                                        <Hamburger size={'25'} toggled={isOpen} toggle={setIsOpen} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedDrawer;
