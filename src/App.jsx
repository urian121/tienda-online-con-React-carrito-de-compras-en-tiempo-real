import { useState, useEffect, useMemo } from "react";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SidebarOffCanvas from "./components/SidebarOffCanvas";
import useFetch from "./hooks/useFetch"; // Importar el custom hook

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [balanceo, setBalanceo] = useState(false);

  // Usar el hook useFetch para obtener los productos
  const { data: products, loading, error } = useFetch("/json/products.json");

  // Función para alternar la visibilidad del offcanvas
  const toggleOffcanvas = () => {
    setIsVisible(!isVisible);
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Alternar la visibilidad del offcanvas al agregar un producto al carrito
      setIsVisible(true);

      // Verificamos si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Si el producto ya está, actualizamos la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Incrementamos la cantidad
            : item
        );
      } else {
        // Si no está, lo agregamos con una cantidad de 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      // Eliminar producto si la cantidad es 0
      return updatedCart.filter((product) => product.quantity > 0);
    });
  };

  // Función para calcular el total de productos en el carrito
  const getTotalProducts = () => {
    // Filtrar los productos únicos por ID
    const uniqueProducts = cart.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t.id === product.id)
    );

    // Contar los productos únicos
    return uniqueProducts.length;
  };

  // Calculamos el total de productos con useMemo para evitar recalcular en cada renderizado
  const totalProductsBalanceo = useMemo(() => getTotalProducts(), [cart]);

  // UseEffect para manejar el estado de balanceo
  useEffect(() => {
    if (totalProductsBalanceo > 0) {
      setBalanceo(true);
      setTimeout(() => {
        setBalanceo(false); // Remueve la clase 'balanceo' después de 1 segundo
      }, 1000);
    }
  }, [totalProductsBalanceo]); // Se ejecuta cuando el total de productos cambia

  return (
    <>
      <Nav
        toggleOffcanvas={toggleOffcanvas}
        getTotalProducts={getTotalProducts}
        balanceo={balanceo}
      />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12">
            <h1 className="fw-bold text-center">Lista de Productos</h1>
          </div>
        </div>
        {loading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p>Error cargando productos: {error.message}</p>
        ) : products && products.length > 0 ? (
          <ProductsList products={products} addToCart={addToCart} />
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
          cart={cart}
          removeFromCart={removeFromCart}
        />
      )}

      <Footer />
    </>
  );
};

export default App;
