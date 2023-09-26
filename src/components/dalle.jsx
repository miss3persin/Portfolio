/* eslint-disable react/no-unescaped-entities */
import '../styles/sushiman.css'
import image_hero from '../assets/dall-e clone.png'
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
        <h1 className='hoverable'>DALL-E Clone - Work in Progress</h1>
    </header>

    <section className="description">
        <h2 className='hoverable'>Description:</h2>
        <p className='hoverable'>
            DALL-E Clone is an ongoing personal project aimed at replicating the functionality of the original image generative Artificial Intelligence, DALL-E. The primary objective of this project is to gain a comprehensive understanding of utilizing OpenAI's APIs and harnessing their capabilities for creative image generation.
        </p>

        <div className="image1 hoverable"><img src={image_hero} alt="sushiman" /></div>
    </section>

    <section className="features">
        <h2 className='hoverable'>Key Features (Planned):</h2>
        <ul className='hoverable'>
        <li>Integration with OpenAI API: The project will leverage OpenAI's powerful API to generate diverse and imaginative images based on user input.</li>
            <li>Interactive User Interface: A user-friendly interface will be designed to facilitate seamless interaction, allowing users to experiment with various inputs and observe the corresponding image outputs.</li>
            <li>Customization Options: Users will have the ability to fine-tune parameters to influence the generated images, enabling a high degree of creative control.</li>
            <li>Real-time Rendering: The project aims to provide near-instantaneous feedback, ensuring a smooth and responsive user experience.</li>
            <li>Visual Output Display: The generated images will be displayed in a visually appealing format, allowing users to appreciate the creative potential of the system.</li>
       </ul>
    </section>

    <section className="current-progress">
        <h2 className='hoverable'>Current Progress:</h2>
        <p className='hoverable'>
            As of now, the project is in its early stages of development. Initial research and experimentation with OpenAI's API have been conducted, and the foundation for the user interface has been established. The focus is currently on implementing the core functionality for image generation and refining the user experience.
        </p>
    </section>

    <section className="challenges">
        <h2 className='hoverable'>Challenges Faced:</h2>
        <p className='hoverable'>
            The project has encountered challenges related to understanding and effectively harnessing the capabilities of OpenAI's API. Additionally, ensuring a seamless and intuitive user experience while maintaining real-time responsiveness poses an ongoing challenge.
        </p>
    </section>

    <section className="future-enhancements">
        <h2 className='hoverable'>Future Enhancements (Planned):</h2>
        <p className='hoverable'>
            Moving forward, the project will focus on refining the user interface, optimizing the image generation process, and potentially exploring additional features such as style transfer and advanced customization options. User feedback and testing will play a crucial role in shaping the project's future direction.
        </p>

    </section>

    <footer>
    <p className='hoverable'>Note: This project is a work in progress and is solely intended for personal learning and experimentation purposes.</p>
    </footer>
      </div>
    </div>
  );
}

export default Sushiman;
