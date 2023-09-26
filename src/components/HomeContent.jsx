/* eslint-disable react/no-unescaped-entities */
import "../styles/HomeContent.css"
import { TweenMax } from 'gsap';
import {useEffect} from 'react';

const HomeContent = () => {
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
    <div className='backdrop-text'>HOME</div>
    <div className="home-text" data-aos="fade-left" data-aos-delay="500">
      <h1 className="hi hoverable">Hi there!</h1>
      <div className="my-name">
      <h1 className="hoverable">My name is SEGUN IGE-BELLO</h1>
      <h1 className="hoverable">A FULLSTACK WEB DEVELOPER</h1>
      <h1 className="hoverable">and this is my portfolio.</h1>
      </div>
      <div className="side-comment">
      <p className="hoverable">Feel free to snoop around, and I hope you have a great time.</p>
      <p className="hoverable">I do recommend checking out the 'about me' or 'portfolio' section though.</p>
      </div>
    </div>
    </>
  )
}

export default HomeContent