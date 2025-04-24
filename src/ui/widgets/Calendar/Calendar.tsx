import styles from './styles.module.scss'
import { getWeekDayByIndex, getWeekDayIndexByDate } from 'utils/datetime'
import { cc } from 'utils/combineClasses'
import DayCard from '../DayCard'
import { CardProps } from '../DayCard/DayCard'

interface Props {
	cards: CardProps[]
}

const Calendar = ({ cards }: Props) => {
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
			<h2 className={styles.title}>Май</h2>

			<div className={styles.calendarGrid}>
				{cards.map(card => (
					<div className={cc(styles.dayCardWrapper, getCellPositionClassName(card.date))}>
						<DayCard {...card} variant="cell" theme="dark" className={styles.dayCard} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Calendar
