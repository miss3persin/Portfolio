/* eslint-disable react/no-unescaped-entities */
import '../styles/sushiman.css'
import image_hero from '../assets/transverseimage.png'
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
        <h1 className='hoverable'>TransVerse Chat App - Work in Progress</h1>
    </header>

    <section className="description">
        <h2 className='hoverable'>Description:</h2>
        <p className='hoverable'>
            TransVerse Chat App is an ongoing web-based chat application designed to provide a seamless global communication experience. Drawing inspiration from popular messaging platforms like WhatsApp and Messenger, the app aims to facilitate effortless text communication across language barriers. Its standout feature lies in its advanced translation capability, ensuring that messages are automatically converted to the recipient's pre-set language, making global texting easy and smooth.
        </p>

        <div className="image1 hoverable"><img src={image_hero} alt="sushiman" /></div>
    </section>

    <section className="features">
        <h2 className='hoverable'>Key Features (Planned):</h2>
        <ul className='hoverable'>
        <li>Web-Based Platform: TransVerse operates directly in web browsers, eliminating the need for separate installations or downloads.</li>
            <li>Real-Time Messaging: Users can engage in real-time text conversations with friends and contacts.</li>
            <li>Language Translation: The app leverages advanced translation algorithms to automatically convert sent messages to the recipient's pre-set language.</li>
            <li>User Profiles: Users will have the option to create profiles, including language preferences and personal information.</li>
            <li>Emoji and Sticker Support: Enhance communication with a wide array of emojis and stickers.</li>
         </ul>
    </section>

    <section className="current-progress">
        <h2 className='hoverable'>Current Progress:</h2>
        <p className='hoverable'>
            The project is currently in the early stages of development. Initial groundwork has been laid for the web-based platform, and the foundation for real-time messaging has been established. The primary focus is now on integrating the translation functionality and refining the user interface for a smooth and intuitive experience.
        </p>
    </section>

    <section className="challenges">
        <h2 className='hoverable'>Challenges Faced:</h2>
        <p className='hoverable'>
            The project has encountered challenges related to implementing the translation feature effectively. Ensuring accuracy and responsiveness in real-time translation is a critical aspect that requires ongoing attention and refinement.
        </p>
    </section>

    <section className="future-enhancements">
        <h2 className='hoverable'>Future Enhancements (Planned):</h2>
        <p className='hoverable'>
            In the future, the project will focus on expanding language support, optimizing translation accuracy, and introducing additional features such as voice messaging and file sharing capabilities. User feedback will be instrumental in shaping the app's evolution.
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
