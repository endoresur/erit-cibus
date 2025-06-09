import { getDayName } from 'utils/datetime'
import styles from './styles.module.scss'
import { format } from 'date-fns'
import ScheduleBlock from 'ui/shared/ScheduleBlock/ScheduleBlock'
import { DayIntervals, PlannerItemCard, ScheduleBlockVarints } from 'types/calendar'
import { DaysDisplayVariants } from '../../types'
import { cc } from 'utils/combineClasses'
import { ActionOption } from 'types/common'

interface Props {
	variant: DaysDisplayVariants
	plannerItemCard: PlannerItemCard
	isToday?: boolean
	onClick?: (id: string) => void
}

const DayCard = ({ variant, plannerItemCard, isToday = false, onClick }: Props) => {
	const { breakfast, dinner, lunch, notes, date, id } = plannerItemCard

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

	const showScheduleBlockTitle = variant !== DaysDisplayVariants.MONTH
	const showNotes = variant !== DaysDisplayVariants.MONTH
	const isHasAtLeastOneBlock = breakfast || dinner || lunch || notes

	const onArticleClick = () => onClick && onClick(id)

	return (
		<article className={cc(styles.dayCardRoot, styles[variant])} onClick={onArticleClick}>
			<header className={cc(styles.header, isToday && styles.today)}>
				<time className={styles.day}>{getDayName(date)}</time>
				<time className={styles.date}>{format(date, 'd')}</time>
			</header>

			{isHasAtLeastOneBlock && (
				<div className={styles.dayCardBody}>
					{!!breakfast && (
						<div>
							{showScheduleBlockTitle && <p className={styles.title}>Завтрак</p>}
							<ScheduleBlock
								actions={actions}
								title={breakfast.title}
								description={breakfast.description}
								variant={ScheduleBlockVarints.MEAL}
								dayInterval={DayIntervals.MORNING}
								size={variant === DaysDisplayVariants.MONTH ? 'small' : 'medium'}
							/>
						</div>
					)}

					{!!dinner && (
						<div>
							{showScheduleBlockTitle && <p className={styles.title}>Обед</p>}
							<ScheduleBlock
								actions={actions}
								title={dinner.title}
								description={dinner.description}
								variant={ScheduleBlockVarints.MEAL}
								dayInterval={DayIntervals.AFTERNOON}
								size={variant === DaysDisplayVariants.MONTH ? 'small' : 'medium'}
							/>
						</div>
					)}

					{!!lunch && (
						<div>
							{showScheduleBlockTitle && <p className={styles.title}>Ужин</p>}
							<ScheduleBlock
								actions={actions}
								title={lunch.title}
								description={lunch.description}
								variant={ScheduleBlockVarints.MEAL}
								dayInterval={DayIntervals.EVENING}
								size={variant === DaysDisplayVariants.MONTH ? 'small' : 'medium'}
							/>
						</div>
					)}

					{!!notes && showNotes && (
						<div>
							{showScheduleBlockTitle && <p className={styles.title}>Заметки</p>}
							<div className={styles.notesWrapper}>
								{notes.map(note => (
									<ScheduleBlock
										key={note.id}
										actions={actions}
										title={note.title}
										description={note.description}
										variant={ScheduleBlockVarints.NOTE}
										dayInterval={DayIntervals.NIGHT}
										size={'medium'}
									/>
								))}
							</div>
						</div>
					)}
				</div>
			)}

			{!isHasAtLeastOneBlock && <div className={styles.emptyDayCard}></div>}
		</article>
	)
}

export default DayCard
