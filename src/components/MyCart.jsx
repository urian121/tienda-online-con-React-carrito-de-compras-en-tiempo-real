import { TbShoppingBagHeart } from "react-icons/tb";
import useOffcanvasStore from "../store/offcanvasStore";

import useCartStore from "../store/cartStore";
import useTotalStore from "../store/totalProductStore";
import useBalanceStore from "../store/balanceStore";

const MyCart = () => {
  const { balanceo } = useBalanceStore();
  const { cart } = useCartStore();
  const { getTotalProducts } = useTotalStore();
  // Calcular el total de productos únicos
  const totalProducts = getTotalProducts(cart);

  const { toggleOffcanvas } = useOffcanvasStore();
  // La clase se agrega dependiendo del valor de balanceo
  const buttonClass = `btn cart-badge position-relative ms-auto me-3 swing-on-hover ${
    balanceo ? "balanceo" : ""
  }`;

  return (
    <button type="button" onClick={toggleOffcanvas} className={buttonClass}>
      <TbShoppingBagHeart className="shopping-bag-icon" />
      <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
        {totalProducts}
        <span className="visually-hidden">productos en el carrito</span>
      </span>
    </button>
  );
};

export default MyCart;
