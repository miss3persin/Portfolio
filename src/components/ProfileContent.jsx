/* eslint-disable react/no-unescaped-entities */
import "../styles/ProfileContent.css"
import { TweenMax } from 'gsap';
import { useEffect } from "react";

const ProfileContent = () => {

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


  const handleButtonClick = () => {
    window.open('https://drive.google.com/file/d/1mvYPnq-guxQPXBeUsSwUYaDVzjEklZSL/view?usp=share_link', '_blank');
  };
  return (
    <>
    <div className='backdrop-text3'>ABOUT</div>
    <div className='profile-container' data-aos="fade-left" data-aos-delay="500">
      <div className="intro">
      <p className='hoverable'>SEGUN IGE-BELLO at your service.</p>
      <p className='hoverable'>A Frontend Web Developer, and UI enthusiast.</p>
      </div>

      <div className="info-me">
      <p className='hoverable'>I'm a freelancer with a very casual and free-spirited personality.</p>
      <p className='hoverable'>I'm always ready to learn and explore anything cool.</p>
      <p className='hoverable'>Got questions, a job that needs to be done or exciting collaborations?</p>
      <p className='hoverable'>Reach out anytime. 24/7, i'm always open</p>
      </div>

      <div className="side-comment">
      <p className='hoverable'>Check out my Resumé below or the projects section to find out more</p>
      <p className='hoverable'>about my past and present projects (WIP)!</p>
      </div>
      <button className="download-btn hoverable" onClick={handleButtonClick}>RESUMÉ</button>
    </div>
    </>
  )
}

export default ProfileContent