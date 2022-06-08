import React from "react";
/* import NavStyles from "./NavStyles"; */

const NavBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavBar;
