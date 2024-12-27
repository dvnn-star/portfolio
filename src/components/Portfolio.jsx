import React from "react";
import { RiTailwindCssFill ,RiBlenderLine } from "react-icons/ri";
import { FaHtml5,FaJs } from "react-icons/fa6";
import { SiGodotengine } from "react-icons/si"
import gamerpg from "../assets/gamerpg.png";
import kedaikopi from "../assets/kedaikopi.png";
import password from "../assets/project2.png";

export default function Portfolio(){
    return ( 
        <div id="portfolio" className="section py-10">
        <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden " >
          <div className="font-bold lg:mt-44 text-center" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
            <h4 className="text-3xl font-bold text-white font-mono">My Project</h4>
            <h2 className="text-xl font-semibold text-white mt-2 font-sans" >
              Project saya selama saya hidup
            </h2>
          </div>
      
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {/* Card 1 */}
            <div className="lg:min-w-[400px] min-h-[200px] p-5 overflow-hidden " data-aos-once="true" data-aos="zoom-in"  data-aos-delay="300" >
              <div className="w-96 mx-auto rounded-xl bg-slate-600 relative group">

              <img 
                src={gamerpg}
                alt="Project Game RPG 2D" 
                className="mx-auto rounded-xl transition duration-500 ease-in-out w-96 group-hover:blur-[3px]"
              />
              <h1 className="text-xl font-bold text-white text-center mt-2 font-serif ">
                Project Game RPG 2D dengan menggunakan Godot Engine
              </h1>
              <span className="absolute top-1/3 right-1/3 text-white font-mono text-xl bg-black p-1 rounded-md opacity-0 group-hover:opacity-[1] transition-opacity duration-500">
                Comming soon
              </span>
              <div className="absolute flex  scale-[2.5] left-8 bottom-[79px] opacity-0 group-hover:opacity-[1] transition-opacity duration-500">
              <SiGodotengine  color="cyan"/>
              <RiBlenderLine  color="yellow"/>
              </div>
              </div>
            </div>
      
            {/* Card 2 */}
            <div className="lg:min-w-[400px] min-h-[200px] p-5 overflow-hidden " data-aos-once="true" data-aos="zoom-in"  data-aos-delay="300">
              <div className="w-96 mx-auto rounded-xl bg-slate-600 relative group">

              <img 
                src={password} 
                alt="Password Generator Project" 
                className="mx-auto transition rounded-xl duration-500 ease-in-out w-96  group-hover:blur-[3px] group-hover:opacity-45: "
              />
              <h1 className="text-xl font-bold text-white text-center font-serif min-w-10 mt-2 ">
                Password Generator With Vanilla JavaScript
              </h1>
              <a href="https://github.com/dvnn-star/project1" className="absolute top-1/3 right-1/3 text-white font-mono text-xl bg-black p-1 rounded-md opacity-0 group-hover:opacity-[1] transition-opacity duration-500">
                Github Repo
              </a>
              <div className="absolute flex  scale-[2.5] left-10 bottom-[75px] opacity-0 group-hover:opacity-[1] transition-opacity duration-500">
              <FaHtml5 color="red"/>
              
              <FaJs  color="yellow"/>
             </div>
              </div>
            </div>
      
            {/* Card 3 */}
            <div className="lg:min-w-[400px] min-h-[200px] p-5 overflow-hidden " data-aos-once="true" data-aos="zoom-in"  data-aos-delay="300">
                <div className="w-96 mx-auto bg-slate-600 rounded-xl relative group ">

              <img 
                src={kedaikopi}
                alt="Kedai Kopi Website Design" 
                className="mx-auto transition duration-500 ease-in-out w-96 rounded-xl group-hover:blur-[2px]"
              />
              <h1 className="text-xl font-bold text-white text-center font-serif mt-2 ">
                Kedai Kopi Website Design With Tailwind
              </h1>
              <a href="https://github.com/dvnn-star/kedaikopitailwind" className="absolute top-1/3 right-1/3 text-white font-mono text-xl bg-black p-1 rounded-md opacity-0 group-hover:opacity-[1] transition-opacity duration-500">
                Github Repo
              </a>
             <div className="absolute flex  scale-[2.5] left-10 bottom-[75px] opacity-0 group-hover:opacity-[1] transition-opacity duration-500">
              <FaHtml5 color="red"/>
              <RiTailwindCssFill  color="cyan"/>
              <FaJs  color="yellow"/>
             </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}