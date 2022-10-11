import './index.css'
import gestion from '../../../assets/images/intem-1.jpg'
import marketing from '../../../assets/images/intem-2.jpg'
import branding from '../../../assets/images/intem-3.jpg'
import capacitacion from '../../../assets/images/intem-4.jpg'

import React from 'react'
import ImageContainer from '../../../components/imageContainer/ImageContainer'

const Marketing = () => {


  return (
    
    <div className='w-full marketing md:h-screen' id='marketing'>
            <div className='flex h-[35px] sm:h-[60px] sm:text-4xl w-full bg-[#262626] justify-center items-center text-2xl font-bold text-white'>
                 Marketing Digital
            </div>
        <div className='mx-auto flex flex-col justify-center w-full h-full'>
            <div className='grid md:grid-cols-2 w-full h-full'>
                <ImageContainer image={gestion} title={'Gestión de Marca'} color='black' descriptionOne={'Prospecta tu imagen'} descriptionTwo={'con nosotros'} id='item-1' link={'/gestion-de-marcas'}/>
                <ImageContainer image={marketing} title={'Video Marketing'} color='white' descriptionOne={'Comerciales para'} descriptionTwo={'tus productos'} id='item-2' link={'/video-marketing'}/>
                <ImageContainer image={branding} title={'Branding'} color='white' descriptionOne={'Haz valer tu marca'} descriptionTwo={'con nosotros'} id='item-3' link={'/branding'}/>
                <ImageContainer image={capacitacion} title={'Capacitación'} color='black' descriptionOne={'Aprende con'} descriptionTwo={'nosotros'} id='item-4' link={'/capacitacion'}/>
            </div>
        </div>
    </div>
  )
}

export default Marketing