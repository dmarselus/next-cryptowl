import React, { useEffect, useContext } from "react";
import { getAllCoins, getTopCoinsImage } from '../controllers/CoinAPI'
import { CoinsImageContext, CoinsInfoContext } from '../context'
function HomePage() {


	const { setCoinsInfo } = useContext(CoinsInfoContext)
	const { setCoinsImage } = useContext(CoinsImageContext)

	React.useEffect(() => {
		console.log("loadResource Home");
		loadResource()
	}, []);


	async function loadResource() {
		const coinsInfo = await getAllCoins()
		const coinsImage = await getTopCoinsImage()
		const modifiedInfo = coinsInfo.map(({ asset_id: info_asset_id, ...rest }) => {
			const foundUrl = coinsImage.find(({ asset_id: image_asset_id }) => image_asset_id === info_asset_id)
			return {
				url: foundUrl?.url,
				asset_id: info_asset_id,
				...rest
			}
		})
		setCoinsInfo(modifiedInfo)

	}

	return (
		<div>
			<h1>Home Page</h1>
		</div>
	);
}

// export async function getStaticProps() {
// 	const coins = await getAllCoins()
// 	console.log({ coins })
// 	return {
// 		props: {
// 			coins
// 		}
// 	}
// }

export default HomePage
