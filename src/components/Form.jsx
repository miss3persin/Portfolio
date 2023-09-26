import { useState } from 'react';
import '../styles/Form.css'
import emailjs from 'emailjs-com';
import insta from '../assets/icons8-instagram.svg'
import twitter from '../assets/icons8-twitter.svg'
import github from '../assets/icons8-github.svg'
import { TweenMax } from 'gsap';
import { useEffect } from "react";


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
        'service_ljsosnj', 
        'template_zfz03fb',
        {
          to_email: 'victor.segunigebello@gmail.com', // Replace with the recipient's email
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'X0mXaI2H2EFOFMtiI'
      )
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    console.log(formData);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');

  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
};

const $hoverables = document.querySelectorAll('.hoverable');

for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseHover() {
  const $bigBall = document.querySelector('.cursor__ball--big');
  TweenMax.to($bigBall, .3, {
    scale: 3
  });
}

function onMouseHoverOut() {
    const $bigBall = document.querySelector('.cursor__ball--big');
    TweenMax.to($bigBall, .3, {
      scale: 1
    });
  }
    

    document.body.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].removeEventListener('mouseenter', onMouseHover);
        $hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className='name-input'>
        <label htmlFor="name" className='hoverable'>Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='email-input'>
        <label htmlFor="email" className='hoverable'>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='message-input'>
        <label htmlFor="message" className='hoverable'>Message: </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className='custom-area'
        />
      </div>
        <div className='button-and-socials'>
            <div className='socials'>
                <a href="https://www.instagram.com/vic_awesome/" target='blank' className='hoverable'><img src={insta} alt="instagram" /></a>
                <a href="https://github.com/miss3persin" target='blank' className='hoverable'><img src={github} alt="github" /></a>
                <a href="https://twitter.com/miss3persin" target='blank' className='hoverable'><img src={twitter} alt="twitter" /></a>
            </div>
      <button type="submit" className="send-btn hoverable" >SEND</button>
        </div>
    </form>
  );
};

export default Form;
