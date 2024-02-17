import React from 'react';

import goa from '../assests/goa.jpg';
import jami from '../assests/jami.jpg';
import pict1 from '../assests/pic1.jpg';
import pict2 from '../assests/pic2.jpg';
import pict3 from '../assests/pic3.jpg';
import pict4 from '../assests/pic4.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={goa} text='Bora Bora' />
    <SelectsCard bg={jami} text='Maldives' />
    <SelectsCard bg={pict1} text='Antigua' />
    <SelectsCard bg={pict2} text='Cozumel' />
    <SelectsCard bg={pict3} text='Jamaica' />
    <SelectsCard bg={pict4} text='Key West' />
    
        
    </div>
  )
}

export default Selects