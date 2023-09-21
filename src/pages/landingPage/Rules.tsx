// import React from 'react'

import lady from "../../assets/rulesImg.png";

const Rules = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden  flex justify-center items-center pb-[50px]'>

        <div className="w-[85%] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between relative">

            <div className="absolute w-[170px] h-[170px] top-[100px] left-[-50px] lg:w-[200px] lg:top-[100px] lg:left-[0px] bg-[#3e0a75] rounded-full blur-3xl" ></div>

            <div className="absolute w-[170px] h-[170px]  bottom-[120px] right-[-130px] rotate-[90deg] lg:w-[300px] lg:h-[200px] lg:bottom-[100px] lg:right-[-200px] bg-[#3e0a75] blur-3xl rounded-full " ></div>
            
            <div>
                <img src={lady} alt="" className="z-20" />
            </div>

            <div className="lg:w-[55%] mt-[20px] lg:mt-0 relative">

                <h4 className="text-white font-extrabold  text-[18px] text-center lg:text-left lg:text-[30px]">Rules and</h4>
                <h4 className="text-[#d434fe] font-extrabold text-center lg:text-left text-[18px] mb-[10px] lg:text-[30px] lg:mb-[20px]">Guidelines</h4>

                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day:to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                </h5>
            </div>
        </div>

    </div>
  )
}

export default Rules;