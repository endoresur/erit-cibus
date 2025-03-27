import { Link } from '@tanstack/react-router'
import styles from './styles.module.scss'

const Header = () => {
	return (
		<header className={styles.headerRoot}>
			<nav className={styles.navigation}>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
			</nav>
			<div className={styles.logo}>
				<Link to="/">
					<h1>ERIT CIBUS</h1>
				</Link>
			</div>

			<div />
		</header>
	)
}

export default Header
