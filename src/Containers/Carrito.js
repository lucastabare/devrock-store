import React from "react";
import "../Assets/css/Carrito.css";
import ItemCarrito from "../Componets/ItemCarrito";

export default function Carrito() {
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito"></div>
        <ItemCarrito></ItemCarrito>
      </div>
    </>
  );
}
