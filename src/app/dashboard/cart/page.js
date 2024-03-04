"use client"
import Link from 'next/link';
import React from 'react';
import Button from '../../../../components/Button';
import style from '../cart/cstyle.css'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { removeItem } from '@/app/redux/cartslice';

const Cart = () => {
    let data = useSelector((pdata) => {
        return pdata.cartData.item;
    })
    let dispatch = useDispatch();
   
    return (
        <>

            <div className="c-container">
            <h3>Your Cart</h3>
                {
                    data.length != 0 ? data.map((e, i) => {
                        return <div key={i} className="cartbox">
                            
                            <div className="cartitem">
                                <div className="cleft">
                                    <div className="cartimg">
                                        <Image src={e.img}
                                            alt="Product" height={200} width={200} />
                                    </div>
                                    <div className="text">
                                        <h4>{e.name}</h4>
                                        <p>{e.price}</p>
                                        <p>{e.type}</p>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <Button name="Buy" />
                                    <button className='btn' 
                                    onClick={()=>{
                                        dispatch(removeItem(e.slug))
                                    }}
                                    style={{backgroundColor:"rgb(230, 95, 95)",color:"black"}}>Remove</button>
                                </div>
                            </div>

                        </div>
                    })

                        : <><h3>Your shopping cart is Empty</h3>
                            <p>Like you have not added any item yet!</p></>
                }

                <Link href="/dashboard/products" style={{marginTop:50}}><Button name="Explore Products" /></Link>
            </div>
        </>
    );
}

export default Cart;