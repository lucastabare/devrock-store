import React from "react";
import "../Assets/css/Item.css";
import img from "https://escueladevrock.com/store/0.png";

export default function Item() {
  return (
    <>
      <div className="home-item">
        <img src={img} alt="" className="home-item-img" />

        <div className="home-item-info">
          <h1 className="home-item-titulo">Cerebro loco</h1>
          <p className="home-item-medidas">Medidas: 20x10</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button className="home-item-comprar">+</button>
          </div>
        </div>
      </div>
    </>
  );
}
