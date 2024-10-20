import "./App.css";
import React from "react";
import Index from "./components/Faq";
import ProductCard from "./components/Card";
import Shipping from "./components/Shipping";
import { useMediaQuery } from '@mui/material';
import Side from "./components/Side";
import Header from "./components/Header";

function App() {
  const isLargeScreen = useMediaQuery('(min-width:1024px)');

  return (
    <div className="App p-4">
      {isLargeScreen && <Side/>}
      <Header/>
      <ProductCard/>
      <Index/>
      <Shipping/>
      
    </div>
  );
}

export default App;
