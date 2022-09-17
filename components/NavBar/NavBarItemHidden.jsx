import React from 'react';
import Link from "next/link";



export const items = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const NavBarItemHidden = () => {
    return (
        <>
            {items.map((item, i) => <Link href='/' key={i}>
                <li className='py-4 text-sm'>{item}</li>
            </Link>)}
        </>
    );
};

export default NavBarItemHidden;