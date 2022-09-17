import React from 'react'
import {items} from './NavBarItemHidden';
import Link from "next/link";

const NavBarItem = () => {
    return (
        <>
            {items.map((item,i) =>  <Link href='/' key={i}>
                <li className='ml-10 text-sm uppercase hover:border-b'>{item}</li>
            </Link>)}
        </>
    );
};

export default NavBarItem;