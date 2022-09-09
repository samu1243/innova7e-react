import Navbar from './components/navbar/Navbar';
import './index.css';
import Home from './pages/Home/Home';
import Immobiliaria from './pages/Home/Immobiliaria/Immobiliaria';
import Marketing from './pages/Home/Marketing/Marketing';
import Mentoring from './pages/Home/Mentoring/Mentoring';
import Marcas from './pages/Home/Marcas/Marcas';
import Tec from './pages/Home/Tecnologia/Tec';
import Audiovisual from './pages/Home/Audiovisual/Audiovisual';
import Design from './pages/Home/Design/Design';
import Services from './pages/Home/Services/Services';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Marcas/>
      <Marketing/>
      <Immobiliaria/>
      <Mentoring/>
      <Tec/>
      <Audiovisual/>
      <Design/>
      <Services/>
    </div>
  );
}

export default App;
