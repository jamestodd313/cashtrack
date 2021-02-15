import {useState, useEffect} from 'react'
import { OverviewTable } from './OverviewTable'
import { TableHeader } from './TableHeader'

export const TableSection = ({title, tableData, time}) => {
    const [dataToShow, setDataToShow] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        let workingData = {
            currentBalance: tableData.currentBalance,
            change: 0.00,
            deposits: [],
            withdrawals: [],
        }
        switch(tableData.type){
            case 'checking':
                // update template
                workingData = {
                    ...workingData,
                    transfers: [],
                    purchases: [],
                }
                // sort helper function
                const sortChecking = transaction => {
                    if(transaction.type[0] === 'purchase') workingData.purchases.push(transaction.amount)
                    else if(transaction.type[0] === 'direct deposit' || transaction.type[0] === 'deposit') workingData.deposits.push(transaction.amount)
                    else if(transaction.type[0] === 'transfer') workingData.transfers.push(transaction.amount)
                    else if(transaction.type[0] === 'withdrawal') workingData.withdrawals.push(transaction.amount)
                }
                // narrow down transactions
                let relevantTransactions
                let arr = Object.entries(tableData.transactions.jan21)
                switch(time){
                    case 'day':
                        relevantTransactions = tableData.transactions.jan21._31
                    break
                    case 'week':
                        relevantTransactions = []
                        arr.forEach((trans, i)=>{
                            if(i >= arr.length - 8) relevantTransactions.push(trans[1][0])
                        })                     
                    break
                    default:
                        relevantTransactions = []
                        arr.forEach(trans=> relevantTransactions.push(trans[1][0]))
                    break
                }
                relevantTransactions.forEach(transaction=> {
                    // sort narrowed down trarnsactions into category arrays
                    sortChecking(transaction)
                    // calculate the change for this section
                    if(transaction.type[1] === 'none') return
                    else if(transaction.type[1] === 'debit') workingData.change -= transaction.amount
                    else if(transaction.type[1] === 'credit') workingData.change += transaction.amount
                })
            break
            case 'savings':
                workingData = {
                    ...workingData,
                    transfers: [],
                    interest: [],
                }
                // sort helper function
                const sortSavings = transaction => {
                    if(transaction.type[0] === 'interest') workingData.interest.push(transaction.amount)
                    else if(transaction.type[0] === 'deposit' || transaction.type[0] === 'deposit') workingData.deposits.push(transaction.amount)
                    else if(transaction.type[0] === 'withdrawal') workingData.withdrawals.push(transaction.amount)
                    else if(transaction.type[0] === 'transfer') workingData.transfers.push(transaction.amount)
                }
                arr = Object.entries(tableData.transactions.jan21)
                switch(time){
                    case 'day':
                        relevantTransactions = tableData.transactions.jan21._31
                    break
                    case 'week':
                        relevantTransactions = []
                        arr.forEach((trans, i)=> {
                            if(i >= arr.length - 8) relevantTransactions.push(trans[1][0])
                        })
                    break
                    default:
                        relevantTransactions = []
                        arr.forEach(trans=> relevantTransactions.push(trans[1][0]))
                    break
                }
                relevantTransactions.forEach(transaction=>{
                    sortSavings(transaction)
                    if(transaction.type === 'none') return
                    else if(transaction.type[1] === 'debit') workingData.change -= transaction.amount
                    else if(transaction.type[1] === 'credit') workingData.change += transaction.amount
                })
            break
            case 'investing':
                workingData = {
                    ...workingData,
                    pl: 0.00,
                    dividends: []
                }
                const sortInvesting = transaction => {
                    if(Array.isArray(transaction)) transaction = transaction[1]
                    workingData.pl += transaction.pl
                    if(transaction.dividends.length > 0) workingData.dividends.push(transaction.dividends)
                    if(transaction.deposits.length > 0) workingData.deposits.push(transaction.deposits)
                    if(transaction.withdrawals.length > 0) workingData.withdrawals.push(transaction.withdrawals)
                }
                arr = Object.entries(tableData.transactions.jan21)
                switch(time){
                    case 'day':
                        relevantTransactions = []
                        relevantTransactions.push(tableData.transactions.jan21._31)
                    break
                    case 'week':
                        relevantTransactions = []
                        arr.forEach((trans, i)=>{
                            if(i >= arr.length - 8) relevantTransactions.push(trans[1])
                        })
                    default:
                        relevantTransactions = []
                        arr.forEach(trans=>{
                            sortInvesting(trans)
                            relevantTransactions.push(trans[1])
                        })
                    break
                }
                relevantTransactions.forEach(transaction=>{
                    sortInvesting(transaction)
                    workingData.change += transaction.pl * 2
                    // figure out how to add ni dividnends too
                    if(transaction.dividends.length > 0){
                        let newArr = []
                        transaction.dividends.forEach(div=>{
                            workingData.change += div.amount
                            newArr.push(div.amount)
                        })
                        workingData.dividends = newArr
                    }
                })
            break
            default:
            break
        }
        setDataToShow(workingData)
    },[ tableData, time ])
    useEffect(()=>{
        setLoading(false)
    },[dataToShow])
    return (
        <section className="table-section">
            {loading ? 'loading...' : (
                <>
                    <TableHeader title={title} balance={dataToShow.currentBalance ? dataToShow.currentBalance : 0} change={dataToShow.change ? dataToShow.change : 0}/>
                    <OverviewTable data={dataToShow} acctType={tableData.type}/>       
                </>
            )}

        </section>
    )
}


