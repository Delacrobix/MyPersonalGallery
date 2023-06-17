import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div>
      <div className='about-container'>
        <div className='text-container'>
          <p>
            Este proyecto fue construido con el objetivo de mejorar mis skills
            como programador. Las fotografías expuestas en esta aplicación son
            todas de la autoría de Jeffrey S. Rengifo Marin, no soy fotógrafo,
            simplemente me gusta capturar momentos. Invito al lector a visitar{' '}
            <Link
              to='https://www.jeffrm.com.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              mi portafolio
            </Link>{' '}
            como programador.
          </p>
          <div className='h6-container-aboutme'>
            <h6>Muchas gracias por visitar</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
