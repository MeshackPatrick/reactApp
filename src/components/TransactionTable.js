import React, {useState} from "react";
const TransactionTable=({transaction,onDeleteTransaction})=>{
    const[sortBy,setSortBy]=useState(null)
        const handleSort=(sortKey)=>{
        setSortBy(sortKey)
        }
        const sortedTransactions=[...transaction].sort((a,b)=>{
            if (sortBy==="category"){
                return a.category.localeCompare(b.category)
            }
            else {
                return a.description.localeCompare(b.description)
            }
        })

    return(
        <div>
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Delete</th>

            </tr>
            </thead>
            <tbody>
            {sortedTransactions.map((transaction)=>
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
            <div className="SortButtons">
                <button className={`SortButton ${sortBy==="category"?"active":""}`} onClick={()=>handleSort("category")}>Sort By Category</button>
                <button className={`SortButton ${sortBy==="description"?"active":""}`} onClick={()=>handleSort("description")}>Sort By Description</button>

            </div>
        </div>
    )
}
export default TransactionTable