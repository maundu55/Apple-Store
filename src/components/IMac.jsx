import React from 'react'
import { imacModels } from '../data/index'

const IMac = () => {
  return (
    <div className='h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white'>
        <div className='h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50'>
            <img src="assettss/imac/green-side.jpg" 
            alt="IMac"
            className='2xl:max-w-full xl:max-36 max-w-24'
            />
        </div>
        <div className='bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4'>
        <img src="assettss/imac/green-front.jpg" 
            alt="IMac"
            className='2xl:max-w-full xl:max-52 lg:max-w-48'
            />
        </div>
    </div>
  )
}

export default IMac