import React from "react";
import "./style.css";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

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
            <Link to={"/cadastrocliente"} style={{ color: "inherit" }}><span>Cadastrar Cliente</span></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cliente;
