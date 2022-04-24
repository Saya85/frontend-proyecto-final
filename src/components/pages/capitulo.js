import React from 'react';
import {useParams} from 'react-router-dom';

import Comentarios from './comentarios';
import CapituloContent from './capitulo-content';

function Capitulo() {

    const { id } = useParams();
    console.log(id);
    return (
        <div>
            
            <CapituloContent id={id} />
        </div>
    )
     
}

export default Capitulo;