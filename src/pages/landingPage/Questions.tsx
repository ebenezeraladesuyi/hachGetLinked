// import React from 'react'

import thinker from "../../assets/ques-img.png"
import starBlue from "../../assets/star-blue.png"


const Questions = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden  flex justify-center items-center pt-[10px] pb-[50px]'>

        <div className="w-[85%] flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">

            <div className="lg:w-[45%] mt-[20px] lg:mt-0 relative flex flex-col items-center lg:items-start">

                <img src={starBlue} alt="" className="absolute w-[12px] lg:w-[15px] top-[-20px] left-[15px] lg:left-[-10px] lg:top-[-40px]" />

                <h4 className="text-white font-extrabold  text-[18px] text-center lg:text-left lg:text-[30px]">Frequent Asked</h4>
                
                <h4 className="text-[#d434fe] font-extrabold text-center lg:text-left text-[18px] mb-[10px] lg:text-[30px] lg:mb-[20px]">Questions</h4>

                <h5 className="text-white text-[11px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5 mb-[35px]">
                    We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
                </h5>

                <div className="flex justify-between items-center border-b-[#d434fe] border-b-[1px] pb-[10px] mb-[18px] w-full">
                    <h5 className="text-white text-[11px] text-left lg:text-[15px]">
                        Can I work on a project I started before the hackathon?
                    </h5>

                    <h5 className="text-[#d434fe] cursor-pointer">+</h5>
                </div>

                <div className="flex justify-between items-center border-b-[#d434fe] border-b-[1px] pb-[10px] mb-[18px] w-full">
                    <h5 className="text-white text-[11px] text-left lg:text-[15px]">
                        What happens if I need help during the hackathon?
                    </h5>

                    <h5 className="text-[#d434fe] cursor-pointer">+</h5>
                </div>

                <div className="flex justify-between items-center border-b-[#d434fe] border-b-[1px] pb-[10px] mb-[18px] w-full">
                    <h5 className="text-white text-[11px] text-left lg:text-[15px]">
                     What happens if I don't have an idea for a project?
                    </h5>

                    <h5 className="text-[#d434fe] cursor-pointer">+</h5>
                </div>

                <div className="flex justify-between items-center border-b-[#d434fe] border-b-[1px] pb-[10px] mb-[18px] w-full">
                    <h5 className="text-white text-[11px] text-left lg:text-[15px]">
                        Can I join a team or do I have to come with one?
                    </h5>

                    <h5 className="text-[#d434fe] cursor-pointer">+</h5>
                </div>

                <div className="flex justify-between items-center border-b-[#d434fe] border-b-[1px] pb-[10px] mb-[18px] w-full">
                    <h5 className="text-white text-[11px] text-left lg:text-[15px]">
                        What happens after the hackathon ends?
                    </h5>

                    <h5 className="text-[#d434fe] cursor-pointer">+</h5>
                </div>

                <div className="flex justify-between items-center border-b-[#d434fe] border-b-[1px] pb-[10px] mb-[18px] w-full">
                    <h5 className="text-white text-[11px] text-left lg:text-[15px]">
                        Can I work on a project I started before the hackathon?
                    </h5>

                    <h5 className="text-[#d434fe] cursor-pointer">+</h5>
                </div>

            </div>

            <div>
                <img src={thinker} alt="" className="z-20 lg:w-[500px] mt-[30px] lg:mb-0" />
            </div>

        </div>

    </div>
  )
}

export default Questions