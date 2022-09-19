import React from 'react';
import Image from "next/image";
import countries from "../public/assets/projects/dashboard-Countries.jpg";
import {RiRadioButtonFill} from "react-icons/ri";
import Link from "next/link";

const Countries = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={countries} alt='/'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Dashboard Countries</h2>
                    <h3>ReactJS / Redux </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overbiew</h2>
                    <p> The Mentor Frontend service was chosen to create the project.
                        The project is based on the Redux Toolkit. A switch between
                        light and dark site theme has been implemented. The API was implemented using Axios .
                        The project is based on searching and filtering countries (se arch for a country using an input field, filter countries by region).
                        I used React -router-dom to navigate the site.</p>
                    <link href='https://redux-countries-app.vercel.app/'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></link>
                    <Link href='https://github.com/Createawish/Redux-Countries-App'><button className='px-8 py-2 mt-4 mr-8'>Code</button></Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>ReactJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>Redux Toolkit
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>Styled Components
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

export default Countries;