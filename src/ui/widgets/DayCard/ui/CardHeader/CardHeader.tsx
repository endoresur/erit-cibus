import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'
import { DayCardVariant, DayEvent } from '../../types'

interface Props {
	date: string
	variant?: DayCardVariant
	dayEvent?: DayEvent
	className?: string
}

const CardHeader = ({ date, variant = DayCardVariant.DEFAULT, dayEvent, className }: Props) => {
	const day = new Date(date).getDate()

	return (
		<header className={cc(styles.cardHeaderRoot, styles[`variant_${variant}`], className)}>
			<div className={styles.headerTitle}>
				<time className={styles.day}>{day}</time>
				{dayEvent?.title && <p className={styles.dayEvent}>{dayEvent?.title}</p>}
			</div>
		</header>
	)
}

export default CardHeader
