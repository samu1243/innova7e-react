import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Immobiliaria = () => {
  return (
    <div className='h-screen w-full imm'>
        <div className='flex flex-col justify-center text-center h-full'>
            <div className='w-full md:grid md:grid-cols-2 flex justify-end ml-[0.7rem] pr-4'>
                <div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-white text-[1rem] sm:text-4xl font-bold'>
                    Marketing para Inmobiliaria
                    </p>
                    <p className='text-gray-400 text-[1rem] sm:text-4xl font-semibold sm:pt-4'>
                        Impulsa tu Inmobiliaria
                    </p>
                    <p className='font-bold mt-2 sm:mt-4 sm:text-2xl text-blue-700 hover:text-blue-500'>
                        <Link to=''> Más Información </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Immobiliaria