import './index.css'
import React from 'react'
import ImageContainer from '../../../components/imageContainer/ImageContainer'
import paper from '../../../assets/images/intem-143.jpg'
import identity from '../../../assets/images/intem-15.jpg'
import webPacket from '../../../assets/images/intem-16.jpg'
import giga from '../../../assets/images/intem-17.jpg'

const Services = () => {
  return (
    <div className='w-full md:h-screen'>
        <div className='mx-auto flex flex-col justify-center h-full w-full'>
            <div className='grid md:grid-cols-2 w-full h-full'>
                <ImageContainer image={paper} title={'Papelería Corporativa'} descriptionOne={'Plasma tu imagen'} descriptionTwo={'con nosotros'} color={'black'} id={'c1'}/>
                <ImageContainer image={identity} title={'Desarrollo de Identidad'} descriptionOne={'Forma a tu marca de'} descriptionTwo={'una manera creativa'} color={'black'} id={'c2'}/>
                <ImageContainer image={webPacket} title={'Enmaquetado Web'} descriptionOne={'Damos una imagen digital'} descriptionTwo={'Que se adapte'} color={'black'} id={'c3'}/>
                <ImageContainer image={giga} title={'Gigantografía'} descriptionOne={'Lleva a lo grande tu'} descriptionTwo={'Imagen con nosotros'} color={'black'} id={'c4'}/>
            </div>
        </div>
    </div>
  )
}

export default Services