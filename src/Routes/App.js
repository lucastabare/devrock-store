import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Carrito from "../Containers/Carrito";
import Producto from "../Containers/Producto";
import Layout from "../Componets/Layout";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/carrito" element={<Carrito />} />
            <Route exact path="/producto" element={<Producto />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
