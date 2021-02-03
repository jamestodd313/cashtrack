import Head from 'next/head'

export default function Home() {
  return (
    <>
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
    </>
  )
}
