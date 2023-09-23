// import React from 'react'

import starWhite from "../../../assets/star-white.png";
import starBlue from "../../../assets/star-blue.png";
import starRed from "../../../assets/star-red.png";
import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"
import { BiLogoLinkedin } from "react-icons/bi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {HiLocationMarker} from "react-icons/hi"


const Footer = () => {
  return (
    <div className='w-full bg-[#150E28] relative font-pop   flex justify-center items-center pt-[10px] pb-[30px] overflow-hidden'>
      
<img src={starBlue} alt="" className="absolute w-[10px] lg:w-[13px]  bottom-[60px] left-[35px] lg:bottom-[90px] lg:left-[50px]" />

<img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px]  top-[75px] left-[20px] lg:top-[120px]" />
    
<img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[170px] right-[0px] lg:right-[-30px]" />
    
      <div className="w-[85%] flex flex-col  pt-[30px]">

        <div className="lg:flex lg:justify-between lg:items-center lg:mb-[50px]">
          
          <div>
            <h4 className="text-[15px] lg:text-[18px] font-extrabold text-white mb-[25px]">get<span className="text-[#d434fe]">linked</span>
            </h4>

            <h4 className="text-white text-[11px]  lg:text-[15px] lg:leading-6 leading-5 mb-[35px] w-[280px] lg:w-[500px]">
              Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
            </h4>

            <h4 className="text-white text-[11px]  lg:text-[15px] lg:leading-6 leading-5  w-[280px] lg:w-[500px]">Terms of Use | Privacy Policy</h4>
          </div>

          <div className=" mt-[40px]">
            <h5 className="text-[#d434fe] text-[13px]  lg:text-[18px] mb-[15px]">Useful Links</h5>
            <h5 className="text-white text-[11px]  lg:text-[15px] mb-[10px]">Overview</h5>
            <h5 className="text-white text-[11px]  lg:text-[15px] mb-[10px]">Timeline</h5>
            <h5 className="text-white text-[11px]  lg:text-[15px] mb-[10px]">FAQs</h5>
            <h5 className="text-white text-[11px]  lg:text-[15px] mb-[10px]">Register</h5>

            <div className="flex items-center gap-4">
              <h5 className="text-[#d434fe] text-[13px]  lg:text-[18px]">Follow us</h5>
                  <div className="flex text-white text-[14px] gap-1">
                      <FiInstagram />
                      <RiTwitterXLine />
                      <FaFacebookF />
                      <BiLogoLinkedin />
                  </div>
            </div>
          </div>

          <div className="mt-[40px] mb-[40px] text-white">
            <h5 className="text-[#d434fe] text-[13px]  lg:text-[18px] mb-[15px]">Contact us</h5>
            <div  className="flex gap-3">
              <div>
                <BsFillTelephoneFill />
              </div>
              <h5 className="text-white text-[11px]  lg:text-[15px] mb-[10px]">+234  6707653444</h5>
            </div>

            <div className="flex gap-3">
              <div>
                <HiLocationMarker />
              </div>
              <h5 className="text-white text-[11px]  lg:text-[15px] mb-[10px]">
                27, Alara Street<br/>
                Yaba 100012<br/>
                Lagos State
              </h5>
            </div>
          </div>

        </div>

        <div className="text-white text-[11px] lg:text-[15px] text-left lg:text-center mb-[20px]">
          All rights reserved. © getlinked Ltd.
        </div>

      </div>

    </div>
  )
}

export default Footer