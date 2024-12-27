import React from "react";
import { BsGithub,BsInstagram } from "react-icons/bs";

export default function Header(){
    return ( 
        <div className="container  mx-auto max-w-[1200px] relative lg:absolute left-0 right-0">
           <div className="flex  mt-4 justify-between" >
            <div className="flex gap-2" data-aos="fade-right"  data-aos-delay="300">
            <img src="./src/assets/react.svg" alt="" />
            <h1 className="text-3xl font-bold  font">Delvin</h1>
            </div>
            <div className=" flex items-center gap-7 px-5" data-aos="fade-left"  data-aos-delay="300">
           
            <a href="https://github.com/dvnn-star" >

                <BsGithub className="scale-[2] text-white" />
            </a>
            <a href="https://www.instagram.com/dvn_delvin/">
                
                <BsInstagram  className="scale-[2] text-white"/>
                </a>
            </div>
           </div>
        </div>
    )
}