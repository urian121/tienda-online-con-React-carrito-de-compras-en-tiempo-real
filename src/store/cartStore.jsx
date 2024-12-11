// Importa la función `create` de zustand para crear un store
import { create } from "zustand";

// Crea un store usando Zustand para gestionar el carrito de compras
const useCartStore = create((set) => ({
  // Estado inicial del carrito, es un array vacío al inicio
  cart: [],

  // Función para añadir un producto al carrito
  addToCart: (product) =>
    set((state) => {
      // Busca si el producto ya existe en el carrito
      const existingProduct = state.cart.find((item) => item.id === product.id);

      // Si el producto ya existe en el carrito, incrementa la cantidad
      if (existingProduct) {
        return {
          // Actualiza la cantidad del producto en el carrito
          cart: state.cart.map(
            (item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 } // Incrementa la cantidad
                : item // Mantiene el resto de los productos igual
          ),
        };
      }

      // Si el producto no está en el carrito, lo agrega con cantidad 1
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  // Función para eliminar un producto del carrito
  removeFromCart: (productId) =>
    set((state) => {
      // Decremente la cantidad si el producto existe
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      // Elimina el producto si su cantidad llega a 0
      return { cart: updatedCart.filter((item) => item.quantity > 0) };
    }),
}));

// Exporta el hook para que otros componentes puedan acceder y modificar el carrito
export default useCartStore;
