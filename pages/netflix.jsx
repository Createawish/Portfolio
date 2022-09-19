import React from 'react';
import Image from "next/image";
import netflix from "../public/assets/projects/netflix.jpg";
import {RiRadioButtonFill} from "react-icons/ri";
import Link from "next/link";

const Netflix = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflix} alt='/'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Clone-Netflix</h2>
                    <h3>ReactJS / TypeScript</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overbiew</h2>
                    <p>
                        In this project  I built a front-end Netflix clone with a Firebase back-end.
                        I used the TMDB API for all of the data and I used Firebase Authentication to give login functionality.
                        I was able to store user specific data with a React front-end and a Firebase back-end.
                        I use Firestore which is cloud storage with Firebase to save data.
                        The front-end is styled with Tailwind CSS - an incredible CSS framework to save time styling apps.
                        At the end of the build I deployed this app with Firebase hosting.</p>
                    <Link href='https://clone-netflix-8d612.web.app/'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></Link>
                    <Link href='https://github.com/Createawish/Clone-Netflix/tree/dev'><button className='px-8 py-2 mt-4 mr-8'>Code</button></Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>ReactJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>TypeScript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>Tailwind
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>Firebase
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>The TMDB API
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>


        </div>
    );
};

export default Netflix;