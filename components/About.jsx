import React from 'react'
import meImg from '../public/assets/main/IMG_9819.jpg'
import Image from "next/image";
import Link from "next/link";

const About = ({data}) => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>{data.about.header}</p>
                    <h2 className='py-4'>{data.about.title}</h2>
                    <p className='p-2 text-gray-600'>{data.about.description1}</p>
                    <p className='p-2 text-gray-600 '>{data.about.description2}</p>
                    <Link href='/#projects'>
                    <p className='p-2 text-gray-600 underline cursor-pointer'>{data.about.link}</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={meImg} alt='About'/>
                </div>
            </div>
        </div>
    );
};

export default About;