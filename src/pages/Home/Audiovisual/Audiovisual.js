import './index.css'
import React from 'react'
import ImageContainer from '../../../components/imageContainer/ImageContainer'
import publicity from '../../../assets/images/intem-10.jpg'
import photo from '../../../assets/images/intem-11.jpg'
import videoDoc from '../../../assets/images/intem-12.jpg'

const Audiovisual = () => {
  return (
    <div className='w-full md:h-screen'>
        <div className='w-full h-full flex flex-col'>
            <div className='grid md:grid-cols-2 h-full w-full'>
                <ImageContainer image={publicity} title={'Producción Publicitaria'} descriptionOne={'Marca La diferencia'} color={'white'} id={'tec1'}/>
                <div className='grid md:grid-rows-2 h-full w-full'>
                    <ImageContainer image={videoDoc} title={'Video-Documental'} descriptionOne={'Haz la mejor videografía'} descriptionTwo={'con nosotros'} color={'black'} id={'tec2'}/>
                    <ImageContainer image={photo} title={'Fotografía'} descriptionOne={'Una foto dice más de'} descriptionTwo={'mil palabras'} color={'black'} id={'tec3'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Audiovisual