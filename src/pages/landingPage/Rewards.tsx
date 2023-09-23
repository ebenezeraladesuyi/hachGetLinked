// import React from 'react'

import trophy from "../../assets/trophy.png";
import medal from "../../assets/medals.png";
import starWhite from "../../assets/star-white.png";

const Rewards = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop   flex justify-center items-center pt-[10px] pb-[50px] overflow-hidden'>

        <div className="absolute w-[170px] h-[170px] top-[100px] left-[-20px] lg:w-[250px] lg:h-[250px] lg:mt-[180px] lg:left-[320px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

        <div className="absolute w-[170px] h-[170px]  bottom-[70px] right-[-90px] rotate-[90deg] lg:w-[300px] lg:h-[200px] lg:bottom-[100px] lg:right-[-200px] bg-[#3e0a75] blur-2xl rounded-full " ></div>

        <div className="w-[85%] flex flex-col justify-center items-center">

            <div className="flex flex-col lg:flex-row-reverse lg:w-full lg:justify-between justify-center lg:items-center">
                
                <div className="lg:w-[50%]">
                    <h4 className="text-white font-extrabold  text-[18px] text-center lg:text-left lg:text-[30px]">Prizes and</h4>
                    
                    <h4 className="text-[#d434fe] font-extrabold text-center lg:text-left text-[18px] mb-[10px] lg:text-[30px] lg:mb-[20px]">Rewards</h4>

                    <h5 className="text-white text-[11px] text-center lg:text-left lg:text-[15px] lg:leading-6 leading-5 mb-[35px] lg:w-[400px]">
                        Highlight of the prizes or rewards for winners and for participants.
                    </h5>
                </div>

                <div className="flex w-full  lg:w-[50%] justify-center">
                    <img src={trophy} alt="" className="w-[230px] lg:w-[390px] mb-[50px]" />
                </div>
            </div>

            <div className="flex w-full  lg:justify-between justify-center">
                <div className="hidden lg:block"></div>

                <div className="relative lg:w-[50%]">
                    <img src={medal} alt="" className="w-[230px] lg:w-[470px] " />

                    <img src={starWhite} alt="" className="absolute w-[10px] lg:w-[14px]  top-[-30px] left-[10px] " />

                    <img src={starWhite} alt="" className="absolute w-[10px] lg:w-[16px] top-[20px] right-[-5px] " />
                    
                    <img src={starWhite} alt="" className="absolute w-[10px] lg:w-[16px] top-[70%] left-[-80px] " />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Rewards