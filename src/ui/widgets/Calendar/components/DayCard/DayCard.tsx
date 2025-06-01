import { getDayName } from 'utils/datetime'
import styles from './styles.module.scss'
import { format } from 'date-fns'
import ScheduleBlock from 'ui/shared/ScheduleBlock/ScheduleBlock'
import { DayIntervals, ScheduleBlockVarints } from 'types/calendar'
import { EllipsisVertical } from 'lucide-react'

interface Props {
	date: string
}

const DayCard = ({ date }: Props) => {
	return (
		<article className={styles.dayCardRoot}>
			<header className={styles.header}>
				<time className={styles.day}>{getDayName(date)}</time>
				<time className={styles.date}>{format(date, 'd')}</time>
			</header>

			<div className={styles.dayCardBody}>
				<ScheduleBlock
					actions={<EllipsisVertical style={{ width: 16 }} />}
					description={<p>Buy fresh berries for breakfast</p>}
					title={<p>Ночь</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.NIGHT}
				/>
				<ScheduleBlock
					actions={<EllipsisVertical style={{ width: 16 }} />}
					description={<p>Prepare ingredients for weekend meals</p>}
					title={<p>Утро</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.MORNING}
				/>
				<ScheduleBlock
					actions={<EllipsisVertical style={{ width: 16 }} />}
					description={<p>Buy fresh berries for breakfast</p>}
					title={<p>День</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.AFTERNOON}
				/>
				<ScheduleBlock
					actions={<EllipsisVertical style={{ width: 16 }} />}
					description={`У меня есть два цвета --evening-bg: rgb(238 242 255 / 1); и --evening-accent: rgb(129
							140 248 / 1);, они ассоциируются с вечером, цвет бэкграунда нежный`}
					title={<p>Вечер</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.EVENING}
				/>
			</div>
		</article>
	)
}

export default DayCard
