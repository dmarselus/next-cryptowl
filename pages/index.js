import React from "react";

export default function HomePage() {
	React.useEffect(() => {
		console.log("home");
	}, []);
	return (
		<>
			<div>
				<h1>Home Page</h1>
			</div>
		</>
	);
}
