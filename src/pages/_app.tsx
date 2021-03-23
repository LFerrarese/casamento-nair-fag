import { ModalProvider } from '../contexts/ModalContext';

import Head from 'next/head';

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
	return (
		<ModalProvider>
			<Head>
				<title>Casamento Nair e Eduardo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>

			<Component {...pageProps} />
		</ModalProvider>
	)
}

export default MyApp
