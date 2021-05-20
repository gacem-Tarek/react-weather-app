import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import CurrentLocation from "./components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
  
      <div className="container">
        <CurrentLocation />
      </div>
      
  
    </React.Fragment>
  );
}

export default App;