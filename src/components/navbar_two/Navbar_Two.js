import './index.css'
import React, { useState } from 'react'
import navbarLogo from '../../assets/images/innova7e-Horizontal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavbarTwo = () => {
    const [menu, setMenu] = useState(false)
    
    const handleMenu = () => {
        setMenu(!menu)
    }
    
    
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center text-gray-400 px-4 main-nav z-50'>
        <div className=''>
            <Link to='/#inicio'>
                <img src={navbarLogo} alt='logo' style={{width:'120px'}} className='cursor-pointer'></img>
            </Link>
        </div>
        <ul className='hidden md:flex cursor-pointer gap-4 mr-8 whitespace-nowrap menu-btn'>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                <Link to='/#inicio'>
                    Inicio
                </Link>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem] dropdown'>
                <Link to='/#marketing'>
                    Marketing Digital
                </Link>
                <div className='dropdown-content text-gray-400 pt-2'>
                    <Link to='/gestion-de-marcas'>Gestión de Marca</Link>
                    <Link to='/video-marketing'>Video Marketing</Link>
                    <Link to='/branding'>Branding</Link>
                    <Link to='/capacitacion'>Capacitación</Link>
                </div>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem]'>
                Quiénes Somos
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem] dropdown'>
                <Link to='/#tec'>
                    Tecnología
                </Link>
                <div className='dropdown-content text-gray-400 pt-2'>
                    <Link to='/paginas-web'>Paginas Web</Link>
                    <Link to='/hosting-dominio'>Hosting y dominio</Link>
                    <Link to='/aplicaciones'>Aplicaciones</Link>
                </div>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem] dropdown'>
                <Link to='/#desarrollo' >
                    Desarrollo Audiovisual
                </Link>
                <div className='dropdown-content text-gray-400 pt-2'>
                    <Link to='/produccion-publicitaria'>Producción Publicitaria</Link>
                    <Link to=''>Video-Documental</Link>
                    <Link to=''>Fotografía</Link>
                </div>
            </li>
            <li className='transition ease-in-out delay-75 hover:text-gray-300 font-medium text-[1rem] dropdown'>
                <Link to='/#diseno'>
                    Diseño Gráfico
                </Link>
                <div className='dropdown-content text-gray-400 pt-2 right-2'>
                    <Link to=''>Blender 3D</Link>
                    <Link to=''>Papelería Corporativa</Link>
                    <Link to=''>Desarrollo de Identidad</Link>
                    <Link to=''>Enmaquetado Web</Link>
                    <Link to=''>Gigantografía</Link>
                </div>
            </li>
        </ul>
        <div className='md:hidden z-50' onClick={handleMenu}>
            {!menu ? <FontAwesomeIcon icon={faBars} className='text-xl hover:text-gray-300'/> : <FontAwesomeIcon icon={faXmark} className='text-xl hover:text-gray-300' />}
        </div>
            <ul className={!menu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen phone-menu flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl font-bold hover:text-gray-300' onClick={handleMenu}>
                    Inicio
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300' onClick={handleMenu}>
                    Marketing Digital
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300' onClick={handleMenu}>
                    Quiénes Somos
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300' onClick={handleMenu}>
                   Tecnología
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300' onClick={handleMenu}>
                    Desarrollo Audiovisual
                </li>
                <li className='py-6 text-2xl font-bold hover:text-gray-300' onClick={handleMenu} >
                    Diseño Gráfico
                </li>
            </ul>
    </div>
  )
}

export default NavbarTwo