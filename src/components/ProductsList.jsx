const ProductsList = ({ products }) => {
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
                <h5 className="card-title mb-5">{product.title}</h5>
                {/* <p className="card-text">{product.description}</p> */}
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <p className="mb-0">
                    <strong>Precio:</strong> {product.currencyFormat}
                    {product.price}
                  </p>
                  <p className="mb-0">
                    <strong>Cuotas:</strong> {product.installments} meses
                  </p>
                </div>
                <p>
                  <strong>Tamaños disponibles:</strong>{" "}
                  {product.availableSizes.join(", ")}
                </p>
                <button className="btn btn-cart w-100 mt-auto">
                  Agregar al carrito <i className="bi bi-cart-plus"></i>
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
