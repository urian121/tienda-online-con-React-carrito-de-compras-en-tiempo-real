import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "./components/ProductsList";
import Nav from "./components/Nav";
import SidebarOffCanvas from "./components/SidebarOffCanvas";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estado para controlar la visibilidad del offcanvas
  const [isVisible, setIsVisible] = useState(false);

  // Función para alternar la visibilidad del offcanvas
  const toggleOffcanvas = () => {
    setIsVisible(!isVisible);
  };

  // Función para obtener productos
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/json/products.json");

      const fetchedProducts = response.data;

      if (Array.isArray(fetchedProducts)) {
        setProducts(fetchedProducts);
      } else {
        console.error("Error: La respuesta no contiene productos válidos.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Nav isVisible={isVisible} toggleOffcanvas={toggleOffcanvas} />
      <div className="container border">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="text-center">Lista de Productos</h1>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          <ProductsList products={products} />
        ) : (
          <p>No hay productos.</p>
        )}
      </div>

      {/* Fondo de superposición con animación */}
      {isVisible && (
        <div
          className="offcanvas-backdrop show"
          onClick={toggleOffcanvas}
        ></div>
      )}

      {/* SidebarOffCanvas con animación */}
      {isVisible && (
        <SidebarOffCanvas
          isVisible={isVisible}
          toggleOffcanvas={toggleOffcanvas}
        />
      )}
    </>
  );
};

export default App;
