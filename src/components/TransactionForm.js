import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // create a new transaction object
        const newTransaction = {
            id: Date.now(),
            date: new Date().toLocaleDateString().slice(0, 10),
            description,
            category,
            amount: parseFloat(amount),
        };
                // to update the state in the parent component
                onAddTransaction(newTransaction);

                // reset form fields
                setDescription("");
                setCategory("");
                setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
