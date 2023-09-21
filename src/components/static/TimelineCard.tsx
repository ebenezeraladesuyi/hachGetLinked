import React from 'react'

interface iTimeline {
    hackAnnounce: string;
    hackInfo: string;
    serial: number;
    date: string;
}

const TimelineCard:React.FC<iTimeline> = ({hackAnnounce, hackInfo, serial, date}) => {
  return (
    <div className='mb-[20px] relative'>

        
                    <div className="pl-[20px] h-[80px] border-l-[#d434fe] border-l-[2px] ml-[10px] mb-[6px]">
                        <h5 className="text-[#d434fe] text-[12px]">
                            {/* Hackathon Annoucement */}
                            {hackAnnounce}
                        </h5>
                        <h5 className="text-white text-[11px] leading-4">
                            {hackInfo}
                            {/* The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register */}
                        </h5>
                    </div>

                    <div className="flex items-center">
                        <h5 className="w-[23px] h-[23px]  rounded-full text-white bg-[#d434fe] text-[10px] flex justify-center items-center mr-[10px]">
                            {/* 1 */}
                            {serial}
                        </h5>
                        <h5 className="text-[#d434fe] text-[12px] ">
                            {date}
                            {/* November 18, 2023 */}
                        </h5>
                    </div>
    </div>
  )
}

export default TimelineCard