import { create } from "zustand";

const useSizeFilterStore = create((set) => ({
  selectedSizes: [], // Estado inicial de las tallas seleccionadas

  // Actualizar las tallas seleccionadas
  setSelectedSizes: (newSizes) => set({ selectedSizes: newSizes }),

  // Manejar el filtro (puedes agregar lógica adicional aquí)
  handleFilter: (newSizes, ref) => {
    set({ selectedSizes: newSizes }); // Actualiza las tallas seleccionadas

    // Finaliza la barra de carga con un pequeño retardo
    if (ref?.current) {
      setTimeout(() => {
        ref.current.complete();
      }, 50);
    }
  },
}));

export default useSizeFilterStore;
