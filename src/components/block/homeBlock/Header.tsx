import React from 'react'

import {RiMenu4Line} from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { Button } from "../../static";

const Header = () => {

  const [dropDown, setDropDown] = React.useState(false)

  const showDropDown = () => {
    setDropDown(!dropDown)
  }

  return (
    <div 
    className="w-full h-[70px] bg-[#150E28]  fixed flex justify-center items-center font-pop z-40  border-b-gray-500 border-b-[1px]"
    >

      <div className="w-[85%] flex justify-between items-center">

        <div className="text-[17px] lg:text-[20px] font-extrabold text-white">get<span className="text-[#d434fe]">linked</span></div>


        { dropDown ? 
          <div className="text-white text-[17px] cursor-pointer lg:hidden" onClick={showDropDown}>
          <CgClose />
          </div>
        : 
          <div className="text-white text-[20px] cursor-pointer lg:hidden" onClick={showDropDown}>
            <RiMenu4Line />
          </div>
        }

        {/* { dropDown ? 
            <div className="absolute w-full h-screen top-[60px]  z-40 lg:hidden" onClick={showDropDown}>
              <div className="bg-[#150E28] h-[220px] w-full ml-[0px]">
                <div className="">
                  <h5 className="text-white cursor-pointer text-[14px] mt-[10px]">Timeline</h5>
                  <h5 className="text-white cursor-pointer text-[14px] mt-[10px]">Overview</h5>
                  <h5 className="text-white cursor-pointer text-[14px] mt-[10px]">FAQs</h5>
                  <h5 className="text-white text-[14px] cursor-pointer mt-[10px] mb-[10px]">Contact</h5>
                </div>

                <Button 
                    buttonContent="Register"
                    />
              </div>
            </div>
        : null
        }  */}

        <div className="hidden lg:flex justify-between items-center w-[50%]">
          <div className="flex">
            <h5 className="text-white cursor-pointer text-[14px]">Timeline</h5>
            <h5 className="text-white cursor-pointer text-[14px] ml-[25px]">Overview</h5>
            <h5 className="text-white cursor-pointer text-[14px] ml-[25px]">FAQs</h5>
            <h5 className="text-white text-[14px] cursor-pointer ml-[25px]">Contact</h5>
          </div>

          <Button 
              buttonContent="Register"
              />
        </div>
      </div>

      { dropDown ? 
            <div className="absolute w-full h-screen top-[70px]  z-40 lg:hidden transition-all 350ms ease-in-out" onClick={showDropDown}>
              <div className="bg-[#150E28] h-[245px] w-full pl-[25px] pt-[20px]">
                <div className="">
                  <h5 className="text-white cursor-pointer text-[14px] mt-[0px]">Timeline</h5>
                  <h5 className="text-white cursor-pointer text-[14px] mt-[10px]">Overview</h5>
                  <h5 className="text-white cursor-pointer text-[14px] mt-[10px]">FAQs</h5>
                  <h5 className="text-white text-[14px] cursor-pointer mt-[10px] mb-[10px]">Contact</h5>
                </div>

                <Button 
                    buttonContent="Register"
                    />
              </div>
            </div>
        : null
        } 

    </div>
  )
}

export default Header