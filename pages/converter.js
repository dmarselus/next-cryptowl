/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useContext } from "react";
import ConverterCard from "../components/Converter/ConverterCard";
import Input from "../components/Converter/Input";
import TableData from "../components/TableData";
import { CoinsInfoContext, CurrencyContext } from "../context";
import InputAdornment from '@mui/material/InputAdornment';


const DATA = [
	{
		asset_id: "BTC",
		data_end: "2021-12-31",
		data_orderbook_end: "2020-08-05T14:38:38.3413202Z",
		data_orderbook_start: "2014-02-24T17:43:05.0000000Z",
		data_quote_end: "2021-12-31T23:59:48.2771554Z",
		data_quote_start: "2014-02-24T17:43:05.0000000Z",
		data_start: "2010-07-17",
		data_symbols_count: 73575,
		data_trade_end: "2021-12-31T23:57:50.3920000Z",
		data_trade_start: "2010-07-17T23:09:17.0000000Z",
		id_icon: "4caf2b16-a017-4e26-a348-2cea69c34cba",
		name: "Bitcoin",
		price_usd: 46263.22212044367,
		type_is_crypto: 1,
		volume_1day_usd: 3632735741742895,
		volume_1hrs_usd: 1655784447602.37,
		url: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/4caf2b16a0174e26a3482cea69c34cba.png"
	}
];
export default function converter() {



	const { coinsInfo } = useContext(CoinsInfoContext)
	const { currencyInfo } = useContext(CurrencyContext)



	const [query, setQuery] = useState("");
	const [valueToConvert, setValueToConvert] = useState(0)
	const [filteredData, setFilteredData] = useState([]);
	const [selectedData, setSelectedData] = useState([]);

	useEffect(() => {
		if (query) {
			let lowerQuery = query.toLowerCase()
			let temp = []
			coinsInfo.concat(currencyInfo).forEach((item) => {
				const { name, asset_id } = item
				let lowerAssetID = asset_id.toLowerCase()
				let lowerName = name.toLowerCase()
				if (lowerAssetID === lowerQuery || lowerName === lowerQuery) temp.unshift(item)

				else if (
					lowerAssetID.includes(lowerQuery) ||
					lowerName.includes(lowerQuery)
				) temp.push(item)
			}
			);
			setFilteredData(temp.splice(0, 5));
		}
		return () => {
			setFilteredData([]);
		};
	}, [query]);


	function renderCards() {
		function deleteCard(idx) {
			let temp = [...selectedData];
			temp.splice(idx, 1);
			setSelectedData(temp);
		}

		return (
			<div>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{selectedData.map((card, index) => (
						<ConverterCard
							key={index}
							data={card}
							onDelete={() => deleteCard(index)}
							value={valueToConvert}
						/>
					))}

				</div>

				<Input
					onChange={(e) => setQuery(e.target.value)}
					// fullWidth
					label="Enter coin or crypto"
				/>
				<TableData data={filteredData} onClick={addCard} />
			</div>

		);
	}

	function addCard(data) {
		console.log(data)
		// return
		setQuery("");
		// setFilteredData([]);
		let tempSelected = [...selectedData]
		tempSelected.push(data)
		setSelectedData(tempSelected)

	}

	return (
		<div>
			<h1>Converter</h1>
			<Input
				onChange={(e) => setValueToConvert(e.target.value)}
				// fullWidth
				label="Enter Value"
				type="number"
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
			/>


			{renderCards()}
		</div>
	);
}
