import React, { useContext, useEffect } from "react";
import "../Assets/css/Home.css";
import Item from "../componets/Item";
import Contex from "../contex/Contex";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  useEffect(() => {
    listameProductos();
  }, []);
  const { listameProductos, productos } = useContext(Contex);
  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {productos.map((item) => (
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
