# Ecommerce con React, Vite y Zustand

Este proyecto muestra cómo crear un ecommerce básico con React y Zustand para manejar el carrito de compras. Puedes agregar productos, incrementar y decrementar cantidades, eliminar productos y limpiar el carrito.

---

## Configuración del Proyecto

### Crear el proyecto con Vite

Ejecuta el siguiente comando para crear un proyecto con Vite:

```bash
npm create vite@latest ecommerce --template react


- npm install zustand
- npm install axios


https://react-shopping-cart-67954.firebaseapp.com/
https://reactjsexample.com/a-simple-ecommerce-cart-application-with-react/



import { useState } from "react";

const CartSidebar = ({ cartItems }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <button
        type="button"
        className="btn cart-badge position-relative ms-auto me-3"
        onClick={toggleSidebar}
      >
        <i className="bi bi-bag-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.length}
          <span className="visually-hidden">productos en el carrito</span>
        </span>
      </button>

      {/* Sidebar con offcanvas */}
      <div
        className={`offcanvas offcanvas-end ${isSidebarVisible ? "show" : ""}`}
        tabIndex="-1"
        style={{ visibility: isSidebarVisible ? "visible" : "hidden" }}
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasCartLabel">Carrito de Compras</h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={toggleSidebar}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cartItems.length > 0 ? (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{item.title}</span>
                  <span>
                    {item.currencyFormat}
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Tu carrito está vacío.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
