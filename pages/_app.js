import { useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout';
import Head from 'next/head';
import { CoinsInfoContext, CoinsImageContext } from '../context'

function MyApp({ Component, pageProps }) {

  const [coinsInfo, setCoinsInfo] = useState([])
  const [coinsImage, setCoinsImage] = useState([])

  return (
    <>
      <Head>
        <title>Crpytowl &#129417;</title>
      </Head>
      <CoinsInfoContext.Provider value={{ coinsInfo, setCoinsInfo }}>
        <CoinsImageContext.Provider value={{ coinsImage, setCoinsImage }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CoinsImageContext.Provider>

      </CoinsInfoContext.Provider>
    </>
  )
}

export default MyApp
