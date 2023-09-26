/* eslint-disable react/no-unescaped-entities */
import "../styles/ContactContent.css"
import { TweenMax } from 'gsap';
import Form from '../components/Form'
import { useEffect } from "react";

const ContactContent = () => {
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
    <>
    <div className='backdrop-text1'>CONTACT ME</div>
    <div data-aos="fade-left" data-aos-delay="500" className="contact-container">
    <div className="contact-text">
      <p className="hoverable">Feel free to get in touch, I'll get back to you as soon as I can. </p>
    </div>
    <Form/>
    </div>
    </>
  )
}

export default ContactContent