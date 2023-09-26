/* eslint-disable react/no-unescaped-entities */
import '../styles/sushiman.css'
import image_hero from '../assets/moviebox stuff/hero part.png'
import image_footer from '../assets/moviebox stuff/moviedetails part.png'
import image_sushi from '../assets/moviebox stuff/home part.png'
import image_popular from '../assets/moviebox stuff/search part.png'
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
        <h1 className='hoverable'>MovieBox - Movie Finder Web Application</h1>
        <p className='hoverable'><a href="https://github.com/miss3persin/HNGx-Stage-Two-Task" target='blank'>Check it out on Github</a> or <a href="https://hn-gx-stage-two-task.vercel.app/" target='blank'>check out the live website itself</a></p>
    </header>

    <section className="description">
        <h2 className='hoverable'>Description:</h2>
        <p className='hoverable'>
            MovieBox is a clean and simple movie finder web application developed during my internship at HNG. Leveraging the power of the TMDB API, MovieBox allows users to effortlessly search for movies and access their respective details.
        </p>

        <div className="image1 hoverable"><img src={image_hero} alt="sushiman" /></div>
    </section>

    <section className="features">
        <h2 className='hoverable'>Key Features:</h2>
        <ul className='hoverable'>
            <li>Intuitive User Interface: MovieBox offers a clean and straightforward user interface, ensuring a seamless and enjoyable experience for users.</li>
            <li>TMDB API Integration: The application leverages the TMDB API to fetch comprehensive information about movies, including details like cast, crew, release date, and synopsis.</li>
            <li>Search Functionality: Users can easily search for movies by title, genre, or keywords, providing a convenient way to find films of interest.</li>
            <li>Responsive Design: Designed with responsiveness in mind, MovieBox adapts gracefully to various screen sizes, guaranteeing an optimal viewing experience on desktops, tablets, and mobile phones.</li>
            <li>Semi-Functional Site: While MovieBox is a semi-functional project, it provides a solid foundation for potential future enhancements and feature integrations.</li>
        </ul>
        <div className='images-together hoverable'>
        <div className="image2"><img src={image_popular} alt="sushiman" /></div>
        <div className="image2"><img src={image_sushi} alt="sushiman" /></div>
        </div>
    </section>

    <section className="technologies">
        <h2 className='hoverable'>Technologies Used:</h2>
        <ul className='hoverable'>
            <li>React.js</li>
            <li>TMDB API</li>
        </ul>
    </section>

    <section className="challenges">
        <h2 className='hoverable'>Challenges Faced:</h2>
        <p className='hoverable'>
            During the development of MovieBox, one of the primary challenges was effectively managing and handling data from the TMDB API. Ensuring that search queries returned accurate and relevant results required careful attention to API integration and data parsing.
        </p>
    </section>

    <section className="outcome">
        <h2 className='hoverable'>Outcome:</h2>
        <p className='hoverable'>
            MovieBox stands as a testament to my proficiency in React.js and my ability to integrate external APIs into web applications. The project showcases my dedication to creating intuitive and user-friendly interfaces, and my capacity to deliver a high-quality product within the context of an internship at HNG.
        </p>
    </section>

    <section className="future-enhancements">
        <h2 className='hoverable'>Future Enhancements:</h2>
        <p className='hoverable'>
        Looking ahead, there are several potential enhancements that could be implemented to further elevate the MovieBox experience:
    </p>
    <ul className='hoverable'>
        <li>User Accounts and Profiles: Introduce user authentication and profiles to allow users to save their preferences, create watchlists, and receive personalized recommendations.</li>
        <li>Advanced Filtering and Sorting: Implement advanced filtering options, such as sorting by release date, ratings, and popularity, to help users refine their movie searches.</li>
        <li>Integration with External Services: Explore opportunities for integration with external services, such as streaming platforms or social media, to enhance the user experience and engagement.</li>
        <li>Multi-language Support: Provide support for multiple languages to cater to a diverse global audience, allowing users to access content in their preferred language.</li>
        <li>Recommendation Engine: Develop a recommendation engine based on user behavior and preferences, offering personalized movie suggestions for each user.</li>
        <li>Mobile Application Development: Consider extending the MovieBox experience by developing a mobile application for Android and iOS platforms, providing users with on-the-go access to their favorite movies.</li>
        <li>Community and Social Features: Foster a sense of community among users by incorporating features such as user reviews, ratings, and discussion forums for each movie.</li>
    </ul>
        <div className="image1 hoverable"><img src={image_footer} alt="sushiman" /></div>
    </section>

    <footer>
        <p className='hoverable'>Note: This project was developed during my internship at HNG and serves as a demonstration of my capabilities as a web developer.</p>
    </footer>
      </div>
    </div>
  );
}

export default Sushiman;
