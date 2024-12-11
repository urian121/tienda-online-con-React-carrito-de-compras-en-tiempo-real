import { useMemo } from "react";
import useSizeFilterStore from "../store/sizeFilterStore";

const SizeFilter = ({ products, totalFiltered }) => {
  // Si products es null o está vacío, devolvemos un arreglo vacío para evitar error
  const { selectedSizes, handleFilter } = useSizeFilterStore();

  const sizes = useMemo(() => {
    if (!products || products.length === 0) return [];

    const allSizes = products.flatMap((product) => product.availableSizes);
    return [...new Set(allSizes)].sort();
  }, [products]);

  // Manejar el cambio de talla seleccionada
  const handleSizeClick = (size) => {
    // Si la talla ya está seleccionada, la deseleccionamos; si no, la agregamos al array
    const isSelected = selectedSizes.includes(size);
    const newSizes = isSelected
      ? selectedSizes.filter((item) => item !== size) // Eliminar talla
      : [...selectedSizes, size]; // Agregar talla
    handleFilter(newSizes); // Pasar el array de tallas seleccionadas al padre
  };

  return (
    <div className="mt-5 p-3 mb-3 circle">
      <h5>
        Filtrar por Talla{" "}
        <span className="fw-bold float-end">({totalFiltered})</span>{" "}
      </h5>
      <div className="d-flex flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            className={`border border-dark rounded-circle text-center d-flex justify-content-center align-items-center m-1 size-button ${
              selectedSizes.includes(size) ? "select-talla" : ""
            }`}
            onClick={() => handleSizeClick(size)}
            aria-pressed={selectedSizes.includes(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
