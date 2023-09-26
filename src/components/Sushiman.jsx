/* eslint-disable react/no-unescaped-entities */
import '../styles/sushiman.css'
import sushiman1 from '../assets/sushimanSite.png'
import image_footer from '../assets/sushiman stuff/footer part.png'
import image_sushi from '../assets/sushiman stuff/sushi part.png'
import image_popular from '../assets/sushiman stuff/popular food part.png'
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
        <h1 className='hoverable'>Sushiman - A Sushi Website</h1>
        <p className='hoverable'><a href="https://github.com/miss3persin/Sushiman" target='blank'>Check it out on Github</a></p>
    </header>

    <section className="description">
        <h2 className='hoverable'>Description:</h2>
        <p className='hoverable'>
            Sushiman is a delightful showcase of my skills as a full-stack web developer, demonstrating proficiency in HTML, CSS, and JavaScript. This project was crafted as a learning experience to delve into the integration of JavaScript libraries, with a special focus on AOS animations. The result is a semi-functional website that brings the art of sushi to life on the web.
        </p>

        <div className="image1 hoverable"><img src={sushiman1} alt="sushiman" /></div>
    </section>

    <section className="features">
        <h2 className='hoverable'>Key Features:</h2>
        <ul className='hoverable'>
            <li>Interactive Menu: Explore a wide range of delectable sushi offerings through an intuitive and visually appealing menu. Each menu item is meticulously designed using HTML and CSS, with JavaScript providing the interactivity.</li>
            <li>AOS Animations: Elevating the user experience, the website incorporates AOS animations to bring an extra layer of dynamism to the user interface. As users scroll, elements gracefully animate into view, creating an engaging and immersive experience.</li>
            <li>Responsive Design: Designed with responsiveness in mind, Sushiman ensures a seamless experience across various devices and screen sizes. CSS media queries have been utilized to guarantee optimal display on desktops, tablets, and mobile phones.</li>
            <li>Contact Form: A contact form allows users to reach out, providing a straightforward means of communication. Form validation is implemented using JavaScript to ensure accurate and complete submission of user queries.</li>
            <li>Clean Code and Structure: The project adheres to best coding practices, maintaining a clean and organized codebase. This ensures ease of maintenance and scalability for future enhancements.</li>
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
            <li>AOS Animations</li>
        </ul>
    </section>

    <section className="challenges">
        <h2 className='hoverable'>Challenges Faced:</h2>
        <p className='hoverable'>
            The primary challenge in this project was integrating JavaScript libraries like AOS smoothly with the existing codebase. Ensuring proper initialization and synchronization with the page's elements required careful attention to detail.
        </p>
    </section>

    <section className="outcome">
        <h2 className='hoverable'>Outcome:</h2>
        <p className='hoverable'>
            Sushiman stands as a testament to my proficiency in HTML, CSS, and JavaScript, showcasing how these technologies can be leveraged to create an engaging and visually appealing web experience. The project highlights my ability to seamlessly integrate JavaScript libraries, enhancing user interaction and overall aesthetic appeal.
        </p>
    </section>

    <section className="future-enhancements">
        <h2 className='hoverable'>Future Enhancements:</h2>
        <p className='hoverable'>
            While Sushiman is a semi-functional project, future iterations could include backend integration for features such as user authentication, order placement, and real-time updates. Additionally, expanding the menu and incorporating user reviews could further enhance the website's functionality and user engagement.
        </p>
        <div className="image1 hoverable"><img src={image_footer} alt="sushiman" /></div>
    </section>

    <footer>
        <p className='hoverable'>Note: This project is a personal learning experience and not an actual deployed website.</p>
    </footer>
      </div>
    </div>
  );
}

export default Sushiman;
