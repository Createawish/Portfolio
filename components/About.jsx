import React from 'react'

const About = ({data}) => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>{data.about.header}</p>
                    <h2 className='py-4'>{data.about.title}</h2>
                    <p className='py-2 text-gray-600'>{data.about.description1}</p>
                    <p className='py-2 text-gray-600 '>{data.about.description2}</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>{data.about.link}</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='About'/>
                </div>
            </div>
        </div>
    );
};

export default About;