import styles from './styles.module.scss'
import { RoundedSide, weekDaysNames } from '../../types'
import { cc } from 'utils/combineClasses'
import { getWeekDayByIndex, getWeekDayIndexByDate } from 'utils/datetime'

interface Props {
	date: string
	rounded?: boolean | RoundedSide
	className?: string
}

const CalendarCell = ({ date, className }: Props) => {
	const day = new Date(date).getDate()
	const weekDay = getWeekDayByIndex(getWeekDayIndexByDate(date))

	return (
		<article className={cc(styles.calendarCellRoot, className)}>
			<header className={styles.header}>
				<span className={styles.day}>{day}</span>
				{weekDay && <span className={styles.weekDay}>{weekDaysNames[weekDay]}</span>}
			</header>
		</article>
	)
}

export default CalendarCell
