import styles from './styles.module.scss'
import { getWeekDayByIndex, getWeekDayIndexByDate } from 'utils/datetime'
import { cc } from 'utils/combineClasses'
import DayCard from '../DayCard'

const Calendar = () => {
	const month = new Array(31).fill('').map((_, index) => `4-${index + 1}-2025`)

	const getCellPositionClassName = (dateStr: string) => {
		const date = new Date(dateStr)

		if (isNaN(date.getTime())) {
			return undefined
		}

		const dayOfWeekIndex = getWeekDayIndexByDate(dateStr)

		const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
		const dayOfMonth = date.getDate()
		const weekOfMonth = Math.ceil((dayOfMonth + getWeekDayIndexByDate(startOfMonth.toString())) / 7)

		const columnPositionStyles = styles[`${getWeekDayByIndex(dayOfWeekIndex)}`]
		const rowPositionStyles = styles[`week${weekOfMonth}`]
		const isToday = dayOfMonth === new Date().getDate()

		return cc(columnPositionStyles, rowPositionStyles, isToday && styles.isToday)
	}

	return (
		<div className={styles.calendarRoot}>
			<h2 className={styles.title}>Месяц</h2>

			<div className={styles.calendarGrid}>
				{month.map((day, index) => (
					<DayCard
						key={index}
						date={day}
						className={cc(styles.dayCard, getCellPositionClassName(day))}
						rounded={false}
						dayEvents={[]}
					/>
				))}
			</div>
		</div>
	)
}

export default Calendar
