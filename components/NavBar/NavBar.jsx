import React,{useState} from 'react';
import Image from "next/image";
import LOGO from '../../public/assets/main-logo.png';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Social from "../Social";
import NavBarItemHidden from "./NavBarItemHidden";
import NavBarItem from "./NavBarItem";


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleClose = () =>{
        setNav(!nav)
    }

    return (
            <div className='fixed w-full h-20 shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
                <Image src={LOGO} alt='Logo' width='125'height='50'/>
                <div>
                    <ul className='hidden md:flex'>
                     <NavBarItem/>
                    </ul>
                    <div className='md:hidden' onClick={handleClose}>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
                </div>



                <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    <div className={nav
                        ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        :'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                        <div>
                            <div className='flex w-full items-center justify-between' >
                                <Image src={LOGO} alt='logo' width='87' height='35'/>
                                <div onClick={handleClose} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] mdw-[90%]'>Let's build something legendary together</p>
                            </div>
                        </div>
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                 <NavBarItemHidden/>
                                </ul>
                                <div className='pt-40'>
                                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                                    <div className='flex justify-between items-center my-4 w-full sm:w-[100%]'>
                                        <Social/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>


            </div>

    );
};

export default NavBar;