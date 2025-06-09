import { getDayName } from 'utils/datetime'
import styles from './styles.module.scss'
import { format } from 'date-fns'
import ScheduleBlock from 'ui/shared/ScheduleBlock/ScheduleBlock'
import { DayIntervals, ScheduleBlockVarints } from 'types/calendar'
import { DaysDisplayVariants } from '../../types'
import { cc } from 'utils/combineClasses'
import { ActionOption } from 'types/common'

interface Props {
	variant: DaysDisplayVariants
	date: string
}

const DayCard = ({ date, variant }: Props) => {
	const actions: ActionOption[] = [
		{
			label: 'Изменить',
			value: 'edit',
			onClick: option => console.log('Edit action clicked', option)
		},
		{
			label: 'Удалить',
			value: 'delete',
			onClick: option => console.log('Delete action clicked', option)
		}
	]

	return (
		<article className={cc(styles.dayCardRoot, styles[variant])}>
			<header className={styles.header}>
				<time className={styles.day}>{getDayName(date)}</time>
				<time className={styles.date}>{format(date, 'd')}</time>
			</header>

			<div className={styles.dayCardBody}>
				<ScheduleBlock
					actions={actions}
					description={<p>Prepare ingredients</p>}
					title={<p>Утро</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.MORNING}
					size={variant === DaysDisplayVariants.MONTH ? 'small' : 'medium'}
				/>
				<ScheduleBlock
					actions={actions}
					description={<p>Buy fresh berries</p>}
					title={<p>День</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.AFTERNOON}
					size={variant === DaysDisplayVariants.MONTH ? 'small' : 'medium'}
				/>
				<ScheduleBlock
					actions={actions}
					description={`У меня есть два цвета --evening-bg: rgb(238 242 255 / 1); и --evening-accent: rgb(129
							140 248 / 1);, они ассоциируются с вечером, цвет бэкграунда нежный`}
					title={<p>Вечер</p>}
					variant={ScheduleBlockVarints.MEAL}
					dayInterval={DayIntervals.EVENING}
					size={variant === DaysDisplayVariants.MONTH ? 'small' : 'medium'}
				/>
			</div>
		</article>
	)
}

export default DayCard
