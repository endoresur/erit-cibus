import Calendar from 'ui/widgets/Calendar'
import styles from './styles.module.scss'
import { may2025Cards } from './mock'

const MainPage = () => {
	return (
		<main className={styles.mainPageRoot}>
			<Calendar cards={may2025Cards} />
		</main>
	)
}

export default MainPage
