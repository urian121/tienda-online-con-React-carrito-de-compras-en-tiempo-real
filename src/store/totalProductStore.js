import { create } from "zustand";

const useTotalStore = create(() => ({
  // Función para calcular el total de productos únicos
  getTotalProducts: (cart) => {
    if (!cart || cart.length === 0) return 0;

    // Filtrar los productos únicos por ID
    const uniqueProducts = cart.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t.id === product.id)
    );
    // Contar los productos únicos
    return uniqueProducts.length;
  },
}));

export default useTotalStore;
