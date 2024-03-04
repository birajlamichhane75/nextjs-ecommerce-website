"use client"
import { redirect } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';


const Home = () => {
  redirect('/dashboard')
  return ( 
    <>
    </>
   );
}
 
export default Home;