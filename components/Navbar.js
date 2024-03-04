import Link from 'next/link';
import React from 'react';
import { FiSearch } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return ( 
        <>
        <div className="nav">
            <div className="left">
                <Link href='/dashboard'><h4>B-Store</h4></Link>
                <ul>
                    <li><Link href ="/dashboard/products">All</Link></li>
                    <li><Link href ="/dashboard/catagories/apprel">Apprel</Link></li>
                    <li><Link href ="/dashboard/catagories/accessories">Accessories</Link></li>
                </ul>
            </div>
            <div className="right">
                <div className="search">
                    <input type="text" /><FiSearch  className='icon search-icon'/>
                </div>
                <div className="profile">
                    <IoPerson  className='icon'/>
                </div>
                <div className="cart">
                    <Link href = "/dashboard/cart"><FaCartShopping className='icon'/></Link>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;