import React from "react";
import "./style.css";

class Card extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="card">
        <div className="card-image">
          <img src={require("../../assets/images/user.png")} alt="Usuário" />
        </div>
        <h2 className="card-title">Cadastrar Cliente</h2>
        <p className="card-description">
          Adicione um novo cliente ao sistema para gerenciar suas informações e consumo.
        </p>
        <button className="card-button">Cadastrar</button>
      </div>
    );
  }
}

export default Card;
