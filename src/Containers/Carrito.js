import React, { useContext } from "react";
import "../Assets/css/Carrito.css";
import ItemCarrito from "../componets/ItemCarrito";
import Contex from "../contex/Contex";

export default function Carrito() {
  const { carrito, eliminarCarrito } = useContext(Contex);
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {carrito.map((item, i) => (
            <ItemCarrito
              {...item}
              key={i}
              eliminarCarrito={eliminarCarrito}
            ></ItemCarrito>
          ))}
        </div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
