import React from "react"
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

class Produto extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-cli-pro-ser">
      <h2>Produtos</h2>
      <div className="search-session">
        <div className="search-bar">
          <SearchBar placeholder="Digite o ID do produto" />
        </div>
        <div className="button-cadastro">
        <Link to={"/cadastroproduto"} style={{ color: "inherit" }}><span>Cadastrar Produto</span></Link>
        </div>
      </div>
    </div>
    )
    }
}

export default Produto;