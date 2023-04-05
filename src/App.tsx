import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { cardsDataArray as cardsSets } from "./data/card-info-data";

const App = () => {
  const uniqueKey = () => {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000000);
    return timestamp.toString() + randomNumber.toString();
  };

  return (
    <div className="app">
      <Header />
      <div className="mainContainer">
        <Menu />
        {cardsSets.map((elm, index) => (
          <Card key={uniqueKey()} cardInfoData={elm} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
