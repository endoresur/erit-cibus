import styles from './styles.module.scss'
import { RoundedSide } from '../Calendar/types'
import { cc } from 'utils/combineClasses'
import CardHeader from './ui/CardHeader'
import CardBody from './ui/CardBody'
import CardFooter from './ui/CardFooter'
import { DayeCardBaseProps } from './types'

interface Props extends DayeCardBaseProps {
	rounded?: boolean | RoundedSide
}

const DayCard = ({ date, variant = 'cell', rounded = true, className }: Props) => {
	return (
		<article
			className={cc(
				styles.calendarCellRoot,
				rounded && styles.isCellRounded,
				styles[`variant_${variant}`],
				className
			)}
		>
			<div className={styles.cellWrapper}>
				<CardHeader date={date} className={styles.header} variant={variant} />

				<CardBody date={date} className={styles.section} variant={variant} />

				<CardFooter date={date} className={styles.footer} variant={variant} />
			</div>
		</article>
	)
}

export default DayCard
