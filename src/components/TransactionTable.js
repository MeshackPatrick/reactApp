import React from "react";
const TransactionTable=({transaction,onDeleteTransaction})=>{
    return(
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>

            </tr>
            </thead>
            <tbody>
            {transaction.map((transaction)=>
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>${transaction.amount}</td>
                    <td><button onClick={()=>onDeleteTransaction(transaction.id)}>Delete</button></td>

                </tr>
            )}
            </tbody>
        </table>
    )
}
export default TransactionTable