import React from 'react'

interface buttonProp {
    buttonContent: string
}

const Button:React.FC<buttonProp> = ({buttonContent}) => {
  return (
    <button className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] w-[110px] h-[40px] rounded text-white text-[14px] cursor-pointer">{buttonContent}</button>
  )
}

export default Button;