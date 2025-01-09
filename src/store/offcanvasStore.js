import { create } from "zustand";

const useOffcanvasStore = create((set) => ({
  isVisible: false,
  toggleOffcanvas: () =>
    set((state) => ({
      isVisible: !state.isVisible,
    })),
}));

export default useOffcanvasStore;

/**
 * Cómo Funciona:

    Si llamas a toggleOffcanvas(true), el isVisible se establecerá en true.
    Si llamas a toggleOffcanvas(false), el isVisible se establecerá en false.
    Si no pasas ningún argumento (toggleOffcanvas()), se comportará como un alternador (cambiando entre true y false).
 */
