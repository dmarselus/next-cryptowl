// https://freecurrencyapi.net
const axios = require("axios");
const COUNTRY = require("../constant/Country.json");

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
    const currencies = await getAllCurrencies();

    return Object.entries(currencies).map(([code, val]) => {

        let foundIndex = COUNTRY.findIndex((arr) => [...arr].pop() === code);

        return {
            asset_id: code,
            price_usd: val,
            name: foundIndex !== -1 ? COUNTRY[foundIndex][0] : "",
            url:
                foundIndex !== -1
                    ? `https://flagcdn.com/64x48/${COUNTRY[foundIndex][1].toLowerCase()}.png`
                    : null,
        };
    });
}
