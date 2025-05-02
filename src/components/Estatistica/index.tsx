import React from "react";
import "./style.css";

class Estatistica extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="session-estatistica">
        <h2>Acessar Estatisticas</h2>
        <div className="card-estatistica">
          <div className="text-estatistica">
            <h4>Listagens</h4>
            <br />
            <div>
              <p>
                Aqui você podera acessar as listagem de clientes, produtos e
                serviços, para anáise mais detalhada clique no botão abaixo!
              </p>
            </div>
            <br />
            <button className="card-button">Estatisticas</button>
          </div>
          <div className="image-estatistica">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Estatistica;
