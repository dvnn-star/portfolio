import React from "react";
import { Link } from "react-scroll";
import { BiHome } from "react-icons/bi";
import { GiAchievement ,GiCurlyWing} from "react-icons/gi";

import { nav } from "framer-motion/client";

function Navigasi(){
    return (
        <div className="fixed text-white bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
            <div className="flex justify-between bg-white p-2 border ring-2 ring-red-700 border-l-rose-800 border-solid mx-auto max-w-[200px] lg:flex-col rounded-full gap-5">
            <Link activeClass="active" className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
      to="menu" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={100} 
      ><BiHome className="text-slate-950 scale-[2]"/></Link>
            <Link activeClass="active" className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
      to="portfolio" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={100} 
      >
        <GiAchievement className="text-slate-950 scale-[2]"/>
        </Link>

        <Link activeClass="active" 
        className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
      to="profile" 
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={100} 
      
      >
        <GiCurlyWing 
        className="text-slate-950 scale-[2] pb-1"/>
        </Link>
            </div>
        </div>
    )
}


function App(){
   return( <>
    <Navigasi/>
   
</>
   )
}
export default  App;