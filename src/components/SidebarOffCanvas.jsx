import { RiDeleteBin6Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import useCartStore from "../store/cartStore";
import useOffcanvasStore from "../store/offcanvasStore";

const SidebarOffCanvas = () => {
  // Acceder al store de cart y usar sus funciones
  const { cart, removeFromCart } = useCartStore();
  const { isVisible, toggleOffcanvas } = useOffcanvasStore();

  const calculateSubtotal = () => {
    return cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  };

  const generateWhatsAppMessage = () => {
    let message = "Hola Urian, saludos. Quiero este pedido:\n\n";
    cart.forEach((product) => {
      message += `Producto: ${product.title}\nCantidad: ${product.quantity}\nPrecio: $${product.price}\n\n`;
    });
    message += `Subtotal: $${calculateSubtotal().toFixed(2)}`;
    return encodeURIComponent(message);
  };

  return (
    <div
      className={`offcanvas offcanvas-end px-1 ${
        isVisible ? "show offcanvas-open" : ""
      }`}
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title text-uppercase text-center fw-bold"
          id="offcanvasRightLabel"
        >
          Mi carrito de compras
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={() => toggleOffcanvas(!true)}
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
                  <strong className="fs-5 precio">${productCart.price}</strong>
                </span>
                <button
                  className="btn mt-3 delete-product"
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
              <span style={{ color: "#ff9c08" }}>$</span>
              {calculateSubtotal().toFixed(2)}
            </span>
          </h5>
        </div>
        {cart.length > 0 && (
          <a
            href={`https://api.whatsapp.com/send?phone=+573213872648&text=${generateWhatsAppMessage()}`}
            className="btn btn-comprar w-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> &nbsp; Enviar pedido por WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};

export default SidebarOffCanvas;
