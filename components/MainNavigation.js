import React, { useState, useEffect, useContext } from "react";

import { CoinsInfoContext, CurrencyContext } from "../context";
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
function MainNavigation() {

	const { coinsInfo } = useContext(CoinsInfoContext)
	const { currencyInfo } = useContext(CurrencyContext)
	return (
		<header className={classes.header}>
			<Link href="/">
				<a>
					<Image src="/images/logo.png" height={40} width={120} alt="Your Name" />
				</a>

			</Link>
			<p>crypto: {coinsInfo.length}</p>
			<p>forex: {currencyInfo.length}</p>
			<nav>
				<ul>
					<li>
						<Link href="/">home</Link>
					</li>
					<li>
						<Link href="/converter">Converter</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
