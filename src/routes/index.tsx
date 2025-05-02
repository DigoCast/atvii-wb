import React, { Fragment } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "../pages/Produto";
import Servico from "../pages/Servicos";
import Cliente from "../pages/Cliente";

class RouterApp extends React.Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/servico" element={<Servico />} />
            <Route path="/cliente" element={<Cliente />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default RouterApp;
