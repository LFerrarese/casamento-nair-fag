import styles from '../styles/components/Button.module.css';

const Button = ({ children, onClick }) => {
	return <button type="button" onClick={onClick} className={styles.button}>{ children }</button>
}

export default Button;
