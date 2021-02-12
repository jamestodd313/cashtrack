import Head from "next/head";
import { Navbar } from "../components/navigation/Navbar";
import { Graph } from '../components/data-display/graph/Graph'
import { TableSection } from '../components/data-display/table/TableSection'
import { TimePeriodSelector } from '../components/filters/TimePeriodSelector'
import { useEffect, useState } from "react";

export default function cash({profile, accounts}){
    const [time, setTime] = useState('day')
    const [dataToPass, setDataToPass] = useState({})
    useEffect(()=>{
        let obj = {checking: accounts.checking, savings: accounts.savings}
    },[accounts])
    return(
        <>
            <Head>
                <title>CashTrack - Cash</title>
            </Head>
            <Navbar active="cash"/>

            <main>
                { !accounts ?  'Something went wrong. Please try again.' : (
                    <>
                    <Graph variant={'line'} data={{checking: accounts.checking, savings: accounts.savings}} time={time} title="Cash Accounts"/>
                    <TimePeriodSelector time={time} setTime={setTime}/>
                    {/* map through data.accounts or something like that idk. youll find it */}
                    {/* <TableSection title="Income" tableData={incomeData}/>
                    <TableSection title="Spending" tableData={spendingData}/>
                    <TableSection title="Saving" tableData={savingData}/>
                    <TableSection title="Investing" tableData={investingData}/>  */}
                    </>
                )}
            </main>
        </>
    )
}

cash.getInitialProps = async ctx=>{
    const apiCall = await fetch('http://localhost:3000/api/fakeuser')
    const apiResponse = await apiCall.json()
    const {profile, accounts} = await apiResponse
    return {profile, accounts}
}


// make an api call that returns an array of bank/investment accounts
// use accounts data to generate 2 objects: graphData and tableData


// line data takes in relevant account balances (all balances for home, cash accounts for cash, etc.), sets intervals and finds the change between the first and last interval.
    // for example: 

    
    // if you're looking at a line graph of cash accounts for the last quarter
        // find the last transaction for each week for the last 3 months and the current month
        // each week's ending balance will be a datapoint on the line graph
        // the difference between the first and last week of the time quarter will be the change
    // if you're looking at a donut graph of cash accounts
        // the balance of each account will be it's own piece of the donut
        // show the distribution of funds (this doesn't change based on the time period)

    



// now we have a line graph that displays balance history and a donut graph that displays account balances

