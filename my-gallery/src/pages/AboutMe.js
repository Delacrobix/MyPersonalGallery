import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div>
      <div className='about-container'>
        <div className='text-container'>
          <p>
            I'm just a guy who likes to capture moments and share it for all.
          </p>
          <div className=''></div>
          <p>
            {`Whit love, `}
            <Link
              to='https://www.jeffrm.com.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              Jeff Rerín
            </Link>
          </p>
          <div className='h6-container-aboutme'>
            <h6>Thank you for your visit</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
