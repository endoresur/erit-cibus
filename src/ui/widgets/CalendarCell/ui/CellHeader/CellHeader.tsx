import { getWeekDayByIndex, getWeekDayIndexByDate } from 'utils/datetime'
import styles from './styles.module.scss'
import { weekDaysNames } from 'types/calendar'

interface Props {
	date: string
}

const CellHeader = ({ date }: Props) => {
	const day = new Date(date).getDate()
	const weekDay = getWeekDayByIndex(getWeekDayIndexByDate(date))

	return (
		<header className={styles.header}>
			<time className={styles.day}>{day}</time>
			{weekDay && <time className={styles.weekDay}>{weekDaysNames[weekDay]}</time>}
		</header>
	)
}

export default CellHeader
