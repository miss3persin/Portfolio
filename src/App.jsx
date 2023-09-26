import BackgroundEffect from './components/BackgroundEffect'
import Navbar from './components/Navbar'
import './styles/App.css'
import AOS from "aos";
import "aos/dist/aos.css";
// Import necessary packages and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faCoffee, faSearch);


const App = () => {
  AOS.init({
    duration: 1100,
    offset: 100,
});
  

  return (
    <>
      <BackgroundEffect/>
      <Navbar/>
    {/* <div className="text hoverable">HELLO WORLD!</div> */}
    </>
  )
}

export default App