import classes from './MainNavigation.module.css';
import Link from 'next/link';
import Image from 'next/image';
function MainNavigation() {
	return (
		<header className={classes.header}>
			<Image
				src="/images/logo.png" // Route of the image file
				height={40} // Desired size with correct aspect ratio
				width={120} // Desired size with correct aspect ratio
				alt="Your Name"
			/>
			{/* <div className={classes.logo}>Cryptowl</div> */}
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
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
