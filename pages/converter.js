import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
export default function converter() {

	const [query, setQuery] = useState('')
	console.log(query)
	return (
		<div>
			<h1>Converter</h1>
			<SearchBar label='Enter coin or crypto' onChange={(e) => setQuery(e.target.value)} />
		</div>
	);
}
