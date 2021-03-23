import styles from '../styles/components/Modal.module.css';

const Modal = ({ children, onClick }) => {
	return (
		<section className={styles.modalOverlay}>
			<div className={styles.modalContainer}>
				{ children }

				<button type="button" className={styles.closeModalButton} onClick={onClick}>
					<img src="/icons/close.svg" alt="Fechar modal" />
				</button>
			</div>
		</section>
	)
}

export default Modal
