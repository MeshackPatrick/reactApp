import React from "react";
import './App.css';
import TransactionTable from "./components/TransactionTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <TransactionTable />
    </div>
  );
}

export default App;
