import { useMemo, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import useSizeFilterStore from "../store/sizeFilterStore";

const SizeFilter = ({ products, totalFiltered }) => {
  const ref = useRef(null); // Referencia para la barra de carga
  const { selectedSizes, handleFilter } = useSizeFilterStore();

  const sizes = useMemo(() => {
    if (!products || products.length === 0) return [];

    const allSizes = products.flatMap((product) => product.availableSizes);
    return [...new Set(allSizes)].sort();
  }, [products]);

  const handleSizeClick = (size) => {
    ref.current.continuousStart(); // Inicia la barra de carga

    const isSelected = selectedSizes.includes(size);
    const newSizes = isSelected
      ? selectedSizes.filter((item) => item !== size)
      : [...selectedSizes, size];

    // Simula una demora para completar la barra de carga (puedes enlazar esto a tus solicitudes)
    setTimeout(() => {
      handleFilter(newSizes); // Llama a la función de filtrado
      ref.current.complete(); // Completa la barra de carga
    }, 100); // Ajusta el tiempo según sea necesario
  };

  return (
    <div className="mt-5 p-3 mb-3 circle">
      <LoadingBar color="#ff9c08" ref={ref} shadow={true} />
      <h5>
        Filtrar por Talla{" "}
        <span className="fw-bold float-end">({totalFiltered})</span>
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
