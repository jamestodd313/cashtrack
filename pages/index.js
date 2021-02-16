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
        <title>JBank - All Accounts</title>
      </Head>
      <main>

        {
          loading ? "Loading..." : (

            <>
            <Graph variant="line" data={accounts} time={time} title="Accounts Overview"/>
            <TimePeriodSelector time={time} setTime={setTime}/>
              <TableSection title="Checking" tableData={accounts.checking} time={time}/>
              <TableSection title="Saving" tableData={accounts.savings} time={time}/>
              <TableSection title="Investing" tableData={accounts.investing} time={time}/>
            </>

          )
        }
      </main>
      <Navbar active="home"/>
    </>
  )
}

Home.getInitialProps = async ctx=> {
  const apiCall = await fetch('https://jbank.vercel.app//api/fakeuser')
  const apiResponse = await apiCall.json()
  const {accounts, profile} = apiResponse
  return { accounts, profile }
}
