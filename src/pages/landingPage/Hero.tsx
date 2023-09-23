// import React from 'react'
import { useState, useEffect } from 'react';
import line from "../../assets/hero-line.png"
import chain from "../../assets/hero-chain.png"
import cracker from "../../assets/hero-cracker.png"
import bulb from "../../assets/hero-bulb.png"
import { Button } from "../../components/static";
import moment from "moment";
import person from "../../assets/hero-img.png";
import starWhite from "../../assets/star-white.png";
import starRed from "../../assets/star-red.png"
import { NavLink } from 'react-router-dom';


const Hero = () => {

  const [timeLeft, setTimeLeft] = useState(moment.duration(24, 'hours'))

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.asSeconds() > 0) {
        setTimeLeft(timeLeft.subtract(1, 'second'));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const hours = timeLeft.hours();
  const minutes = timeLeft.minutes();
  const seconds = timeLeft.seconds();

  

  return (
    <div className='w-full h-screen bg-[#150E28] relative font-pop overflow-hidden flex justify-center items-center'>

      <div className="absolute top-[70px] left-[-30px] w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

      <div className="relative w-[85%] h-full flex flex-col justify-between items-center lg:flex-row ">

        <div className="h-[15px] mt-[90px] mb-[45px] lg:mb-0 relative lg:absolute lg:top-[90px] lg:m-0 lg:right-0">
          <h5 className="font-mont text-white text-[13px] text-center lg:text-[18px]">Igniting a revolution in HR Innovation</h5>
          <img src={line} alt="" className="absolute w-[110px] right-0 lg:w-[140px]" />
        </div>

        <div className="flex flex-col justify-center items-center  lg:mt-0 lg:items-start">

          <img src={starWhite} alt="" className='absolute w-[10px] top-[130px] left-[85px] lg:w-[15px] lg:top-[100px]  lg:left-[65px]' />

          <img src={starRed} alt="" className='hidden lg:block absolute lg:w-[15px] lg:top-[155px]  lg:left-[555px]' />

          <img src={starRed} alt="" className=' hidden lg:block absolute lg:w-[15px] lg:bottom-[185px]  lg:left-[355px]' />

          <h4 className="text-[24px] font-extrabold text-white relative lg:text-[60px] lg:mt-[30px]">getlinked Tech <span>
            <img src={bulb} alt="" className="absolute w-[15px] top-[-10px] right-[10px] lg:w-[30px] lg:top-[-13px] lg:right-[25px]" /></span>
          </h4>
          <div className="flex items-center relative">
            <h4 className="text-[24px] font-extrabold text-white lg:text-[57px]">Hackathon <span className="text-[#d434fe]">1.0</span></h4>
            <img src={chain} alt="" className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" />
            <img src={cracker} alt="" className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]" />
          </div>

          <h5 className="text-center text-[11px] text-white mb-[10px] w-[280px] lg:text-left lg:text-[14px] lg:w-[400px] lg:mb-[30px]">Participate in getLinked tech Hackathon 2023 and stand a chance to win a Big price</h5>

          <NavLink to='/'>
              <Button 
                  buttonContent="Register"
                />
            </NavLink>

            <div className="flex font-mont text-white gap-6 mt-[10px] lg:mt-[50px]">
              <h5 className='text-[22px] lg:text-[32px]'>{hours < 10 ? `0${hours}` : hours}<span className='text-[14px]'>H</span></h5>
              <h5 className='text-[22px] lg:text-[32px]'>{minutes < 10 ? `0${minutes}` : minutes}<span className='text-[14px]'>M</span></h5>
              <h5 className='text-[22px] lg:text-[32px]'>{seconds < 10 ? `0${seconds}` : seconds}<span className='text-[14px]'>S</span></h5>
            </div>

        </div>

        <div className='lg:flex lg:flex-col lg:justify-between lg:items-center h-full'>
          <div className='hidden lg:block'></div>

          <img className='w-[400px] lg:w-[600px] lg:flex ' src={person} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Hero