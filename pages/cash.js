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
                <title>JBank - Cash Accounts</title>
            </Head>
            <Navbar active="cash"/>

            <main>
                { !accounts ?  'Something went wrong. Please try again.' : (
                    <>
                    <Graph variant={'line'} data={{checking: accounts.checking, savings: accounts.savings}} time={time} title="Cash Accounts"/>
                    <TimePeriodSelector time={time} setTime={setTime}/>
                    <TableSection title="Checking" tableData={accounts.checking} time={time}/>
                    <TableSection title="Savings" tableData={accounts.savings} time={time}/>
                   
                    </>
                )}
            </main>
        </>
    )
}

cash.getInitialProps = async ctx=>{
    const apiCall = await fetch('https://jbank.vercel.app//api/fakeuser')
    const apiResponse = await apiCall.json()
    const {profile, accounts} = await apiResponse
    return {profile, accounts}
}

