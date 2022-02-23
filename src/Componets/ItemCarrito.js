import React from "react";
import "../Assets/css/ItemCarrito.css";
import iconBorrar from "../Assets/statics/borrar.png";
import imgPrduc from "https://escueladevrock.com/store/12.png";

export default function ItemCarrito() {
  return (
    <>
      <div className="carrito-item">
        <img src={imgPrduc} alt="" className="carrito-item.img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">Cerebro Loco</h1>
          <h3 className="carrito-item-precio">AR$ 150</h3>
        </div>
        <img src={iconBorrar} alt="" className="carrito-item-borrar" />
      </div>
    </>
  );
}
