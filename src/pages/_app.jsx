import "src/styles/globals.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
