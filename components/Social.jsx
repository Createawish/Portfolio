import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {MdOutlineDownload} from 'react-icons/md';
import Link from "next/link";

const Social = () => {
    return (
        <>
            <a
                href='www.linkedin.com/in/valeriaborodko'
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
            <a href="../public/assets/doc/CV-Valeria-Borodko.pdf" download>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <MdOutlineDownload/>
            </div>
            </a>
        </>
    );
};

export default Social;
