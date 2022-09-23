import './index.css'
import React, { useState } from 'react'
import navbarLogo from '../../assets/images/innova7e-Horizontal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link as SLink} from 'react-scroll'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 700){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const handleMenu = () => {
        setMenu(!menu)
    }
    
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center text-gray-400 px-4 main-nav z-50' id={color ? 'header' : ''}>
        <div className=''>
            <SLink to='inicio' smooth={true} duration={600}>
                <img src={navbarLogo} alt='logo' style={{width:'120px'}} className='cursor-pointer'></img>
            </SLink>
        </div>
        <ul className='hidden md:flex cursor-pointer gap-4 mr-8 whitespace-nowrap menu-btn'>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                <SLink to='inicio' smooth={true} duration={600}>
                    Inicio
                </SLink>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem] dropdown'>
                <SLink to='marketing' smooth={true} duration={600}>
                    Marketing Digital
                </SLink>
                <div className='dropdown-content text-gray-400'>
                    <Link to='/gestion-de-marcas'>Gestión de Marca</Link>
                    <Link to=''>Video Marketing</Link>
                    <Link to=''>Branding</Link>
                    <Link to=''>Capacitación</Link>
                </div>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                Quiénes Somos
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                <SLink to='tec' smooth={true} duration={600}>
                    Tecnología
                </SLink>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                <SLink to='desarrollo' smooth={true} duration={600}>
                    Desarrollo Audiovisual
                </SLink>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                <SLink to='diseno' smooth={true} duration={600}>
                    Diseño Gráfico
                </SLink>
            </li>
        </ul>
        <div className='md:hidden z-50' onClick={handleMenu}>
            {!menu ? <FontAwesomeIcon icon={faBars} className='text-xl hover:text-gray-300'/> : <FontAwesomeIcon icon={faXmark} className='text-xl hover:text-gray-300' />}
        </div>
            <ul className={!menu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen phone-menu flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl font-bold hover:text-gray-300'>
                    Inicio
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300'>
                    Marketing Digital
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300'>
                    Quiénes Somos
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300'>
                   Tecnología
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300'>
                    Desarrollo Audiovisual
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300'>
                    Diseño Gráfico
                </li>
            </ul>
    </div>
  )
}

export default Navbar