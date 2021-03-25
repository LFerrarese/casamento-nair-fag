import dynamic from 'next/dynamic';
import { MapContainer, Marker, Popup } from 'react-leaflet';

import styles from '../styles/components/WeddingInformations.module.css';

const WeddingInformations = () => {
	return (
		<div className={styles.weddingInformationsContainer}>
			<header>
				<h1>Informações</h1>
			</header>

			<section>
				<h2>Sugestão de Hotéis e Salões de Beleza</h2>

				{/* <MapContainer center={[-24.949978109702805, -53.4480503249403]} zoom={13} scrollWheelZoom={true}>
					<Marker position={[-24.95324688975283, -53.474562712511805]}>
						<Popup>Hotel Ibis</Popup>
					</Marker>
					<Marker position={[-24.95375986993428, -53.470111277768034]}>
						<Popup>Hotel Caiuá</Popup>
					</Marker>
					<Marker position={[-24.941805934980437, -53.46219550219437]}>
						<Popup>Felici Beauty</Popup>
					</Marker>
				</MapContainer> */}

				<iframe
					src="https://www.google.com/maps/d/embed?mid=1aQUMY62vCVjhTjPfpKT_-LOY6DfWJ8eR&hl=pt-BR"
					loading="lazy"
				/>
			</section>
		</div>
	)
}
