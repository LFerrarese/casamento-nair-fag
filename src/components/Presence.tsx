import { useState, ChangeEvent } from 'react';
import { validateConfirmPresence, confirmPresence } from '../services/api';

import styles from '../styles/components/Presence.module.css';

const Presence = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [numberOfCompanions, setNumberOfCompanions] = useState([]);
	const [companions, setCompanions] = useState([]);

	function handleCompanionChange(event: ChangeEvent<HTMLInputElement>) {
		setNumberOfCompanions([]);
		setCompanions([]);
		for (let i = 0; i < Number(event.target.value); i ++) {
			setNumberOfCompanions(oldStatus => [...oldStatus, Number(event.target.value)]);
			setCompanions(oldStatus => [...oldStatus, Number(event.target.value)]);
		}
	}

	function handleCompanion(event: ChangeEvent<HTMLInputElement>, index: number) {
		let companionsCopy = companions;
		companionsCopy[index] = event.target.value;

		setCompanions(companionsCopy);
	}

	async function handleSubmit() {
		const data = {
			name,
			email,
			invited: companions
		}

		const validation = validateConfirmPresence(data);
		if (validation === "OK") {
			const response = await confirmPresence(data);

			if (response.status === 201) {
				alert('Cadastrado com sucesso');
			}
		}
	}

	return (
		<div className={styles.presenceContainer}>
			<header>
				<h1>Confirmar Presença</h1>
			</header>

			<section>
				<div>
					<label>Seu nome:</label>
					<input type="text" onChange={e => setName(e.target.value)} />
				</div>
			</section>

			<section>
				<div>
					<label>Seu e-mail:</label>
					<input type="email" onChange={e => setEmail(e.target.value)} />
				</div>
			</section>

			<section>
				<div>
					<label>Acompanhantes? Adicione até três.</label>

					<div onChange={handleCompanionChange} defaultValue="0">
						<label>
							<input type="radio" value="0" name="companion-radio" defaultChecked />
							<span>Nenhum</span>
						</label>

						<label>
							<input type="radio" value="1" name="companion-radio" />
							<span>Um</span>
						</label>

						<label>
							<input type="radio" value="2" name="companion-radio" />
							<span>Dois</span>
						</label>

						<label>
							<input type="radio" value="3" name="companion-radio" />
							<span>Três</span>
						</label>
					</div>
				</div>
			</section>

			{ numberOfCompanions.length > 0 && (
				numberOfCompanions.map((element, index) => (
					<section key={index}>
						<div className={styles.animatedSection}>
							<label>Nome do(a) { index + 1 }º acompanhante:</label>
							<input type="text" onChange={e => handleCompanion(e, index)} />
						</div>
					</section>
				))
			) }

			<button type="button" onClick={handleSubmit}>Confirmar</button>
		</div>
	)
}

export default Presence;
