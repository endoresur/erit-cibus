import Calendar from 'ui/widgets/Calendar'
import styles from './styles.module.scss'
import DayCard from 'ui/widgets/DayCard'

const MainPage = () => {
	return (
		<main className={styles.mainPageRoot}>
			<div style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-around' }}>
				<DayCard date="12-20-2000" variant="small" />

				<DayCard date="12-20-2000" variant="default" />

				<div style={{ height: '106px', width: '240px' }}>
					<DayCard date="12-20-2000" variant="cell" />
				</div>
			</div>

			<Calendar />
		</main>
	)
}

export default MainPage
