/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react';
import Button from '../../../../../components/Button';
import style from '../[proid]/prostyle.css'
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from '@/app/redux/cartslice';
import { useRouter } from 'next/navigation';

const SpecificProduct = ({ params }) => {
    let {push} = useRouter()
    const dispatch = useDispatch()
    const [reqData, setreqData] = useState();
    let product = useSelector((pdata) => {
        return pdata.productData.data[0]
    })
    useEffect(() => {
        product.forEach((pro) => {
            pro.forEach((e) => {
                if (e.slug == params.proid) {
                    setreqData(e)
                }
            })
        })
    }, []);

    let addToCart = () => {
        if (reqData) {
            dispatch(additem(reqData))
        }
        push("/dashboard/cart")

    }


    return (
        <>
            {
                reqData ? <div className="sp-container">
                    <div className="left">
                        <Image src={reqData.img}
                            className='image' height={500} width={500} alt="" />
                    </div>
                    <div className="right">
                        <h3 style={{ fontWeight: 500 }}>{reqData.name}</h3>
                        <p style={{ fontWeight: 600 }}>{reqData.price}</p>
                        <div onClick={addToCart}><Button name="Add to cart" /></div>
                        <p style={{ opacity: .7}}>{reqData.type}</p>
                    </div>
                </div> : <h3>Loading...</h3>
            }
        </>
    );
}

export default SpecificProduct;