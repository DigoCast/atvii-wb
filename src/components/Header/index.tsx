import React from "react";
import "./style.css";

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-header">
        <div className="logo">
          <h1>World Beauty</h1>
        </div>
        <nav className="menu">
          <li>Produtos</li>
          <li>Serviços</li>
          <li>Clientes</li>
        </nav>
      </div>
    );
  }
}

export default Header;
