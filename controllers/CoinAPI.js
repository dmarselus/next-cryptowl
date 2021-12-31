const axios = require('axios');


const coinApiInstance = axios.create({
    baseURL: 'https://rest.coinapi.io/v1/',
    // timeout: 2000,
    headers: {
        'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API_KEY,
        Accept: 'application/json'
    }
});
function getTypeIsCrypto({ type_is_crypto }) {
    return type_is_crypto
}

function sortByVolume_1_Mth_Usd(a, b) {
    return b?.volume_1mth_usd - a?.volume_1mth_usd
}
export function getAllCoins() {
    // https://docs.coinapi.io/#list-all-assets-get

    // asset_id: "BTC"
    // data_end: "2021-12-31"
    // data_orderbook_end: "2020-08-05T14:38:38.3413202Z"
    // data_orderbook_start: "2014-02-24T17:43:05.0000000Z"
    // data_quote_end: "2021-12-31T01:12:04.3975591Z"
    // data_quote_start: "2014-02-24T17:43:05.0000000Z"
    // data_start: "2010-07-17"
    // data_symbols_count: 73076
    // data_trade_end: "2021-12-31T01:09:19.0000000Z"
    // data_trade_start: "2010-07-17T23:09:17.0000000Z"
    // id_icon: "4caf2b16-a017-4e26-a348-2cea69c34cba"
    // name: "Bitcoin"
    // price_usd: 47145.67745399784
    // type_is_crypto: 1
    // volume_1day_usd: 744994335771959.1
    // volume_1hrs_usd: 8859341717054.56
    // volume_1mth_usd: 19577424161541730

    return coinApiInstance
        .get(`assets/`,)
        .then((resp) => {
            // console.log(resp);
            if (resp?.status === 200) {
                return resp?.data.filter(getTypeIsCrypto).sort(sortByVolume_1_Mth_Usd)

            }
        })
        .catch((e) => console.error(e));
}

export function getTopCoinsImage() {
    // https://docs.coinapi.io/#list-all-assets-get

    return coinApiInstance
        .get(`assets/icons/75`,)
        .then((resp) => {
            // console.log(resp);
            if (resp?.status === 200) {
                return resp?.data

            }
        })
        .catch((e) => console.error(e));
}





// export function get
