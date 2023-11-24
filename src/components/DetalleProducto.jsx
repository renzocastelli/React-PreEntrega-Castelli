import React from 'react';

const DetalleProducto = (props) => {
  const { nombre, descripcion, precio, imagen, detallesAdicionales } = props;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={imagen} alt={nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{nombre}</h2>
          <p>Precio: {precio}</p>
          <p>{descripcion}</p>
          <h4>Detalles Adicionales:</h4>
          <ul>
            {detallesAdicionales.map((detalle, index) => (
              <li key={index}>{detalle}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
