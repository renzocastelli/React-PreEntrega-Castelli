import React from 'react';
import imagen1 from '../images/rtx3080.jpg';
import imagen2 from '../images/10400.jpg';
import imagen3 from '../images/amd 5600.jpg';
import imagen4 from '../images/6700xt.jpg'

const Home = () => {
  const productos = [
    { id: 1, nombre: 'Nvidia RTX 3080', precio: '$899', imagen: imagen1 },
    { id: 2, nombre: 'AMD Radeon 6700XT', precio: '$799', imagen: imagen4 },
    { id: 3, nombre: 'Intel I5 10400f', precio: '$899', imagen: imagen2 },
    { id: 4, nombre: 'AMD Ryzen 5600', precio: '$259', imagen: imagen3 },
  ];
  // Se irian agregando mas productos

  return (
    <div className="container mt-4">
      <h2>Productos Destacados</h2>
      <div className="row mt-4">
        {productos.map((producto) => (
          <div className="col-md-3 mb-4" key={producto.id}>
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: {producto.precio}</p>
                <a href={`/producto/${producto.id}`} className="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
