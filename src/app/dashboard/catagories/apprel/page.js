"use client"
import React from 'react';
import Itembox from '../../../../../components/Itembox';
import { useSelector } from 'react-redux';

const Apprel = () => {
    let product = useSelector((pdata)=>{
        return pdata.productData.data[0]
    })
    return ( 
        <>
        <div className='page'>
        <h3>Apprel</h3>
        <div className="container">
               
                {
                    product[0].map((e,i)=>{
                        return (<Itembox key = {i} imgsrc = {e.img} name = {e.name} price = {e.price} type = {e.type} slug = {e.slug}/>)
                        
                    })
                }
            </div>
        </div>
        </>
     );
}
 
export default Apprel;