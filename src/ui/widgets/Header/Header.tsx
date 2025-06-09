import { Link } from '@tanstack/react-router'
import styles from './styles.module.scss'
import ThemeToggle from 'ui/features/ThemeToggle'

const Header = () => {
	return (
		<header className={styles.headerRoot}>
			<Link to="/">
				<h1>Gustario</h1>
			</Link>
			<ThemeToggle className={styles.themeToglge} />
		</header>
	)
}

export default Header
