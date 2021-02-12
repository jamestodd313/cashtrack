import Head from "next/head";
import {useState} from 'react'
import { Navbar } from "../components/navigation/Navbar";
import {Graph} from '../components/data-display/graph/Graph'
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";

export default function investing({accounts}){
    const [time, setTime] = useState('day')
    return(
        <>
            <Head>
                <title>CashTrack - Investing</title>
            </Head>
                <main>
                    { !accounts ?  'Something went wrong. Please try again.' : (
                        <>
                        <Graph variant={'line'} data={{investing: accounts.accounts.investing}} time={time} title="Investments"/>
                        <TimePeriodSelector time={time} setTime={setTime}/>
                        {/* map through data.accounts or something like that idk. youll find it */}
                        {/* <TableSection title="Income" tableData={incomeData}/>
                        <TableSection title="Spending" tableData={spendingData}/>
                        <TableSection title="Saving" tableData={savingData}/>
                        <TableSection title="Investing" tableData={investingData}/>  */}
                        </>
                    )}
                </main>
            <Navbar active="investing"/>
        </>
    )
}

investing.getInitialProps = async ctx=> {
    const apiCall = await fetch('http://localhost:3000/api/fakeuser')
    const apiResponse = await apiCall.json()

    return {accounts: apiResponse}
}