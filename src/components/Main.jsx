import React from "react";
import { TypeAnimation } from "react-type-animation";
import Delvin from "../assets/delvin.jpeg"
const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Web developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Machine Learning Enthusiast',
          1000,
          'BasketBall Player',
          1000,

        
         
        ]}
        wrapper="span"
        speed={300}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    );
  };
export default function Main(){
    return( 
      
        <div data-aos="fade-up"  data-aos-delay="500" id="menu"className="section container mx-auto  max-w-[1200px] px-3 "> 
        <div className="w-full">
            <div className=" flex justify-center w-full items-center  mt-20 lg:mt-10 mb-10"> 
              <img src={Delvin} alt="" className="h-44 rounded-full w-44"/>
            </div>
        <div className="items-center w-full text-center lg:mb-56 mt-20 lg:mt-0">
            <p className="text-3xl text font-serif font-bold ">Hello,I'm Delvin</p>
            <p className="text-white font-serif font-bold ">
                <ExampleComponent/>
                </p>
                <div className="max-w-[1000px] text-center mx-auto pt-4 overflow-hidden">

                    <p className="text-2xl font-bold text-white">Delvin is a student from Putera Batam University in Indonesia with a strong interest in programming.Delvin is also interested in working on creative projects, showcasing his enthusiasm for honing his technical expertise. Furthermore, he is passionate about learning Japanese and Mandarin, reflecting his curiosity and dedication to exploring new cultures and languages.</p>
                </div>
                </div>
        </div>
      
        </div>
        
    )
}