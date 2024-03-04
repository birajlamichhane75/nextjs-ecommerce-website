"use client"
import React, { useState } from 'react';
import Itembox from '../../../../../components/Itembox';
import { useSelector } from 'react-redux';

const Accessiories = () => {
    let product = useSelector((pdata)=>{
        return pdata.productData.data[0]
    })
    return ( 
        <>
        <h3>Accessiories</h3>
        <div className="container">
               
                {
                    product?product[1].map((e,i)=>{
                        return <div key ={i} >
                         <Itembox imgsrc = {e.img} name = {e.name} price = {e.price} type = {e.type} slug = {e.slug}/>
                        </div>
                    }):<></>
                }
            </div>
        </>
     );
}
 
export default Accessiories;