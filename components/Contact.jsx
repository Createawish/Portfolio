import React from 'react';
import Social from "./Social";

const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/*left*/}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
<div className='lg:p-4 h-full'>
    <div>
        <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='/'/>
    </div>
    <div>
        <h2 className='py-2'>Name here</h2>
        <p>Front-End Developer</p>
        <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
    </div>
    <div>
        <p className='uppercase pt-8'>Connect With me</p>
        < div className='flex items-center justify-around py-4'>
            <Social/>
        </div>
    </div>
</div>
</div>

                    {/*right*/}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
        <form>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='number'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Massage</label>
               <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
            </div>
        </form>
    </div>
</div>





                </div>
            </div>
            
        </div>
    );
};

export default Contact;