import React from "react";
import "../Assets/css/Home.css";
import Item from "../componets/Item";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            <Item></Item>
          </div>
        </div>
      </div>
    </>
  );
}
