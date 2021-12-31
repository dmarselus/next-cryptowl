import React, { useState, useEffect } from 'react';
import SearchBar from "../components/SearchBar";
import TableData from '../components/TableData';

const DATA = ['david', 'marselus', '123', 'david1', 'marselus1', '1231', 'david2', 'marselus2', '1223', 'david3', 'marsel33us', '123333']
export default function converter() {

	const [query, setQuery] = useState('')
	const [filteredData, setFilteredData] = useState([])

	useEffect(() => {
		if (query) {
			let temp = DATA.filter(name => name.toLowerCase().includes(query.toLowerCase()))
			setFilteredData(temp)
		}
		return () => {
			setFilteredData([])
		}
	}, [query])


	return (
		<div>
			<h1>Converter</h1>
			<SearchBar
				onChange={(e) => setQuery(e.target.value)}
				fullWidth
				label='Enter coin or crypto'
			/>
			<TableData data={filteredData} />
		</div>
	);
}
