import Calendar from 'ui/widgets/Calendar'
import styles from './styles.module.scss'
import { may2025Cards } from './mock'

const MainPage = () => {
	return (
		<main className={styles.mainPageRoot}>
			<Calendar />
		</main>
	)
}

export default MainPage
