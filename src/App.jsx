import { useEffect, useMemo, useState } from "react";
import useCartStore from "./store/cartStore";
import useOffcanvasStore from "./store/offcanvasStore";
import useTotalStore from "./store/totalProductStore";
import useBalanceStore from "./store/balanceStore";
import useSizeFilterStore from "./store/sizeFilterStore";

import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SidebarOffCanvas from "./components/SidebarOffCanvas";
import SizeFilter from "./components/SizeFilter";
import useFetch from "./hooks/useFetch"; // Importar el custom hook
import TitleTypeWriter from "./components/TitleTypeWriter";
import SizeFilterSkeleton from "./components/SizeFilterSkeleton";

const App = () => {
  // Llama a `useCartStore` para acceder al estado del carrito y las funciones
  const { cart } = useCartStore();
  const { getTotalProducts } = useTotalStore();
  const { toggleBalanceo } = useBalanceStore();
  const { isVisible, toggleOffcanvas } = useOffcanvasStore();
  const { selectedSizes } = useSizeFilterStore();

  // Usar el hook useFetch para obtener los productos
  const { data: products, loading, error } = useFetch("/json/products.json");

  // Estado para simular carga mínima
  const [isSimulatedLoading, setIsSimulatedLoading] = useState(true);

  // UseEffect para manejar el estado de balanceo y la carga mínima
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSimulatedLoading(false); // Desactiva la carga simulada después de 3 segundos
    }, 1000);

    if (cart.length > 0) {
      const totalProductsBalanceo = getTotalProducts(cart); // Calcula los productos únicos
      // Abre el carrito solo si no está visible
      if (!isVisible) {
        toggleOffcanvas(true);
      }

      // Activa la animación si hay productos únicos
      if (totalProductsBalanceo > 0) {
        toggleBalanceo(true);
      }

      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
    }

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [cart, getTotalProducts, toggleBalanceo, toggleOffcanvas]);

  // Filtrar productos por talla seleccionada
  const filteredProducts = useMemo(() => {
    if (!selectedSizes.length) return products; // Si no hay tallas seleccionadas, devolver todos los productos

    return products.filter(
      (product) =>
        selectedSizes.some((size) => product.availableSizes.includes(size)) // Filtrar si el producto tiene alguna talla seleccionada
    );
  }, [selectedSizes, products]); // Dependemos tanto de `selectedSizes` como de `products`

  // Obtener el total de productos filtrados usando useMemo
  const totalFiltered = useMemo(() => {
    // Si no hay filtros aplicados, mostrar el total de productos
    if (selectedSizes.length === 0) {
      return products?.length || 0; // Devuelve 0 si no hay productos
    }
    // Si hay filtros, mostrar el total de productos filtrados
    return filteredProducts.length;
  }, [selectedSizes, filteredProducts, products]);

  return (
    <>
      <Nav />

      <div className="container mt-5 mb-5">
        <TitleTypeWriter />

        <div className="row">
          {loading || isSimulatedLoading ? (
            <SizeFilterSkeleton />
          ) : error ? (
            <div className="col-12">
              <h2 className="text-center text-danger">
                Error cargando productos: {error.message}
              </h2>
            </div>
          ) : filteredProducts.length > 0 ? (
            <>
              {/* Columna del filtro */}
              <div className="col-md-2">
                <SizeFilter products={products} totalFiltered={totalFiltered} />
              </div>
              {/* Columna de productos */}
              <div className="col-md-10">
                <ProductsList products={filteredProducts} />
              </div>
            </>
          ) : (
            <div className="col-12">
              <p className="text-center">No hay productos disponibles.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mostrar el SidebarOffCanvas, carrito de compras */}
      {isVisible && <SidebarOffCanvas />}

      <Footer />
    </>
  );
};

export default App;
