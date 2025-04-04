import Calendar from 'ui/widgets/Calendar'
import styles from './styles.module.scss'
import DayCard from 'ui/widgets/DayCard'
import { DayCardVariant, DayEvent } from 'ui/widgets/DayCard/types'

const MainPage = () => {
	const dayEvents: DayEvent[] = [
		{ type: 'event', description: 'Ура! День рождения!', title: 'День рождения', id: 'id' }
	]

	return (
		<main className={styles.mainPageRoot}>
			<div style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-around' }}>
				<DayCard date="12-20-2000" variant={DayCardVariant.DEFAULT} dayEvents={dayEvents} />

				<div style={{ height: '106px', width: '240px' }}>
					<DayCard date="12-20-2000" variant={DayCardVariant.CELL} dayEvents={dayEvents} />
				</div>
			</div>

			<Calendar />
		</main>
	)
}

export default MainPage
