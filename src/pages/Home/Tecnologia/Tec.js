import './index.css'
import React from 'react'
import ImageContainer from '../../../components/imageContainer/ImageContainer'
import web from '../../../assets/images/intem-7.jpg'
import hosting from '../../../assets/images/intem-8.jpg'

const Tec = () => {
  return (
    <div className='w-full md:h-screen'>
        <div className='mx-auto flex flex-col justify-center w-full h-full'>
            <div className='grid md:grid-cols-2 w-full h-full'>
                <ImageContainer image={web} title={'Páginas Web'} descriptionOne={'Atrae más clientes con'} descriptionTwo={'Un sitio web'} color={'black'} id={'b1'}/>
                <ImageContainer image={hosting} title={'Hosting y Dominio'} descriptionOne={'El mejor servicio'} descriptionTwo={'De alojamiento'} color={'white'} id={'b2'}/>
            </div>
        </div>
    </div>
  )
}

export default Tec