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
                <ImageContainer image={paper}/>
                <ImageContainer image={identity}/>
                <ImageContainer image={webPacket}/>
                <ImageContainer image={giga} />
            </div>
        </div>
    </div>
  )
}

export default Services