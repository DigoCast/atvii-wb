import React from "react";
import "./style.css";
import SearchBar from "../../components/SearchBar";

class Cliente extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-cli-pro-ser">
        <h2>Clientes</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar placeholder="Digite o CPF do cliente" />
          </div>
          <div className="button-cadastro">
            <span>Cadastrar Cliente</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cliente;
