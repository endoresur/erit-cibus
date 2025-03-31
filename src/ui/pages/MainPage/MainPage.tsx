import Calendar from 'ui/widgets/Calendar'
import styles from './styles.module.scss'
import CalendarCell from 'ui/widgets/CalendarCell'

const MainPage = () => {
	return (
		<main className={styles.mainPageRoot}>
			<Calendar />

			<div style={{ marginTop: '200px' }}>
				<CalendarCell date="12-20-2000" />
			</div>
		</main>
	)
}

export default MainPage
