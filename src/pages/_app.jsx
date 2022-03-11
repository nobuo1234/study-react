import "src/styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
