import React from "react";
import "./style.css";

class Banner extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-banner">
        <div className="text">
          <h2>World Beauty</h2>
          <p>
            Seja bem vindo ao sistema World Beauty, aqui você pode cadastrar
            seus Clientes, Produtos e servicos.
          </p>
            <span>Painel de Controle</span>
        </div>
      </div>
    );
  }
}

export default Banner;
