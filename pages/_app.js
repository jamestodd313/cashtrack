import Head from 'next/head'
import '../styles/main.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

