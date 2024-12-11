import { create } from "zustand";

const useBalanceStore = create((set) => ({
  balanceo: false, // Estado inicial

  toggleBalanceo: (value) => {
    set({ balanceo: value }); // Activar o desactivar el balanceo
    if (value) {
      setTimeout(() => set({ balanceo: false }), 500); // Desactivar después de 1 segundo
    }
  },
}));

export default useBalanceStore;
