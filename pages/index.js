import Head from 'next/head'
import { BorderButton } from '../components/buttons/BorderButton'

export default function Home() {
  return (
    <>
      <h1>Typography</h1>
      body
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <a href="#" className="bottom-link">+ Bottom Link</a>
      <span className="filter-option filter-option--active">active</span>
      <span className="filter-option filter-option--inactive">inactive</span>
      <span className="button-text">button</span>
      <span className="pl pl--gain">gain</span>
      <span className="pl pl--loss">loss</span>
      <span className="highlight highlight--gain">gain</span>
      <span className="highlight highlight--loss">loss</span>

      <h1>Components</h1>
      <BorderButton text="this is a button" click={e=> console.log('hey')}/>
    </>
  )
}
