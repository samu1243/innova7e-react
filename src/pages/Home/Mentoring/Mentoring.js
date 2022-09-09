import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Mentoring = () => {
  return (
    <div className='h-screen w-full mentoring'>
        <div className='flex flex-col justify-center text-center h-full'>
            <div className='w-full md:grid md:grid-cols-2 flex justify-start ml-4'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-black text-lg sm:text-4xl font-bold'>
                      Consultoría y Mentoring
                    </p>
                    <p className='text-gray-400 text-lg sm:text-4xl font-semibold sm:pt-4'>
                      Obtén más experiencia
                    </p>
                    <p className='font-bold mt-2 sm:mt-4 sm:text-2xl text-blue-700 hover:text-blue-500'>
                        <Link to=''> Más Información </Link>
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mentoring