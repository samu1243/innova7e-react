import './index.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Gestion from './pages/Gestion/Gestion';
import VideoMarketing from './pages/Video_Marketing/VideoMarketing';
import Branding from './pages/Branding/Branding';
import Capacitacion from './pages/Capacitacion/Capacitacion';
import Web from './pages/Web/Web';
import Hosting from './pages/Hosting/Hosting';
import Aplicacion from './pages/Aplicacion/Aplicacion';
import Produccion from './pages/Produccion/Produccion';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/gestion-de-marcas' element={<Gestion/>} />
        <Route exact path='/video-marketing' element={<VideoMarketing/>}/>
        <Route exact path='/branding' element={<Branding/>}/>
        <Route exact path='/capacitacion' element={<Capacitacion/>}/>
        <Route exact path='/paginas-web' element={<Web/>}/>
        <Route exact path='/hosting-dominio' element={<Hosting/>}/>
        <Route exact path='/aplicaciones' element={<Aplicacion/>}/>
        <Route exact path='/produccion-publicitaria' element={<Produccion/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
