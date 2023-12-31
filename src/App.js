import React,{useState,useEffect} from "react";
import './App.css';
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

function App() {
    const [transaction,setTransaction]=useState([])
    const [filteredTransaction,setFilteredTransaction]=useState([])
    const [searchTerm,setSearchTerm]=useState("")

    useEffect(() => {
        // Fetch data from the local json db server
        fetch("http://localhost:3000/transactions")
            .then((response) => response.json())
            .then((data) => {
                setTransaction(data);
            })
            .catch((error) => {
                // Handle error here
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // Filter transactions based on the search term
        const filtered = transaction.filter((transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTransaction(filtered);
    }, [transaction, searchTerm]);

    const handleAddTransaction = (newTransaction) => {
        // Add the new transaction to the state
        setTransaction([...transaction, newTransaction]);
    };
    const handleDeleteTransaction=(transactionId)=>{
        //remove transaction with specified id from state
        const updatedTransaction=transaction.filter((transaction)=>transaction.id !==transactionId)
        setTransaction(updatedTransaction)
    }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bank Of Flatiron</h2>
      </header>
        <TransactionForm onAddTransaction={handleAddTransaction}/>
        <SearchBar onSearch={setSearchTerm} />
      <TransactionTable  transaction={filteredTransaction} onDeleteTransaction={handleDeleteTransaction}/>
    </div>
  );
}

export default App;
