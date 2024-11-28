import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "./components/ProductsList";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener productos
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/json/products.json");

      // La respuesta es directamente un array de productos
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
      <Navbar />
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
    </>
  );
};

export default App;
