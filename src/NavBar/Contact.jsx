
import React from 'react';
import { Icon } from '@iconify/react';
import '../assets/contact.css';
const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="card contact-center">
        <div> 
          <p className='contact-info'> <span><Icon icon="mdi:email-outline" /></span> lokeshshrestha@gmail.com</p>
          <p className='contact-info'><span><Icon icon="mdi:map-marker" /></span> Kapan, Kathmandu</p>
          <p className='contact-info'><span><Icon icon="mdi:phone" /></span> +977 9812345678</p>
        </div>
        <div className='socials'>
          <p>Socials</p>
          <a href="https://np.linkedin.com/in/lokeshshrestha" target='_blank'> <Icon icon="mdi:linkedin" /></a>
          <a href="https://github.com/LokeshShrestha" target='_blank'><Icon icon="mdi:github" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact