// https://freecurrencyapi.net
// https://flagpedia.net/canada/download/api
const axios = require("axios");
const COUNTRY = require("../constant/Country.json");
const COUNTRY_FLAG_LIST = require("../constant/CountryFlagSupported.json");
const currencyApiInstance = axios.create({
    baseURL: "https://freecurrencyapi.net/api/v2/",
    headers: {
        apikey: process.env.NEXT_PUBLIC_CURRENCY_APY_KEY,
        Accept: "application/json",
    },
});

export function getAllCurrencies() {
    return axios
        .get(
            `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_APY_KEY}`
        )
        .then((resp) => {
            if (resp.status === 200) return resp?.data.data;
        })
        .catch((e) => console.error(e));
}

export async function getInitialCurrencies() {
    const currencies = await getAllCurrencies()

    currencies.USD = 1

    console.log(JSON.stringify(currencies, null, 2))
    return Object.entries(COUNTRY_FLAG_LIST)
        .map(([countryCode, countryName]) => {
            let foundIndex = COUNTRY.findIndex(
                (arr) => arr[1].toLowerCase() === countryCode
            );
            if (foundIndex >= 0) {
                return {
                    name: countryName,
                    asset_id: COUNTRY[foundIndex][3],
                    price_usd: currencies[COUNTRY[foundIndex][3]],
                    url: `https://flagcdn.com/64x48/${countryCode}.png`,
                };
            } else return false;
        })
        .filter((item) => item);
}
