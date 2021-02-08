import Head from 'next/head'
import { useState } from 'react'
import { Graph } from '../components/data-display/graph/Graph'
import { TableSection } from '../components/data-display/table/TableSection'
import { TimePeriodSelector } from '../components/filters/TimePeriodSelector'
import { Navbar } from '../components/navigation/Navbar'
export default function Home({incomeData, spendingData, savingData, investingData, accountBalance}) {
  const [time, setTime] = useState('week')
  return (
    <>
      <Head>
        <title>CashTrack - Track Your Cash</title>
      </Head>
      <main>
        {
          incomeData && spendingData && savingData && investingData && accountBalance ? (
            <>
            <Graph variant={'line'} data={accountBalance} time={time} title="Total Balance"/>
            <TimePeriodSelector time={time} setTime={setTime}/>
            <TableSection title="Income" tableData={incomeData}/>
            <TableSection title="Spending" tableData={spendingData}/>
            <TableSection title="Saving" tableData={savingData}/>
            <TableSection title="Investing" tableData={investingData}/>
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
