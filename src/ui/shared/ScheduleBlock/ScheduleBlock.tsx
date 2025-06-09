import { JSX } from 'react'
import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'
import { DayIntervals, ScheduleBlockVarints } from 'types/calendar'
import { useHover } from '@uidotdev/usehooks'
import { ActionOption } from 'types/common'
import KebabButton from '../KebabButton'
import { EllipsisVertical } from 'lucide-react'

interface Props {
	title?: JSX.Element | string
	variant: ScheduleBlockVarints
	size?: 'small' | 'medium' | 'large'
	dayInterval: DayIntervals
	description?: JSX.Element | string
	actions?: ActionOption[]
	className?: string
}

const ScheduleBlock = ({
	title,
	actions,
	description,
	variant,
	dayInterval,
	size = 'medium',
	className
}: Props) => {
	const [descriptionRef, isDescriptionHovered] = useHover()

	return (
		<div
			className={cc(
				styles.scheduleBlockRoot,
				styles[variant],
				styles[dayInterval],
				styles[size],
				className
			)}
		>
			<div className={styles.content}>
				{title && <div className={styles.title}>{title}</div>}
				<div
					className={cc(
						styles.description,
						typeof description === 'string' &&
							cc(styles.descriptionText, isDescriptionHovered && styles[`descriptionText--hovered`])
					)}
					ref={descriptionRef}
				>
					{description}
				</div>
			</div>

			{!!actions && (
				<div className={styles.actions}>
					<KebabButton items={actions} delay={200}>
						<EllipsisVertical style={{ width: size === 'small' ? 12 : 16 }} color="black" />
					</KebabButton>
				</div>
			)}
		</div>
	)
}

export default ScheduleBlock
