import React from "react"
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

class Servico extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-cli-pro-ser">
        <h2>Serviços</h2>
      <div className="search-session">
        <div className="search-bar">
          <SearchBar placeholder="Digite o ID do serviço" />
        </div>
        <div className="button-cadastro">
        <Link to={"/cadastroservico"} style={{ color: "inherit" }}><span>Cadastrar Serviço</span></Link>
        </div>
      </div>
    </div>
    )
    }
}

export default Servico;