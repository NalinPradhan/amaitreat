import "./App.css";
import React from "react";
import Index from "./components/Faq";
import ProductList from "./components/Card";
import Shipping from "./components/Shipping";
import { useMediaQuery } from '@mui/material';
import Side from "./components/Side";
import Header from "./components/Header";
// import C2 from "./components/c2";

function App() {
  const isLargeScreen = useMediaQuery('(min-width:1024px)');
  // console.log('App component rendered');
  return (
    <div className="App p-4">
      {isLargeScreen && <Side/>}
      <Header/>
      <ProductList/>
      {/* <C2/> */}
      <Index/>
      <Shipping/>

      
    </div>
  );
}

export default App;
