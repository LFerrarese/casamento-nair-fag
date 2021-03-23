import styles from '../styles/components/WeddingCerimonyVenue.module.css';

const WeddingCerimonyVenue = () => {
	return (
		<div className={styles.weddingCerimonyVenueContainer}>
			<header>
				<h1>Local de Cerimônia</h1>
			</header>

			<section>
				<p>A cerimônia será realizada no dia <strong>24/06/2021</strong>, às <strong>20h30m</strong>.</p>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.323245118256!2d-53.4556931!3d-24.9561447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d4134c3e7ea9%3A0x76b420920606cca0!2sCatedral%20Metropolitana%20Nossa%20Senhora%20Aparecida!5e0!3m2!1spt-BR!2sbr!4v1615404633030!5m2!1spt-BR!2sbr"
					loading="lazy"
				/>

				<p>Após a cerimônia, os convidados serão recepcionados no <strong>Tuiuti Esporte Clube</strong>.</p>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.570396254637!2d-53.42970948451626!3d-24.946700984013308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d48968470cd9%3A0x2ec101db992f13a1!2sTuiuti%20Esporte%20Clube!5e0!3m2!1spt-BR!2sbr!4v1615405931170!5m2!1spt-BR!2sbr"
					loading="lazy"
				/>
			</section>
		</div>
	)
}

export default WeddingCerimonyVenue;
