import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<a>
					<Image src="/images/logo.png" height={40} width={120} alt="Your Name" />
				</a>

			</Link>

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
