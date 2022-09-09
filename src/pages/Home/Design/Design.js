import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Design = () => {
  return (
    <div className='h-screen w-full design'>
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className='grid sm:grid-cols-2 w-full sm:items-center'>
                <div></div>
                <div className='text-center mr-2 mb-4'>
                    <p className='text-[1.5rem] sm:text-4xl font-bold'>Blender 3D</p>
                    <p className='text-gray-100 text-[1rem] sm:text-4xl font-semibold' >Modelado y Renderizado</p>
                    <p className='font-bold mt-2 sm:mt-4 sm:text-2xl text-blue-700 hover:text-blue-500'>
                        <Link to=''> Más Información </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design