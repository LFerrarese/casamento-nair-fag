import styles from '../styles/components/Menu.module.css';

const Menu = () => {
	return (
		<div className={styles.menuContainer}>
			<header>
				<h1>Menu</h1>
			</header>

			<section>
				<h1>Coquetel</h1>

				<div>
					<p>Tapas de Brie com Mel Trufado</p>
					<p>Camarão com Molho Tailandês</p>
					<p>Quiche de Lagosta com Cenoura Baby</p>
				</div>
			</section>

			<section>
				<h1>Coquetel Volante</h1>

				<div>
					<p>Risoto de Funghi Porcini Trufado</p>
					<p>Bacalhau Alto com Purê de Mandioquinha Salsa</p>
					<p>Cebolinha e Alho Poró Crocante</p>
				</div>
			</section>

			<section>
				<h1>Jantar Americano</h1>

				<div>
					<p>Saladas</p>
					<p>Carpaccio de Hadock com Limão Siciliano e Pimenta Rosa</p>
					<p>Queijo Brie Folhado com Favo de Mel e Frutas Secas</p>
					<p>Burrata com Rúcula, Tomate Grape e Molho Pesto</p>
					<p>Presunto Parma com Figo Fresco e Nozes</p>
					<p>Palmito Pupunha Grelhado</p>
					<p>Mini Crostata Italiana</p>
				</div>
			</section>

			<section>
				<h1>Quentes</h1>

				<div>
					<p>Pernil de Vitela ao Molho Rotty e Tâmaras de Israel</p>
					<p>Calderana com Lagosta e Vieiras Canadenses e Tangerina Verona</p>
					<p>Lasanha de Batata com Cogumelos Frescos</p>
					<p>Panzerotti de Alcachofra na Manteiga com Sálvia</p>
					<p>Arroz Branco com Palitos de Amêndoas</p>
				</div>
			</section>

			<section>
				<h1>Sobremesa</h1>

				<div>
					<p>Grand Gateau de Chocolate com Sorvete de Creme</p>
					<p>Morangos Picados e Farofa de Kit Kat e Calda de Frutas Vermelhas na Jarrinha</p>
					<p>Mini Cocada Cremosa com Sorvete e Pau de Canela</p>
				</div>
			</section>

			<section>
				<h1>Madrugada</h1>

				<div>
					<p>Hambúrguer de Picanha</p>
					<p>Batata Fininha Trufada</p>
					<p>Coxinha Planalto's com Tabasco</p>
				</div>
			</section>

			<section>
				<h1>Cafeteria</h1>

				<div>
					<p>Café Expresso</p>
					<p>Capuccino</p>
					<p>Chás Finos</p>
					<p>Petit Fours</p>
				</div>
			</section>

			<section>
				<h1>Bebidas</h1>

				<div>
					<p>Água Com e Sem Gás</p>
					<p>Refrigerante Normal e Zero (Coca-Cola e Guaraná Antarctica)</p>
					<p>Whisky</p>
					<p>Espumante</p>
					<p>Vinho Tinto</p>
				</div>
			</section>
		</div>
	)
}

export default Menu;
