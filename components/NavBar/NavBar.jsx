import React,{useState, useEffect} from 'react';
import Image from "next/image";
import LOGO from '../../public/assets/main-logo.png';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Social from "../Social";
import NavBarItemHidden from "./NavBarItemHidden";
import NavBarItem from "./NavBarItem";
import Link from "next/link";
import {useRouter} from "next/router";


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter()

    useEffect(() => {
        if(
            router.asPath === '/netflix' ||
            router.asPath === '/counties' ||
            router.asPath === '/jobs' ||
            router.asPath === '/real' ||
            router.asPath === '/weather'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])


    const handleClose = () =>{
        setNav(!nav)
    }

    useEffect(()=> {
        const handleShadow = () => {
            if(window.scrollY >=  90) {
                setShadow(!shadow)
            } else {
                setShadow
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])



    return (
            <div style={{backgroundColor: `${navBg}`}}
                className={shadow ? 'fixed w-full h-10 shadow-xl z-[100]' : 'fixed w-full h-10  z-[100]'}>
                <div className='flex justify-between items-center w-full px-2 py-1 2xl:px-16'>
                    <Link href='/#home'>
                <Image src={LOGO} alt='Logo' width='75'height='30'/>
                    </Link>
                <div>
                    <ul style={{color: `${linkColor}`}}
                        className='hidden md:flex'>
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
                                <p className='w-[85%] mdw-[90%]'>Let&#39;s build something legendary together</p>
                            </div>
                        </div>
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                 <NavBarItemHidden nav={nav} setNav={setNav}/>
                                </ul>
                                <div className='pt-40'>
                                    <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
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