import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../componets/Layout";
import UsarContex from "../contex/UsarContex";

function App() {
  return (
    <>
      {/*     <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      /> */}

      <BrowserRouter>
        <UsarContex>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/carrito" element={<Carrito />} />
              <Route exact path="/producto" element={<Producto />} />
            </Routes>
          </Layout>
        </UsarContex>
      </BrowserRouter>
    </>
  );
}

export default App;
