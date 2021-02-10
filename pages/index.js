import Head from 'next/head'
import { useState } from 'react'
import { Graph } from '../components/data-display/graph/Graph'
import { TableSection } from '../components/data-display/table/TableSection'
import { TimePeriodSelector } from '../components/filters/TimePeriodSelector'
import { Navbar } from '../components/navigation/Navbar'
export default function Home({incomeData, spendingData, savingData, investingData, accountBalance}) {
  const [time, setTime] = useState('day')
  return (
    <>
      <Head>
        <title>CashTrack - Track Your Cash</title>
      </Head>
      <main>
        {
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
        }
      </main>
      <Navbar active="home"/>
    </>
  )
}

Home.getInitialProps = async ctx=> {
  const apiCall = await fetch('http://localhost:3000/api/placeholder?page=home')
  const apiResponse = await apiCall.json()
  const {accountBalance, incomeData, spendingData, savingData, investingData} = apiResponse
  return { incomeData, spendingData, savingData, investingData, accountBalance }
}
