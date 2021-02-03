import Head from 'next/head'
import { BorderButton } from '../components/buttons/BorderButton'
import { OverviewTable } from '../components/data-display/OverviewTable'
import { TableSection } from '../components/data-display/TableSection'
import { Navbar } from '../components/navigation/Navbar'
import { NavLink } from '../components/navigation/NavLink'

export default function Home() {
  return (
    <>
      <main>
        <h1>Tables</h1>
        <TableSection/>
        <TableSection/>
        <TableSection/>
      </main>


      <Navbar/>

    </>
  )
}
