import React from 'react';
import Link from "next/link";



// export const items = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const NavBarItemHidden = ({data}) => {
    return (
        <>
            {data.nav.map((item) => <Link href={item.link} key={item.id}>
                <li className='py-4 text-sm'>{item.name}</li>
            </Link>)}
        </>
    );
};

export default NavBarItemHidden;