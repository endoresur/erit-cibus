import styles from './styles.module.scss'
import { RoundedSide } from '../Calendar/types'
import { cc } from 'utils/combineClasses'
import CellHeader from './ui/CellHeader'
import CellBody from './ui/CellBody'
import CellFooter from './ui/CellFooter'

type CalendarCellVariant = 'small' | 'default' | 'large' | 'cell'

interface Props {
	date: string
	rounded?: boolean | RoundedSide
	variant?: CalendarCellVariant
	className?: string
}

const CalendarCell = ({ date, variant = 'cell', className }: Props) => {
	return (
		<article className={cc(styles.calendarCellRoot, styles[`variant_${variant}`], className)}>
			<CellHeader date={date} />

			<CellBody />

			<CellFooter />
		</article>
	)
}

export default CalendarCell
