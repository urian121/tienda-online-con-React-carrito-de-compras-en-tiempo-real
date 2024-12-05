import { RiDeleteBin6Line } from "react-icons/ri";

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
      style={{ marginTop: "59px" }}
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
              className="row align-items-center mb-2 py-1"
              style={{ borderBottom: "1px dashed rgb(176, 176, 176)" }}
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
                <span className="fw-bold">
                  <span className="fs-6 color-gris">
                    {productCart.quantity}x
                  </span>
                  <strong className="fs-4 precio">${productCart.price}</strong>
                </span>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => removeFromCart(productCart.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="offcanvas-footer mt-4 px-2">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-5">
            <span className="fw-bold">SUBTOTAL:</span>
            <span className="fw-bold float-end px-2 fs-2">
              ${calculateSubtotal().toFixed(2)}
            </span>
          </h5>
        </div>
        <button className="btn btn-comprar w-100">Finalizar compra</button>
      </div>
    </div>
  );
};

export default SidebarOffCanvas;
