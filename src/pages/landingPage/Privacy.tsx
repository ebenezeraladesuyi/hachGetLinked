// import React from 'react'

import {MdDone} from "react-icons/md";
import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";
import starRed from "../../assets/star-red.png";
import lock from "../../assets/lock.png";


const Privacy = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop   flex justify-center items-center pt-[10px] pb-[50px] overflow-hidden'>

        <div className="absolute w-[120px] h-[120px] bottom-[0px] left-[-20px] lg:w-[250px] lg:h-[250px] lg:mt-[30px] lg:left-[30px] bg-[#3e0a75] rounded-full blur-3xl" ></div>

        <div className="absolute w-[150px] h-[150px]  bottom-[70px] right-[-90px] rotate-[90deg] lg:w-[300px] lg:h-[200px] lg:bottom-[100px] lg:right-[-200px] bg-[#3e0a75] blur-3xl rounded-full " ></div>
            
<img src={starBlue} alt="" className="absolute w-[10px] lg:w-[13px]  bottom-[60px] left-[35px] lg:bottom-[90px] lg:left-[50px]" />

<img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px]  top-[75px] left-[20px] lg:top-[120px]" />

<img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[170px] right-[0px] lg:right-[-30px]" />

        <div className="w-[85%] flex flex-col justify-center items-center lg:flex-row lg:justify-between">

            <div className="flex flex-col  lg:mb-[55px] w-full lg:w-[50%]">

                
                <h4 className="text-white font-extrabold  text-[18px] text-center lg:text-left lg:text-[30px]">Privacy Policy and</h4>
                
                <h4 className="text-[#d434fe] font-extrabold text-center lg:text-left text-[18px] mb-[10px] lg:text-[30px] lg:mb-[20px]">Terms</h4>

                <h6 className="text-white text-[9px] text-center lg:text-left  lg:text-[13px] mb-[25px]">Last updated on September 10, 2023</h6>

                <h5 className="text-white text-[11px] text-center lg:text-left  lg:text-[15px] lg:leading-6 leading-5 mb-[35px] w-[280px] lg:w-[500px]">
                    Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                </h5>

                <div className=" border-[#d434fe] rounded border-[1px] w-full p-[15px] pb-[30px] pt-[60px] flex flex-col justify-center items-center">

                    <h5 className="text-white text-[11px] text-center lg:text-[15px] lg:leading-6 leading-5 mb-[35px] w-[280px] lg:w-[500px] w-[85%]">
                        At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathonevent. By participating in our event, you consent to the practices described in this policy.
                    </h5>

                    <div className="w-full">
                        <h5 className="text-[#d434fe] text-[12px]  lg:text-[15px] mb-[5px]">Licencing Policy</h5>

                        <h5 className="text-white text-[11px] lg:text-[15px] lg:leading-6 leading-5 mb-[20px] w-[280px] lg:w-[500px]">
                            Here are the terms of our Standard Licences
                        </h5>

                        <div className="flex gap-3">
                            <div className="bg-[#42b832] text-white h-[20px] w-[20px] text-[10px] flex justify-center items-center rounded-full ">
                                <MdDone />
                            </div>

                            <h5 className="text-white text-[11px] lg:text-[15px] lg:leading-6 leading-5 mb-[35px] w-[280px] lg:w-[500px]">
                                The Standard License grants you a non-exclusive right to navigate and register for our event
                            </h5>
                        </div>

                        <div className="flex gap-3">
                            <div className="bg-[#42b832] text-white h-[20px] w-[20px] text-[10px] flex justify-center items-center rounded-full ">
                                <MdDone />
                            </div>

                            <h5 className="text-white text-[11px] lg:text-[15px] lg:leading-6 leading-5 mb-[35px] w-[280px] lg:w-[500px]">
                                The Standard License grants you a non-exclusive right to navigate and register for our event
                            </h5>
                        </div>
                    </div>

                </div>

            </div>

            
            <div className="relative lg:mt-[70px]">
                <img src={lock} alt="" className="w-[220px] lg:w-[500px] mt-[40px] lg:mt-0 " />

<img src={starBlue} alt="" className="absolute w-[15px] bottom-[60px] lg:bottom-[90px] lg:right-[-50px]" />
            </div>

        </div>

    </div>
  )
}

export default Privacy;
