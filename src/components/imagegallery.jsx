/* eslint-disable react/no-unescaped-entities */
import '../styles/sushiman.css'
import image_hero from '../assets/gallery stuff/main part.png'
import image_footer from '../assets/gallery stuff/search part.png'
import image_sushi from '../assets/gallery stuff/home part.png'
import image_popular from '../assets/gallery stuff/profile part.png'
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
        <h1 className='hoverable'>Image Gallery - A Drag and Drop Experience</h1>
        <p className='hoverable'><a href="https://github.com/miss3persin/my-image-gallery" target='blank'>Check it out on Github</a> or <a href="https://my-image-gallery-one.vercel.app/" target='blank'>check out the live website itself</a></p>
    </header>

    <section className="description">
        <h2 className='hoverable'>Description:</h2>
        <p className='hoverable'>
        "Image Gallery" is a minimalist web application developed during my internship at HNG. It showcases my proficiency in frontend development, with a primary focus on authentication, authorization, and dynamic user interactions.
        </p>
        <p className='hoverable'>
            The application leverages the Pixabay API, allowing users to effortlessly search for and discover images based on their respective tags. The clean and intuitive user interface ensures a seamless browsing experience.
        </p>

        <div className="image1 hoverable"><img src={image_hero} alt="sushiman" /></div>
    </section>

    <section className="features">
        <h2 className='hoverable'>Key Features:</h2>
        <ul className='hoverable'>
        <li>Pixabay API Integration: Utilizes the Pixabay API to enable users to search for images using tags, providing a vast array of visually appealing content.</li>
            <li>Drag and Drop Functionality: Logged-in users have the ability to dynamically rearrange images on-screen through an intuitive drag and drop feature. This interactive element enhances the user experience.</li>
            <li>Authentication and Authorization: Implements robust user authentication and authorization systems, ensuring secure access and personalized experiences for registered users.</li>
            <li>Clean and Simple UI: The user interface is designed with a minimalist approach, prioritizing usability and a visually pleasing aesthetic.</li>
        </ul>
        <div className='images-together hoverable'>
        <div className="image2"><img src={image_popular} alt="sushiman" /></div>
        <div className="image2"><img src={image_sushi} alt="sushiman" /></div>
        </div>
    </section>

    <section className="technologies">
        <h2 className='hoverable'>Technologies Used:</h2>
        <ul className='hoverable'>
        <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Pixabay API</li>
        </ul>
    </section>

    <section className="challenges">
        <h2 className='hoverable'>Challenges Faced:</h2>
        <p className='hoverable'>
        The main challenge in this project was implementing the drag and drop functionality. This required a deep dive into frontend development techniques and understanding how to interact with the DOM to enable dynamic user interactions.
        </p>
    </section>

    <section className="outcome">
        <h2 className='hoverable'>Outcome:</h2>
        <p className='hoverable'>
            "Image Gallery" serves as a testament to my frontend development skills, showcasing proficiency in authentication, authorization, and dynamic user interactions. The project not only demonstrates my ability to integrate external APIs but also highlights my commitment to creating clean and intuitive user interfaces.
        </p>
    </section>

    <section className="future-enhancements">
        <h2 className='hoverable'>Future Enhancements:</h2>
        <p className='hoverable'>
            While the "Image Gallery" is a semi-functional project, future iterations could include backend integration for features such as user account management, personalized image collections, and advanced search filters. Additionally, implementing user-generated content and social features could further enhance user engagement.
        </p>
        <div className="image1 hoverable"><img src={image_footer} alt="sushiman" /></div>
    </section>

    <footer>
        <p className='hoverable'>Note: This project was developed during my internship at HNG and is a semi-functioning website.</p>
    </footer>
      </div>
    </div>
  );
}

export default Sushiman;
