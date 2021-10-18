import React from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PFFCard from "./components/PFFCard";
import SkyGazerCard from "./components/SkyGazerCard";
import NoteTakerCard from "./components/NoteTakerCard";

function App() {
  return (
    <div>
      <Header />
      <NameCard />
      <PFFCard />
      <NoteTakerCard />
      <SkyGazerCard />
      <Footer />
    </div>
  );
}

export default App;
