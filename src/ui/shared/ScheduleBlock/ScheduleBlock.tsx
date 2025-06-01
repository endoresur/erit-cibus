import { JSX } from 'react'
import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'
import { DayIntervals, ScheduleBlockVarints } from 'types/calendar'
import { useHover } from '@uidotdev/usehooks'

interface Props {
	title: JSX.Element
	variant: ScheduleBlockVarints
	dayInterval: DayIntervals
	description?: JSX.Element | string
	actions?: JSX.Element
	className?: string
}

const ScheduleBlock = ({ title, actions, description, variant, dayInterval, className }: Props) => {
	const [descriptionRef, isDescriptionHovered] = useHover()

	return (
		<div className={cc(styles.scheduleBlockRoot, styles[variant], styles[dayInterval], className)}>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<p
					className={cc(
						styles.description,
						typeof description === 'string' &&
							cc(styles.descriptionText, isDescriptionHovered && styles[`descriptionText--hovered`])
					)}
					ref={descriptionRef}
				>
					{description}
				</p>
			</div>
			<div className={styles.actions}>{actions}</div>
		</div>
	)
}

export default ScheduleBlock
