import BackgroundEffect from './components/BackgroundEffect'
import Navbar from './components/Navbar'
import './styles/App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';



const App = () => {
  AOS.init({
    duration: 1100,
    offset: 100,
});
  

  return (
    <>
    <Helmet>
  <meta name="miss3persin" content="check out Segun Ige-bello's (miss3persin) portfolio" />
</Helmet>
      <BackgroundEffect/>
      <Navbar/>
    </>
  )
}

export default App