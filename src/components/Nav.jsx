import logo from "../assets/imgs/logo.png";
import MyCart from "./MyCart";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 custom-navbar fixed-top w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contacto</a>
            </li>
          </ul>
          <MyCart />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
