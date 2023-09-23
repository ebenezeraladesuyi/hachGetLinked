// import React from 'react'

import { TimelineCard, TimelineLarge } from "../../components/static"
import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";

const Timeline = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden  flex justify-center items-center pt-[10px] pb-[50px]'>

        <div className="w-[85%] flex flex-col justify-center items-center">

            <div className="flex flex-col justify-center items-center">
                <h5 className="text-white font-extrabold  text-[18px] text-center lg:text-[30px]">Timeline</h5>
                <h5 className="text-white text-[11px] text-center lg:text-[15px] lg:leading-6 leading-5 mb-[35px] lg:w-[400px]">
                    Here is the breakdown of the time we anticipate using for the upcoming event.
                </h5>
            </div>


{/* mobile */}
            <div className="lg:hidden relative">

                
<img src={starBlue} alt="" className="absolute w-[12px] top-[-30px] left-[35px]" />

<img src={starWhite} alt="" className="absolute w-[10px] bottom-[430px] right-[40px] " />


                <TimelineCard 
                        hackAnnounce="Hackathon Annoucement"
                        hackInfo="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
                        serial={1}
                        date="November 18, 2023"
                    />

                <TimelineCard 
                        hackAnnounce="Team Registration Begins"
                        hackInfo="Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
                        serial={2}
                        date="November 18, 2023"
                    />
                    
                <TimelineCard 
                        hackAnnounce="Team Registration Ends"
                        hackInfo="Interested Participants are no longer Allowed to register"
                        serial={3}
                        date="November 18, 2023"
                    />
                    
                <TimelineCard 
                        hackAnnounce="Announcement of the accepted teams and ideas"
                         hackInfo="All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
                        serial={4}
                        date="November 18, 2023"
                    />
                    
                <TimelineCard 
                        hackAnnounce="Getlinked Hackathon 1.0 Offically Begins"
                        hackInfo="Accepted teams can now proceed to build their ground breaking skill driven solutions"
                        serial={5}
                        date="November 18, 2023"
                    />
                    
                <TimelineCard 
                        hackAnnounce="Demo Day"
                        hackInfo="Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
                        serial={6}
                        date="November 18, 2023"
                    />

            </div>


{/* large screen */}
            <div className="hidden lg:block">
                <TimelineLarge />
            </div>


        </div>

    </div>
  )
}

export default Timeline