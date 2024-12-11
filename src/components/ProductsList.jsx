import useCartStore from "../store/cartStore";
import { BsCartPlus } from "react-icons/bs";

const ProductsList = ({ products }) => {
  // Usa el store directamente para acceder a addToCart
  const { addToCart } = useCartStore();
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card custom-card h-100">
              <div className="position-relative">
                <img
                  src={`/imgs-api/${product.id}.webp`}
                  className="card-img-top"
                  alt={product.title}
                />
                {product.isFreeShipping && (
                  <span className="badge custom-badge position-absolute top-0 end-0">
                    Envío gratis
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-4">{product.title}</h5>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <p className="mb-0">
                    <strong>Precio:</strong> {product.currencyFormat}
                    {product.price}
                  </p>
                  <p className="mb-0">
                    <strong>Cuotas:</strong> {product.installments} meses
                  </p>
                </div>
                <p style={{ marginBottom: "0.2rem !important" }}>
                  <strong>Tamaños disponibles:</strong>
                </p>
                <div className="d-flex gap-2 mb-3">
                  {product.availableSizes.map((size, index) => (
                    <span
                      key={index}
                      className="border border-dark rounded-circle text-center d-inline-flex justify-content-center align-items-center tallas"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-cart w-100 mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Agregar al carrito &nbsp; <BsCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
