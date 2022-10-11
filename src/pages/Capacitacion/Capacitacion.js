import React, { useEffect } from 'react'
import NavbarTwo from '../../components/navbar_two/Navbar_Two'
import './index.css'

const Capacitacion = () => {

    useEffect (() => {
        window.scrollTo(0 , 0)
    }, [])

    return (
        <>
        <NavbarTwo/>    
        <div className='h-full w-full pt-20'>
            <div className='h-screen w-full mt-18'>
                Capacitación
            </div>
        </div>
        </>
      )
}

export default Capacitacion