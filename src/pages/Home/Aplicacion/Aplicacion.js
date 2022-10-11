import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Aplicacion = () => {
  return (
    <div className='h-full sm:h-screen w-full'>
        <div className='h-full w-full flex flex-col justify-center items-center aplicacion'>
            <div className='w-full h-full flex flex-col justify-between '>
                <div>
                </div>
                <div className='text-center mr-2 mb-4 mt-auto'>
                    <p className='text-white text-[16px] sm:text-4xl font-bold'>Desarrollo de aplicaciones Web</p>
                    <p className='text-gray-400 text-[14px] sm:text-4xl font-semibold' >Automatiza procesos</p>
                    <p className='font-bold sm:mt-4 sm:text-2xl text-blue-700 hover:text-blue-500'>
                        <Link to=''> Más Información </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aplicacion