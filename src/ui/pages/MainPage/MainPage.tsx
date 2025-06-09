import Calendar from 'ui/widgets/Calendar'
import styles from './styles.module.scss'
import { weeklyMealPlan } from './mock'

const MainPage = () => {
	return (
		<main className={styles.mainPageRoot}>
			<Calendar plannedDays={weeklyMealPlan} />
		</main>
	)
}

export default MainPage
