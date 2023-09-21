// import React from 'react'


import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";

const TimelineLarge = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">

        
<img src={starBlue} alt="" className="absolute w-[15px] top-[-10px] left-[40px]" />

<img src={starWhite} alt="" className="absolute w-[15px] bottom-[300px] right-[40px] " />

        <div className="h-[70px] border-[#d434fe] border-[1px] w-[2px]"></div>

        <div className="w-full flex items-center justify-between mt-[-5px] mb-[-5px]">

            <div className="w-[40%]">
                <h5 className="text-[#d434fe] text-[14px]">Hackathon Announcement</h5>
                <h5 className="text-white text-[13px] leading-4">
                    The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                </h5>
            </div>

            <div className="w-[10%] flex justify-center items-center">
                <h5 className="w-[28px] h-[28px] rounded-full text-white bg-[#d434fe] text-[14px] flex justify-center items-center mr-[10px] ml-[10px]">1</h5>
            </div>

            <h5 className="text-[#d434fe] text-[14px] w-[40%] ">November 18, 2023</h5>

        </div>

        <div className="h-[50px] border-[#d434fe] border-[1px] w-[2px]"></div>

        <div className="w-full flex items-center justify-between mt-[-5px] mb-[-5px]">

            <h5 className="text-[#d434fe] text-[14px] w-[40%] ">
                November 18, 2023
            </h5>

            <div className="w-[5%]">
                <h5 className="w-[28px] h-[28px] rounded-full text-white bg-[#d434fe] text-[14px] flex justify-center items-center mr-[10px] ml-[10px]">2</h5>
            </div>

            <div className="w-[40%]">
                <h5 className="text-[#d434fe] text-[14px]">Team Registration Begins</h5>
                <h5 className="text-white text-[13px] leading-4">
                    Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                </h5>
            </div>

        </div>

        <div className="h-[50px] border-[#d434fe] border-[1px] w-[2px]"></div>

        <div className="w-full flex items-center justify-between mt-[3px] mb-[3px]">

            <div className="w-[40%]">
                <h5 className="text-[#d434fe] text-[14px]">Team Registration Ends</h5>
                <h5 className="text-white text-[13px] leading-4">
                    Interested Participants are no longer Allowed to register
                </h5>
            </div>

            <div className="w-[10%] flex justify-center items-center">
                <h5 className="w-[28px] h-[28px] rounded-full text-white bg-[#d434fe] text-[14px] flex justify-center items-center mr-[10px] ml-[10px]">3</h5>
            </div>

            <h5 className="text-[#d434fe] text-[14px] w-[40%] ">November 18, 2023</h5>

        </div>

        <div className="h-[50px] border-[#d434fe] border-[1px] w-[2px]"></div>

        <div className="w-full flex items-center justify-between mt-[-5px] mb-[-5px]">

            <h5 className="text-[#d434fe] text-[14px] w-[40%] ">
                November 18, 2023
            </h5>

            <div className="w-[5%]">
                <h5 className="w-[28px] h-[28px] rounded-full text-white bg-[#d434fe] text-[14px] flex justify-center items-center mr-[10px] ml-[10px]">4</h5>
            </div>

            <div className="w-[40%]">
                <h5 className="text-[#d434fe] text-[14px]">Announcement of the accepted teams and ideas</h5>
                <h5 className="text-white text-[13px] leading-4">
                    All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                </h5>
            </div>

        </div>

        <div className="h-[50px] border-[#d434fe] border-[1px] w-[2px]"></div>

        <div className="w-full flex items-center justify-between mt-[-5px] mb-[-5px]">

            <div className="w-[40%]">
                <h5 className="text-[#d434fe] text-[14px]">Getlinked Hackathon 1.0 Offically Begins</h5>
                <h5 className="text-white text-[13px] leading-4">
                    Accepted teams can now proceed to build their ground breaking skill driven solutions
                </h5>
            </div>

            <div className="w-[10%] flex justify-center items-center">
                <h5 className="w-[28px] h-[28px] rounded-full text-white bg-[#d434fe] text-[14px] flex justify-center items-center mr-[10px] ml-[10px]">5</h5>
            </div>

            <h5 className="text-[#d434fe] text-[14px] w-[40%] ">November 18, 2023</h5>

        </div>

        <div className="h-[50px] border-[#d434fe] border-[1px] w-[2px]"></div>

        <div className="w-full flex items-center justify-between mt-[-10px] mb-[-10px]">

            <h5 className="text-[#d434fe] text-[14px] w-[40%] ">
                November 18, 2023
            </h5>

            <div className="w-[5%]">
                <h5 className="w-[28px] h-[28px] rounded-full text-white bg-[#d434fe] text-[14px] flex justify-center items-center mr-[10px] ml-[10px]">6</h5>
            </div>

            <div className="w-[40%]">
                <h5 className="text-[#d434fe] text-[14px]">Demo Day</h5>
                <h5 className="text-white text-[13px] leading-4">
                    Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                </h5>
            </div>

        </div>

    </div>
  )
}

export default TimelineLarge;