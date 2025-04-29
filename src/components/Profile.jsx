import React from "react";

export default function Profile(){
    return(
        <div id="profile" className="section mt-20 md:mt-44"> 
        
            <div className="w-full">
                <div className="flex justify-center pb-20 " data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
                    <p className="text-3xl font-serif text-white">Education</p>
                </div>
                <div className="border h-96 w-[2px]  lg:ml-96 ml-24 relative mb-20" color="white "data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
                    <div className="rounded-full w-4 h-4 border bg-white absolute -left-2 top-2"  >                    </div>
                    <div className="w-full min-w-[400px] pl-6" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
                        <h1 className="text-2xl font-mono font-bold text-white">2024-?</h1>
                       <h1 className="text-2xl font-mono text-white">Universitas Putera Batam</h1> 
                       <h1 className="text-2xl font-mono text-slate-600 ">Jurusan Teknik Informatika</h1>
                    </div>
                    <div className="rounded-full w-4 h-4 border bg-white absolute -left-2 top-[150px]"  >                    </div>
                    <div className="w-full min-w-96 pl-6 pt-11 " data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
                    <h1 className="text-2xl font-mono font-bold text-white">2021-2024</h1>
                       <h1 className="text-2xl font-mono text-white">SMAS YKPP Tanjung Uban</h1> 
                       <h1 className="text-2xl  font-mono text-slate-600 ">Jurusan IPA</h1>
                    </div>
                    
                    <div className="rounded-full w-4 h-4 border bg-white absolute -left-2 bottom-20"  >                    </div>
                    <div className="w-full min-w-96 pl-6 pt-11" >
                    <h1 className="text-2xl font-mono font-bold text-white">2018-2021</h1>
                       <h1 className="text-2xl font-mono text-white">SMP 12 Bintan Utara</h1> 
                       
                       
                    </div>
                </div>
        <div className="relative ">
        <h1 className="absolute  text-3xl -bottom-12 right-14 font-bold text-gray-400 capitalize"  data-aos-delay="300" data-aos-once="true"data-aos="fade-left">next</h1>
        </div>
            </div>
        </div>
    )
}