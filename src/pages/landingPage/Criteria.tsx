// import React from 'react'

import persons from "../../assets/judge.png";
import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";
import starRed from "../../assets/star-red.png";
import { Button } from "../../components/static";

const Criteria = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden  flex justify-center items-center pt-[20px] pb-[50px]'>

        <div className="w-[85%] flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">

            <div className="absolute w-[170px] h-[170px] top-[100px] left-[-50px] lg:w-[200px] lg:h-[200px] lg:bottom-[150px] lg:left-[0px] bg-[#3e0a75] rounded-full blur-3xl" ></div>

            <div className="absolute w-[170px] h-[170px]  bottom-[120px] right-[-130px] rotate-[90deg] lg:w-[300px] lg:h-[200px] lg:bottom-[100px] lg:right-[-200px] bg-[#3e0a75] blur-3xl rounded-full " ></div>
            
            <div className="relative">
                <img src={persons} alt="" className="z-20 lg:w-[550px]" />

                <img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px] top-[-20px] left-[70px] lg:top-[-60px]" />

                <img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[110px] left-[140px] lg:top-[50%] lg:left-[270px]" />

                <img src={starBlue} alt="" className="absolute w-[12px] lg:w-[15px] bottom-[0px] right-[40px] lg:bottom-[-40px]" />
            </div>

            <div className="lg:w-[50%] mt-[20px] lg:mt-0 relative flex flex-col items-center lg:items-start">

                <h4 className="text-white font-extrabold  text-[18px] text-center lg:text-left lg:text-[30px]">Judging Criteria</h4>
                <h4 className="text-[#d434fe] font-extrabold text-center lg:text-left text-[18px] mb-[10px] lg:text-[30px] lg:mb-[20px]">Key Attributes</h4>

                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5 mb-[15px]">
                <span className="text-[#5c5abf]">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                </h5>
                
                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5 mb-[15px]">
                <span className="text-[#5c5abf]">Functionality:</span>  Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </h5>
                
                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5 mb-[15px]">
                <span className="text-[#5c5abf]">Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </h5>
                
                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5 mb-[15px]">
                <span className="text-[#5c5abf]">Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </h5>
                
                <h5 className="text-white text-[12px] text-center lg:text-left lg:text-[15px] lg:leading-7 leading-5 mb-[30px]">
                <span className="text-[#5c5abf]">Adherence to Hackathon Rules:</span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                </h5>

                <Button 
                      buttonContent="Read More"
                    />
            </div>
        </div>

    </div>
  )
}

export default Criteria;