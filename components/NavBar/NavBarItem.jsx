import React from 'react'
import Link from "next/link";

const NavBarItem = ({data}) => {
    return (
        <>
            {data.nav.map((item) =>  <Link href={item.link} key={item.id}>
                <li className='ml-10 text-sm uppercase hover:border-b'>{item.name}</li>
            </Link>)}
        </>
    );
};

export default NavBarItem;