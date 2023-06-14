import React from 'react';

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
            <a
              href='https://www.jeffrm.com.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              mi portafolio
            </a>{' '}
            como programador.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
