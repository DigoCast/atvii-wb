import React from "react"
import SearchBar from "../../components/SearchBar";

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
          <span>Cadastrar Serviço</span>
        </div>
      </div>
    </div>
    )
    }
}

export default Servico;