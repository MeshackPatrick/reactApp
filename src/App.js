import React,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

function App() {
    const [transaction,setTransaction]=useState([])
    const [filteredTransaction,setFilteredTransaction]=useState([])
    const [searchTerm,setSearchTerm]=useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/transactions").then((response)=>{
            setTransaction(response.data)
        })
    },[])
    useEffect(()=>{
        //filter transaction based on search term
        const  filtered=transaction.filter((transaction)=>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTransaction(filtered)
    },[transaction,searchTerm])
    const handleAddTransaction=(newTransaction)=>{
        setTransaction([...transaction,newTransaction])
    }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bank Of Flatiron</h2>
        <button>Dark Mode</button>
      </header>
        <TransactionForm onAddTransaction={handleAddTransaction}/>
        <SearchBar onSearch={setSearchTerm} />
      <TransactionTable  transaction={filteredTransaction}/>
    </div>
  );
}

export default App;
