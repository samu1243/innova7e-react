import './index.css'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'

const Footer = () => {
 

  return (
    <div className='w-full h-full'>
        <div className='flex justify-center items-center h-[4em] bg-[#272727]'>
            <div className='text-white font-semibold flex items-center'>
                © 2021 INNOVAR NUNCA FUE TAN FÁCIL
                <Link to={Home}>
                <img width={'40px'} alt={'innova7e logo'} src={logo}></img>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer