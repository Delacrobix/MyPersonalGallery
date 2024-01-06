import React from 'react';

import linkedIn from '../assets/socialmedia/linkedin.png';
import myWebsite from '../assets/socialmedia/my website.png';
import github from '../assets/socialmedia/github.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='sub-footer section-padding'>
          <div className='sub-footer-links'>
            <div className='sub-footer-links-div'>
              <h3 className='footer-title'>Built by: </h3>
              <p> Jeffrey S. Rerín</p>
            </div>
            <div className='sub-footer-links-div'>
              <h3 className='footer-title'>Social media: </h3>
              <div className='social-media'>
                <div className='footer-p'>
                  <Link
                    to='https://www.linkedin.com/in/jeffrey-rerin/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p>LinkedIn</p>
                    <img className='footer-img' src={linkedIn} alt='' />
                  </Link>
                </div>
                <div className='footer-p'>
                  <Link
                    to='https://github.com/Delacrobix'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p>GitHub</p>
                    <img className='footer-img' src={github} alt='' />
                  </Link>
                </div>
                <div className='footer-p'>
                  <Link
                    to='https://www.jeffrm.com.co'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p>Portfolio</p>
                    <img
                      className='footer-img portfolio-img'
                      src={myWebsite}
                      alt=''
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
