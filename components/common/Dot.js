import React from 'react'

const Dot = () => {
  return (
    <React.Fragment>
        <div className='flex mb-2'>
            {new Array(11).fill(null).map((item,index)=>(<div key={index} className='bg-[#d9d9d966] w-[12px] h-[12px] rounded-full mr-4'></div>))}
        </div>
        <div className='flex mb-2'>
            {new Array(11).fill(null).map((item,index)=>(<div key={index} className='bg-[#d9d9d966] w-[12px] h-[12px] rounded-full mr-4'></div>))}
        </div>
        <div className='flex mb-2'>
            {new Array(11).fill(null).map((item,index)=>(<div key={index} className='bg-[#d9d9d966] w-[12px] h-[12px] rounded-full mr-4'></div>))}
        </div>
    </React.Fragment>
  )
}

export default Dot