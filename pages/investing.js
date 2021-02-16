import Head from "next/head";
import {useState} from 'react'
import { Navbar } from "../components/navigation/Navbar";
import {Graph} from '../components/data-display/graph/Graph'
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";
import {TableSection} from '../components/data-display/table/TableSection'
export default function investing({accounts}){
    const [time, setTime] = useState('day')
    return(
        <>
            <Head>
                <title>JBank - Investing</title>
            </Head>
                <main>
                    { !accounts ?  'Something went wrong. Please try again.' : (
                        <>
                        <Graph variant={'line'} data={{investing: accounts.accounts.investing}} time={time} title="Investments"/>
                        <TimePeriodSelector time={time} setTime={setTime}/>
                        <TableSection title="Investing" tableData={accounts.accounts.investing} time={time}/> 
                        </>
                    )}
                </main>
            <Navbar active="investing"/>
        </>
    )
}

investing.getInitialProps = async ctx=> {
    const apiCall = await fetch('https://jbank.vercel.app//api/fakeuser')
    const apiResponse = await apiCall.json()

    return {accounts: apiResponse}
}