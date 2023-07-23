import React from "react";
const TransactionTable=({transaction})=>{
    return(
        <table>
            <thead>
            <tr>
                <th>Date</th><br/>
                <th>Description</th><br/>
                <th>Category</th><br/>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {transaction.map((transaction)=>
                <tr key={transaction.id}>
                    <td>{transaction.date}</td><br/>
                    <td>{transaction.description}</td><br/>
                    <td>{transaction.category}</td><br/>
                    <td>${transaction.amount}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
export default TransactionTable