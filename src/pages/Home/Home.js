import './index.css'
import React from 'react'
import wordsLogo from '../../assets/images/innova7e-Horizontal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import Marcas from './Marcas/Marcas'
import Marketing from './Marketing/Marketing'
import Immobiliaria from './Immobiliaria/Immobiliaria'
import Mentoring from './Mentoring/Mentoring'
import Tec from './Tecnologia/Tec'
import Audiovisual from './Audiovisual/Audiovisual'
import Design from './Design/Design'
import Services from './Services/Services'
import Navbar from '../../components/navbar/Navbar'



const Home = () => {
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <div className='w-full h-screen home' id='inicio'>
        <div className='max-w-[1800px] mx-auto px-8 flex flex-col justify-center text-center h-full'>
          <div className='w-full grid md:grid-cols-2 mb-[6%]'>
            <div></div>
            <div>
              <p className='text-gray-400 font-bold text-xl sm:text-4xl flex justify-center  mb-4'>
                ¡Innovar nunca fue tan fácil!
              </p>
              <p>
                <img src={wordsLogo} style={{width:'1200px'}} alt='company logo' className='' ></img>
              </p>
              <hr className='border-4 border-[#262626] rounded-lg mt-4 '></hr>
              <p className='text-gray-400 font-bold text-[1em] sm:text-2xl text-center mt-4'>
              Acompañamos a las organizaciones en sus procesos de innovación y transformación creativa
              </p>
              <div className='text-center border-1 border-gray-300 text-2xl sm:text-4xl pt-14 sm:pt-8 '>
                <Link to='marcas' smooth={true} duration={500} className='cursor-pointer'>
                  <FontAwesomeIcon icon={faAngleDown} className='text-white border-2 px-4 py-2 rounded-full hover:bg-white hover:text-black icon'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marcas/>
      <Marketing/>
      <Immobiliaria/>
      <Mentoring/>
      <Tec/>
      <Audiovisual/>
      <Design/>
      <Services/>
    </div>
  )
}

export default Home