import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartStyle.css";

const CartWidget = () => {
  return (
    <div className="WidgetShop">
      <button>
        <ShoppingCartIcon />
      </button>
    </div>
  );
};
export default CartWidget;
