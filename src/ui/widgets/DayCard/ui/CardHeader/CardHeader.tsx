import { getWeekDayByIndex, getWeekDayIndexByDate } from 'utils/datetime'
import styles from './styles.module.scss'
import { weekDaysNames } from 'types/calendar'
import { cc } from 'utils/combineClasses'
import { DayeCardBaseProps } from '../../types'

interface Props extends DayeCardBaseProps {}

const CardHeader = ({ date, variant, className }: Props) => {
	const day = new Date(date).getDate()
	const weekDay = getWeekDayByIndex(getWeekDayIndexByDate(date))

	return (
		<header className={cc(styles.cardHeaderRoot, styles[`variant_${variant}`], className)}>
			<time className={styles.day}>{day}</time>
			{weekDay && <time className={styles.weekDay}>{weekDaysNames[weekDay]}</time>}
		</header>
	)
}

export default CardHeader
