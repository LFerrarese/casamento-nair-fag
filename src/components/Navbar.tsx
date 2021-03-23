import { useModalContext } from '../contexts/ModalContext';

import styles from '../styles/components/Navbar.module.css';

const Navbar = () => {
	const { toggleModal } = useModalContext();

	return (
		<nav className={styles.navbarNav}>
			<ul>
				<li><a onClick={() => toggleModal('weddingCerimonyVenue')}>Local</a></li>
				{/* <li><a onClick={() => toggleModal('menu')}>Menu</a></li> */}
				{/* <li><a>Trajes</a></li> */}
				<li><a onClick={() => toggleModal('weddingInformations')}>Informações</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;
