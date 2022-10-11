import React, { useEffect } from 'react'
import NavbarTwo from '../../components/navbar_two/Navbar_Two'
import './index.css'

const Web = () => {

    useEffect (() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <NavbarTwo/>    
        <div className='h-full w-full pt-20'>
            <div className='h-screen w-full mt-18'>
                Paginas Web
            </div>
        </div>
        </>
      )
}

export default Web