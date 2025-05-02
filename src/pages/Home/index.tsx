import React from "react";
import "./style.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import userIcon from "../../assets/images/user.png";
import productsIcon from "../../assets/images/products-icon.png";
import servicesIcon from "../../assets/images/servico-icon.png";
import Estatistica from "../../components/Estatistica";

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-home">
        <Banner />
        <div className="session-cards">
          <h2>Serviços Disponiveis</h2>
          <div className="cards-container">
            <div className="card-div">
              <Card title="Cadastro Cliente" image={userIcon} descricao="Adicione um novo cliente ao sistema para gerenciar suas informações e consumo." link="/cliente"/>
            </div>
            <div className="card-div">
              <Card title="Cadastro Produtos" image={productsIcon} descricao="Adicione um novo produto ao sistema para gerenciar suas informações e consumo." link="/produto"/>
            </div>
            <div className="card-div">
              <Card title="Cadastro Serviços" image={servicesIcon} descricao="Adicione um novo serviços ao sistema para gerenciar suas informações e consumo." link="/servico"/>
            </div>
          </div>
        </div>
        <Estatistica/>
      </div>
    );
  }
}

export default Home;
