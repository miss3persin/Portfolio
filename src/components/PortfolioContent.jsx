import "../styles/PortfolioContent.css"
import sushiman1 from '../assets/sushimanSite.png'
import moviebox1 from '../assets/moviebox stuff/hero part.png'
import imagegallery1 from '../assets/gallery stuff/search part.png'
import { TweenMax } from 'gsap';
import { useEffect, useState } from "react";
import Sushiman from '../components/Sushiman'
import Moviebox from '../components/moviebox'
import ImageGallery from '../components/imagegallery'
import dalle1 from '../assets/dall-e clone.png'
import Dalle from '../components/dalle'
import transverseimage from '../assets/transverseimage.png'
import Transverse from '../components/transverse'
import myimage from '../assets/myportfolioimg.png'
import Myportfolio from '../components/myportfolio'

const PortfolioContent = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const activateComponent = (component) => {
    setActiveComponent(component);
    document.body.style.overflow = 'hidden';
  }

  const deactivateComponent = () => {
    setActiveComponent(null);
  }

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
    <div className='backdrop-text2'>PORTFOLIO</div>
    <div className="project-container" data-aos="fade-left" data-aos-delay="500">
      <div className="projects">
      <div className="project-div hoverable" onClick={() => activateComponent(<Sushiman closeModal={deactivateComponent} />)}><img src={sushiman1} alt="sushiman" /> Sushiman</div>
      <div className="project-div hoverable" onClick={() => activateComponent(<Moviebox closeModal={deactivateComponent} />)}><img src={moviebox1} alt="moviebox" /> MovieBox</div>
      <div className="project-div hoverable" onClick={() => activateComponent(<ImageGallery closeModal={deactivateComponent} />)}><img src={imagegallery1} alt="moviebox" /> Image Gallery</div>
      </div>
      <div className="projects">
      <div className="project-div hoverable" onClick={() => activateComponent(<Dalle closeModal={deactivateComponent} />)}><img src={dalle1} alt="moviebox" className="opacityvibe"/> <p className='normal'>WIP</p> DALL-E Clone (Work in Progress)</div>
      <div className="project-div hoverable" onClick={() => activateComponent(<Transverse closeModal={deactivateComponent} />)}><img src={transverseimage} alt="moviebox" className="opacityvibe"/> <p className='special'>WIP</p> TransVerse Chat App (Work in Progress)</div>
      <div className="project-div hoverable" onClick={() => activateComponent(<Myportfolio closeModal={deactivateComponent} />)}><img src={myimage} alt="moviebox" className="opacityvibe"/> <p className='special'> WIP</p> Personal Portfolio (Work in Progress)</div>
      </div>
    </div>
    {activeComponent && (
        <div className="overlay">
          <div className="overlay-content">
            {activeComponent}
            <div className="close-button hoverable" onClick={deactivateComponent}>X</div>
          </div>
        </div>
      )}
    </>
  )
}

export default PortfolioContent