/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react';
import Itembox from '../../../../components/Itembox';
import { useSelector } from 'react-redux';



const Products = () => {
    let product = useSelector((pdata)=>{
        return pdata.productData.data[0]
    })
    const [render, setrender] = useState([]);
    
    
    useEffect(() => {
        const products = [];
        for(let i=0;i<9;i++){
            product.forEach((pro,ind)=>{
                products.push(pro[i])
                
        })
        }
        setrender(products)
    }, []);
    return (
        <>
        <h3>Products</h3>
        <div className="container">
            
            {
                    render.map((e,i)=>{
                        return <div key={i}>
                         <Itembox imgsrc = {e.img} name = {e.name} price = {e.price} type = {e.type} slug = {e.slug}/>
                        </div>
                    })
            }
        </div>
        </>
    )
}

export default Products;