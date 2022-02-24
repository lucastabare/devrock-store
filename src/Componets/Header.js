import React from "react";
import iconCarrito from "../Assets/statics/carrito.png";
import iconVolver from "../Assets/statics/volver.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/carrito">
        <img src={iconCarrito} alt="" className="carritou" />
      </Link>
      <Link to="/">
        <img src={iconVolver} alt="" className="volver" />
      </Link>
      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
