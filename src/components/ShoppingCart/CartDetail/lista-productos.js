import React, {  Fragment } from "react";
import ProductCard from "./product-card";
import "./styles.css";

export const ListaProductos = ({
  carrito,
  calcularSubtotal,
  setCarrito,
  setCartValido,
  fetchCarrito,
  userId,
}) => {
  return (
    <Fragment>
      <div className="scrollable">
        {carrito.map((producto) => (
          <ProductCard
            key={producto._id}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
            calcularSubtotal={calcularSubtotal}
            setCartValido={setCartValido}
            fetchCarrito={fetchCarrito}
            userId={userId}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ListaProductos;
