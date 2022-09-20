import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Image from "next/image";
import Social from "./Social";
import contactImg from '../public/assets/contact.jpg';



const Contact = () => {
    const [query, setQuery] = useState({
    });

    // Update inputs value
    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    // Form Submit function
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });
        fetch("https://getform.io/f/3481b0ee-178f-4bca-9889-9f0877b37973", {
            method: "POST",
            body: formData
        }).then((res)=>{
            if(res.status === 200) {
                toast.success('Thanks for you message!', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((err)=>{
            console.error("err", err)
            toast.error('Oops... Something went wrong!', {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
            .finally(() => setQuery({ name: "", email: "" , message:"" ,number: "",  subject: ""}));
    };

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/*left*/}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
<div className='lg:p-4 h-full'>
    <div>
        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt='/'/>
    </div>
    <div>
        <h2 className='py-2'>Valeria</h2>
        <p>Front-End Developer</p>
        <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&#39;s talk.</p>
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
        <form onSubmit={formSubmit} >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input required name='name'
                           value={query.name} onChange={handleParam()} className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input name='number' required value={query.number} onChange={handleParam()} className='border-2 rounded-lg p-3 flex border-gray-300' type='tel'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input name='email' required value={query.email} onChange={handleParam()} className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input  name='subject' required value={query.subject} onChange={handleParam()} className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
               <textarea name='message' required value={query.message} onChange={handleParam()} className='border-2 rounded-lg p-3 border-gray-300' rows='10'/>
            </div>
            <button className='w-full p-4 text-gray-600 mt-4' type='submit'>Send Message</button>
        </form>
    </div>
</div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5] ' size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    );
};

export default Contact;
