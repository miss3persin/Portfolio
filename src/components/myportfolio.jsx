/* eslint-disable react/no-unescaped-entities */
import '../styles/sushiman.css'
import image_hero from '../assets/myportfolioimg.png'
import { TweenMax } from 'gsap';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Sushiman = ({ closeModal }) => {
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
    <div className="modal-container">
      <div className="modal-content">
        <div className="close-button hoverable" onClick={closeModal}>X</div>

        <header>
        <h1 className='hoverable'>Personal Portfolio - Work in Progress</h1>
    </header>

    <section className="description">
        <h2 className='hoverable'>Description:</h2>
        <p className='hoverable'>
            My Personal Portfolio is an ongoing project, a showcase of my skills, projects, and achievements in the field of web development. It serves as a reflection of my evolving abilities and a platform for potential clients and collaborators to explore my work. At its core, this portfolio aims to demonstrate not only what I can do, but also my commitment to ongoing improvement, with a focus on enhancing responsiveness and optimizing image loading speed.
        </p>

        <div className="image1 hoverable"><img src={image_hero} alt="sushiman" /></div>
    </section>

    <section className="features">
        <h2 className='hoverable'>Key Features (Planned):</h2>
        <ul className='hoverable'>
        <li>Responsive Design: The portfolio is being designed with responsiveness in mind to ensure an optimal viewing experience across various devices and screen sizes.</li>
            <li>Project Showcases: A curated selection of my projects will be presented, highlighting a diverse range of skills and technologies.</li>
            <li>Speed Optimization: Efforts are underway to enhance the loading speed of images and content for an efficient and seamless user experience.</li>
            <li>Contact and Connect: Users will have the means to get in touch with me and explore my presence on various professional platforms.</li>
            <li>Skills and Expertise: A clear representation of my technical skills, tools, and technologies will be provided to showcase my proficiency.</li>
        </ul>
    </section>

    <section className="current-progress">
        <h2 className='hoverable'>Current Progress:</h2>
        <p className='hoverable'>
            The portfolio is currently in active development. The initial layout and design have been established, along with the integration of key content elements. The main focus is on refining responsiveness and implementing optimization techniques for faster image loading.
        </p>
    </section>

    <section className="challenges">
        <h2 className='hoverable'>Challenges Faced:</h2>
        <p className='hoverable'>
            A significant challenge has been fine-tuning responsiveness to ensure a consistent and visually appealing experience across all devices. Additionally, optimizing image loading speed without compromising quality requires careful consideration and testing.
        </p>
    </section>

    <section className="future-enhancements">
        <h2 className='hoverable'>Future Enhancements (Planned):</h2>
        <p className='hoverable'>
            Moving forward, the project will continue to evolve with ongoing refinements to responsiveness and image loading speed. Additional sections, such as a blog or interactive elements, may be integrated to further engage visitors. User feedback will play a vital role in shaping the portfolio's development.
        </p>

    </section>

    <footer>
        <p className='hoverable'>Note: This project is a work in progress and is intended to showcase my evolving skills and achievements in web development.</p>
    </footer>
      </div>
    </div>
  );
}

export default Sushiman;
