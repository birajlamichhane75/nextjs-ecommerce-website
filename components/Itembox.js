"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Itembox = ({imgsrc , name, price, type, slug}) => {
    let {push} = useRouter()
    
    let gotoproduct = () =>{
        push(`/dashboard/products/${slug}`)
       
    }
    return ( 
        <>
        
        <div onClick = {gotoproduct} className="item-box">
            <div className="imgbox">
            <Image src={imgsrc}
             className='image' height={500} width={500} alt=""  />
            </div>
            <div className="info">
                <div className="info-top">
                    <p style={{fontWeight:600}}>{name}</p>
                    <p style={{fontWeight:500}}>{price}</p>
                </div>
                <div className="info-btm">
                    <p style={{opacity:.7}}>{type}</p>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Itembox;