import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {MdOutlineDownload} from 'react-icons/md';
import Link from "next/link";


const Social = () => {
    // const {download} =
    //     useDownloader();
    // const fileUrl = {Resume};
    // const filename = "Resume";
    return (
        <>
            <a
                href='https://www.linkedin.com/in/clint-briley-50056920a/'
                target='_blank'
                rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <FaLinkedin/>
            </div>
            </a>
            <a
                href='https://github.com/Createawish'
                target='_blank'
                rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <FaGithub/>
            </div>
            </a>
            <Link href='/#contact'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <AiOutlineMail/>
            </div>
            </Link>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <MdOutlineDownload/>
            </div>
        </>
    );
};

export default Social;