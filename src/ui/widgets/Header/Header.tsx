import { Link } from '@tanstack/react-router'
import styles from './styles.module.scss'
import ThemeToggle from 'ui/features/ThemeToggle'

const Header = () => {
	return (
		<header className={styles.headerRoot}>
			{/* <nav className={styles.navigation}>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
			</nav>
			<div className={styles.logo}>
				<Link to="/">
					<h1>ERIT CIBUS</h1>
				</Link>
			</div>

			<ThemeToggle className={styles.themeToglge} /> */}
			<Link to="/">
				<h1>Gustario</h1>
			</Link>
			<ThemeToggle className={styles.themeToglge} />
		</header>
	)
}

export default Header
