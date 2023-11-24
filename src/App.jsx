import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import Error404 from './components/Error404';
import CatalogoHardware from './components/CatalogoHardware';
import Navbar from './components/Navbar';

function App() {
  const placasDeVideo = [];

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/catalogo' element={<CatalogoHardware placasDeVideo={placasDeVideo} />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/detalles/:id' element={<DetalleProducto nombre="Placa de video:" descripcion="Lorem ipsum dolor sit amet consectetur adipiscing elit posuere netus, malesuada vulputate accumsan integer etiam ." precio="$..." imagen="" detallesAdicionales={[/* ... */]} />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
