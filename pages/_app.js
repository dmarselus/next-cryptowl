import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout';
import Head from 'next/head';
import { CoinsInfoContext, CurrencyContext } from '../context'
import { getInitialCoins } from '../controllers/CoinAPI';
import { getInitialCurrencies } from '../controllers/CurrencyAPI'


const CURRENCY = {
  "JPY": 115.11158,
  "CNY": 6.36387,
  "CHF": 0.91201,
  "CAD": 1.26248,
  "MXN": 20.49907,
  "INR": 74.46881,
  "BRL": 5.57046,
  "RUB": 74.74943,
  "KRW": 1185.02171,
  "IDR": 14250.1846,
  "TRY": 13.30236,
  "SAR": 3.75477,
  "SEK": 9.04182,
  "NGN": 411.70684,
  "PLN": 4.03161,
  "ARS": 102.68306,
  "NOK": 8.79291,
  "TWD": 27.68042,
  "IRR": 42000.94526,
  "AED": 3.67264,
  "COP": 4065.46784,
  "THB": 33.23081,
  "ZAR": 15.93006,
  "DKK": 6.53638,
  "MYR": 4.16412,
  "SGD": 1.34768,
  "ILS": 3.09676,
  "HKD": 7.79606,
  "EGP": 15.66017,
  "PHP": 50.99141,
  "CLP": 851.11401,
  "PKR": 175.80251,
  "IQD": 1458.54373,
  "DZD": 138.1223,
  "KZT": 434.83459,
  "QAR": 3.6416,
  "CZK": 21.82979,
  "PEN": 3.9853,
  "RON": 4.3482,
  "VND": 22825.66453,
  "BDT": 85.62095,
  "HUF": 323.81689,
  "UAH": 27.2503,
  "AOA": 561.3347,
  "MAD": 9.24881,
  "OMR": 0.38491,
  "CUC": 24.00028,
  "BYR": 3.00007,
  "AZN": 1.69305,
  "LKR": 202.75537,
  "SDG": 436.29087,
  "SYP": 2511.02802,
  "MMK": 1769.52254,
  "DOP": 57.10147,
  "UZS": 10816.32234,
  "KES": 113.05198,
  "GTQ": 7.70511,
  "URY": 44.70058,
  "HRV": 6.59938,
  "MOP": 8.03018,
  "ETB": 49.19414,
  "CRC": 638.28863,
  "TZS": 2301.03545,
  "TMT": 3.49008,
  "TND": 2.87017,
  "PAB": 1.00002,
  "LBP": 1505.71601,
  "RSD": 103.28194,
  "LYD": 4.58457,
  "GHS": 6.03016,
  "YER": 249.95305,
  "BOB": 6.83017,
  "BHD": 0.37701,
  "CDF": 1994.92422,
  "PYG": 6857.11972,
  "UGX": 3541.04236,
  "SVC": 8.74965,
  "TTD": 6.7727,
  "AFN": 103.63308,
  "NPR": 118.93237,
  "HNL": 24.25407,
  "BIH": 1.71774,
  "BND": 1.34862,
  "ISK": 129.64319,
  "KHR": 4064.11123,
  "GEL": 3.06009,
  "MZN": 63.20109,
  "BWP": 11.748,
  "PGK": 3.51199,
  "JMD": 152.75218,
  "XAF": 576.68064,
  "NAD": 15.95334,
  "ALL": 105.93289,
  "SSP": 423.21567,
  "MUR": 43.45059,
  "MNT": 2830.06586,
  "NIO": 35.31096,
  "LAK": 11138.26217,
  "MKD": 54.31118,
  "AMD": 479.01015,
  "MGA": 3937.11275,
  "XPF": 104.63118,
  "TJS": 11.29923,
  "HTG": 98.95132,
  "BSD": 1.00003,
  "MDL": 17.70329,
  "RWF": 1024.72546,
  "KGS": 84.80177,
  "GNF": 9193.17037,
  "SRD": 19.53155,
  "SLL": 11140.132,
  "XOF": 576.5129,
  "MWK": 806.82067,
  "FJD": 2.11854,
  "ERN": 15.00019,
  "SZL": 15.9488,
  "GYD": 207.98463,
  "BIF": 1989.14796,
  "KYD": 0.82501,
  "MVR": 15.42038,
  "LSL": 15.94296,
  "LRD": 144.00246,
  "CVE": 96.94127,
  "DJF": 177.50248,
  "SCR": 13.60711,
  "SOS": 575.01713,
  "GMD": 52.90144,
  "KMF": 433.80921,
  "STD": 21.52033,
  "XRP": 1.22002,
  "AUD": 1.37532,
  "BGN": 1.71932,
  "BTC": 0.0216,
  "JOD": 0.70702,
  "GBP": 0.73932,
  "ETH": 0.00027,
  "EUR": 0.87942,
  "LTC": 0.01,
  "NZD": 1.46192
}
function MyApp({ Component, pageProps }) {

  const [coinsInfo, setCoinsInfo] = useState([])
  const [currencyInfo, setCurrencyInfo] = useState(null)

  async function loadResource() {
    let coins = await getInitialCoins()
    let currencies = await getInitialCurrencies()

    setCoinsInfo(coins)
    setCurrencyInfo(currencies)

  }

  useEffect(() => {
    loadResource()
  }, [])

  return (
    <>
      <Head>
        <title>Crpytowl &#129417;</title>
      </Head>
      <CoinsInfoContext.Provider value={{ coinsInfo, setCoinsInfo }}>
        <CurrencyContext.Provider value={{ currencyInfo, setCurrencyInfo }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>

        </CurrencyContext.Provider>
      </CoinsInfoContext.Provider>
    </>
  )
}

export default MyApp
