import React from 'react'

const SubmitButton = ({onClick, children}) => {
    
  return (
    <button className='border-none outline-none bg-[#0cc078] rounded-[33px] pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] font-medium text-white cursor-pointer' onClick={onClick}>
        {children}
    </button>
  )
}

export default SubmitButton
