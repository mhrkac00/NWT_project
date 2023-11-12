'use client'
import next from "next";

import  CustomButton  from "./CustomButton";
import {useState} from 'react';
import Image from "next/image";
 

const handleHover = () =>{
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHoverIn =()=>{
//     setIsHovered(true);
//   }

//   const handleHoverOut =()=>{
//     setIsHovered(false);
//   }
 }


function Hero() {
  return (
    
    <div className="hero">
         <div className="hero__image-container">
      <div className="hero__image">
       <Image src="/logo.png" alt="logo"  width={300} height={300}/>
      </div>
    </div>
      <div className="flex-1 pt-16 padding-x">
      <h1 className="hero__title">
          FRIEND SEEKER
      </h1>
      <p className="hero__subtitle">
          Find Your Furry Friend Today
      </p>

      <CustomButton
      title="Adopt Me!"
      containerStyles="bg-purple-1 rounded-full mt-10 pt-3 pb-3 text-[20px] text-white font-bold"
      handleClick={handleHover}
      />
    </div>

    </div>
  )
}

export default Hero;