import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Social = () => {
    return (
        <>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <FaLinkedin/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <FaGithub/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <AiOutlineMail/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                <BsFillPersonLinesFill/>
            </div>
        </>
    );
};

export default Social;