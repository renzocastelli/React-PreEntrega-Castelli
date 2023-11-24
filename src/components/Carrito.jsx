import React, { useState } from 'react';

const Carrito = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Smartphone', precio: 499, cantidad: 1 },
    { id: 2, nombre: 'Portátil', precio: 999, cantidad: 2 },
    // Aca se agregarian mas productos al carrito
  ]);

  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {productos.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {productos.map((producto) => (
            <div key={producto.id} className="row mb-2">
              <div className="col-md-6">{producto.nombre}</div>
              <div className="col-md-2">{producto.precio}</div>
              <div className="col-md-2">{producto.cantidad}</div>
              <div className="col-md-2">
                <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <h4>Total: ${calcularTotal()}</h4>
              <button className="btn btn-primary">Pagar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
