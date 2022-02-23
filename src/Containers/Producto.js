import React from "react";
import "../Assets/css/Producto.css";
import imgPrduc from "https://escueladevrock.com/store/12.png";

export default function Producto() {
  return (
    <>
      <div className="detalle">
        <img src={imgPrduc} alt="" className="detalle-img" />
        <h1 className="home-item-titulo">Cerebro Loco</h1>
        <p className="home-item-medidas">Medidas: 20x10</p>
        <h3 className="home-item-precio">AR$ 150</h3>
        <a href="carrito.html">
          <button className="home-item-comprar">+</button>
        </a>
        <div>
          <p>"En la coleccion de stickers no podia faltar uno como este"</p>
        </div>
      </div>
    </>
  );
}
