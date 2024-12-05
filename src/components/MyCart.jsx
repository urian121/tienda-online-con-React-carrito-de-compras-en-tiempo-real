const MyCart = ({ toggleOffcanvas, getTotalProducts }) => {
  return (
    <button
      type="button"
      onClick={toggleOffcanvas}
      className="btn cart-badge position-relative ms-auto me-3 swing-on-hover"
    >
      <i className="bi bi-bag-heart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {getTotalProducts()}
        <span className="visually-hidden">productos en el carrito</span>
      </span>
    </button>
  );
};

export default MyCart;
