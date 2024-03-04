/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react';
import Itembox from '../../../components/Itembox';
import { useSelector } from 'react-redux';


const Dashboard = () => {
    let product = useSelector((pdata)=>{
        return pdata.productData.data[0]
    })
    const [render, setrender] = useState([]);
    const [counter, setcounter] = useState(1);
    
    
    useEffect(() => {
        const products = [];
        for(let i=0;i<6;i++){
            product.forEach((pro,ind)=>{
                products.push(pro[Math.floor(Math.random()*9)])
                
        })
        }
        setrender(products)
    }, []);
    return (
        <>
        <div className="container">
            
            {
                    render?render.map((e,i)=>{
                        return <div key={i}>
                         <Itembox imgsrc = {e.img} name = {e.name} price = {e.price} type = {e.type} slug = {e.slug}/>
                        </div>
                    }):<h3>No Product</h3>
            }
        </div>
        </>
    )
}

export default Dashboard;