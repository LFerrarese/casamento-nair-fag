import { useModalContext } from '../contexts/ModalContext';

import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Modal from '../components/Modal';
// import Menu from '../components/Menu';
import Presence from '../components/Presence';
import WeddingCerimonyVenue from '../components/WeddingCerimonyVenue';
import WeddingInformations from '../components/WeddingInformations';

import styles from '../styles/pages/Home.module.css';

const Home = () => {
	const { toggleModal, showModal, showComponent } = useModalContext();

	return (
		<div className={styles.homeContainer}>
			<div>
				<Navbar />

				<img src="/icons/main.svg" />

				<div className={styles.homeContainerButtons}>
					<Button onClick={() => toggleModal('presence')}>Confirmar Presença</Button>
				</div>

				<img src="/img/adornment.png" className={styles.homeContainerAdornment} />
			</div>
			<div className={styles.homeContainerFooter}>
				<h1>NAIR E EDUARDO</h1>
				<img src="/icons/separator.svg" />
				<h2>20 DE JUNHO 2020</h2>
				<img src="/icons/rings.svg" />
			</div>

			{ showModal && showComponent && (
				<Modal onClick={toggleModal}>
					{/* { showComponent === 'menu' && <Menu /> } */}
					{ showComponent === 'presence' && <Presence /> }
					{ showComponent === 'weddingCerimonyVenue' && <WeddingCerimonyVenue /> }
					{ showComponent === 'weddingInformations' && <WeddingInformations /> }
				</Modal>
			) }
		</div>
	)
}

export default Home;
