import React from 'react';
import Link from "next/link";



// export const items = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const NavBarItemHidden = () => {
    return (
        <>
            <Link href='/home'>
                <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='/about'>
                <li className='py-4 text-sm'>About</li>
            </Link>
            <Link href='/#skills'>
                <li className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='/#projects'>
                <li className='py-4 text-sm'>Projects</li>
            </Link>
            <Link href='/#contact'>
                <li className='py-4 text-sm'>Contacts</li>
            </Link>
        </>
    );
};

export default NavBarItemHidden;