import styles from '../styles/components/WeddingInformations.module.css';

const WeddingInformations = () => {
	return (
		<div className={styles.weddingInformationsContainer}>
			<header>
				<h1>Informações</h1>
			</header>

			<section>
				<h2>Sugestão de Hotéis e Salões de Beleza</h2>

				<iframe
					src="https://www.google.com/maps/d/embed?mid=1aQUMY62vCVjhTjPfpKT_-LOY6DfWJ8eR&hl=pt-BR"
					loading="lazy"
				/>
			</section>
		</div>
	)
}

export default WeddingInformations;
