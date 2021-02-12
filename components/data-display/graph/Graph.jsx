// something isn't working. the change and the graph aren't matching for some reason and the workingArray is getting reversed somehow

import { useEffect, useState } from 'react'
import {Line, Bar, Doughnut, } from 'react-chartjs-2'
import { convertToDollars } from '../../../util/convertToDollars'
import { shuffle } from '../../../util/shuffle'
export const Graph = ({data, variant, time, title}) => {

// variant control - 🟢
    const [view, setView] = useState(variant)
    useEffect(()=>{
        setView(variant)
    },[variant])

// calculate total balance - 🟢
    const [totalBalance, setTotalBalance] = useState(0)
    useEffect(()=>{
        let num = data.checking.currentBalance + data.savings.currentBalance + data.investing.currentBalance
        setTotalBalance(num)
    },[data])

// format circle data - 🟢
    const [formattedCircleData, setFormattedCircleData] = useState({})
    useEffect(()=>{
        let template = {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#721cb8', '#8edf34', '#4ea8de'],
                    borderColor: 'transparent',
                    borderWidth: 3
                }
            ]
        }
        let arrayOfAccounts = Object.entries(data)
        arrayOfAccounts.forEach(account=>{
            template.labels.push(account[0].toUpperCase())
            template.datasets[0].data.push(account[1].currentBalance)
        })
        setFormattedCircleData(template)
    },[data, time, view])

// isolate transactions data for easier use - 🟢
    const [investingTransactions, setInvestingTransactions] = useState([])
    const [savingsTransactions, setSavingsTransactions] = useState([])
    const [checkingTransactions, setCheckingTransactions] = useState([])
    const getTransactions = (account, time)=> {
        let workingArray = []
        let acctName = account[0]
        let transactions = Object.entries(account[1].transactions.jan21)
        if(acctName.toLowerCase() === 'investing'){
            transactions.forEach(transaction=>{
                workingArray.push(transaction[1])
            })
        }
        else{
            transactions.forEach(transaction=>{
                workingArray.push(transaction[1][0])
            })
        }
        let length = workingArray.length
        switch(time){
            case 'day':
                workingArray = [workingArray.slice(length - 1)]
                break
            case 'week': 
                workingArray = workingArray.slice(-8, length)
                break
            case 'quarter':
                workingArray = [
                    {date: "October 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "November 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "December 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "January 2021", type: ['none', 'none'], runningBalance: account[1].currentBalance},
                ]
                break
            case 'year':
                workingArray = [
                    {date: "January 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "February 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "March 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "April 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "May 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "June 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "July 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "August 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "September 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "October 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "November 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "December 2020", type: ['none', 'none'], runningBalance: 0.00},
                    {date: "January 2021", type: ['none', 'none'], runningBalance: account[1].currentBalance},
                ]
            default:
                break
        }
        if(acctName.toLowerCase() === 'savings') setSavingsTransactions(workingArray)
        else if(acctName.toLowerCase() === 'checking') setCheckingTransactions(workingArray)
        else if(acctName.toLowerCase() === 'investing') setInvestingTransactions(workingArray)
    }
    useEffect(()=>{
        let accts = Object.entries(data)
        accts.forEach(acct=>{
            getTransactions(acct, time)
        })
    },[data, time])

// format line data - 🟢
    const [formattedLineData, setFormattedLineData] = useState({})
    const calculateStartingValue = transaction => {
        if(!transaction) return
        let end = transaction.runningBalance
        if(transaction.hasOwnProperty('pl')){ // investing account
            let divTotal = 0
            transaction.dividends.forEach(dividend=> divTotal += dividend.amount)
            let change = transaction.pl + divTotal
            return end - change
        }else if(transaction.hasOwnProperty('amount')){ // checking account
            let change = transaction.amount
            if(transaction.type[1] === 'debit'){
                return end + change
            }else{
                return end - change
            }
        }else{ // savings account
            return transaction.runningBalance
        }
    }
    useEffect(()=>{
        let template = {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: 'transparent',
                    borderColor: 'lime',
                    borderWidth: 3
                }
            ]
        }
        investingTransactions.forEach((transaction, i)=>{
            if(time.toLowerCase() == 'day'){
                // set the first label to be '12 AM'
                template.labels.push('12 AM')
                // the first value is the day's starting balance
                template.datasets[0].data.push(calculateStartingValue(transaction[0]))
                // the second label is 'NOW'
                template.labels.push('Now')
                // the second value is current balance
                template.datasets[0].data.push(transaction[0].runningBalance)
            }
            else{
                // add dates as labels (WORKS)
                template.labels.push(transaction.date)
                // for the first transactiion use the startiing value otherwise use running balance
                if(i === 0) template.datasets[0].data.push(calculateStartingValue(transaction))
                else template.datasets[0].data.push(transaction.runningBalance)
            }
        })
        let others = [checkingTransactions, savingsTransactions]
        others.forEach(act=>{
            act.forEach((transaction, i)=>{
                if(time.toLowerCase() == 'day'){
                    // add values to existing values in array
                    template.datasets[0].data[0] += calculateStartingValue(transaction[0])
                    template.datasets[0].data[1] += transaction[0].runningBalance
                }
                else{
                    template.datasets[0].data[i] += transaction.runningBalance
                }
            })
        })
        setFormattedLineData(template)
    },[investingTransactions, savingsTransactions, checkingTransactions])

// calculate change - 🟢
    const [valueChange, setValueChange] = useState(0.00)
    useEffect(()=>{
        try{
            if(time === 'day'){
                let saveStart = calculateStartingValue(savingsTransactions[0][0])
                let checkStart = calculateStartingValue(checkingTransactions[0][0])
                let investStart = calculateStartingValue(investingTransactions[0][0])
                let totalStart = saveStart + checkStart + investStart
                setValueChange(totalBalance - totalStart)
            }else{
                let saveStart = calculateStartingValue(savingsTransactions[0])
                let checkStart = calculateStartingValue(checkingTransactions[0])
                let investStart = calculateStartingValue(investingTransactions[0])
                let totalStart = saveStart + checkStart + investStart
                setValueChange(totalBalance - totalStart)
            }

        }catch{
            return
        }
    },[savingsTransactions, checkingTransactions, investingTransactions])
    
    const graphOptions = {
        legend: {
            display: false
        },
        layout: {
            padding: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 0
            }
        },
        scales: {
            yAxes: [{display: false}],
            xAxes: [{display: false}]
        },
        tooltips: {
            callbacks: {
                title: function(tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                    return convertToDollars(data['datasets'][0]['data'][tooltipItem['index']]).value;
                },
            }
        }
    }

    return (
        <div className="graph-container">
            <header className="graph-header">
                <h2 className="graph-title">{title}</h2>
                <span className="balance highlight">{convertToDollars(totalBalance).value}</span>
                {convertToDollars(valueChange).gain ? <div className="change pl pl--gain">+{convertToDollars(valueChange).value}</div> :  <div className="change pl pl--loss">-{convertToDollars(valueChange).value}</div>}
            </header>
            { view === 'line' ? <Line data={formattedLineData} options={graphOptions}/> : <Doughnut data={formattedCircleData} options={graphOptions}/>}
            <div className="indicators">
                <button className={view === "line" ? "indicator indicator--active" : "indicator"} data-view="line" onClick={e=> setView(e.target.dataset.view)}></button>
                <button className={view === "doughnut" ? "indicator indicator--active" : "indicator"} data-view="doughnut" onClick={e=> setView(e.target.dataset.view)}></button>
            </div>
        </div>
    )
}
