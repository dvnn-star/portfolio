import React from "react";
import transition from "./transition";
import { FaWindowMinimize } from "react-icons/fa";
import { FiMinimize2 } from "react-icons/fi";
import { RxExit } from "react-icons/rx";


import { IoIosBasketball } from "react-icons/io";

function Achievement  () {
  return (
    <div className=" relative">
      {/* Title (MyHobby) */}
      <div data-aos="fade-left" data-aos-delay="300" data-aos-once="true" className= " flex justify-center items-center pt-10">
        <h1 className="text-white font-serif text-3xl font-bold">
          My Hobby
        </h1>
      </div>
      <div className="text-center mt-4"data-aos="fade-left" data-aos-delay="300" data-aos-once="true">
        <p className="text-2xl text-slate-300 capitalize font-serif font-semibold">When I was in high school my hobby was playing basketball<br></br> until now and playing ml until I was in 12th grade</p>
      </div>
      {/* Content (Basketball + Text) */}
        
      <div className="flex flex-col md:flex-row  justify-center items-center w-full">

  {/* Kontainer 1 */}
  <div className=" flex  justify-center mt-4 p-6 max-w-[800px] border-[5px] border-slate-500 bg-slate-600 relative rounded-lg mx-4" data-aos="fade-right" data-aos-delay="300" data-aos-once="true">
    <div className="box">

    </div>
    <img
      src="src/assets/juarabasket.jpeg"
      alt="Achievement"
      className="h-[300px] w-[200px] rounded-xl"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-once="true"
    />
    <p
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-once="true"
      className="text-white font-bold text-3xl pl-4 pt-3 font-serif self-center"
    >
      I have been a basketball player since I was in high school. I have participated in many competitions but I have only won once, hehe.
    </p>
    <div className="w-full mr-[2px] relative">
    <div className="animate-bounce absolute top-52 ml-12 h-[50vh]">
          <IoIosBasketball className="animate-spin w-10 h-10 lg:w-20 lg:h-20" color="cyan" />
        </div>
    <div className="absolute -top-3 right-16 w-6 h-6 rounded-full bg-yellow-500 ">

    <FaWindowMinimize color="black" className="absolute  right-1 top-0"/>
    </div>
    <div className="absolute -top-3 right-6 w-6 h-6 rounded-full bg-emerald-400 group ">
    <FiMinimize2 color="black" className="absolute top-1 right-1"/>
</div>
<div className="absolute -top-3 -right-4 w-6 h-6 rounded-full bg-rose-500 group ">
  <RxExit color="black"  className="absolute top-1 right-1"/>
  </div>
    </div>

  </div>

  {/* Kontainer 2 */}
  <div className=" flex justify-center mt-4 p-6 max-w-[800px] border-[5px] bg-slate-600 border-slate-500 relative rounded-lg mx-4" data-aos="fade-right" data-aos-delay="300" data-aos-once="true">
    <img
      src="src/assets/juara ml.jpeg"
      alt="Achievement"
      className="lg:h-[300px] h-[200px] w-[200px] lg:w-[300px] rounded-xl"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-once="true"
    />
    <p
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-once="true"
      className="text-white font-bold text-3xl pl-4 pt-3 font-serif self-center "
    >
      I have been ML player since I was in high school. I have participated in many competitions but I have only won once, hehe.
    </p>
    <div className=" mr-[2px] relative ">
    
    <div className="absolute -top-3 right-16 w-6 h-6 rounded-full bg-yellow-500 ">

    <FaWindowMinimize color="black" className="absolute  right-1 top-0"/>
    </div>
   


    <div className="absolute -top-3 right-6 w-6 h-6 rounded-full bg-emerald-400 group ">
    <FiMinimize2 color="black" className="absolute top-1 right-1"/>
</div>
<div className="absolute -top-3 -right-4 w-6 h-6 rounded-full bg-rose-500 group ">
  <RxExit color="black"  className="absolute top-1 right-1"/>
  </div>
    </div>
  </div>
</div>

  
    </div>
  );
};

export default Achievement;
