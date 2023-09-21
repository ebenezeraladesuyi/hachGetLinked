// import React from 'react'

import sponsors from "../../assets/sponsors.png";

const Sponsors = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop   flex justify-center items-center pt-[10px] pb-[50px] overflow-hidden'>

        <div className="absolute w-[120px] h-[120px] top-[50px] left-[-20px] lg:w-[250px] lg:h-[250px] lg:mt-[30px] lg:left-[30px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

        <div className="absolute w-[150px] h-[150px]  bottom-[70px] right-[-90px] rotate-[90deg] lg:w-[300px] lg:h-[200px] lg:bottom-[100px] lg:right-[-200px] bg-[#3e0a75] blur-3xl rounded-full " ></div>

        <div className="w-[85%] flex flex-col justify-center items-center">

            <div className="flex flex-col justify-center items-center lg:mb-[55px]">
                <h5 className="text-white font-extrabold  text-[18px] text-center lg:text-[30px] mb-[15px] ">Partners and Sponsors</h5>
                <h5 className="text-white text-[11px] text-center lg:text-[15px] lg:leading-6 leading-5 mb-[45px] w-[280px] lg:w-[500px]">
                    Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </h5>
            </div>

            <div className="w-full">
                <img src={sponsors} alt="" className="w-" />
            </div>

        </div>

    </div>
  )
}

export default Sponsors