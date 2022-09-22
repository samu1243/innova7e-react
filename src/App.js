import './index.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Gestion from './pages/Gestion/Gestion';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/gestion-de-marcas' element={<Gestion/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
