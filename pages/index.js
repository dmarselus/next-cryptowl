import React from "react";

export default function HomePage() {
	React.useEffect(() => {
		console.log("home");
		loadResource()
	}, []);


	async function loadResource() {
		// const a = await getAllCoins()
		// console.log(a)
	}

	return (
		<>
			<div>
				<h1>Home Page</h1>
			</div>
		</>
	);
}
