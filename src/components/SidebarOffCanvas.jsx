const SidebarOffCanvas = ({
  isVisible,
  toggleOffcanvas,
  cart,
  removeFromCart,
}) => {
  const calculateSubtotal = () => {
    return cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  };

  return (
    <div
      className={`offcanvas offcanvas-end px-1 ${
        isVisible ? "show offcanvas-open" : ""
      }`}
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      style={{ marginTop: "60px" }}
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title text-capitalize text-center fw-bold"
          id="offcanvasRightLabel"
        >
          Mi carrito de compras
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={toggleOffcanvas}
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body">
        {cart.length === 0 ? (
          <p className="text-center mt-5">No hay productos en el carrito.</p>
        ) : (
          cart.map((productCart) => (
            <div
              className="row align-items-center border-bottom mb-2 py-1"
              key={productCart.id}
            >
              <div className="col-3">
                <img
                  src={`/imgs-api/${productCart.id}.webp`}
                  className="card-img-top border-radius-5"
                  alt={productCart.title}
                />
              </div>
              <div className="col-6">
                <h4 className="mb-4 title-product">{productCart.title}</h4>
                <p className="mb-0 detalles-product">
                  {productCart.description}
                </p>
              </div>
              <div className="col-3 text-end">
                <span className="h4 fw-bold">
                  <span className="fs-6">{productCart.quantity}x</span>
                  <strong className="fs-5">${productCart.price}</strong>
                </span>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeFromCart(productCart.id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="offcanvas-footer mt-3 px-2">
        <div className="d-flex justify-content-between align-items-center">
          <h5>
            <strong>SUBTOTAL:</strong>
            <span className="fw-bold">${calculateSubtotal().toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-comprar w-100">Finalizar compra</button>
      </div>
    </div>
  );
};

export default SidebarOffCanvas;
