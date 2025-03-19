import React from 'react'

const Controls = () => {
  return (
    <div className='absolute top-3 right-3 space-x-2'>
        <button className='text-2xl text-pink-400 cursor-pointer'>
            <i className='bx bxs-zoom-in'></i>
        </button>
        <button className='text-2xl text-pink-400 '>
            <i className='bx bx-x-circle'></i>
        </button>
    </div>
  )
}

export default Controls