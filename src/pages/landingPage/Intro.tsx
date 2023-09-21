// import React from 'react'

import bulbClass from "../../assets/buldClass.png";
import curl from "../../assets/curl.png";
import starBLue from "../../assets/star-blue.png";

const Intro = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden flex justify-center items-center pt-[50px]  pb-[40px]'>

        <div className="w-[85%] flex  flex-col lg:flex-row items-center justify-center lg:justify-between">

            <div className="relative mb-[20px] lg:mr-[110px] lg:w:[50%]">
                <img src={bulbClass} alt="" className="w-[240px] mr-[10px] lg:w-[100%]" />

                <img src={curl} alt="" className=" w-[30px] ml-[50%]" />
            </div>

            <div className="lg:w-[55%] relative">

                <h4 className="text-white font-extrabold  text-[18px] text-center lg:text-left lg:text-[25px]">Introduction to getLinked</h4>
                <h4 className="text-[#d434fe] font-extrabold text-center lg:text-left text-[18px] mb-[10px] lg:text-[25px] lg:mb-[20px]">tech Hackathon 1.0</h4>

                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5">
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                </h5>

                <img src={starBLue} alt="" className="absolute w-[10px] lg:w-[25px] top-[30px] right-[30px]" />
            </div>
            
        </div>

    </div>
  )
}

export default Intro;