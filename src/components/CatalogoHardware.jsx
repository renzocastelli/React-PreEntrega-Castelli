import React from 'react';
import { Link } from 'react-router-dom';

const CatalogoHardware = () => {
  const placasDeVideo = [
    { id: 1, nombre: 'NVIDIA GeForce RTX 3080', precio: '$999' },
    { id: 2, nombre: 'AMD Radeon RX 6800 XT', precio: '$899' },
    { id: 3, nombre: 'NVIDIA GeForce RTX 3070', precio: '$699', detalles: 'Detalles...' },
    { id: 4, nombre: 'AMD Radeon RX 6700 XT', precio: '$479', detalles: 'Detalles...' },
    { id: 5, nombre: 'NVIDIA GeForce RTX 3060 Ti', precio: '$399', detalles: 'Detalles...' },
    { id: 6, nombre: 'AMD Radeon RX 6600 XT', precio: '$329', detalles: 'Detalles...' },
    { id: 7, nombre: 'NVIDIA GeForce RTX 3050 Ti', precio: '$199', detalles: 'Detalles...' },
    { id: 8, nombre: 'AMD Radeon RX 6500 XT', precio: '$179', detalles: 'Detalles...' },
    { id: 9, nombre: 'NVIDIA GeForce GT 1030', precio: '$89', detalles: 'Detalles...' },
    { id: 10, nombre: 'AMD Radeon RX 6400', precio: '$59', detalles: 'Detalles...' },
    { id: 11, nombre: 'NVIDIA GeForce GT 1050', precio: '$105', detalles: 'Detalles...' },
    { id: 12, nombre: 'AMD Radeon RX 6200', precio: '$120', detalles: 'Detalles...' },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {placasDeVideo.map((placa) => (
          <div className="col-md-2 mb-3" key={placa.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{placa.nombre}</h5>
                <p className="card-text">Precio: {placa.precio}</p>
                <Link to={`/detalles/${placa.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoHardware;
