import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Graph } from '../components/data-display/graph/Graph'
import { TableSection } from '../components/data-display/table/TableSection'
import { TimePeriodSelector } from '../components/filters/TimePeriodSelector'
import { Navbar } from '../components/navigation/Navbar'
export default function Home({incomeData, spendingData, savingData, investingData}) {
  const [time, setTime] = useState('week')
  return (
    <>
      <Head>
        <title>CashTrack - Track Your Cash</title>
      </Head>
      <main>
        <Graph variant={'line'}/>
        <TimePeriodSelector time={time} setTime={setTime}/>
        <TableSection title="Income" tableData={incomeData}/>
        <TableSection title="Spending" tableData={spendingData}/>
        <TableSection title="Saving" tableData={savingData}/>
        <TableSection title="Investing" tableData={investingData}/>
      </main>
      <Navbar/>
    </>
  )
}

Home.getInitialProps = async ctx=> {
  const incomeData = {
    highlight: 9650.87,
    items: [ 
        { 
            item: "Direct Deposit",
            transactions: 1,
            value: 9650.87,
            change: 9650.87
        },
        { 
            item: "Cash/Check Deposits",
            transactions: 0,
            value: 0.00,
            change: 0.00
        },
        { 
            item: "Transfers",
            transactions: 0,
            value: 0.00,
            change: 0.00
        },
    ]
  }
  const spendingData = {
    highlight: -862.56,
    items: [
      {
        item: "Purchases",
        transactions: 1,
        value: 862.56,
        change: -862.56
      },
      {
        item: "Withdrawals",
        transactions: 1,
        value: 302.75,
        change: -862.56
      },
      {
        item: "Purchases",
        transactions: 1,
        value: 862.56,
        change: -862.56
      },

    ]
  }
  const savingData = {
    highlight: 5616.24,
    items: [
      {
        item: "Deposits",
        transactions: 1,
        value: 5000.00,
        change: 5000.00
      },
      {
        item: "Withdrawals",
        transactions: "0",
        value: 0.00,
        change: 0.00
      },
      {
        item: "Interest",
        transactions: "0.22%",
        value: 616.24,
        change: 616.24
      },

    ]
  }
  const investingData = {
    highlight: 41652.45 + 7124.13 + 862.56 + 0,
    items: [
      {
        item: "Market",
        transactions: "+12%",
        value: 41652.45,
        change: 41652.45
      },
      {
        item: "Dividends",
        transactions: 3,
        value: 7124.13,
        change: 7124.13
      },
      {
        item: "Deposits",
        transactions: 1,
        value: 862.56,
        change: -862.56
      },
      {
        item: "Withdrawals",
        transactions: 0,
        value: 0.00,
        change: 0.00
      },

    ]
  }

  return { incomeData, spendingData, savingData, investingData }
}
