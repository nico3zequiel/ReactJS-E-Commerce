import React from "react";
import CartWidget from "../cartWidget/cartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const NavBar = () => {
  return (
    <div>
      <CartWidget />
      <nav>
        {/* LINK AL HOME */}
        <h1 className="list">E-Store</h1> {/* LOGO PROVISORIO */}
        {/* CATEGORIAS */}
        <ul className="navStyle">
          <li className="list">Inicio</li>
          <li className="list">Computadoras</li>
          <li className="list">Accesorios</li>
          <li className="list">Contacto</li>
        </ul>
      </nav>

      <ItemListContainer />
    </div>
  );
};

export default NavBar;
