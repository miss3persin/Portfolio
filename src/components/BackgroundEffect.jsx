import {useEffect} from 'react'
import '../styles/BackgroundEffect.css'
import { TweenMax } from 'gsap';

const BackgroundEffect = () => {
    useEffect(() => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
        const randomChar = () => chars[Math.floor(Math.random() * chars.length)],
              randomString = length => Array.from({length}, randomChar).join("");
    
        // eslint-disable-next-line no-unused-vars
        const handleMouseMove = (e) => {
          const content = document.querySelector('.content');
          content.innerText = randomString(17000);


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
    <div className="cursor">
    <div className="cursor__ball cursor__ball--big">
      <svg height="30" width="30">
        <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
      </svg>
    </div>

    <div className="cursor__ball cursor__ball--small">
      <svg height="10" width="10">
        <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
      </svg>
    </div>
  </div>
    <div className='container'>
    <div className="wrapper"><p className="content">
</p></div>
    </div>
    </>
  )
}

export default BackgroundEffect