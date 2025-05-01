import React from "react";
import "./style.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-home">
        <Banner />
        <div className="session-cards">
          <h2>Serviços Disponiveis:</h2>
          <Card/>
        </div>
      </div>
    );
  }
}

export default Home;
