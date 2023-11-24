
import './App.css';
import CatalogoHardware from './components/CatalogoHardware';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import Error404 from './components/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/detalles' element={<DetalleProducto />}/>
          <Route path='/catalogo' element={<CatalogoHardware />}/>
          <Route path='/carrito' element={<Carrito />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
