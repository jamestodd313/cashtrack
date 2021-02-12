import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Graph } from '../components/data-display/graph/Graph'
import { TableSection } from '../components/data-display/table/TableSection'
import { TimePeriodSelector } from '../components/filters/TimePeriodSelector'
import { Navbar } from '../components/navigation/Navbar'
export default function Home({accounts, profile}) {
  const [time, setTime] = useState('day')
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(accounts) setLoading(false)
  }, [accounts])
  return (
    <>
      <Head>
        <title>CashTrack - Track Your Cash</title>
      </Head>
      <main>

        {
          loading ? "Loading..." : (

            <>
            <Graph variant="line" data={accounts} time={time}/>
            <TimePeriodSelector time={time} setTime={setTime}/>
            </>

          )
        }

        {/* {
          incomeData && spendingData && savingData && investingData && accountBalance ? (
            <>
            <Graph variant={'line'} data={accountBalance} time={time} title="Total Balance" lineData={"sfdlkjhasfghklbhlsv"} circleData={214356}/>
            <TimePeriodSelector time={time} setTime={setTime}/>
            <TableSection title="Income" tableData={incomeData} time={time}/>
            <TableSection title="Spending" tableData={spendingData} time={time}/>
            <TableSection title="Saving" tableData={savingData} time={time}/>
            <TableSection title="Investing" tableData={investingData} time={time}/>
            </>
          ) : "Something went wrong. Please try again."
        } */}
      </main>
      <Navbar active="home"/>
    </>
  )
}

Home.getInitialProps = async ctx=> {
  const apiCall = await fetch('http://localhost:3000/api/fakeuser')
  const apiResponse = await apiCall.json()
  const {accounts, profile} = apiResponse
  return { accounts, profile }
}
