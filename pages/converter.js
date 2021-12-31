/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import ConverterCard from "../components/ConverterCard";
import SearchBar from "../components/SearchBar";
import TableData from "../components/TableData";

const DATA = [
	"david",
	"marselus",
	"123",
	"david1",
	"marselus1",
	"1231",
	"david2",
	"marselus2",
	"1223",
	"david3",
	"marsel33us",
	"123333",
];
export default function converter() {
	const [query, setQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [selectedData, setSelectedData] = useState([]);

	useEffect(() => {
		if (query) {
			let temp = DATA.filter((name) =>
				name.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredData(temp);
		}
		return () => {
			setFilteredData([]);
		};
	}, [query]);


	// useEffect(() => {
	// 	let filteredData
	// 	return () => {
	// 		cleanup
	// 	}
	// }, [selectedData.length])

	function renderCards() {
		function deleteCard(idx) {
			let temp = [...selectedData];
			temp.splice(idx, 1);
			setSelectedData(temp);
		}

		return (
			<div style={{ display: "flex" }}>
				{selectedData.map((card, index) => (
					<ConverterCard
						key={card}
						data={card}
						onDelete={() => deleteCard(index)}
					/>
				))}
			</div>
		);
	}

	function onSelectSearch(data) {
		setQuery("");
		setFilteredData([]);
		setSelectedData([...selectedData, data]);
	}

	return (
		<div>
			<h1>Converter</h1>
			<h1>{selectedData.length}</h1>
			<SearchBar
				onChange={(e) => setQuery(e.target.value)}
				// fullWidth
				label="Enter coin or crypto"
			/>
			<TableData data={filteredData} onClick={onSelectSearch} />
			{renderCards()}
		</div>
	);
}
