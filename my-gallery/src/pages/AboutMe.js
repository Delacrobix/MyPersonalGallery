import React from 'react';
import jeffPic from '../assets/images/DSC_0036.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div>
      <div className='about-container'>
        <div className='text-container'>
          <p className='text-center'>
            I'm just a guy who likes to capture moments and share them with
            everyone.
          </p>
          <div className='flex justify-center mx-8 my-4'>
            <img
              className=' w-auto xl:h-[60vh] max-w-full max-h-full md:h-auto rounded-sm'
              src={jeffPic}
              alt=''
            />
          </div>
          <p className='text-center'>
            {`With love, `}
            <Link
              to='https://www.jeffrm.com.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              Jeff Rerín
            </Link>
          </p>
          <div className='h6-container-aboutme text.pretty text-xl'>
            <h6 className=' '>Thank you for your visit.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
