import React from "react";
import './App.css';
// import Search from "./Search";
import Footer from "./Footer";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      
     <Weather />
      <Footer />
      </div>
    </div>
    
  );
}

export default App;
